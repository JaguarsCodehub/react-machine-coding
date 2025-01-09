import { useState } from 'react';
import './App.css';

type Props = {
  filled: boolean;
  onClick: () => void;
  value: number;
  keyI: number;
  isDisabled: boolean
};

export const Cell = ({ filled, onClick, keyI, isDisabled }: Props) => {
  return (
    <button
      key={keyI}
      onClick={onClick}
      className={filled ? 'cell cell-activated' : 'cell'}
      disabled={isDisabled}
    />
  );
};

function App() {
  const [order, setOrder] = useState<number[]>([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const activateCells = (cellIndex: number) => {
    const newOrder = [...order, cellIndex];
    setOrder(newOrder);
    console.log('Order:', newOrder);

    // deactivate
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      console.log('Cell limit reached:', newOrder.length);
      deactivateCells();
    }
  };

  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((originalOrder) => {
        const newOrder = originalOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };

  return (
    <div className='wrapper'>
      <div
        className='grid'
        style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
      >
        {config
          .flat(1)
          .map((value, index) =>
            value === 1 ? (
              <Cell
                keyI={index}
                filled={order.includes(index)}
                onClick={() => activateCells(index)}
                value={value}
                isDisabled={order.includes(index) || isDeactivating}
              />
            ) : (
              <span />
            )
          )}
      </div>
    </div>
  );
}

export default App;
