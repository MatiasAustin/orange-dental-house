import React, { useState, useEffect } from 'react';
import { generateImage } from '../services/geminiService';
import { Loader2, Image as ImageIcon } from 'lucide-react';

interface GeneratedImageProps {
  prompt: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  aspectRatio?: string; 
}

export const GeneratedImage: React.FC<GeneratedImageProps> = ({ prompt, fallbackSrc, alt, className }) => {
  const [src, setSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Check local storage to avoid re-generating on every reload for this demo
    const cacheKey = `img_cache_${prompt.substring(0, 30)}`; 
    const cached = localStorage.getItem(cacheKey);
    
    if (cached) {
      setSrc(cached);
      return;
    }

    const fetchImage = async () => {
      setLoading(true);
      try {
        const base64 = await generateImage(prompt);
        if (base64) {
          setSrc(base64);
          try {
             localStorage.setItem(cacheKey, base64);
          } catch (e) {
             console.warn("Storage full, skipping cache");
          }
        } else {
          // If null returned (e.g. no API key or error), use fallback
          setError(true);
        }
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [prompt]);

  if (error || (!src && !loading)) {
     return <img src={fallbackSrc} alt={alt} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden bg-pastel-gray/10 ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-pastel-bg/50 backdrop-blur-sm">
           <div className="flex flex-col items-center gap-2">
             <Loader2 className="animate-spin text-pastel-clay" size={24} />
             <span className="text-xs text-pastel-dark font-medium tracking-wide">Generating AI Image...</span>
           </div>
        </div>
      )}
      {(src) && (
        <img 
            src={src} 
            alt={alt} 
            className={`w-full h-full object-cover transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`} 
        />
      )}
    </div>
  );
};