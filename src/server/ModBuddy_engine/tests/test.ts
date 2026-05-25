import { processQueueItem } from '../main';
import {open} from 'node:fs/promises';

async function test() {
  const fileHandle1 = await open('./test_input_1.json', 'r');
  const fileContent = await fileHandle1.readFile({ encoding: 'utf-8' });
  const testInput = JSON.parse(fileContent);
  const result = await processQueueItem(testInput);
  const fileHandle2 = await open('./test_output_1.json', 'w');
  await fileHandle2.writeFile(JSON.stringify(result, null, 2), { encoding: 'utf-8' });
  await fileHandle1.close();
  await fileHandle2.close();
  
}
test();