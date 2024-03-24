"use client";
const InputForm = ({
  id,
  name,
  type,
  placeholder,
  inputValue,
  setInputValue,
  required
}) => {
  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        required={required}
        className={`flex flex-col 
        w-full h-12 p-4 my-2  
        text-md
        tracking-widest 
        border-[2px] border-white
        bg-transparent
        `}
      />
    </>
  );
};

export default InputForm;
