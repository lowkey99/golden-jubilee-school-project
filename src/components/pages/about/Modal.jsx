import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { GrClose } from "react-icons/gr";

export default function ModalUIAbout({
  isOpen,
  closeModal,
  detail1,
  detail2,
  detail3,
}) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white dark:bg-black p-8 text-left align-middle shadow-xl transition-all">
                  <button onClick={closeModal}>
                    <GrClose className="absolute right-10 top-10 w-6 h-6 dark:bg-gray-400" />
                  </button>

                  <div className="flex grid-cols-2">
                    <div>
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-medium text-gray-900 dark:text-gray-200"
                      ></Dialog.Title>
                      <div className="my-4">
                        <p className="text-base text-gray-500">{detail1}</p>
                        <br />
                        <br />
                        <p className="text-base text-gray-500">{detail2}</p>
                        <br />
                        <br />
                        <p className="text-base text-gray-500">{detail3}</p>
                      </div>
                    </div>
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
