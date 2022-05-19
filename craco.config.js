const { addAfterLoader, loaderByName } = require("@craco/craco");
const remarkGfm = import("remark-gfm");
const remarkFrontmatter = import("remark-frontmatter");

module.exports = {
  webpack: {
    configure(webpackConfig) {
      addAfterLoader(webpackConfig, loaderByName("babel-loader"), {
        test: /\.mdx?$/,
        loader: require.resolve("@mdx-js/loader"),
        options: { remarkPlugins: [remarkGfm, remarkFrontmatter] },
      });
      return webpackConfig;
    },
  },
};
