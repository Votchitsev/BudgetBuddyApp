import { create } from "zustand";

export const useModalStore = create<State & Action>((set) => ({
  modalContent: null,
  setModalContent: (content: JSX.Element, title?: string) =>
    set({ modalContent: { title: title ?? "", content } }),
  clearModalContent: () => set({ modalContent: null }),
}));

export interface ModalState {
  modalContent: JSX.Element | null;
}

export type State = {
  modalContent: {
    title: string;
    content: JSX.Element;
  } | null;
};

export type Action = {
  setModalContent: (content: JSX.Element, title?: string) => void;
  clearModalContent: () => void;
};
