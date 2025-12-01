import React from 'react';

const ImageWatermark = ({ className = "" }) => {
  return (
    <div className={`absolute bottom-0 left-0 right-0 bg-white px-3 py-2 ${className}`}>
      <div className="flex items-center justify-center gap-2 mb-1">
        <img 
          src="/tp-logo.png" 
          alt="Tejesh Profine Logo" 
          className="h-4 w-4 object-contain"
        />
        <span className="text-black font-semibold text-sm">Tejesh Profine</span>
      </div>
      <div className="text-center">
        <p className="text-black text-xs font-medium">+91 9949360406</p>
        <p className="text-black text-xs mt-0.5">Serving Andhra Pradesh, Telangana, Karnataka & Tamilnadu</p>
      </div>
    </div>
  );
};

export default ImageWatermark;

