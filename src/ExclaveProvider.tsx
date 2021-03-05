import { ReactNode } from "react";
import { ExclaveContext } from "./ExclaveContext";

export type ExclaveProviderProps<T extends HTMLElement> = {
  readonly container: T | null;
  readonly backgroundImage: string;
  readonly children: ReactNode;
};

export const ExclaveProvider = <T extends HTMLElement>(props: ExclaveProviderProps<T>) => {
  const { backgroundImage, children, container } = props;

  const value = {
    backgroundImage,
    rect: container?.getBoundingClientRect() ?? { width: 0, height: 0, top: 0, left: 0 },
  };

  return (
    <ExclaveContext.Provider value={value}>
      {children}
    </ExclaveContext.Provider>
  );
};
