
type Props = {
    rows: number;
    columns: number;
}

const SelectableGrid = ({columns, rows}: Props) => {

    // const handleMouseDown = () => {}
    // const handleMouseUp = () => {}
    // const handleMouseEnter = () => {}


  return (
    <div onMouseUp={() => console.log("up")} className='grid' style={{ "--rows": rows, "--columns": columns}}>
        {
            [...Array(rows * columns).keys()].map((_, i) => (
                <div 
                    className={`box`} 
                    key={i}
                    onMouseEnter={() => console.log("hover")}
                    onMouseDown={() => console.log("down")}
                >
                    {i + 1}
                </div>
            ))
        }
    </div>
  )
}

export default SelectableGrid