#!/usr/bin/env node
import { startGame } from '../src/index.js';
import getQuestionAnswerFunc from '../games/brain-prime-src.js';

const gameName = 'brainPrime';
const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameQuestioningFunc = getQuestionAnswerFunc;

startGame(gameName, gameRules, gameQuestioningFunc);
