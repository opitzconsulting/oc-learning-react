import { useState } from 'react';
import './Light.scss';

export interface LightProps {
  variant?: 'red' | 'amber' | 'green' | undefined;
}

export default function Light({ variant }: LightProps) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="light"
      onClick={() => setActive(!active)}
      data-variant={active ? variant : undefined}
    >
      <div className="blur"></div>
    </div>
  );
}
