import React from 'react';
import { graphql, Link } from 'gatsby';

const AllTagsTemplate = ({ data, pageContext }) => {
  console.log('🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩');
  console.log('data:', data);
  console.log('pageContext:', pageContext);
  return (
    <div>
      <div>
        tags here
      </div>
    </div>
  )
}

export default AllTagsTemplate;