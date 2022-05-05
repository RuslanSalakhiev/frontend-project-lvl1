#!/usr/bin/env node
import { startGame } from '../src/index.js';

const gameName = 'brainEven';
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';

startGame(gameName, gameRules);
