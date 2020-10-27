import React, { ReactNode } from 'react';
import cs from 'classnames';
import Navbar from 'components/Navbar';

interface Props {
  children: ReactNode;
  title?: string;
  wrapperClassName?: string;
}

const Page: React.FC<Props> = ({ children, title, wrapperClassName }) => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="bg-primary-500 flex items-center justify-center page">
        <div className="container mx-auto px-8">
          <h1 className="text-3xl text-white inline-block font-bold">{title}</h1>
        </div>
      </div>
      <div className="container mx-auto -mt-16 page__container">
        <div className={cs('bg-white rounded-lg p-8 shadow-lg', wrapperClassName)}>{children}</div>
      </div>
    </div>
  );
};

export default Page;
