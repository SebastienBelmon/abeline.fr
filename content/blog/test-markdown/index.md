---
title: Mon premier test
date: "2019-03-06"
# description: Ceci est une description personalisé pour le SEO et Open graph. Plutot que l'excerpt généré automatiquement.
tags: ['Mathématiques', 'Probabilités']
---

Ceci est un test pour voir les capacité du plugin `gatsby-transform-remarks` : 

```jsx{3}
import React from 'react';

const MyComponent = () => <div>Salut</div>;

export default MyComponent;
```

## KateX test

Inline equaton $a^2 + b^2 = c^2$

ou alors en mode *display*

$$
a^2 + b^2 = c^2
$$

## test cath link (interne)

[Page des lynxs](/lynx)

## Custom component

Idée récupéré de [cette page](https://using-remark.gatsbyjs.org/custom-components/) en utilisant `rehype-react` :

###### ./src/templates/blog-post.js
```jsx{2,3,5,6,7,8,9,10,24}
// ...
import rehypeReact from "rehype-react";
import Counter from "../components/Counter";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "interactive-counter": Counter,
  },
}).Compiler;

// create en export the template component...
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      htmlAst
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        description
        tags
      }
    }
  }
`;
```
