import React from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import { IoMdClose } from 'react-icons/io';

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
            <Dialog.Portal className='card'>
                <Dialog.Overlay className='
                bg-neutral-900/90
                backdrop-blur-sm
                fixed
                z-10
                inset-0
                '
                />
                <Dialog.Content

                    onClick={(e) => e.stopPropagation()}
                    className='
            z-20
            fixed
            drop-shadow-md
            border
            border-neutral-900
            top-[50%]
            left-[50%]
            max-h-full
            md:h-auto
            md:max-h-[85vh]
            w-full
            md:w-[90vw]
            md:max-w-[999px]
            translate-x-[-50%]
            translate-y-[-50%]
            rounded-md
            p-[100px]
            focus:outline-none
            overflow-y-auto
            h-full 
            pt-10
            bg-gradient-to-r from-orange-300 to-rose-300
            ' >
                    <Dialog.Title
                        className='
                        flex justify-start pb-5
                        text-xl font-bold text-gray-900 sm:text-3xl text-center
                '
                    >

                        {title}
                    </Dialog.Title>
                    <Dialog.Description
                        className='
                   card-title
                    '
                    >
                        {description}
                    </Dialog.Description>
                    <div>
                        {children}
                    </div>
                    <Dialog.Close asChild>
                        <button

                            onClick={() => {
                                onClose(false) //Usamos onClose para cerrar el modal

                                console.log("Modal closed", isOpen)
                            }}
                            className='
                
                     text-black
                      hover:text-gray
                      absolute
                      top-[10px]
                      right-[10px]
                      inline-flex
                      h-[25px]
                      w-[25px]
                      appearence-none
                      items-center
                      justify-center
                      rounded-full
                      focus:outline-none
                     '
                            aria-label='Close'
                        >
                            <IoMdClose />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root >
    );
}

export default Modal;