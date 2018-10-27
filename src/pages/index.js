import React from "react"

// Get data
import { StaticQuery, graphql } from 'gatsby';
const TitleAndDescription = ({ data }) => {
  const { title, description } = data.site.siteMetadata;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

const Layout = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default Layout;

