module.exports = {
  dependency: {
    hooks: {
      prelink:
        "node ./node_modules/rn-fetch-blob-compatible/scripts/prelink.js",
    },
  },
};
