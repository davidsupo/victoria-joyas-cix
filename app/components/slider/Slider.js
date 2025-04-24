'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Slider({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen md:h-[500px] overflow-hidden">
      <div className="absolute inset-0 flex">
        {images.map((src, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0 relative h-full ${index === currentIndex ? 'block' : 'hidden'}`}
          >
            <Image
              src={src}
              alt={`Slider image ${index + 1}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 md:relative md:inset-auto md:bottom-0 md:left-0 w-full h-full md:h-auto bg-black bg-opacity-50 md:bg-opacity-100 md:bg-black text-white p-4 text-center flex items-center justify-center md:justify-center">
        <p className="text-3xl md:text-lg font-bold">Descubre la elegancia eterna en cada pieza de oro y plata</p>
      </div>
    </div>
  );
}