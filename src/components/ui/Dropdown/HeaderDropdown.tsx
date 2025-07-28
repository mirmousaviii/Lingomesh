import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface HeaderDropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  text?: string;
}

interface HeaderDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: HeaderDropdownOption[];
  className?: string;
  isScrolled?: boolean;
  type: "language" | "theme";
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({
  value,
  onChange,
  options,
  className = "",
  isScrolled = false,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Find selected option
  const selectedOption = options.find((option) => option.value === value);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Check if click is on trigger button
      if (dropdownRef.current && dropdownRef.current.contains(target)) {
        return;
      }

      // Check if click is on dropdown menu (portal)
      const dropdownElement = document.querySelector('[data-dropdown="true"]');
      if (dropdownElement && dropdownElement.contains(target)) {
        return;
      }

      // Close dropdown if click is outside both trigger and dropdown
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle option click
  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  // Handle toggle
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Calculate dropdown position
  const getDropdownPosition = () => {
    if (!dropdownRef.current) return { x: 0, y: 0 };

    const rect = dropdownRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const dropdownWidth = 120;
    const dropdownHeight = options.length * 40 + 16;

    let x = rect.right;
    let y = rect.bottom;

    // Adjust for right overflow
    if (rect.right + dropdownWidth > viewportWidth) {
      x = rect.left - dropdownWidth;
    }

    // Adjust for bottom overflow
    if (rect.bottom + dropdownHeight > viewportHeight) {
      y = rect.top - dropdownHeight;
    }

    return { x, y };
  };

  // Render trigger content
  const renderTriggerContent = () => {
    if (type === "language") {
      return (
        <span
          className={`font-medium transition-all duration-300 ${
            isScrolled ? "text-xs sm:text-sm" : "text-sm sm:text-base"
          }`}
        >
          {selectedOption?.text}
        </span>
      );
    }

    return (
      <svg
        className={`fill-current transition-all duration-300 ${
          isScrolled ? "w-4 h-4 sm:w-5 sm:h-5" : "w-5 h-5 sm:w-6 sm:h-6"
        }`}
        viewBox="0 0 20 20"
      >
        {selectedOption?.value === "light" ? (
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        ) : (
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        )}
      </svg>
    );
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={handleToggle}
        className={`flex items-center justify-center transition-all duration-300 touch-manipulation bg-neutral-100/80 dark:bg-neutral-800/80 rounded-lg p-1 border border-neutral-200/60 dark:border-neutral-600/60 ${
          isScrolled ? "w-8 h-6 sm:w-10 sm:h-8" : "w-12 h-10 sm:w-14 sm:h-12"
        }`}
        title={selectedOption?.label}
      >
        {renderTriggerContent()}
      </button>

      {/* Dropdown Menu */}
      {isOpen &&
        createPortal(
          <div
            data-dropdown="true"
            className="fixed z-[999999] min-w-[120px] bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-600 py-1 origin-top-right animate-dropdownAppear"
            style={{
              left: getDropdownPosition().x,
              top: getDropdownPosition().y,
            }}
          >
            {options.map((option) => {
              const isSelected = value === option.value;
              const itemClassName = `w-full px-3 py-2 text-left hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-200 flex items-center space-x-2 ${
                isSelected
                  ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                  : "text-neutral-700 dark:text-neutral-300"
              }`;

              return (
                <button
                  key={option.value}
                  onClick={() => handleOptionClick(option.value)}
                  className={itemClassName}
                >
                  {type === "language" ? (
                    <>
                      <span className="font-medium text-sm">{option.text}</span>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        {option.label}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="w-4 h-4">{option.icon}</span>
                      <span className="text-sm">{option.label}</span>
                    </>
                  )}
                </button>
              );
            })}
          </div>,
          document.body
        )}
    </div>
  );
};

export default HeaderDropdown;
