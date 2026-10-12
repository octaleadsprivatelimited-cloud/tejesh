import React, { useState } from 'react';
import images from '../data/images.json';
export default function Image({src, alt, loading = 'lazy', decoding = 'async', className = '', sizes = '(max-width: 760px) 100vw, 50vw', onLoad, onError, ...props}) {
 let key = src; try {key = decodeURI(src);} catch { /* Preserve original path. */ }
 const optimized = images[key]; const [failed,setFailed] = useState(false);
 if (failed) return <span className={`image-fallback ${className}`} role="img" aria-label={alt || 'Image unavailable'}>{alt || 'Image unavailable'}</span>;
 return <img width={optimized?.width} height={optimized?.height} {...props} srcSet={optimized?.srcSet} sizes={optimized?.srcSet ? sizes : undefined} className={`site-image ${className}`} src={optimized?.src || src} alt={alt} loading={loading} decoding={decoding} onLoad={onLoad} onError={e => {setFailed(true); onError?.(e);}} />;
}
