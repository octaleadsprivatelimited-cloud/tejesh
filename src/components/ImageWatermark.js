import React from 'react';

const ImageWatermark = ({ className = "" }) => {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 bg-white/95 px-2 py-1 md:px-3 md:py-2 ${className}`}
    >
      <div className="flex items-center justify-center gap-1.5 md:gap-2 mb-0.5 md:mb-1">
        <img
          src="/tp-logo.png"
          alt="Tejesh Profine Logo"
          className="h-3 w-3 md:h-4 md:w-4 object-contain"
        />
        <span className="text-black font-semibold text-[10px] md:text-sm">
          Tejesh Profine
        </span>
      </div>
      <div className="text-center leading-tight md:leading-normal">
        <p className="text-black text-[9px] md:text-xs font-medium">
          +91 9949360406
        </p>
        <p className="text-black text-[9px] md:text-xs mt-0.5">
          Serving Andhra Pradesh, Telangana, Karnataka &amp; Tamilnadu
        </p>
      </div>
    </div>
  );
};

export default ImageWatermark;

