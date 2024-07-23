interface CheckBoxProps {
  title: string;
  isChecked: boolean;
  onToggle: () => void;
}

function CheckBox({ title, isChecked, onToggle }: CheckBoxProps) {
  return (
    <div className="w-48 flex ">
      <label className="flex justify-start items-center hover:cursor-pointer">
        <input
          type="checkbox"
          className="hidden peer"
          checked={isChecked}
          onChange={onToggle}
        />
        <span className="border h-4 w-4 sm:h-6 sm:w-6 inline-block rounded-md peer-checked:bg-black peer-checked:border-transparent flex-shrink-0 mr-3"></span>
        <span className="text-sm sm:text-base">{title}</span>
      </label>
    </div>
  );
}

export default CheckBox;
