interface ToppingProps {
    toppingName: string;
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

export default function Topping({toppingName, count, onIncrease, onDecrease}: ToppingProps) {
    return (
        <div className="topping">
            <div>{toppingName}</div>
            <div className="topping-counter">
                <button onClick={onDecrease}>-</button>
                <div className="topping-count">{count}</div>
                <button onClick={onIncrease}>+</button>
            </div>
        </div>
    );
}
