import { useTranslations } from "../../../hooks/useTranslations";
import { useTranslation as useTranslationData } from "../../../constants/translations";

const Footer: React.FC = () => {
  const { language } = useTranslations();
  const t = useTranslationData(language);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-8">
      {/* short line */}
      <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-700 my-4"></div>

      <div className="flex items-center justify-center space-x-2 text-neutral-600 dark:text-neutral-400">
        <span className="text-sm font-ibm-plex">
          {t.app.footer.replace("{currentYear}", currentYear.toString())}
        </span>
        <a
          href="https://mirmousavi.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200 underline decoration-2 underline-offset-2 transition-shadow duration-200 font-ibm-plex"
        >
          {t.app.developer}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
