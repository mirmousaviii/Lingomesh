interface WidgetProps {
  title: string;
  englishTitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Widget: React.FC<WidgetProps> = ({
  title,
  englishTitle,
  children,
  className = "",
}) => (
  <div
    className={`bg-white/90 dark:bg-neutral-800/90 backdrop-blur-lg border border-white/30 dark:border-neutral-700/30 rounded-md shadow-medium hover:shadow-strong transition-all duration-300 h-full flex flex-col p-6 animate-scale-in ${className}`}
  >
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>
        {englishTitle && (
          <p className="text-base text-neutral-600 dark:text-neutral-400 font-medium mt-1">
            {englishTitle}
          </p>
        )}
      </div>
    </div>

    <div className="flex-grow">{children}</div>
  </div>
);

export default Widget;
