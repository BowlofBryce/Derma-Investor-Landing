'use client';

import { useEffect, useRef } from 'react';

const tattooImages = [
  '/images/IMG_4705.JPG',
  '/images/IMG_5592.jpeg',
  '/images/IMG_6637.jpg',
  '/images/IMG_6638.jpg',
  '/images/IMG_6646.jpg',
];

export function TattooCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    let animationFrame: number;

    const animate = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= carousel.scrollWidth / 2) {
        scrollPosition = 0;
      }

      carousel.style.transform = `translateX(-${scrollPosition}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const allImages = [...tattooImages, ...tattooImages, ...tattooImages];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30 blur-sm">
      <div
        ref={carouselRef}
        className="flex gap-6 h-full items-center"
        style={{ willChange: 'transform' }}
      >
        {allImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="flex-shrink-0 h-[400px] w-[320px] relative"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
