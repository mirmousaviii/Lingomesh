import React, { useState, useRef, useEffect } from "react";

interface AudioButtonProps {
  onClick: () => void;
  title?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  utteranceRef?: React.MutableRefObject<SpeechSynthesisUtterance | null>;
}

// Global state to track which button is currently playing
let globalPlayingButtonId: string | null = null;
const globalButtonRefs = new Map<
  string,
  { setIsPlaying: (playing: boolean) => void }
>();

const AudioButton: React.FC<AudioButtonProps> = ({
  onClick,
  title = "Listen",
  className = "",
  size = "md",
  disabled = false,
  utteranceRef,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const internalUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const currentUtterance = utteranceRef || internalUtteranceRef;
  const buttonId = useRef(
    `audio-button-${Math.random().toString(36).substr(2, 9)}`
  );

  const sizeClasses = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  // Register this button with global state
  useEffect(() => {
    globalButtonRefs.set(buttonId.current, { setIsPlaying });

    return () => {
      globalButtonRefs.delete(buttonId.current);
      if (globalPlayingButtonId === buttonId.current) {
        globalPlayingButtonId = null;
      }
    };
  }, []);

  const stopAllOtherButtons = () => {
    // Stop any other currently playing button
    if (globalPlayingButtonId && globalPlayingButtonId !== buttonId.current) {
      const otherButton = globalButtonRefs.get(globalPlayingButtonId);
      if (otherButton) {
        otherButton.setIsPlaying(false);
      }
    }

    // Cancel any existing speech synthesis
    speechSynthesis.cancel();
    globalPlayingButtonId = null;
  };

  const handleClick = () => {
    if (isPlaying) {
      // Stop current audio
      speechSynthesis.cancel();
      currentUtterance.current = null;
      setIsPlaying(false);
      globalPlayingButtonId = null;
    } else {
      // Stop any other playing audio first
      stopAllOtherButtons();

      // Start new audio
      setIsPlaying(true);
      globalPlayingButtonId = buttonId.current;
      onClick();
    }
  };

  // Check if speech synthesis is speaking and update state accordingly
  useEffect(() => {
    const checkSpeakingStatus = () => {
      if (!speechSynthesis.speaking) {
        setIsPlaying(false);
        currentUtterance.current = null;
        if (globalPlayingButtonId === buttonId.current) {
          globalPlayingButtonId = null;
        }
      }
    };

    // Check immediately
    checkSpeakingStatus();

    // Set up interval to check periodically
    const interval = setInterval(checkSpeakingStatus, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        flex-shrink-0 rounded-sm bg-primary-100 dark:bg-primary-800 
        hover:bg-primary-200 dark:hover:bg-primary-700 
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200 shadow-sm hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        ${sizeClasses[size]}
        ${className}
        ${
          isPlaying
            ? "bg-red-100 dark:bg-red-800 hover:bg-red-200 dark:hover:bg-red-700"
            : ""
        }
      `}
      title={isPlaying ? "Stop" : title}
      aria-label={isPlaying ? "Stop" : title}
    >
      {isPlaying ? (
        // Stop icon
        <svg
          className={`${iconSizes[size]} text-red-600 dark:text-red-400`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="6" y="6" width="12" height="12" strokeWidth={2} />
        </svg>
      ) : (
        // Play icon
        <svg
          className={`${iconSizes[size]} text-primary-600 dark:text-primary-400`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      )}
    </button>
  );
};

export default AudioButton;
