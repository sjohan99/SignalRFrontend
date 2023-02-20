
import './ChessComponent.css';

export default function ChessComponent() {

    let rows = 8
    let cols = 8

    let rowArr: number[] = [...Array(rows).keys()];
    let colArr: number[] = [...Array(cols).keys()];

    const rowDiv = (even: number) => rowArr.map((index) => 
        <div className={(rowArr[index] + even) % 2 == 0 ? 'black-square' : 'white-square'} key={index}></div>
    )

    const boardDiv = colArr.map((col) =>
        <div>
            {rowDiv(col % 2)}
        </div>
    )

    const boardStyle = {
        gridTemplateColumns: `repeat( ${cols}, 1fr )`,
        gridTemplateRows: `auto`
    }

    return (
        <div className='board' style={boardStyle}>
            {boardDiv}
        </div>
    );
}