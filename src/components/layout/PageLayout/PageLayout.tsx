import React, { ReactNode } from "react";

interface PageLayoutProps {
  widget: ReactNode;
  children: ReactNode;
  quizWidget?: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  widget,
  children,
  quizWidget,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="animate-fade-in">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left side - Educational content */}
          <div className="lg:col-span-7 space-y-8">{children}</div>

          {/* Right side - Widget and Quiz */}
          <div className="lg:col-span-5 space-y-8">
            <div className="sticky top-8 space-y-8">
              {widget}
              {quizWidget && <div>{quizWidget}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
