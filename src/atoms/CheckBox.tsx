interface CheckBoxProps {
  title: string;
  isChecked: boolean;
  onToggle: () => void;
}

function CheckBox({ title, isChecked, onToggle }: CheckBoxProps) {
  return (
    <div className="w-48 flex">
      <label className="flex justify-start items-center hover:cursor-pointer">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={onToggle}
        />
        <span
          className={`relative border h-4 w-4 sm:h-6 sm:w-6 inline-block rounded-md flex-shrink-0 mr-3 ${
            isChecked ? "border-none" : ""
          }`}
        >
          <span
            className={`absolute inset-0 ${
              isChecked ? "bg-black" : "bg-white"
            } rounded-md transition-colors`}
          ></span>
          {isChecked && (
            <svg
              className="absolute inset-0 w-full h-full text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          )}
        </span>
        <span className="text-sm sm:text-base">{title}</span>
      </label>
    </div>
  );
}

export default CheckBox;
