import React from 'react';
import RegisterForm from './components/RegisterForm';

const Register: React.FC = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row min-h-screen">
      <div className="self-center flex justify-center md:w-2/4">
        <div className="p-10 lg:p-0 lg:w-8/12 xl:w-2/4">
          <h1 className="text-2xl mb-10">Register</h1>
          <RegisterForm />
        </div>
      </div>

      <div className="bg-gray-200 relative flex items-center p-10 lg:p-12 xl:p-24 md:w-2/4 ">
        <img src="/img/auth-bg.svg" className="mx-auto w-full max-w-none" alt="" />
      </div>
    </section>
  );
};

export default Register;
