import { ServiceToolProvider, type ProviderOptions } from './provider.js';
export { AceToolError } from './provider.js';
export type { ProviderOptions as SeedanceToolProviderOptions } from './provider.js';

/** Seedance video generation, image-to-video, and task queries through Ace Data Cloud. */
export class SeedanceToolProvider extends ServiceToolProvider {
  constructor(options: ProviderOptions = {}) {
    super({
      slug: 'seedance',
      name: 'Seedance by Ace Data Cloud',
      description: 'Seedance text-to-video, image-to-video, and same-task result queries.',
      endpoint: 'https://seedance.mcp.acedata.cloud/mcp',
      packageName: '@acedatacloud/mastra-seedance',
    }, options);
  }
}
