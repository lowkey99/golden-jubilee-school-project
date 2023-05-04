import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { GrClose } from "react-icons/gr";

export default function ModalUI() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex  min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl transform overflow-hidden rounded-2xl bg-white dark:bg-black p-8 lg:p-10  xl:p-16  2xl:p-20 text-left align-middle shadow-xl transition-all">
                  <button onClick={closeModal}>
                    <GrClose className="absolute right-10 top-10 w-6 h-6 dark:bg-gray-400" />
                  </button>

                  <div className="flex grid-cols-2">
                    <div>
                      <Dialog.Title
                        as="h3"
                        className="text-4xl font-medium text-gray-900 dark:text-gray-200"
                      >
                        Take Part in the <br /> First Ever{" "}
                        <span className="faq-style">Injective</span> <br />{" "}
                        <span className="faq-style">Virtual Hackathon</span>
                      </Dialog.Title>
                      <div className="my-10">
                        <p className="text-base text-gray-500">
                          Join the fastest growing Web3 ecosystem supported by
                          the best builders and institutions globally. There’s
                          no better way to get started on the lightning fast
                          blockchain optimized for finance.
                        </p>
                      </div>
                    </div>
                    <div className="w-3/4">
                      <img className="absolute right-10" src="" alt="" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Launch Hackathon
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
