"use client";

import Link from "next/link";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";

export default function Footer() {
  return (
    <footer className="bg-background py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center space-y-4">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/">
            <Image
              src="/images/jewerly-brand.webp"
              alt="Logo Victoria Joyas y Diseño"
              width={180}
              height={38}
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/victoriajoyas.cix/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                sendGAEvent("event", "openFacebook")
              }
            >
              <Image
                src="/images/facebook.svg"
                alt="Icono Facebook Victoria Joyas y Diseño"
                width={30}
                height={30}
              ></Image>
            </Link>
            <Link
              href="https://www.instagram.com/victoriajoyas.cix/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                sendGAEvent("event", "openInstagram")
              }
            >
              <Image
                src="/images/instagram.svg"
                alt="Icono Instragram Victoria Joyas y Diseño"
                width={30}
                height={30}
              ></Image>
            </Link>
          </div>
        </div>
        <nav className="pt-8 md:pt-0">
          <ul className="flex flex-col space-y-4 align-center">
            <li className="text-center md:text-left">
              <Link
                href="/nosotros"
                className="text-gray-700 hover:text-gray-900"
                onClick={() =>
                  sendGAEvent("event", "navigateNosotros")
                }
              >
                Sobre nosotros
              </Link>
            </li>
            <li className="text-center md:text-left">
              <Link
                href="/servicios"
                className="text-gray-700 hover:text-gray-900"
                onClick={() =>
                  sendGAEvent("event", "navigateServicios")
                }
              >
                Servicios & Beneficios
              </Link>
            </li>
            <li className="text-center md:text-left">
              <Link
                href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE}?text=Hola,%20me%20gustaría%20ponerme%20en%20contacto%20con%20ustedes%20para%20obtener%20más%20información.`}
                className="text-gray-700 hover:text-gray-900"
                target="_blank"
                onClick={() =>
                  sendGAEvent("event", "openWhatsApp")
                }
              >
                Ponte en contacto con nosotros
              </Link>
            </li>
            <li className="text-center md:text-left">
              <Link
                href="/preguntas"
                className="text-gray-700 hover:text-gray-900"
                onClick={() =>
                  sendGAEvent("event", "navigatePreguntas")
                }
              >
                Ayuda y preguntas frecuentes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
