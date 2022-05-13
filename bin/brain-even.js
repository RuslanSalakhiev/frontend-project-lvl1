#!/usr/bin/env node
import { startGame } from '../src/index.js';
import getQuestionAnswerFunc from '../games/brain-even-src.js';

const gameName = 'brainEven';
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';
const gameQuestioningFunc = getQuestionAnswerFunc;

startGame(gameName, gameRules, gameQuestioningFunc);
