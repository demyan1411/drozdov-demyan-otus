import path from 'path';
import { readFile } from 'node:fs/promises';

export default async function loadJSON (file) {
  const filePath = path.resolve('./', file);

  try {
    const json = JSON.parse(
      await readFile(new URL(filePath, import.meta.url), { encoding: 'utf8' })
    );

    return json;
  } catch (error) {
    throw new Error(error);
  }
}
