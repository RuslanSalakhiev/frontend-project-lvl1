#!/usr/bin/env node
import { startGame } from '../src/index.js';

const gameName = 'brainProgression';
const gameRules = 'What number is missing in the progression?';

startGame(gameName, gameRules);
