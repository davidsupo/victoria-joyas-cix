"use client";

import Image from "next/image";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

export default function ProductSection({ title, description, image }) {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <Image
        src={image}
        alt="Background"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
        <p className="text-2xl md:text-4xl font-bold mb-4">{title}</p>
        <p className="text-sm md:text-lg mb-4 italic">{description}</p>
        <Link
          href="/joyeria"
          className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() =>
            sendGAEvent("event", "navigateSection", { value: title})
          }
        >
          Descubre más
        </Link>
      </div>
    </div>
  );
}
