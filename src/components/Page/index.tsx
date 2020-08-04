import React, { ReactNode } from 'react';
import Navbar from 'components/Navbar';

interface Props {
  children: ReactNode;
  title?: string;
}

const Page: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="bg-primary-500 flex items-center justify-center page">
        <div className="container mx-auto px-8">
          <h1 className="text-3xl text-white inline-block font-bold">{title}</h1>
        </div>
      </div>
      <div className="container mx-auto p-8 -mt-16 shadow-lg bg-white rounded-lg page__container">
        {children}
      </div>
    </div>
  );
};

export default Page;
