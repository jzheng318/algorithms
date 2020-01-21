import React from 'react';
import { createBoard, plantBombs, countNeighbors } from '../functions';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.size = this.props.size;
    this.state = {
      startGrid: createBoard(this.size),
      endGrid: createBoard(this.size),
    };
    this.startGame = this.startGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.updateCell = this.updateCell.bind(this);
  }

  startGame() {
    this.setState({
      endGrid: plantBombs(this.state.endGrid, Math.floor(this.size * 1.25)),
    });
    console.log(this.state);
  }
  restartGame() {
    this.setState({
      endGrid: createBoard(this.size),
    });
    console.log(this.state);
  }

  updateCell(row, col, val) {
    console.log(`row: ${row}, col index: ${col}`);
    this.setState({
        if (val)
    })
  }

  render() {
    return (
      <div id="graph">
        <table>
          <tbody>
            {this.state.endGrid.map((row, rowIdx) => (
              <tr key={rowIdx} row={row} rowidx={rowIdx}>
                {row.map((col, colIdx) => (
                  <td
                    key={colIdx}
                    value={col}
                    onClick={() => this.updateCell(rowIdx, colIdx, col)}
                    colidx={colIdx}
                  >
                    {col === 0 ? '' : col}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={this.startGame}>Start Game</button>
        <button onClick={this.restartGame}>Restart Game</button>
      </div>
    );
  }
}
