"use client";
import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import LoadingSvg from "../icons/loadingSvg/LoadingSvg";

export default function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/rest/v1/subscriptors`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: process.env.NEXT_PUBLIC_API_KEY,
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
          body: JSON.stringify({ email }),
        }
      );
      if (!response.ok) {
        throw new Error("Error al registrar el correo");
      }
      setEmail("");
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative mx-auto bg-white py-4">
      <div className="max-w-screen-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-2">
          Sé el primero en recibir nuestras novedades
        </h1>
        <p className="mb-4">
          Suscríbete y recibe todas nuestras promociones y novedades, para que
          no se te escape ninguna oportunidad de elegancia.
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Ingresa tu correo"
              className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 bg-gray-800 text-white rounded-r-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center justify-center w-[2.688rem] h-[2.688rem]"
              disabled={loading}
              onClick={() =>
                sendGAEvent("event", "sendEmail", { value: email})
              }
            >
              {loading ? <LoadingSvg></LoadingSvg> : "➔"}
            </button>
          </form>
        ) : (
          <p className="font-bold mt-10">
            Muchas Gracias por suscribirte, muy pronto estarás recibiendo
            novedades.
          </p>
        )}
      </div>
    </div>
  );
}
