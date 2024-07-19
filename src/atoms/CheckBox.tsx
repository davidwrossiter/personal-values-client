function CheckBox() {
  return (
    <div>
      <label className="flex items-center">
        <input type="checkbox" className="hidden peer" />
        <span className="border h-6 w-6 inline-block rounded-md peer-checked:bg-black peer-checked:border-transparent flex-shrink-0 mr-3"></span>
        <span>Check this box</span>
      </label>
    </div>
  );
}

export default CheckBox;
