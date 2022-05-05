#!/usr/bin/env node
import { startGame } from '../src/index.js';

const gameName = 'brainCalc';
const gameRules = 'What is the result of the expression?';

startGame(gameName, gameRules);
