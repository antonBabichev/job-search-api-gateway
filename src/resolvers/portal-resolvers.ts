import { type Portal } from '../types/graphql-types'

const portalResolvers = {
  Query: {
    getAllPortals: (): Portal[] => {
      return [{ name: "LinkedinJobs", url: "blah" }];
    },
    getPortal: (id: string): Portal => {
      return { name: "test", url: "test" };
    },
  },
};

export default portalResolvers;