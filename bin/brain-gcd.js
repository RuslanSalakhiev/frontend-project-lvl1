#!/usr/bin/env node
import { startGame } from '../src/index.js';
import getQuestionAnswerFunc from '../games/brain-gcd-src.js';

const gameName = 'brainGCD';
const gameRules = 'Find the greatest common divisor of given numbers.';
const gameQuestioningFunc = getQuestionAnswerFunc;

startGame(gameName, gameRules, gameQuestioningFunc);
