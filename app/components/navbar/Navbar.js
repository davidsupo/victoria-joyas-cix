"use client";

import Link from "next/link";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";

export default function Navbar() {
  return (
    <header className="bg-background">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <div className="relative w-20 h-10">
            {" "}
            {/* Ajusta el tamaño del contenedor */}
            <Image
              src="/images/jewerly-brand.webp"
              alt="Logo Victoria Joyas y Diseño"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain" // Utiliza Tailwind CSS para mantener la proporción de la imagen
            />
          </div>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/joyeria"
                className="text-gray-700 hover:text-gray-900 text-sm"
                onClick={() =>
                  sendGAEvent("event", "navigateJoyeria")
                }
              >
                Joyería
              </Link>
            </li>
            <li>
              <Link
                href="/compromiso"
                className="text-gray-700 hover:text-gray-900 text-sm"
                onClick={() =>
                  sendGAEvent("event", "navigateCompromiso")
                }
              >
                Compromiso
              </Link>
            </li>
            <li>
              <Link
                href="/matrimonio"
                className="text-gray-700 hover:text-gray-900 text-sm"
                onClick={() =>
                  sendGAEvent("event", "navigateMatrimonio")
                }
              >
                Matrimonio
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
