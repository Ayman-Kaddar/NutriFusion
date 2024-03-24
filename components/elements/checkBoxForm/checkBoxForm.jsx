"use client";

import { useEffect, useRef, useState } from "react";
import ModalPolicy from "../modalPolicy/modalPolicy";

const CheckBoxForm = ({
  id,
  name,
  labelText,
  inputValue,
  setInputValue,
  required
}) => {
  const refModalPolicy = useRef();
  const [openModalPolicy, setOpenModalPolicy] = useState(false);

  useEffect(() => {
    const checkIfClickedOutsideModal = (e) => {
      if (
        openModalPolicy &&
        refModalPolicy.current &&
        !refModalPolicy.current.contains(e.target)
      ) {
        setOpenModalPolicy(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutsideModal);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutsideModal);
    };
  }, [openModalPolicy, , setOpenModalPolicy]);

  const handleChange = () => {
    setInputValue(!inputValue);
  };

  return (
    <div className="flex w-full h-auto py-3">
      {openModalPolicy && (
        <div className="flex absolute top-0 left-0 w-screen h-screen justify-center items-center bg-white/50 z-50">
          <div
            className="flex  flex-col w-[800px] h-[800px] rounded-lg overflow-y-scroll"
            ref={refModalPolicy}>
            <ModalPolicy
              openModalPolicy={openModalPolicy}
              setOpenModalPolicy={setOpenModalPolicy}
            />
          </div>
        </div>
      )}

      <div className="flex w-full flex-row my-2 pl-4 gap-3">
        <input
          id={id}
          name={name}
          type="checkbox"
          value={inputValue}
          checked={inputValue === true ? true : false}
          onChange={() => {
            handleChange();
          }}
          required={required}
          className={`relative peer shrink-0 appearance-none w-5 h-5 border rounded-sm  mt-1`}
        />

        <label className="mt-1 whitespace-nowrap" htmlFor={name}>
          <span>{labelText.text}</span>
        </label>
        <span
          className={` whitespace-nowrap 
          mt-1 -ml-2 text-md  
          italic cursor-pointer 
          hover:text-secondary-700 
         `}
          onClick={() => setOpenModalPolicy(!openModalPolicy)}>
          {labelText.link}
        </span>
      </div>
    </div>
  );
};

export default CheckBoxForm;
