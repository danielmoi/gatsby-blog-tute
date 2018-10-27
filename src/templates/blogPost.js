import React from 'react';
import { graphql } from 'gatsby';

const Template = props => {
  const { title } = props.data.markdownRemark.frontmatter;
  const { html } = props.data.markdownRemark;
  return (
    <div>
      <h1>{title}</h1>
      <div
        className="blogpost"
        dangerouslySetInnerHTML={{ __html: html }}
        style={{
          fontFamily: 'avenir'
        }}
      />

    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template;