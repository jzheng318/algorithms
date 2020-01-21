import React from 'react';
import { createBoard, plantBombs, updateGrid, lost } from '../functions';

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
    console.log('NEW GAME');
    console.log(this.state);
  }

  async restartGame() {
    await this.setState({
      startGrid: createBoard(this.size),
      endGrid: createBoard(this.size),
    });
    console.log(this.state);
    this.startGame();
  }

  updateCell(row, col) {
    console.log(`row: ${row}, col index: ${col}`);
    let value = this.state.endGrid[row][col];
    if (value === '💣') {
      console.log('this is not a number!');
      this.setState({
        startGrid: lost(this.state.startGrid),
      });
    } else {
      this.setState({
        startGrid: updateGrid(this.state.startGrid, row, col, value),
      });
    }
  }

  render() {
    return (
      <div id="graph">
        <button onClick={this.startGame}>Start Game</button>
        <button onClick={this.restartGame}>Restart Game</button>
        <div>
          <table>
            <tbody>
              {this.state.startGrid.map((row, rowIdx) => (
                <tr key={rowIdx} row={row} rowidx={rowIdx}>
                  {row.map((col, colIdx) => (
                    <td
                      key={colIdx}
                      value={col}
                      onClick={() => this.updateCell(rowIdx, colIdx)}
                      colidx={colIdx}
                    >
                      {col === 0 ? '' : col}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
