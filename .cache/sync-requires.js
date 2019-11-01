const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/RMendes/code-like-a-hero/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/RMendes/code-like-a-hero/src/pages/404.js"))),
  "component---src-pages-home-page-index-js": hot(preferDefault(require("/Users/RMendes/code-like-a-hero/src/pages/HomePage/index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/RMendes/code-like-a-hero/src/pages/index.js"))),
  "component---src-pages-news-index-js": hot(preferDefault(require("/Users/RMendes/code-like-a-hero/src/pages/News/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/RMendes/code-like-a-hero/src/templates/blog-post.js")))
}

