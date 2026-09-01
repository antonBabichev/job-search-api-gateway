import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/graphql/types.graphql',
  generates: {
    './src/types/graphql-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        useIndexSignature: true,
        emitLegacyCommonJSImports: false,
        useTypeImports: true, 
      },
    },
  },
};
export default config;
