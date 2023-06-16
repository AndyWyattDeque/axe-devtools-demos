import React from 'react'
import { Main, Icon, FieldWrap, Button } from '@deque/cauldron-react'
import { Link, useParams } from 'react-router-dom'
import blogData from '../blog-data'
import './BlogPost.css'

// display message for 4 seconds
const MESSAGE_DURATION = 4000

const BlogPost = () => {
  const { id } = useParams()
  const [showReported, setShowReported] = React.useState(false)
  const data = React.useMemo(() => {
    return blogData.find((b) => b.id === id)
  }, [id])
  const onReportOffensiveClick = () => {
    setShowReported(true)
    setTimeout(() => setShowReported(false), MESSAGE_DURATION)
  }

  return (
    <div className="Blog">
      <Main id="main-content" aria-labelledby="main-heading" tabIndex={-1}>
        {showReported && (
          <div className="Reported">
            <Icon type="caution" />
            This blog post has been reported for having offensive content. It
            will be reviewed by our team and removed if found to be offensive.
          </div>
        )}
        {data ? (
          <div>
            <div className="Blog__links">
              <Link className="Link Back" to="/blog">
                <Icon type="arrow-circle-left" />
                Back to blog
              </Link>
              <Button onClick={onReportOffensiveClick} variant="link">
                Report offensive content
              </Button>
            </div>
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
