"use client";
const TextAreaInput = ({
  id,
  name,
  placeholder,
  inputValue,
  setInputValue,
  required
}) => {
  return (
    <div className="flex flex-col w-full h-auto text-white">
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        rows="6"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        required={required}
        className="flex w-full h-auto min-h-[180px] mt-2 py-3 px-3 border-[2px] font-supermolot border-white bg-black focus:outline-none placeholder:text-white"
      />
    </div>
  );
};

export default TextAreaInput;
