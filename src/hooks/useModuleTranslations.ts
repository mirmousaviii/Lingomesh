import { useMemo } from "react";
import { Language } from "./useTranslations";
import { getModuleTranslations } from "../utils/i18n";

export function useModuleTranslations<T>(
  moduleName: string,
  language: Language
): T | null {
  return useMemo(() => {
    return getModuleTranslations(moduleName, language) as T;
  }, [moduleName, language]);
}
