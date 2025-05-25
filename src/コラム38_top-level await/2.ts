import { readFile } from 'fs/promises';

const fooContent = await readFile('uhyo.txt', 'utf8');

export const bar = fooContent + fooContent;
