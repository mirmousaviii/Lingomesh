import React, { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto p-8 max-w-full">
      <div className="space-y-6">{children}</div>
    </div>
  );
};

export default PageLayout;
