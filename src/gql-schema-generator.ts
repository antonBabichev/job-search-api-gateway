import { join } from 'path';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { GraphQLSchema } from 'graphql';

export function generateMergedSchema(): GraphQLSchema {
  // 1. Find and load all schema definition files (e.g., .graphql or .gql)
  const typeDefsArray = loadFilesSync(join(import.meta.dirname, './graphql/*.graphql'));

  // 2. Find and load all resolver files (e.g., user.resolvers.ts or product.resolvers.ts)
  const resolversArray = loadFilesSync(join(import.meta.dirname, '../resolvers/*-resolvers.*'));

  // 3. Merge the type definitions into a single DocumentNode
  const mergedTypeDefs = mergeTypeDefs(typeDefsArray);

  // 4. Merge the resolver objects into a single resolver map
  const mergedResolvers = mergeResolvers(resolversArray);

  // 5. Create and return the final executable schema
  return makeExecutableSchema({
    typeDefs: mergedTypeDefs,
    resolvers: mergedResolvers,
  });
}

// Example usage:
const schema = generateMergedSchema();
console.log('Schema successfully stitched and generated!');
