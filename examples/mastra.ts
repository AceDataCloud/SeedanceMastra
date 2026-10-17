import { MastraEditor } from '@mastra/editor';
import { SeedanceToolProvider } from '../src/index.js';

// Pass editor into your existing new Mastra({ ..., editor, storage }) configuration.
// Its API key belongs to the server owner; it is not a per-user OAuth connection.
export function createSeedanceEditor(apiKey: string) {
  const seedance = new SeedanceToolProvider({ apiKey });
  const editor = new MastraEditor({ toolProviders: { seedance } });
  return { seedance, editor };
}

// Code-configured agents can use the same provider without stored-agent editing.
export async function createSeedanceTools(apiKey: string) {
  const seedance = new SeedanceToolProvider({ apiKey });
  const tools = await seedance.resolveTools(['seedance_generate_video', 'seedance_get_task']);
  return { seedance, tools };
}
