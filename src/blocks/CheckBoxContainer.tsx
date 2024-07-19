import CheckBox from "../atoms/CheckBox";

function CheckBoxContainer() {
  const values = Array(500)
    .fill(0)
    .map((_, i) => `Value ${i + 1}`);

  return (
    <div className="flex-grow overflow-y-auto border mt-12 px-4 py-6 rounded-l-xl">
      <div className="flex flex-row flex-wrap gap-x-12 gap-y-6">
        {values.map((_, index) => (
          <CheckBox key={index} />
        ))}
      </div>
    </div>
  );
}

export default CheckBoxContainer;
