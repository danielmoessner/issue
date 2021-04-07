import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

function index({ data }) {
  const page = data.pagesYaml;

  const queries = `
  imageBike { <br>
    childImageSharp {<br>
      blurred: gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)<br>
      dominantColor: gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)<br>
      tracedSvg: gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)<br>
      none: gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)<br>
    }<br>
  }<br>
  imageCar {<br>
    childImageSharp {<br>
      blurred: gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)<br>
      dominantColor: gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)<br>
      tracedSvg: gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)<br>
      none: gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)<br>
    }<br>
  }<br>
  `;

  return (
    <div className="min-h-screen min-w-screen grid grid-cols-2 bg-white py-32 px-10">
      <div className="flex-col flex">
        <div className="">Not working because of metadata (Orientation: LeftBottom)</div>
        <div className="inline">
          Original:
          <img className="w-96" src="/images/dsc00250.jpg" alt="orig" />
        </div>
        <div className="inline">
          BLURRED:
          <GatsbyImage
            className="w-96"
            image={page.image.childImageSharp.blurred}
            alt="bug report"
          />
        </div>
        <div className="inline">
          DOMINANT_COLOR:
          <GatsbyImage
            className="w-96"
            image={page.image.childImageSharp.dominantColor}
            alt="bug report"
          />
        </div>

        <div className="inline">
          TRACED_SVG:
          <GatsbyImage
            className="w-96"
            image={page.image.childImageSharp.tracedSvg}
            alt="bug report"
          />
        </div>
        <div className="inline">
          NONE:
          <GatsbyImage className="w-96" image={page.image.childImageSharp.none} alt="bug report" />
        </div>
      </div>
      <div className="flex-col flex">
        <div className="">Working because of normal metadata (Orientation: undefined)</div>
        <div className="inline">
          BLURRED:
          <GatsbyImage
            className="w-96"
            image={page.image2.childImageSharp.blurred}
            alt="bug report"
          />
        </div>
        <div className="inline">
          DOMINANT_COLOR:
          <GatsbyImage
            className="w-96"
            image={page.image2.childImageSharp.dominantColor}
            alt="bug report"
          />
        </div>

        <div className="inline">
          TRACED_SVG:
          <GatsbyImage
            className="w-96"
            image={page.image2.childImageSharp.tracedSvg}
            alt="bug report"
          />
        </div>
        <div className="inline">
          NONE:
          <GatsbyImage className="w-96" image={page.image2.childImageSharp.none} alt="bug report" />
        </div>
      </div>
      <div>
        <p>
          queries: <br />
          <div dangerouslySetInnerHTML={{ __html: queries }} />
        </p>
      </div>
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
          blurred: gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          dominantColor: gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
          tracedSvg: gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          none: gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
        }
      }
      image2 {
        childImageSharp {
          blurred: gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          dominantColor: gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
          tracedSvg: gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          none: gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
        }
      }
    }
  }
`;
