"use client"; 

import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";
import { useEffect, useState } from "react";

export default function Product({ product }) {
  const imageUrl = product.image || "/images/matrimonio.webp";
  const [subText, setSubText] = useState('');

  useEffect(() => {
    let text = '';
    if (product.material) {
      text = `${product.material}`;
      if (product.carats) {
        text += ` ${product.carats}${product.material === 'Oro' ? 'k': ''}`;
      }
      if (product.weight) {
        text += ` - ${product.weight}gr`;
      }
    }
    setSubText(text);
  }, [product]);

  const handleWhatsAppClick = (productName) => {
    const message = encodeURIComponent(`Hola, estoy interesado en el producto: ${productName}.\nMe gustaría obtener más información sobre él.\n\nPodrías ayudarme con los detalles, como precio, características y disponibilidad?`);
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE;
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="p-4 pt-0 bg-white rounded-t-lg shadow-md flex flex-col justify-between h-full">
      <div className="mb-5">
        <div className="relative -mx-4 mb-4 rounded-t-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={product.name}
            width={400}
            height={200}
            className="w-full object-cover"
          />
        </div>
        <h2 className="font-bold mb-2 text-sm">{product.name}</h2>
        <p className="text-gray-500 mb-2 text-sm font-bold">{subText}</p>
      </div>
      <button
        onClick={() => {
          handleWhatsAppClick(product.name)
          sendGAEvent("event", "openProduct", { value: product.name})
        }}
        className="mt-auto border border-gray-500 text-gray-500 py-2 px-4 rounded hover:bg-gray-500 hover:text-white transition-colors duration-300"
      >
        Lo quiero
      </button>
    </div>
  );
}