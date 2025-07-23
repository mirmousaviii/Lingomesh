const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-8">
      <div className="flex items-center justify-center space-x-2 text-muted">
        <span className="text-sm">
          © {currentYear} Meine Orientierung. Developed by
        </span>
        <a
          href="https://mirmousavi.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200 underline decoration-2 underline-offset-2 hover:decoration-primary-500 hover-glow"
        >
          mirmousavi.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
