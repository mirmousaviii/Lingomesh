import React, { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="container p-8 max-w-screen-2xl mx-auto">
      <div className="space-y-6">{children}</div>
    </div>
  );
};

export default PageLayout;
