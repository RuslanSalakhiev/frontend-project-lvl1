#!/usr/bin/env node
import { startGame } from '../src/index.js';
import getQuestionAnswerFunc from '../games/brain-progression-src.js';

const gameName = 'brainProgression';
const gameRules = 'What number is missing in the progression?';
const gameQuestioningFunc = getQuestionAnswerFunc;

startGame(gameName, gameRules, gameQuestioningFunc);
