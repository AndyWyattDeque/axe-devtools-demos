import React from 'react'
import { Main, FieldWrap } from '@deque/cauldron-react'
import { Link } from 'react-router-dom'
import blogData from '../blog-data'

const Blog = () => {
  return (
    <Main id="main-content" aria-labelledby="main-heading" tabIndex={-1}>
      <h1 id="main-heading">Awesome Food Blog</h1>
      {blogData.map((blog) => (
        <FieldWrap key={blog.id}>
          <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
        </FieldWrap>
      ))}
      <p>
        <em>
          Don&apos;t like this blog? Don&apos;t blame us, ChatGTP generated the
          content!
        </em>
      </p>
    </Main>
  )
}

export default Blog
