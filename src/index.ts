import { ApolloServer } from 'apollo-server'
import models from './models'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/schema'
import connectDB from './config/db'

connectDB()

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }: any) => ({ req, models })
})

// The `listen` method launches a web server.
server
  .listen({
    port: process.env.PORT || 4000
  })
  .then(({ url }: { url: string }) => {
    console.log(`server is running at ${url}`)
  })
  .catch((err: any) => console.log('server is down: ', err))
