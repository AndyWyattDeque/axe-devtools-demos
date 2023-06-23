import React from 'react'
import {
  Main,
  FieldWrap,
  OptionsMenu,
  OptionsMenuItem,
  OptionsMenuTrigger,
  Icon,
} from '@deque/cauldron-react'
import { Link, useNavigate } from 'react-router-dom'
import blogData from '../blog-data'
import LandingPage from './LandingPage'
import arrowRight from '../img/icons/arrow-right.png'

const Blog = () => {
  const navigate = useNavigate()
  const onOptionSelectFactory = (path) => () => navigate(path)

  return (
    <Main id="main-content" aria-labelledby="main-heading" tabIndex={-1}>
      <LandingPage
        heading={'Awesome Food Blog'}
        additionalHeaderContent={
          <OptionsMenu
            trigger={(triggerProps) => (
              <OptionsMenuTrigger {...triggerProps}>
                <Icon type="kabob" label="Blog options" />
              </OptionsMenuTrigger>
            )}
          >
            <OptionsMenuItem
              role="button"
              onSelect={onOptionSelectFactory('/request-blog')}
            >
              Request new blog post
            </OptionsMenuItem>
            <OptionsMenuItem
              role="button"
              onSelect={onOptionSelectFactory('/apply-blog')}
            >
              Apply to be a writer
            </OptionsMenuItem>
            {/* <OptionsMenuItem
              role="button"
              onSelect={onOptionSelectFactory('/contact-blog-admin')}
            >
              Contact blog admin
            </OptionsMenuItem> */}
          </OptionsMenu>
        }
      >
        {blogData.map((blog) => (
          <FieldWrap key={blog.id}>
            <div>
              <img src={arrowRight} />
              <Link to={`/blog/${blog.id}`}>{blog.title}</Link>{' '}
            </div>
            <em>{Math.floor(Math.random() * (6 - 2 + 1) + 2)} minute read</em>
          </FieldWrap>
        ))}
        <p>
          <em>
            Don&apos;t like this blog? Don&apos;t blame us, ChatGTP generated
            the content!
          </em>
        </p>
      </LandingPage>
    </Main>
  )
}

export default Blog
