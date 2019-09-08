import React from 'react';
import { StyledCell } from './Styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

import './Styles/StyledCell.js';

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

export default React.memo(Cell);