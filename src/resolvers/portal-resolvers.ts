const portalResolvers = {
  Query: {
    getAllPortals: () => {
      return { name: "LinkedinJobs", url: "blah" };
    },
    getPortal: (id: string) => {
      return { name: "LinkedinJobs", url: "blah" };
    },
  },
};

export default portalResolvers;