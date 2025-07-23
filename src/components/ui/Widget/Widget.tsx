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
    className={`card-elevated h-full flex flex-col p-6 sm:p-8 animate-scale-in ${className}`}
  >
    <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-700">
      <div>
        <h3 className="widget-title">{title}</h3>
        {englishTitle && <p className="widget-subtitle mt-1">{englishTitle}</p>}
      </div>
    </div>

    <div className="flex-grow">{children}</div>
  </div>
);

export default Widget;
