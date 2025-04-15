import React, { useEffect, useCallback, useState } from 'react';
import { Button } from '@/components/ui/button';

function UseEffectWithCallback() {
  const [count, setCount] = useState(0);

  // Ohne useCallback (wird bei jedem Render neu erstellt)
  const logWithoutCallback = () => {
    console.log('Ohne useCallback ausgelöst');
  };

  // Mit useCallback (bleibt gleich, solange keine Abhängigkeiten sich ändern)
  const logWithCallback = useCallback(() => {
    console.log('Mit useCallback ausgelöst');
  }, []);

  // Effekt ohne useCallback → wird bei jedem Render neu ausgelöst
  useEffect(() => {
    logWithoutCallback();
  }, [logWithoutCallback]);

  // Effekt mit useCallback → wird nur 1x ausgelöst
  useEffect(() => {
    logWithCallback();
  }, [logWithCallback]);

  return (
    <div>
      <h2>useEffect + useCallback Demo</h2>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(c => c + 1)}>Erhöhe Count</Button>
    </div>
  );
}

export default UseEffectWithCallback;