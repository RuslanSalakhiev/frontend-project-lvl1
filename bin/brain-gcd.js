#!/usr/bin/env node
import { startGame } from '../src/index.js';

const gameName = 'brainGCD';
const gameRules = 'Find the greatest common divisor of given numbers.';

startGame(gameName, gameRules);
