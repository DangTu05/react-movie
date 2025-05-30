import { createContext, useContext } from "react";

const ModalContext = createContext();

const useModal = () => useContext(ModalContext);

export { ModalContext, useModal };
