import { CSSProperties, useMemo, useState } from "react";
import { ExclaveProvider } from "./ExclaveProvider";
import { Clip } from './Clip';

export default {
  title: "Exclave",
  component: ExclaveProvider,
};

const contentStyle: CSSProperties = {
  width: 300,
  height: 50,
  borderRadius: '8px',
  marginBottom: 10,
  boxShadow: '0px 0px 3px rgba(0,0,0,0.8)',
};

const Content = () => {
  return (
    <Clip style={contentStyle} />
  );
};

const chevronStyle = (): CSSProperties => ({
  position: 'absolute',
  top: Math.random() * 300,
  left: Math.random() * 300,
  overflow: 'hidden',
  transform: `rotate(${Math.floor(Math.random() * 360)}deg)`,
  // border: '3px solid #fff',
  height: 40,
  width: 40,
  backgroundColor: '#fff',
  boxShadow: '0px 0px 3px rgba(0,0,0,0.8)',
});

const Chevron = () => {
  const memoStyle = useMemo(() => {
    return chevronStyle();
  }, []);

  return (
    <Clip style={{ ...memoStyle  }} />
  );
}

export const Exclave = () => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  return (
    <ExclaveProvider
      container={ref}
      backgroundImage="https://pbs.twimg.com/media/Evc-sHpUUAAOdCt?format=jpg&name=4096x4096"
      //"https://source.unsplash.com/random"
    >
      <div ref={setRef} style={{ position: 'relative', margin: '30px' }}>
        <Chevron />
        <Chevron />
        <Chevron />
        <Chevron />
        <Chevron />
        <Chevron />
        <Chevron />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    </ExclaveProvider>
  );
};
