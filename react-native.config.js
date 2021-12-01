module.exports = {
  dependency: {
    hooks: {
      prelink: "node ./node_modules/rn-fetch-blob-new/scripts/prelink.js",
    },
  },
};
