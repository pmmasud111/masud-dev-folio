const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*",
        pathname: "**",
      },
    ],
  },
};
