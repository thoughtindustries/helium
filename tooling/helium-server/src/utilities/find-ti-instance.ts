import path from 'path';
import fs from 'fs/promises';

export default async function findTiInstance(instanceName: string) {
  const configPath = `${path.join(process.cwd(), 'ti-config.json')}`;
  const configJson = await fs.readFile(configPath, 'utf8');
  const { instances = [] } = JSON.parse(configJson);
  let instance = instances[0];

  if (instanceName) {
    const possibleMatch = instances.find(
      (instance: Record<string, string>) => instance.nickname === instanceName
    );
    if (possibleMatch && possibleMatch.apiKey) {
      instance = possibleMatch;
    }
  }

  return instance;
}
