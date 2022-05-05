#!/usr/bin/env node
import { startGame } from '../src/index.js';

const gameName = 'brainPrime';
const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

startGame(gameName, gameRules);
