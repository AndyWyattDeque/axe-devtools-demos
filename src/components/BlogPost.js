import React from 'react'
import { Main, Icon, FieldWrap } from '@deque/cauldron-react'
import { Link, useParams } from 'react-router-dom'
import blogData from '../blog-data'
import './BlogPost.css'

const BlogPost = () => {
  const { id } = useParams()
  const data = React.useMemo(() => {
    return blogData.find((b) => b.id === id)
  }, [id])

  return (
    <div className="Blog">
      <Main id="main-content" aria-labelledby="main-heading" tabIndex={-1}>
        {data ? (
          <div>
            <Link className="Link Back" to="/blog">
              <Icon type="arrow-circle-left" />
              Back to blog
            </Link>
            <FieldWrap>
              <h1 id="main-heading">{data.title}</h1>
              {data.content}
            </FieldWrap>
          </div>
        ) : (
          <h1 id="main-heading">Blog post not found</h1>
        )}
      </Main>
    </div>
  )
}

export default BlogPost
