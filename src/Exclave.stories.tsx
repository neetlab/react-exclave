import { CSSProperties, useMemo, useState } from "react";
import { ExclaveProvider } from "./ExclaveProvider";
import { useExclave } from "./useExclave";

export default {
  title: "Exclave",
  component: ExclaveProvider,
};

const contentStyle: CSSProperties = {
  width: 300,
  height: 100,
  borderRadius: '8px',
  marginBottom: '12px',
  boxShadow: '0px 0px 3px rgba(0,0,0,0.8)',
};

const Content = () => {
  const { ref, style } = useExclave<HTMLDivElement>();

  return (
    <div ref={ref} style={{ ...style, ...contentStyle }} />
  );
};

const chevronStyle = (): CSSProperties => ({
  position: 'absolute',
  top: Math.random() * 300,
  left: Math.random() * 300,
  overflow: 'hidden',
  transform: 'rotate(45deg)',
  border: '3px solid #fff',
  height: 40,
  width: 40,
  backgroundColor: '#fff',
  boxShadow: '0px 0px 3px rgba(0,0,0,0.8)',
});

const Chevron = () => {
  const { ref, style } = useExclave<HTMLDivElement>();

  const memoStyle = useMemo(() => {
    return chevronStyle();
  }, []);

  return (
    <div style={{ ...memoStyle  }}>
      <div ref={ref} style={{
        ...style,
        transform: 'rotate(-45deg) translateY(-50%)',
        width: '200%',
        height: '200%',
      }} />
    </div>
  );
}

export const Exclave = () => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  return (
    <ExclaveProvider
      container={ref}
      backgroundImage="https://source.unsplash.com/random"
    >
      <div ref={setRef} style={{ position: 'relative', margin: '30px' }}>
        <Chevron />
        <Chevron />
        <Chevron />
        <Chevron />
        <Chevron />
        <Chevron />
        <Content />
        <Content />
        <Content />
      </div>
    </ExclaveProvider>
  );
};
