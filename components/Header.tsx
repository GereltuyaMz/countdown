import React from 'react';

interface ImsgProps {
  message?: string;
}

export const Header = ({ message }: ImsgProps) => {
  return (
    <header className="mx-auto mt-24">
      <h1 className="text-rose-500 mx-auto mt-8 text-center font-redhat text-xl font-bold tracking-[.3em] text-white md:text-2xl">
        {message ? message : "WE'RE LAUNCHING SOON"}{' '}
      </h1>
    </header>
  );
};
