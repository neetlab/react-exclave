import { CSSProperties, ReactNode } from 'react';
import { useClip } from './useClip';

export interface ClipProps {
  readonly className?: string;
  readonly style?: CSSProperties;
  readonly children?: ReactNode;
}

export const Clip = (props: ClipProps) => {
  const { className, style, children } = props;

  const { element, ref, style: clipStyle } = useClip<HTMLDivElement>();

  return (
    <div className={className} style={{ ...clipStyle, ...style  }} ref={ref}>
      {element}
      {children}
    </div>
  )
}
