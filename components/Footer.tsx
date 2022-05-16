import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="fixed bottom-0 mx-auto h-48 w-full bg-[url('/assets/patternhill.svg')] bg-cover bg-no-repeat">
      <div className="flex h-full items-center justify-center space-x-7 pt-10">
        <a href="https://facebook.com/" target="_blank">
          <Image src={'/assets/facebook.svg'} width={24} height={24} />
        </a>
        <a href="https://pinterest.com/" target="_blank">
          <Image src={'/assets/pinterest.svg'} width={24} height={24} />
        </a>
        <a href="https://instagram.com/" target="_blank">
          <Image src={'/assets/instagram.svg'} width={24} height={24} />
        </a>
      </div>
    </div>
  );
};
