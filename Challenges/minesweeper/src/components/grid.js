import React from 'react';
import {
  createBoard,
  plantBombs,
  updateGrid,
  status,
  checkStatus,
} from '../functions';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.size = this.props.size;
    this.state = {
      action: 'mark',
      startGrid: createBoard(this.size),
      endGrid: createBoard(this.size),
      difficulty: 'easy',
    };
    this.startGame = this.startGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.updateCell = this.updateCell.bind(this);
    this.handleDifficulty = this.handleDifficulty.bind(this);
  }

  startGame() {
    let level = this.state.difficulty;
    if (level === 'easy') {
      this.setState({
        endGrid: plantBombs(this.state.endGrid, Math.floor(this.size * 1.5)),
      });
    } else if (level === 'medium') {
      this.setState({
        endGrid: plantBombs(this.state.endGrid, Math.floor(this.size * 2)),
      });
    } else if (level === 'hard') {
      this.setState({
        endGrid: plantBombs(this.state.endGrid, Math.floor(this.size * 3)),
      });
    } else {
      this.setState({
        endGrid: plantBombs(
          this.state.endGrid,
          Math.floor(this.size * (this.size / 2))
        ),
      });
    }
    console.log(this.state);
  }

  async restartGame() {
    await this.setState({
      startGrid: createBoard(this.size),
      endGrid: createBoard(this.size),
    });
    this.startGame();
  }

  updateCell(row, col) {
    let value =
      this.state.action === 'mark' ? this.state.endGrid[row][col] : '🚩';

    if (value === '💣' && this.state.action === 'mark') {
      this.setState({
        startGrid: status(this.state.startGrid, 'lost'),
      });
    } else {
      this.setState({
        startGrid: updateGrid(this.state.startGrid, row, col, value),
      });
    }

    if (checkStatus(this.state.startGrid, this.state.endGrid)) {
      this.setState({
        startGrid: status(this.state.startGrid, 'won'),
      });
    }
  }

  async handleSelect(event) {
    await this.setState({
      action: event.target.value,
    });
  }

  async handleDifficulty(event) {
    await this.setState({
      difficulty: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <select onChange={this.handleDifficulty}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
          <option value="hard">Hell</option>
        </select>
        <button onClick={this.startGame}>Start Game</button>
        <button onClick={this.restartGame}>Restart Game</button>
        <select onChange={this.handleSelect}>
          <option value="mark">Mark</option>
          <option value="flag">Flag</option>
        </select>
        <div id="graph">
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
