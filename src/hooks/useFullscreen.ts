import { useState, useEffect, useCallback } from "react";

interface UseFullscreenOptions {
  enabled?: boolean;
  onEnter?: () => void;
  onExit?: () => void;
  preventBodyScroll?: boolean;
}

interface UseFullscreenReturn {
  isFullscreen: boolean;
  enterFullscreen: () => void;
  exitFullscreen: () => void;
  toggleFullscreen: () => void;
}

export const useFullscreen = (
  options: UseFullscreenOptions = {}
): UseFullscreenReturn => {
  const { enabled = true, onEnter, onExit, preventBodyScroll = true } = options;

  const [isFullscreen, setIsFullscreen] = useState(false);

  // Handle escape key to exit fullscreen
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && isFullscreen) {
        exitFullscreen();
      }
    },
    [isFullscreen]
  );

  // Add/remove keyboard event listener
  useEffect(() => {
    if (isFullscreen) {
      document.addEventListener("keydown", handleKeyDown);
      if (preventBodyScroll) {
        document.body.style.overflow = "hidden";
        document.body.style.margin = "0";
        document.body.style.padding = "0";
      }
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      if (preventBodyScroll) {
        document.body.style.overflow = "";
        document.body.style.margin = "";
        document.body.style.padding = "";
      }
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (preventBodyScroll) {
        document.body.style.overflow = "";
        document.body.style.margin = "";
        document.body.style.padding = "";
      }
    };
  }, [isFullscreen, handleKeyDown, preventBodyScroll]);

  const enterFullscreen = useCallback(() => {
    if (enabled && !isFullscreen) {
      setIsFullscreen(true);
      onEnter?.();
    }
  }, [enabled, isFullscreen, onEnter]);

  const exitFullscreen = useCallback(() => {
    if (isFullscreen) {
      setIsFullscreen(false);
      onExit?.();
    }
  }, [isFullscreen, onExit]);

  const toggleFullscreen = useCallback(() => {
    if (enabled) {
      if (isFullscreen) {
        exitFullscreen();
      } else {
        enterFullscreen();
      }
    }
  }, [enabled, isFullscreen, enterFullscreen, exitFullscreen]);

  return {
    isFullscreen,
    enterFullscreen,
    exitFullscreen,
    toggleFullscreen,
  };
};
