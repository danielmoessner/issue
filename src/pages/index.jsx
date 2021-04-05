import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

function index({ data }) {
  const page = data.pagesYaml;

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <GatsbyImage
        className="w-96"
        image={page.image.childImageSharp.gatsbyImageData}
        alt="bug report"
      />
    </div>
  );
}

index.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default index;

export const query = graphql`
  {
    pagesYaml(slug: { eq: "home" }) {
      id
      image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  }
`;
