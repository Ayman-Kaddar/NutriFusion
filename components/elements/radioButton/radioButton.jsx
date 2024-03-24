const RadioButton = ({ index, item, selectedOption, handleRadioChange }) => {
  return (
    <div key={index} className="flex flex-row w-auto h-auto items-center gap-2">
      <input
        type="radio"
        name="options"
        value={item}
        checked={selectedOption === item}
        onChange={handleRadioChange}
        required={true}
      />
      <label htmlFor={`radio-${index}`}>{item}</label>
    </div>
  );
};

export default RadioButton;
