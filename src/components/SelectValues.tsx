import CheckBoxContainer from "../blocks/CheckBoxContainer";
import Header from "./Header";

function SelectValues() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col overflow-hidden px-10 pt-16">
        <div>
          <h1 className="text-[48px] leading-[48px]">
            Choose your favorite values
          </h1>
          <p className="mt-4 leading-5">
            Select from the list of values below. Choose all the words that
            resonate with you.
          </p>
        </div>
        <CheckBoxContainer />
      </div>
      <div className="w-full px-10 pb-16 pt-8 flex flex-row justify-end">
        <button className="bg-[#0B0B0B] rounded-lg px-4 py-[6px] text-white">
          Generate
        </button>
      </div>
    </div>
  );
}

export default SelectValues;
