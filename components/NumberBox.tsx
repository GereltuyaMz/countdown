import React from 'react';

interface InumProp {
  num: string | number;
  unit: string;
}

export const NumberBox = ({ num, unit }: InumProp) => {
  return (
    <div className="mt-4 flex flex-col items-center px-4">
      <div className="bg-transparent relative mt-4 flex h-32 w-32 flex-col items-center justify-center rounded-lg text-2xl shadow-xl md:text-4xl ">
        <div className="h-full w-full rounded-t-lg rounded-b-lg bg-[#2C2C44]" />
        <div className="absolute font-redhat text-5xl font-bold text-softRed md:text-7xl">
          {num}
        </div>
        <div className="h-full w-full rounded-b-lg rounded-t-lg bg-darkBlue" />
        <div className="absolute -right-2 top-[54px] z-20 h-[12px] w-[12px] rounded-full bg-deepDarkBlue" />
        <div className="absolute -left-2 top-[54px] z-20 h-[12px] w-[12px] rounded-full bg-deepDarkBlue" />
        <div className="absolute top-[60px] z-10 h-[1px] w-full bg-[#2C2C44]" />
      </div>
      <p className="mt-4 font-semibold uppercase tracking-[.5em] text-grayBlue md:text-xs">
        {unit}
      </p>
    </div>
  );
};
