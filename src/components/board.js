import React from 'react';
import Row from "./row";

const Board = (props) => {
    var rows = [];
    for(let i = 5; i >= 0; i--) {
        rows.push(<Row key={i} row={i} cells={props.cells[i]} handleClick={props.handleClick} />);
    }
    return (
        <div>
            {rows}
        </div>
    )
}

export default Board;
