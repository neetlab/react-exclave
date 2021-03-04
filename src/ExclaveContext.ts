import { createContext } from "react";

export type Rect = {
  /** Equivalent for DOMRect#top */
  readonly top: number;
  /** Equivalent for DOMRect#left */
  readonly left: number;
  /** The width of the canvas */
  readonly width: number;
  /** The height of the canvas */
  readonly height: number;
}

export type ExclaveContextInterface = {
  /** The top-left-most element */
  readonly rect: Rect;
  /** Background image to apply */
  readonly backgroundImage: string;
};

export const ExclaveContext = createContext<ExclaveContextInterface>({
  rect: {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  },
  backgroundImage: "",
});
