"use client";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed w-full h-auto top-0 left-0 text-xl z-50 bg-secondary-300 text-black">
      <div className="flex flex-row w-full h-auto justify-between items-center p-4">
        <div className="flex h-auto w-auto pl-4">
          <Link href={"/"}>
            <div className="flex md:hidden lg:hidden xl:hidden flex-row h-auto w-auto text-sm">
              Mi Receta Saludable
            </div>
            <div className="hidden md:flex flex-row h-auto w-auto text-lg">
              Mi Receta Saludable
            </div>
          </Link>
        </div>
        {/* <div className="flex flex-row w-auto h-auto underline">
          {openModalContactForm &&
            createPortal(
              <div className="flex fixed w-screen h-screen justify-center items-center bg-gray-700 bg-opacity-60 z-50 ">
                <ContactForm
                  openModalContactForm={openModalContactForm}
                  setOpenModalContactForm={setOpenModalContactForm}
                />
              </div>,
              document.body
            )}
          <button
            className="flex w-auto h-auto text-lg underline"
            onClick={() => handleFormAndPolicy()}
          >
            <span className="flex md:hidden lg:hidden xl:hidden flex-row h-auto w-auto text-sm">
              CONTACTO
            </span>
            <span className="hidden md:flex flex-row h-auto w-auto text-lg">
              CONTACTO
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
