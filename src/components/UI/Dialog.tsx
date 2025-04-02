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
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-50"
      onClose={closeDialog}
      __demoMode
    >
      {/* Backdrop with fade-in animation */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300" />
      
      {/* Modal container with slide-up animation */}
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all
                      duration-300 ease-in-out 
                      data-[closed]:opacity-0 data-[closed]:scale-95
                      data-[open]:opacity-100 data-[open]:scale-100"
          >
            {/* Content with better spacing */}
            <div className="mt-2 text-gray-600">
              {children}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}