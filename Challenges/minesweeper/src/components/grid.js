import React from 'react';
import { createBoard, plantBombs, countNeighbors } from '../functions';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.size = this.props.size;
    this.state = {
      grid: createBoard(this.size),
    };
  }

  render() {
    return (
      <div id="graph">
        <h1>RENDER.</h1>
      </div>
    );
  }
}
