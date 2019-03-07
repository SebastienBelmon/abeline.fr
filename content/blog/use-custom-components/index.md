---
title: Utiliser des components personalisée en markdown
date: "2019-03-08"
tags: ['Programmation', 'GatsbyJS']
---

Si vous avez lu mon [article précédent](/loi-weibull), vous avez du remarquer le graphique intéractif pour *"essayer"* la distribution de la loi de Weibull. Et pourtant, en utilisant **GatsbyJS**, j'écris mes posts en **Markdown** et on ne peut pas normalement créer des graphique en markdown. Je vous propose donc un mini tuto pour pouvoir utiliser vos propres components directement dans vos fichier .md.

###### ./src/templates/blog-post.js
```jsx{24}
import rehypeReact from 'rehype-react';
import Weibull from '../components/Weibull';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'interactive-weibull-graph': Weibull,
  },
}).Compiler;

// votre component ici...

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

> Article en cours d'écriture...