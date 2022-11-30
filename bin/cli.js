#!/usr/bin/env node

import minimist from 'minimist'
import { roll } from "../lib/roll.js";

const args = minimist(process.argv.slice(2))

var data = roll(args.sides, args.dice, args.rolls);

console.log(data);
