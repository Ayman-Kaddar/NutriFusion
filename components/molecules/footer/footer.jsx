import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col flex-wrap-reverse md:flex-nowrap w-full h-auto z-10 px-[5%] pb-6 font-notosans bg-black text-white">
      <div className="flex flex-row flex-wrap-reverse md:flex-nowrap w-full h-auto justify-between">
        <div className="flex flex-col w-1/2 md:w-full h-auto">
          {/* <div className="hidden sm:flex flex-row mt-6 text-2xl">
            <div className="flex w-auto h-auto items-center">
              <div className="flex cursor-default whitespace-nowrap">
                Descubre Cataluña
              </div>
            </div>
          </div> */}
          {/* <div className="flex sm:hidden flex-row mt-6 text-lg">
            <div className="flex w-auto h-auto items-center">
              <div className="flex flex-col cursor-default whitespace-nowrap">
                <div className="flex w-auto h-auto">Descubre Cataluña</div>
              </div>
            </div>
          </div> */}
          <div className="flex flex-row mt-4 text-lg">
            <div className="flex w-auto h-8 items-center">
              <div className="flex cursor-default whitespace-nowrap">
                2024 ®
              </div>
            </div>
          </div>
          <div className="flex flex-row text-lg">
            <div className="flex w-auto h-8 items-center">
              <div className="flex cursor-default whitespace-nowrap">
                Email:&nbsp;
                <a
                  href="mailto:info@queverencatalunya.es"
                  alt="mail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  info@queverencatalunya.es
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-auto h-auto mt-3 md:mt-0">
            <div className="flex w-auto h-8 items-center">
              <Link href={"/aviso-legal"} rel="noopener noreferrer">
                <div className="flex fill-current active:scale-95">
                  <u>Aviso Legal</u>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex text-tertiary-300 px-2 h-auto">
              |
            </div>
            <div className="flex w-auto h-8 items-center">
              <Link href={"/p-politica"} rel="noopener noreferrer">
                <div className="flex fill-current active:scale-95">
                  <u> Política de Privacidad</u>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex text-tertiary-300  px-2 h-auto">
              |
            </div>
            <div className="flex w-auto h-8 items-center">
              <Link href={"/c-politica"} rel="noopener noreferrer">
                <div className="flex fill-current active:scale-95">
                  <u>Política de Cookies</u>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
