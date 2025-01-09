import { useState } from 'react';
import './grid.css'
type Props = {
    rows: number;
    columns: number;
}

const SelectableGrid2 = ({rows, columns}: Props) => {

    const [isMouseDown, setIsMouseDown] = useState(false);
    const [selectedBoxes, setSelectedBoxes] = useState<number[]>([]);



    const handleMouseUp = () => {
        setIsMouseDown(false);
    };
    const handleMouseDown = (boxNumber: number) => {
        setIsMouseDown(true);
        setSelectedBoxes([boxNumber]);
    };
    const handleMouseEnter = (boxNumber: number) => {
        if(isMouseDown) {
            const startBox = selectedBoxes[0];
            const endBox = boxNumber;

            const startRow = Math.floor((startBox - 1) / columns);
            const endRow = Math.floor((endBox - 1) / columns);

            const startColumn = (startBox - 1) % columns;
            const endColumn = (endBox - 1) % columns;

            const minRow = Math.min(startRow, endRow);
            const maxRow = Math.max(startRow, endRow);

            const minCol = Math.min(startColumn, endColumn);
            const maxCol = Math.max(startColumn, endColumn);

            const selected = [];            
            for (let row = minRow; row <= maxRow; row++) {
                for (let col = minCol; col <= maxCol; col++) {
                    selected.push(row * columns + col + 1);
                }
            }

            setSelectedBoxes(selected);
            console.log(selected)
        }
    };

  return (
    <>
        <div className='grid' style={{ '--rows': rows, '--columns': columns }} onMouseUp={() => handleMouseUp()}>
            {
                [...Array(rows * columns)].map((_, i) => (
                    <div 
                        key={i} 
                        className={`box ${selectedBoxes.includes(i + 1) ? 'selected' : ''}`}
                        onMouseDown={() => handleMouseDown(i + 1)}
                        onMouseEnter={() => handleMouseEnter(i + 1)}
                    >
                        {i + 1}
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default SelectableGrid2