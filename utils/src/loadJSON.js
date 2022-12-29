import path from 'path';
// import { readFile } from 'node:fs/promises';

export default async function loadJSON (file) {
  const filePath = path.resolve('./', file);

  try {
    const { default: jsonData } = await import(filePath, {
      assert: {
        type: 'json'
      },
    });

    // const jsonData = JSON.parse(
    //   await readFile(new URL(filePath, import.meta.url), { encoding: 'utf8' })
    // );

    return jsonData;
  } catch (error) {
    throw new Error(error);
  }
}
