#!/usr/bin/env node

import minimist from 'minimist'
import { roll } from "../lib/roll.js";

const args = minimist(process.argv.slice(2))

var sides = args.sides
var dice = args.dice
var rolls = args.rolls

if (typeof sides == 'undefined') { sides = 6 }
if (typeof dice == 'undefined') { dice = 2 }
if (typeof rolls == 'undefined') { rolls = 1 }

var data = roll(sides, dice, rolls);

console.log(data);
