import { join } from 'path';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { GraphQLSchema } from 'graphql';

export function generateMergedSchema(): GraphQLSchema {
  const typeDefsArray = loadFilesSync(join(import.meta.dirname, './graphql/*.graphql'));
  const resolversArray = loadFilesSync(join(import.meta.dirname, '../resolvers/*-resolvers.*'));
  const mergedTypeDefs = mergeTypeDefs(typeDefsArray);
  const mergedResolvers = mergeResolvers(resolversArray);
  return makeExecutableSchema({
    typeDefs: mergedTypeDefs,
    resolvers: mergedResolvers,
  });
}

const schema = generateMergedSchema();
console.log('Schema successfully stitched and generated!');
