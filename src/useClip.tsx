import {
  useContext,
  CSSProperties,
  useState,
  RefCallback,
  ReactNode,
} from "react";
import { ExclaveContext } from "./ExclaveContext";

export type UseClipOutput<T> = {
  element: ReactNode | null;
  style: CSSProperties;
  ref: RefCallback<T | null>;
};

export const useClip = <T extends HTMLElement>(): UseClipOutput<T> => {
  const [item, setItem] = useState<T | null>(null);
  const exclave = useContext(ExclaveContext);

  if (item == null) {
    return { element: null, style: {}, ref: setItem };
  }

  const {
    top: itemTop,
    left: itemLeft,
    width: itemWidth,
    height: itemHeight,
  } = item.getBoundingClientRect();
  const top = -1 * (itemTop - exclave.rect.top);
  const left = -1 * (itemLeft - exclave.rect.left);

  const itemRotation = item.style
    .getPropertyValue("transform")
    .match(/rotate\((.+?)deg\)/)?.[1];
  const rotate = itemRotation && Number(itemRotation) * -1;

  const outerStyle: CSSProperties = {
    position: "relative",
    overflow: "hidden",
  };

  console.log(item);

  console.table({ itemWidth, itemHeight });

  const innerStyle: CSSProperties = {
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    width: `${itemWidth}px`,
    height: `${itemHeight}px`,
    transform:
      rotate === null
        ? null
        : `rotate(${rotate}deg) translateX(${- itemWidth / 2}px)`,
    transformOrigin: "top left",
    backgroundImage: `url(${exclave.backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `auto ${exclave.rect.height}px`,
    // backgroundSize: `${exclave.rect.width}px auto`,
    // backgroundSize: `${exclave.rect.width}px ${exclave.rect.height}px`,
    backgroundPosition: `top ${top}px left ${left}px`,
  };

  console.log(innerStyle);

  const element = <div role="presentation" aria-hidden style={innerStyle} />;

  return { element, style: outerStyle, ref: setItem };
};
