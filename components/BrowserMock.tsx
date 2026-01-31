
import React from 'react';

const BrowserMock: React.FC = () => {
  return (
    <div className="w-full h-12 border-b border-gray-100 flex items-center px-4 bg-white sticky top-0 z-50">
      {/* Window Controls */}
      <div className="flex gap-1.5 mr-6">
        <div className="w-3 h-3 rounded-full bg-gray-200" />
        <div className="w-3 h-3 rounded-full bg-gray-200" />
        <div className="w-3 h-3 rounded-full bg-gray-200" />
      </div>
      
      {/* Tabs */}
      <div className="flex gap-1 items-center mr-4">
        <div className="px-3 py-1 bg-gray-50 rounded-t-md text-[10px] text-gray-500 font-medium">
          Portfolio — 2024
        </div>
      </div>

      {/* Address Bar */}
      <div className="flex-1 max-w-lg bg-gray-100 h-7 rounded-md flex items-center px-3 mx-auto">
        <span className="text-[10px] text-gray-400 font-mono overflow-hidden whitespace-nowrap">
          https://zhuangzhuang.design/home
        </span>
      </div>

      {/* Spacer for symmetry */}
      <div className="w-[100px]" />
    </div>
  );
};

export default BrowserMock;
