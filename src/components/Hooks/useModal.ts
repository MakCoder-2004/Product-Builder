import { useState } from "react";
import { ReactElement, ReactNode, ComponentType } from "react";

type ModalProps = {
  close: () => void;
  [key: string]: any;
};

type ModalOptions<T extends ComponentType<any>> = Omit<
  React.ComponentProps<T>,
  "close"
>;

export const useModal = () => {
  const [modalContent, setModalContent] = useState<{
    component: ComponentType<any>;
    props: ModalProps;
  } | null>(null);

  const openModal = <T extends ComponentType<any>>(
    component: T,
    props: ModalOptions<T>
  ) => {
    setModalContent({
      component,
      props: {
        ...props,
        close: () => setModalContent(null),
      },
    });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const ModalWrapper = (): ReactElement | null => {
    if (!modalContent) return null;

    const { component: Component, props } = modalContent;
    return <Component {...props} />;
  };

  return {
    isOpen: !!modalContent,
    openModal,
    closeModal,
    ModalWrapper,
  };
};