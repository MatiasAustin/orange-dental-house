import React, { useState } from 'react';
// import { generateImage } from '../services/geminiService'; // Disabled for static production stability
import { Loader2 } from 'lucide-react';

interface GeneratedImageProps {
  prompt?: string; // Optional now as we use fallback/static src
  fallbackSrc: string;
  alt: string;
  className?: string;
  aspectRatio?: string; 
}

export const GeneratedImage: React.FC<GeneratedImageProps> = ({ fallbackSrc, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Note: We have switched to static images to prevent re-generation on every visit/deploy
  // This ensures the site is fast and reliable on Vercel without hitting API limits.
  
  return (
    <div className={`relative overflow-hidden bg-pastel-gray/10 ${className}`}>
        {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-pastel-bg animate-pulse z-0">
                <Loader2 className="animate-spin text-pastel-clay opacity-20" size={24} />
            </div>
        )}
        <img 
            src={fallbackSrc} 
            alt={alt} 
            className={`w-full h-full object-cover transition-opacity duration-700 relative z-10 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
            loading="lazy"
        />
    </div>
  );
};