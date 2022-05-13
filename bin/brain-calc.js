#!/usr/bin/env node
import { startGame } from '../src/index.js';
import getQuestionAnswerFunc from '../games/brain-calc-src.js';

const gameName = 'brainCalc';
const gameRules = 'What is the result of the expression?';
const gameQuestioningFunc = getQuestionAnswerFunc;

startGame(gameName, gameRules, gameQuestioningFunc);
