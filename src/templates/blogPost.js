import React from 'react';
import { graphql, Link } from 'gatsby';

const Template = ({ data, pageContext }) => {
  const { prev, next } = pageContext;
  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <div>
      <h1>{title}</h1>
      <div style={{
        marginBottom: '1rem',
        fontFamily: 'avenir',
      }}>
        {next && <Link to={next.frontmatter.path} style={{ marginRight: '1rem' }}>Next</Link>}
        {prev && <Link to={prev.frontmatter.path}>Prev</Link>}
      </div>
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