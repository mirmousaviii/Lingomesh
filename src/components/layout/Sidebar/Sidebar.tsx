import { useState, useRef, useEffect } from "react";
import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";

interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  children?: MenuItem[];
}

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  language: Language;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

// Icon component for monoton icons
const Icon: React.FC<{ name: string; className?: string }> = ({
  name,
  className = "w-5 h-5",
}) => {
  const icons: { [key: string]: JSX.Element } = {
    home: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    vocabulary: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    alphabet: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    ),
    numbers: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    time: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    date: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    weather: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    countries: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    grammar: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    verbs: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    verbConjugator: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    modalVerbs: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    passiveVoice: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    reflexiveVerbs: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    tenses: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    presentTense: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    perfectTense: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    pastTense: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    pastPerfect: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    futureTense: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    futurePerfect: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    irregularVerbs: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
        />
      </svg>
    ),
    tensesOverview: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    pronouns: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    personalPronouns: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    possessives: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    reflexivePronouns: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    relativePronouns: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    ),
    interrogativePronouns: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    demonstrativePronouns: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 11l5-5m0 0l5 5m-5-5v12"
        />
      </svg>
    ),
    indefinitePronouns: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    articles: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
        />
      </svg>
    ),
    adjectives: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485-7.071-7.071 8.485-8.486a2 2 0 012.829 0z"
        />
      </svg>
    ),
    declension: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    adverbs: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    prepositions: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    questions: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    usefulPhrases: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    general: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
        />
      </svg>
    ),
    classroom: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    restaurant: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    homePhrases: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    friends: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  };

  return icons[name] || <div className={className} />;
};

const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  onPageChange,
  language,
  isOpen,
  setIsOpen,
  searchQuery,
  setSearchQuery,
}) => {
  const t = useTranslation(language);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Function to find parent menu items for a given page
  const findParentMenuItems = (pageId: string): string[] => {
    const parents: string[] = [];

    const findParents = (items: MenuItem[], targetPage: string): boolean => {
      for (const item of items) {
        if (item.children) {
          // Check if any child matches the target page
          const hasTargetChild = item.children.some((child) => {
            const mappedChildPage = mapMenuIdToPage(child.id);
            return mappedChildPage === targetPage;
          });

          if (hasTargetChild) {
            parents.push(item.id);
            return true;
          }

          // Recursively check children
          if (findParents(item.children, targetPage)) {
            parents.push(item.id);
            return true;
          }
        }
      }
      return false;
    };

    findParents(menuItems, pageId);
    return parents;
  };

  const menuItems: MenuItem[] = [
    {
      id: "home",
      label: t.navigation.home,
      icon: "home",
    },
    {
      id: "vocabulary",
      label: t.navigation.vocabulary,
      icon: "vocabulary",
      children: [
        {
          id: "alphabet",
          label: t.navigation.alphabet,
          icon: "alphabet",
        },
        {
          id: "numbers",
          label: t.navigation.numbers,
          icon: "numbers",
        },
        {
          id: "time",
          label: t.navigation.time,
          icon: "time",
        },
        {
          id: "date",
          label: t.navigation.date,
          icon: "date",
        },
        {
          id: "weather",
          label: t.navigation.weather,
          icon: "weather",
        },
        {
          id: "countries",
          label: t.navigation.countries,
          icon: "countries",
        },
      ],
    },
    {
      id: "grammar",
      label: t.navigation.grammar,
      icon: "grammar",
      children: [
        {
          id: "verbs-main",
          label: t.navigation.verbs,
          icon: "verbs",
          children: [
            {
              id: "verbs",
              label: t.navigation.verbConjugator,
              icon: "verbConjugator",
            },
            {
              id: "modal-verbs",
              label: t.navigation.modalVerbs,
              icon: "modalVerbs",
            },
            {
              id: "passive-voice",
              label: t.navigation.passiveVoice,
              icon: "passiveVoice",
            },
            {
              id: "reflexive-verbs",
              label: t.navigation.reflexiveVerbs,
              icon: "reflexiveVerbs",
            },
          ],
        },
        {
          id: "tenses",
          label: t.navigation.tenses,
          icon: "tenses",
          children: [
            {
              id: "present-tense",
              label: t.navigation.presentTense,
              icon: "presentTense",
            },
            {
              id: "perfect-tense",
              label: t.navigation.perfectTense,
              icon: "perfectTense",
            },
            {
              id: "past-tense",
              label: t.navigation.pastTense,
              icon: "pastTense",
            },
            {
              id: "past-perfect",
              label: t.navigation.pastPerfect,
              icon: "pastPerfect",
            },
            {
              id: "future-tense",
              label: t.navigation.futureTense,
              icon: "futureTense",
            },
            {
              id: "future-perfect",
              label: t.navigation.futurePerfect,
              icon: "futurePerfect",
            },
            {
              id: "irregular-verbs",
              label: t.navigation.irregularVerbs,
              icon: "irregularVerbs",
            },
            {
              id: "tenses-overview",
              label: t.navigation.tensesOverview,
              icon: "tensesOverview",
            },
          ],
        },
        {
          id: "pronouns-main",
          label: t.navigation.pronouns,
          icon: "pronouns",
          children: [
            {
              id: "pronouns",
              label: t.navigation.personalPronouns,
              icon: "personalPronouns",
            },
            {
              id: "possessives",
              label: t.navigation.possessives,
              icon: "possessives",
            },
            {
              id: "reflexive-pronouns",
              label: t.navigation.reflexivePronouns,
              icon: "reflexivePronouns",
            },
            {
              id: "relative-pronouns",
              label: t.navigation.relativePronouns,
              icon: "relativePronouns",
            },
            {
              id: "interrogative-pronouns",
              label: t.navigation.interrogativePronouns,
              icon: "interrogativePronouns",
            },
            {
              id: "demonstrative-pronouns",
              label: t.navigation.demonstrativePronouns,
              icon: "demonstrativePronouns",
            },
            {
              id: "indefinite-pronouns",
              label: t.navigation.indefinitePronouns,
              icon: "indefinitePronouns",
            },
          ],
        },
        {
          id: "articles",
          label: t.navigation.articles,
          icon: "articles",
        },
        {
          id: "adjectives",
          label: t.navigation.adjectives,
          icon: "adjectives",
        },
        {
          id: "declension",
          label: t.navigation.declension,
          icon: "declension",
        },
        {
          id: "adverbs",
          label: t.navigation.adverbs,
          icon: "adverbs",
        },
        {
          id: "prepositions",
          label: t.navigation.prepositions,
          icon: "prepositions",
        },
        {
          id: "questions",
          label: t.navigation.questions,
          icon: "questions",
        },
      ],
    },
    {
      id: "useful-phrases",
      label: t.navigation.usefulPhrases,
      icon: "usefulPhrases",
      children: [
        {
          id: "general-phrases",
          label: t.navigation.general,
          icon: "general",
        },
        {
          id: "classroom-phrases",
          label: t.navigation.classroom,
          icon: "classroom",
        },
        {
          id: "restaurant-phrases",
          label: t.navigation.restaurant,
          icon: "restaurant",
        },
        {
          id: "home-phrases",
          label: t.navigation.homePhrases,
          icon: "homePhrases",
        },
        {
          id: "friends-phrases",
          label: t.navigation.friends,
          icon: "friends",
        },
      ],
    },
  ];

  // Map menu IDs to actual page paths
  const mapMenuIdToPage = (menuId: string): string => {
    const pageMapping: Record<string, string> = {
      // Home
      home: "home",

      // Vocabulary pages
      alphabet: "alphabet",
      numbers: "numbers",
      time: "time",
      date: "date",
      weather: "weather",
      countries: "countries",

      // Grammar pages
      articles: "articles",
      adjectives: "adjectives",
      declension: "declension",
      adverbs: "adverbs",
      prepositions: "prepositions",
      questions: "questions",

      // Verb pages
      verbs: "verb-conjugator",
      "modal-verbs": "modal-verbs",
      "passive-voice": "passive-voice",
      "reflexive-verbs": "reflexive-verbs",

      // Tense pages
      "present-tense": "present-tense",
      "perfect-tense": "perfect-tense",
      "past-tense": "past-tense",
      "past-perfect": "past-perfect",
      "future-tense": "future-tense",
      "future-perfect": "future-perfect",
      "irregular-verbs": "irregular-verbs",
      "tenses-overview": "tenses-overview",

      // Pronoun pages
      pronouns: "personal-pronouns", // Map the menu "pronouns" to "personal-pronouns"
      "personal-pronouns": "personal-pronouns",
      possessives: "possessives",
      "reflexive-pronouns": "reflexive-pronouns",
      "relative-pronouns": "relative-pronouns",
      "interrogative-pronouns": "interrogative-pronouns",
      "demonstrative-pronouns": "demonstrative-pronouns",
      "indefinite-pronouns": "indefinite-pronouns",

      // Useful phrases pages
      "general-phrases": "general-phrases",
      "classroom-phrases": "classroom-phrases",
      "restaurant-phrases": "restaurant-phrases",
      "home-phrases": "home-phrases",
      "friends-phrases": "friends-phrases",
    };

    return pageMapping[menuId] || menuId;
  };

  const handlePageChange = (pageId: string) => {
    const actualPage = mapMenuIdToPage(pageId);
    onPageChange(actualPage);
    // Don't close all dropdowns when a page is selected
    // Only close dropdowns on mobile devices
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  const handleDropdownToggle = (id: string) => {
    setOpenDropdowns((prev) => {
      if (prev.includes(id)) {
        return prev.filter((dropdownId) => dropdownId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const mappedPage = mapMenuIdToPage(item.id);
    const isActive = currentPage === mappedPage;
    const isOpen = openDropdowns.includes(item.id);

    return (
      <div key={item.id}>
        <button
          onClick={() =>
            hasChildren
              ? handleDropdownToggle(item.id)
              : handlePageChange(item.id)
          }
          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 text-left border ${
            isActive
              ? "bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 border-primary-200 dark:border-primary-700"
              : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 border-transparent"
          }`}
          style={{ paddingLeft: `${level * 16 + 12}px` }}
        >
          <div className="flex items-center space-x-3 min-w-0 flex-1">
            {item.icon && <Icon name={item.icon} className="w-5 h-5" />}
            <span className="font-medium text-sm truncate">{item.label}</span>
          </div>
          {hasChildren && (
            <svg
              className={`w-4 h-4 ml-2 flex-shrink-0 transform transition-transform ${
                isOpen ? "rotate-180" : ""
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
        {hasChildren && isOpen && (
          <div className="mt-1 space-y-1">
            {item.children?.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  // Auto-open parent dropdowns when page changes
  useEffect(() => {
    const parentMenuItems = findParentMenuItems(currentPage);
    if (parentMenuItems.length > 0) {
      setOpenDropdowns((prev) => {
        const newOpenDropdowns = [...prev];
        parentMenuItems.forEach((parentId) => {
          if (!newOpenDropdowns.includes(parentId)) {
            newOpenDropdowns.push(parentId);
          }
        });
        return newOpenDropdowns;
      });
    }
  }, [currentPage]);

  // Close sidebar on mobile when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        window.innerWidth < 1024
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 right-0 h-full bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed lg:static top-0 left-0 z-50 w-64 h-full bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-700 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="lg:hidden flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700">
            <h2 className="font-black bg-gradient-to-r from-primary-600 via-accent-600 to-accent-800 bg-clip-text text-transparent tracking-tight font-inter font-smooth text-2xl">
              {t.app.name}
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          <div className="p-4 ">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-4 w-4 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="block w-full pl-9 pr-3 py-2 text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg leading-5 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:placeholder-neutral-400 dark:focus:placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
              />
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {menuItems.map((item) => renderMenuItem(item))}
          </div>

          {/* Sidebar Footer */}
          <div className="border-t border-neutral-200 dark:border-neutral-700 p-4">
            <div className="flex flex-col items-center space-y-1 text-neutral-600 dark:text-neutral-400">
              <span className="text-xs font-ibm-plex">
                {t.app.footer.replace(
                  "{currentYear}",
                  new Date().getFullYear().toString()
                )}
              </span>
              <span className="text-xs font-ibm-plex">
                Developed by{" "}
                <a
                  href="https://mirmousavi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200 decoration-2 underline-offset-2 transition-shadow duration-200"
                >
                  mirmousavi.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
