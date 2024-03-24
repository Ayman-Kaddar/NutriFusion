"use client";
import PrivPolicy from "../../views/privacyPolicy";

const ModalPolicy = ({ openModalPolicy, setOpenModalPolicy }) => {
  const handleCloseModal = () => {
    setOpenModalPolicy(false);
  };

  return (
    <div className="flex flex-col w-full h-auto items-center bg-black">
      <div className="flex flex-col w-full h-auto pr-4 px-4 font-supermolot">
        <PrivPolicy />
      </div>
      <div
        className="flex flex-col items-center pb-32"
        onClick={() => setOpenModalPolicy(!openModalPolicy)}>
        <button
          onClick={handleCloseModal}
          className="flex w-auto h-auto font-horizon text-2xl  px-3 py-3 uppercase underline text-white">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalPolicy;
