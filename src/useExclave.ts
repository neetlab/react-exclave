import { useContext, CSSProperties, useState, RefCallback } from 'react';
import { ExclaveContext } from './ExclaveContext';

export type UseExclaveOutput<T> = {
  style: CSSProperties;
  ref: RefCallback<T | null>;
}

export const useExclave = <T extends HTMLElement>(): UseExclaveOutput<T> => {
  const [item, setItem] = useState<T | null>(null);
  const exclave = useContext(ExclaveContext);

  if (item == null) {
    return { style: {}, ref: setItem };
  }

  const {
    top: itemTop,
    left: itemLeft,
  } = item.getBoundingClientRect();

  const top = -1 * (itemTop - exclave.rect.top);
  const left = -1 * (itemLeft - exclave.rect.left);

  const style: CSSProperties = {
    backgroundImage: `url(${exclave.backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `auto ${exclave.rect.height}px`,
    // backgroundSize: `${exclave.rect.width}px auto`,
    // backgroundSize: `${exclave.rect.width}px ${exclave.rect.height}px`,
    backgroundPosition: `top ${top}px left ${left}px`,
  };

  return { style, ref: setItem };
};

