import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState, ReactNode } from "react";

interface Iprops {
  isOpen: boolean;
  closeDialog: () => void;
  title?: string;
  children?: ReactNode;
}

export default function MyModal({
  isOpen,
  closeDialog,
  title,
  children,
}: Iprops) {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeDialog}
        __demoMode
      >
        <div className="fixed inset-0 bg-slate-700/50 bg-opacity-50 z-10">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-2xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-2xl font-Montserrat items-center font-bold text-balck border-l-4 border-blue-500 px-3 text-blue-500"
              >
                {title}
              </DialogTitle>

              <div className="mt-4">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}