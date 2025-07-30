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
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="animate-fade-in">
        {/* Single column layout for most screens, two columns for very large screens */}
        <div className="grid grid-cols-1 2xl:grid-cols-12 gap-8">
          {/* Main content - full width on most screens, 7 columns on 2xl */}
          <div className="2xl:col-span-7 space-y-8">
            {/* First widget at the top */}
            <div className="2xl:hidden">{widget}</div>

            {/* Main content */}
            {children}

            {/* Quiz widget at the bottom */}
            {quizWidget && <div className="2xl:hidden">{quizWidget}</div>}
          </div>

          {/* Widget and Quiz - full width on most screens, 5 columns on 2xl */}
          <div className="2xl:col-span-5 space-y-8">
            <div className="2xl:sticky 2xl:top-8 space-y-8">
              {/* First widget - only visible on 2xl screens */}
              <div className="hidden 2xl:block">{widget}</div>

              {/* Quiz widget - only visible on 2xl screens */}
              {quizWidget && (
                <div className="hidden 2xl:block">{quizWidget}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
