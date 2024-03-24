const BreakPointsHelper = () => {
  return (
    <div className="flex flex-row w-full h-auto justify-end">
      <div className="flex md:hidden w-auto h-auto bg-red-500">SM</div>
      <div className=" hidden md:flex lg:hidden w-auto h-auto bg-blue-500">
        MD
      </div>
      <div className=" hidden lg:flex xl:hidden w-auto h-auto bg-green-500">
        LG
      </div>
      <div className=" hidden xl:flex w-auto h-auto bg-yellow-500">XL</div>
    </div>
  );
};

export default BreakPointsHelper;
