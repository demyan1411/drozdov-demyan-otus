import path from 'path';
import { readFile } from 'fs/promises';

export default async function loadJSON (file) {
  const filePath = path.resolve('./', file);

  try {
    // https://nodejs.org/dist/latest-v16.x/docs/api/esm.html#no-json-module-loading
    const json = JSON.parse(
      await readFile(new URL(filePath, import.meta.url))
    );

    return json;
  } catch (error) {
    throw new Error(error);
  }
}
