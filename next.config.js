module.exports = {
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });
    config.module.rules.push({ test: /\.yaml$/, use: "raw-loader" });
    return config;
  },
  images: {
    loader: "imgix",
    path: "",
  },
};
