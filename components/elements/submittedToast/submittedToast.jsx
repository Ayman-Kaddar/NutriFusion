const SubmittedToast = ({ type }) => {
  return (
    <>
      <div
        className={`flex flex-col w-full h-auto p-12 mt-64 justify-center items-center text-white font-supermolot text-lg rounded-2xl ${
          type === "success" ? "bg-green-400" : "bg-red-400"
        }  rounded-2xl`}>
        {type === "success"
          ? "Mensaje recibido, en breve te contactamos."
          : "Oups! Algo ha fallado, vuelve a intentarlo más tarde."}
      </div>
    </>
  );
};

export default SubmittedToast;
