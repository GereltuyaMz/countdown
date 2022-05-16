import React from 'react';

interface IinputProps {
  value: number;
  handleClick(): void;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const TimerInput = ({
  value,
  handleClick,
  handleChange,
}: IinputProps) => {
  return (
    <div className="z-6 mx-auto flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0">
      <input
        className="mr-4 w-40 rounded-lg px-2 py-1 font-redhat text-xl outline-none md:text-2xl"
        type="number"
        name="Timer Input"
        placeholder="Enter No. of Days"
        value={value}
        onChange={handleChange}
        min={0}
      />
      <button
        onClick={handleClick}
        className="rounded-xl bg-rose-300 px-4 py-2 font-redhat text-xl font-semibold text-rose-500 transition duration-300 ease-in hover:bg-rose-500 hover:text-rose-100 md:text-xl"
      >
        Set value
      </button>
    </div>
  );
};
