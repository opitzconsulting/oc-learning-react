import { useState } from 'react';
import Light, { LightVariant } from './Light';

function App() {
  const [variant, setVariant] = useState<LightVariant>('green');
  return (
    <>
      <h1>Ampel</h1>
      <section className="lights">
        {(['red', 'amber', 'green'] as const).map((e) => (
          <Light
            key={e}
            variant={e}
            active={variant === e}
            onClick={setVariant}
          />
        ))}
      </section>
    </>
  );
}

export default App;
