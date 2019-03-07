# [abeline.fr](https://abeline.fr/)

Abéliné est mon blog perso sur des sujets divers comme les maths (algèbre linéaire, probabilités), la programmation web (react, gatsbyJS) et tous ce qui me passe par la tête.

Le site est créée à partir de [Gatsby blog starter](https://github.com/gatsbyjs/gatsby-starter-blog). Syntax theme based on [Sarah Drasner's Night Owl](https://github.com/sdras/night-owl-vscode-theme/), également inspiré de [overreacted.io](https://overreacted.io/).

## Spécificité sur les fichiers .md

Les fonctionnalité sont toutes décrites sur le site [gatsby using remark](https://using-remark.gatsbyjs.org/)

Notamment, dans les fichiers markdown *(.md)*, on peut : 

- Définir des blocs de codes avec *\`\`\`*
- Définir le language en utilisant *\`\`\`jsx*
- Définir les lignes à surligner entre les accolade et séparé par une virgule `{1,2,5,6}`
- Créer ses propres *custom component* à utiliser dans le markdown : 

###### ./src/templates/blog-post.js
```jsx
// ...
import rehypeReact from "rehype-react";
import Counter from "../components/Counter";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "interactive-counter": Counter,
  },
}).Compiler;

// create and export the template component...
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

###### On l'utilise ensuite avec :

\<interactive-counter>\</interactive-counter>
