import './App.scss';
import Topping from './components/Topping.tsx';
import PizzaIcon from './components/PizzaIcon.tsx';
import { Toppings } from './models/Toppings.ts';
import { useState } from 'react';

function useLocalStorage<T>(key: string, initialFallbackState: T) {
  const initialState = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key)!)
    : initialFallbackState;
  const [state, setState] = useState<T>(initialState);

  const setLocalStorage = (newState: T) => {
    localStorage.setItem(key, JSON.stringify(newState));
    setState(newState);
  };

  return [state, setLocalStorage] as const;
}

function App() {
  const [toppings, setToppings] = useLocalStorage('toppings', {
    salami: 0,
    mushrooms: 0,
    bellPepper: 0,
    tuna: 0,
    pineapple: 0,
    onions: 0,
  });

  function handleCountIncrease(toppingName: string) {
    setToppings({
      ...toppings,
      [toppingName]: toppings[toppingName as keyof Toppings] + 1,
    });
  }

  function handleCountDecrease(toppingName: string) {
    setToppings({
      ...toppings,
      [toppingName]: toppings[toppingName as keyof Toppings] - 1,
    });
  }

  return (
    <>
      <h2 className="header">Pizza-O-Mat</h2>
      <div className="toppings-container">
        <PizzaIcon></PizzaIcon>

        <Topping
          toppingName="Salami"
          count={toppings.salami}
          onIncrease={() => handleCountIncrease('salami')}
          onDecrease={() => handleCountDecrease('salami')}
        />
        <Topping
          toppingName="Pilze"
          count={toppings.mushrooms}
          onIncrease={() => handleCountIncrease('mushrooms')}
          onDecrease={() => handleCountDecrease('mushrooms')}
        />
        <Topping
          toppingName="Paprika"
          count={toppings.bellPepper}
          onIncrease={() => handleCountIncrease('bellPepper')}
          onDecrease={() => handleCountDecrease('bellPepper')}
        />
        <Topping
          toppingName="Thunfisch"
          count={toppings.tuna}
          onIncrease={() => handleCountIncrease('tuna')}
          onDecrease={() => handleCountDecrease('tuna')}
        />
        <Topping
          toppingName="Ananas"
          count={toppings.pineapple}
          onIncrease={() => handleCountIncrease('pineapple')}
          onDecrease={() => handleCountDecrease('pineapple')}
        />
        <Topping
          toppingName="Zwiebeln"
          count={toppings.onions}
          onIncrease={() => handleCountIncrease('onions')}
          onDecrease={() => handleCountDecrease('onions')}
        />
      </div>
    </>
  );
}

export default App;
