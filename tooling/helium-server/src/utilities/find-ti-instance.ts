import path from 'path';
import fs from 'fs';

export default async function findTiInstance(instanceName: string) {
  const configPath = `${path.join(process.cwd(), 'ti-config.json')}`;
  const configJson = fs.readFileSync(configPath, 'utf8');
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
