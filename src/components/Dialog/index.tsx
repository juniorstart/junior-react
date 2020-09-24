import React from 'react';
import { Transition } from '@tailwindui/react';
import Spinner from './components/Spinner';

interface Dialog {
  open: boolean;
  onClose: () => void;
  onOk?: () => void;
  cancelText?: string;
  okText?: string;
  okBtnType?: 'button' | 'submit' | 'reset';
  okBtnForm?: string;
  title?: string;
  loading?: boolean;
  fullScreen?: boolean;
}

const Dialog: React.FC<Dialog> = ({
  loading,
  open,
  onOk,
  onClose,
  fullScreen = false,
  okBtnForm,
  okBtnType,
  title,
  okText,
  cancelText,
  children,
}) => {
  return (
    <Transition
      show={open}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-end justify-center min-h-screen s px-4 pb-20 text-center sm:block sm:p-0">
        <Transition
          show={open}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          className="fixed inset-0 transition-opacity"
        >
          <div className="absolute inset-0 bg-gray-700 opacity-75" />
        </Transition>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" />
        &#8203;
        <div
          className={`  inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:w-full  ${
            fullScreen ? 'min-h-screen' : 'sm:max-w-lg rounded-lg'
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <section className="container mx-auto">
            <div className="bg-white px-4 py-4 px-6 flex justify-between items-center">
              <h2 className="text-lg font-semibold">{title || ''}</h2>
              <button type="button" className="text-black w-6" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="bg-white px-4 py-4 sm:px-6">
              <div className="sm:flex sm:items-center">{children}</div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row-reverse">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  onClick={onOk}
                  type={okBtnType || 'button'}
                  form={okBtnForm || ''}
                  disabled={loading}
                  className="btn btn--small btn--primary flex items-center disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {loading && <Spinner />} {okText || 'Ok'}
                </button>
              </span>
              <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button
                  onClick={onClose}
                  type="button"
                  className="btn btn--small border-gray-400 border"
                >
                  {cancelText || 'Cancel'}
                </button>
              </span>
            </div>
          </section>
        </div>
      </div>
    </Transition>
  );
};

export default Dialog;
