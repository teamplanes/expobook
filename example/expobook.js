import React from 'react';
import registerExpobook, { addComponent } from 'expobook';
import Box from './components/box';
import Circle from './components/circle';

addComponent('Circle', () => <Circle />);
addComponent('Box', () => <Box />);

registerExpobook();
