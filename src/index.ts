import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServer } from '@apollo/server';

import { generateMergedSchema } from './gql-schema-generator';

async function startServer() {
  const schema = generateMergedSchema();

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at: ${url}`);
}

startServer().catch((error) => {
  console.error('Error starting Apollo Server:', error);
});