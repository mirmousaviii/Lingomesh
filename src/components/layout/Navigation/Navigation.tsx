import { useState, useRef, useEffect } from "react";
import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";

interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
}

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  language: Language;
}

const DropdownMenu: React.FC<{
  items: MenuItem[];
  onPageChange: (page: string) => void;
  currentPage: string;
  level?: number;
  openDropdowns: string[];
  onDropdownToggle: (id: string) => void;
}> = ({
  items,
  onPageChange,
  currentPage,
  level = 0,
  openDropdowns,
  onDropdownToggle,
}) => (
  <div
    className={`absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-neutral-800 ring-1 ring-black ring-opacity-5 z-50 ${
      level > 0 ? "left-full ml-1" : ""
    }`}
  >
    <div
      className="py-1"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      {items.map((item) => (
        <div key={item.id} className="relative group">
          <button
            onClick={() => {
              if (item.children && item.children.length > 0) {
                onDropdownToggle(item.id);
              } else {
                onPageChange(item.id);
              }
            }}
            className={`w-full text-left flex items-center justify-between space-x-3 px-4 py-2 text-sm ${
              currentPage === item.id
                ? "bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300"
                : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700"
            }`}
            role="menuitem"
          >
            <span className="font-medium">{item.label}</span>
            {item.children && item.children.length > 0 && (
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  openDropdowns.includes(item.id) ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            )}
          </button>
          {item.children &&
            item.children.length > 0 &&
            openDropdowns.includes(item.id) && (
              <div className="absolute left-full top-0 ml-1">
                <DropdownMenu
                  items={item.children}
                  onPageChange={onPageChange}
                  currentPage={currentPage}
                  level={level + 1}
                  openDropdowns={openDropdowns}
                  onDropdownToggle={onDropdownToggle}
                />
              </div>
            )}
        </div>
      ))}
    </div>
  </div>
);

const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  onPageChange,
  language,
}) => {
  const t = useTranslation(language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const navRef = useRef<HTMLElement>(null);

  const menuItems: MenuItem[] = [
    {
      id: "dashboard",
      label: t.navigation.home,
    },
    {
      id: "vocabulary",
      label: t.navigation.vocabulary,
      children: [
        {
          id: "alphabet",
          label: t.navigation.alphabet,
        },
        {
          id: "numbers",
          label: t.navigation.numbers,
        },
        {
          id: "time",
          label: t.navigation.time,
        },
        {
          id: "date",
          label: t.navigation.date,
        },
        {
          id: "weather",
          label: t.navigation.weather,
        },
        {
          id: "countries",
          label: t.navigation.countries,
        },
      ],
    },
    {
      id: "grammar",
      label: t.navigation.grammar,
      children: [
        {
          id: "verbs-main",
          label: t.navigation.verbs,
          children: [
            { id: "verbs", label: t.navigation.verbConjugator },
            { id: "modal-verbs", label: t.navigation.modalVerbs },
            { id: "passive-voice", label: t.navigation.passiveVoice },
            { id: "reflexive-verbs", label: t.navigation.reflexiveVerbs },
          ],
        },
        {
          id: "tenses",
          label: t.navigation.tenses,
          children: [
            {
              id: "present-tense",
              label: t.navigation.presentTense,
            },
            {
              id: "perfect-tense",
              label: t.navigation.perfectTense,
            },
            {
              id: "past-tense",
              label: t.navigation.pastTense,
            },
            {
              id: "past-perfect",
              label: t.navigation.pastPerfect,
            },
            {
              id: "future-tense",
              label: t.navigation.futureTense,
            },
            {
              id: "future-perfect",
              label: t.navigation.futurePerfect,
            },
            {
              id: "irregular-verbs",
              label: t.navigation.irregularVerbs,
            },
            {
              id: "tenses-overview",
              label: t.navigation.tensesOverview,
            },
          ],
        },
        {
          id: "pronouns-main",
          label: t.navigation.pronouns,
          children: [
            { id: "pronouns", label: t.navigation.personalPronouns },
            { id: "possessives", label: t.navigation.possessives },
            { id: "reflexive-pronouns", label: t.navigation.reflexivePronouns },
            { id: "relative-pronouns", label: t.navigation.relativePronouns },
            {
              id: "interrogative-pronouns",
              label: t.navigation.interrogativePronouns,
            },
            {
              id: "demonstrative-pronouns",
              label: t.navigation.demonstrativePronouns,
            },
            {
              id: "indefinite-pronouns",
              label: t.navigation.indefinitePronouns,
            },
          ],
        },
        {
          id: "articles",
          label: t.navigation.articles,
        },
        {
          id: "adjectives",
          label: t.navigation.adjectives,
        },
        {
          id: "declension",
          label: t.navigation.declension,
        },
        {
          id: "adverbs",
          label: t.navigation.adverbs,
        },
        {
          id: "prepositions",
          label: t.navigation.prepositions,
        },
        {
          id: "questions",
          label: t.navigation.questions,
        },
      ],
    },
    {
      id: "useful-phrases",
      label: t.navigation.usefulPhrases,
      children: [
        {
          id: "general-phrases",
          label: t.navigation.general,
        },
        {
          id: "classroom-phrases",
          label: t.navigation.classroom,
        },
        {
          id: "restaurant-phrases",
          label: t.navigation.restaurant,
        },
        {
          id: "home-phrases",
          label: t.navigation.homePhrases,
        },
        {
          id: "friends-phrases",
          label: t.navigation.friends,
        },
      ],
    },
  ];

  const handlePageChange = (pageId: string) => {
    onPageChange(pageId);
    setIsMenuOpen(false);
    setOpenDropdowns([]);
  };

  const handleDropdownToggle = (id: string) => {
    setOpenDropdowns((prev) => {
      if (prev.includes(id)) {
        // If clicking on an already open dropdown, close it and all its children
        const newDropdowns = prev.filter((dropdownId) => {
          // Close the clicked dropdown and all its nested children
          if (dropdownId === id) return false;

          // Check if this dropdown is a child of the clicked one
          const isChild = isChildOfDropdown(id, dropdownId);
          return !isChild;
        });
        return newDropdowns;
      } else {
        // If opening a new dropdown, close other dropdowns at the same level
        const newDropdowns = prev.filter((dropdownId) => {
          // Keep dropdowns that are not at the same level as the new one
          return !isAtSameLevel(id, dropdownId);
        });
        return [...newDropdowns, id];
      }
    });
  };

  // Helper function to check if a dropdown is a child of another
  const isChildOfDropdown = (parentId: string, childId: string): boolean => {
    const findInChildren = (items: MenuItem[], targetId: string): boolean => {
      for (const item of items) {
        if (item.id === parentId && item.children) {
          return item.children.some(
            (child) =>
              child.id === targetId || findInChildren([child], targetId)
          );
        }
        if (item.children && findInChildren(item.children, targetId)) {
          return true;
        }
      }
      return false;
    };
    return findInChildren(menuItems, childId);
  };

  // Helper function to check if two dropdowns are at the same level
  const isAtSameLevel = (id1: string, id2: string): boolean => {
    const findLevel = (
      items: MenuItem[],
      targetId: string,
      level: number = 0
    ): number | null => {
      for (const item of items) {
        if (item.id === targetId) return level;
        if (item.children) {
          const found = findLevel(item.children, targetId, level + 1);
          if (found !== null) return found;
        }
      }
      return null;
    };

    const level1 = findLevel(menuItems, id1);
    const level2 = findLevel(menuItems, id2);

    return level1 !== null && level2 !== null && level1 === level2;
  };

  // Helper function to check if a dropdown is top-level
  const isTopLevelDropdown = (id: string): boolean => {
    return menuItems.some((item) => item.id === id);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdowns([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderMenuItem = (
    item: MenuItem,
    isMobile: boolean,
    level: number = 0
  ) => {
    const hasChildren = item.children && item.children.length > 0;
    const isActive =
      currentPage === item.id ||
      (hasChildren && item.children?.some((child) => child.id === currentPage));

    if (isMobile) {
      return (
        <div key={item.id}>
          {hasChildren ? (
            <>
              <button
                onClick={() => handleDropdownToggle(item.id)}
                className="w-full flex items-center justify-between space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-left text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                style={{ paddingLeft: `${level * 16 + 16}px` }}
              >
                <div className="flex items-center space-x-3">
                  <span className="font-medium">{item.label}</span>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openDropdowns.includes(item.id) ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {openDropdowns.includes(item.id) && (
                <div className="space-y-1 py-1">
                  {item.children?.map((child) =>
                    renderMenuItem(child, true, level + 1)
                  )}
                </div>
              )}
            </>
          ) : (
            <button
              onClick={() => handlePageChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-left ${
                currentPage === item.id
                  ? "bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-700"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              }`}
              style={{ paddingLeft: `${level * 16 + 16}px` }}
            >
              <span className="font-medium">{item.label}</span>
            </button>
          )}
        </div>
      );
    }

    return (
      <div key={item.id} className="relative group">
        <button
          onClick={() =>
            hasChildren
              ? handleDropdownToggle(item.id)
              : handlePageChange(item.id)
          }
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
            isActive
              ? "bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-700"
              : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 "
          }`}
        >
          <span className="font-medium text-sm">{item.label}</span>
          {hasChildren && (
            <svg
              className={`w-4 h-4 ml-1 transform transition-transform ${
                openDropdowns.includes(item.id) ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          )}
        </button>
        {openDropdowns.includes(item.id) && item.children && (
          <DropdownMenu
            items={item.children}
            onPageChange={handlePageChange}
            currentPage={currentPage}
            openDropdowns={openDropdowns}
            onDropdownToggle={handleDropdownToggle}
          />
        )}
      </div>
    );
  };

  const findCurrentItem = (
    items: MenuItem[],
    id: string
  ): MenuItem | undefined => {
    for (const item of items) {
      if (item.id === id) return item;
      if (item.children) {
        const found = findCurrentItem(item.children, id);
        if (found) return found;
      }
    }
  };

  const currentItem = findCurrentItem(menuItems, currentPage);
  const activePageLabel = currentItem
    ? currentItem.label
    : menuItems.find((item) => item.id === "dashboard")?.label;

  return (
    <nav
      ref={navRef}
      className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-700/50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 flex-wrap">
            {menuItems.map((item) => renderMenuItem(item, false))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <span className="ml-3 font-medium text-sm text-neutral-700 dark:text-neutral-200 lg:hidden">
              {activePageLabel}
            </span>
          </div>

          <div className="hidden lg:block">
            {/* Can add elements here for desktop, e.g. theme switcher */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 shadow-lg z-50">
          <div className="px-2 py-2 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {menuItems.map((item) => renderMenuItem(item, true))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
