"use client";

import { setCookie, hasCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // If no consent cookie is present, show the consent popup
    if (!hasCookie("consent")) {
      setShowConsent(true);
    }
  }, []);

  const acceptConsent = () => {
    // When user accepts the consent, hide the popup and set a consent cookie
    setShowConsent(false);
    setCookie("consent", "true");

    // Trigger GTM script load
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("updateGTMConsent"));
    }
  };
  const declineConsent = () => {
    // When user declines the consent, simply hide the popup
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }
  return (
    <div className="flex fixed bottom-0 w-96 sm:right-0 h-auto p-4 z-50 font-notosans">
      <div className="flex flex-col w-full h-full bg-primary-700 bg-black rounded-xl p-4">
        <div className="flex flex-row w-full h-auto justify-start">
          <p className="text-md font-extralight text-white">
            Utilizamos cookies propias y de terceros para obtener datos
            estadísticos de navegación y así poder optimizar tu visita.
          </p>
        </div>
        <div className="flex flex-row w-full h-auto justify-start mt-2">
          <p className="text-md font-extralight text-white">
            Las cookies no serán utilizadas para recabar datos de carácter
            personal.
          </p>
        </div>
        <div className="flex flex-row w-full h-auto justify-start mt-2">
          <p className="text-md font-extralight text-white">
            Si pulsas “Aceptar”, se entiende que te hemos informado y aceptas la
            instalación y uso de las cookies.
          </p>
        </div>
        <div className="flex flex-row w-full h-auto justify-start mt-2">
          <p className="text-md font-extralight text-white">
            Para más información, accede a nuestra
            <Link href={`/p-politica`} target="_blank">
              <span className="italic ml-2 underline hover:text-secondary-500 active:scale-95">
                Política de Cookies.
              </span>
            </Link>
          </p>
        </div>

        <div className="flex w-auto h-auto mt-6 justify-center gap-6">
          <button
            onClick={() => {
              acceptConsent();
            }}
            className={`flex px-4 py-3
            text-white text-lg font-notosans font-semibold justify-center 
            rounded-full
            hover:bg-gray-500
            border-[1px] border-white
            cursor-pointer active:scale-95`}
          >
            Aceptar
          </button>
          <button
            onClick={() => {
              declineConsent();
            }}
            className={`flex px-4 py-3
            text-white text-lg font-notosans font-semibold justify-center 
            rounded-full
            hover:bg-gray-500
            border-[1px] border-white
            cursor-pointer active:scale-95`}
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
