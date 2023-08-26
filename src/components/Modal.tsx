import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onClose}>
      <Dialog.Portal className="card">
        <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed z-10 inset-0" />

        <div
          className="
      z-20
      fixed
      top-[50%]
      left-[50%]
      translate-x-[-50%]
      translate-y-[-50%]
    "
        >
          <Dialog.Content
            onClick={(e) => e.stopPropagation()}
            className="
          drop-shadow-md
          border
          border-neutral-900
          max-h-full
          h-full
          md:h-auto
          md:max-h-[85vh]
          w-full
          md:w-[90vw]
          md:max-w-[700px]
          rounded-md
          bg-neutral-200
          p-[100px]
          focus:outline-none
        "
          >
            <Dialog.Title className="text-xl text-center font-semibold mb-4">
              {title}
            </Dialog.Title>
            <Dialog.Description className="card-title">
              {description}
            </Dialog.Description>
            <div>{children}</div>
            <Dialog.Close asChild>
              <button
                onClick={() => {
                  onClose(false); // Usamos onClose para cerrar el modal

                  console.log("Modal closed", isOpen);
                }}
                className="
                text-black
                hover:text-gray
                absolute
                top-[10px]
                right-[10px]
                z-50
                inline-flex
                h-[25px]
                w-[25px]
                appearence-none
                items-center
                justify-center
                rounded-full
                focus:outline-none
              "
                aria-label="Close"
              >
                <IoMdClose />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
