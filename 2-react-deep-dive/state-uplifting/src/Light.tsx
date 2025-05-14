import './Light.scss';

export type LightVariant = 'red' | 'amber' | 'green';
export interface LightProps {
  variant: LightVariant;
  active: boolean;
  onClick: (variant: LightVariant) => void;
}

export default function Light({ variant, active, onClick }: LightProps) {
  return (
    <div
      className="light"
      onClick={() => onClick(variant)}
      data-variant={active ? variant : undefined}
    >
      <div className="blur"></div>
    </div>
  );
}
