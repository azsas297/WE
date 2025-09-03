"use client";
import React from 'react';

export type TikTokEmbedProps = {
  url: string;
  className?: string;
};

/**
 * TikTokEmbed: composant client qui intègre une vidéo TikTok via le blockquote officiel.
 * - Responsive (maxWidth 605px, minWidth 325px) et centré
 * - Compatible navigation client Next.js: tente d'appeler window.tiktokEmbedLoad() après hydration
 * - Fallback accessible: lien "Voir sur TikTok" à l'intérieur du blockquote
 */
export default function TikTokEmbed({ url, className }: TikTokEmbedProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Attendre que le DOM soit prêt puis forcer le rendu de l'embed
    const timer = setTimeout(() => {
      const win = typeof window !== 'undefined' ? (window as any) : undefined;
      if (win && typeof win.tiktokEmbedLoad === 'function') {
        try {
          win.tiktokEmbedLoad();
        } catch (error) {
          console.log('TikTok embed load error:', error);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [url]);

  return (
    <div ref={containerRef} className={className}>
      <div className="w-full flex justify-center">
        <blockquote
          className="tiktok-embed"
          cite={url}
          data-video-id=""
          style={{ maxWidth: 605, minWidth: 325 }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            Voir sur TikTok
          </a>
        </blockquote>
      </div>
    </div>
  );
} 