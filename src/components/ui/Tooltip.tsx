import React, { ReactNode, useState } from 'react';

interface TooltipProps {
  content: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <span className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-4 py-2 rounded-xl bg-white text-neutral-700 text-sm shadow-lg border border-neutral-200 z-50 whitespace-pre-line min-w-[220px] max-w-[350px] text-left">
          {content}
        </span>
      )}
    </span>
  );
};

export default Tooltip; 