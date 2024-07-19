interface CheckBoxProps {
  title: string;
  isChecked: boolean;
  onToggle: () => void;
}

function CheckBox({ title, isChecked, onToggle }: CheckBoxProps) {
  return (
    <div>
      <label className="flex items-center hover:cursor-pointer">
        <input
          type="checkbox"
          className="hidden peer"
          checked={isChecked}
          onChange={onToggle}
        />
        <span className="border h-6 w-6 inline-block rounded-md peer-checked:bg-black peer-checked:border-transparent flex-shrink-0 mr-3"></span>
        <span>{title}</span>
      </label>
    </div>
  );
}

export default CheckBox;
