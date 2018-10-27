# gatsby-starter-hello-world
Starter with the bare essentials needed for a [Gatsby](https://www.gatsbyjs.org/) site.

Install this starter (assuming Gatsby is installed) by running from your CLI:
```
gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-hello-world
```

Or [view the live demo here](https://gatsby-starter-hello-world-demo.netlify.com/).

## Running in development
`gatsby develop`

## Tutorial
https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby

## GraphQL
http://localhost:8000___graphql

```
{
  site {
    siteMetadata {
      title
      description
    }
  }
}
```
Returns this:
```
{
  "data": {
    "site": {
      "siteMetadata": {
        "title": "My Blog",
        "description": "This is my blog"
      }
    }
  }
}
```

```
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
        }
      }
    }
  }
}
```

Returns this:
```
{
  "data": {
    "allMarkdownRemark": {
      "edges": [
        {
          "node": {
            "frontmatter": {
              "title": "My First Post"
            }
          }
        },
        {
          "node": {
            "frontmatter": {
              "title": "My Third Post"
            }
          }
        },
        {
          "node": {
            "frontmatter": {
              "title": "My Second Post"
            }
          }
        }
      ]
    }
  }
}
```