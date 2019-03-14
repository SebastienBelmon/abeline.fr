import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Erreur 404 !</h1>
        <p>
          Vous êtes arrivée sur une page qui n'existe pas (ou plus), la
          tristesse{' '}
          <span role="img" aria-label="sad crying smiley emoji">
            😢
          </span>
          .
        </p>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
