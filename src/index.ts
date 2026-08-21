import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServer } from '@apollo/server';

import { generateMergedSchema } from './gql-schema-generator';

async function startServer() {
  // 1. Generate your stitched schema from your files
  const schema = generateMergedSchema();

  // 2. Initialize Apollo Server by passing the schema object
  const server = new ApolloServer({
    schema, // Replaces separate 'typeDefs' and 'resolvers' properties
  });

  // 3. Start the standalone server on a designated port
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at: ${url}`);
}

startServer().catch((error) => {
  console.error('Error starting Apollo Server:', error);
});