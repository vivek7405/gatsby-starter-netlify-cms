import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Moment from 'react-moment'
import '../assets/blog-roll.scss'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    // return (
    //   <div id="blog-div" class="section is-news">
    //     <div class="news-grid">
    //       <div class="news-card is-default is-inverted">
    //         <span class="tag category city">
    //           City Life
    //         </span>
    //         <iframe width="100%"
    //           src="https://www.youtube.com/embed/J0PtGdp-Cgs?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
    //           allowfullscreen allow="autoplay">
    //         </iframe>
    //         <div class="news-content">
    //           <h3 class="news-title">City finished rebuilding Callahan Street.</h3>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid de Pythagora? At iam decimum annum in
    //           spelunca iacet.
    //             </p>
    //           <div class="button-wrap">
    //             <a class="button is-solid grey-button raised">Read More</a>
    //             <div class="actions">
    //               <p>a day ago</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // )

    return (
      <div>
        <div id="blog-div" class="section is-news">
          <div class="news-grid">
            {posts &&
              posts.map(({ node: post }) => (
                // <div class="news-card is-default is-inverted">
                <div
                  className={`news-card is-default ${
                    post.frontmatter.featuredpost ? 'is-inverted' : ''
                    }`}
                >
                  {/* <iframe width="100%"
                    src="https://www.youtube.com/embed/J0PtGdp-Cgs?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                    allowfullscreen allow="autoplay">
                  </iframe> */}
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                      <div class="category">
                        {post.frontmatter.tags?.map(tag =>
                          <span class="tag mr-1">
                            {tag}
                          </span>
                        )}
                      </div>
                    </div>
                  ) : null}
                  <div class="news-content">
                    <h3 class="news-title">
                      <Link
                        className="news-title"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                      <span className="subtitle is-size-6 is-block">
                        <Moment date={post.frontmatter.date}
                          fromNow ago
                        /> ago
                    </span>
                    </h3>
                    <i>{post.excerpt}</i>
                    <div class="button-wrap">
                      <Link className="button is-solid grey-button raised" to={post.fields.slug}>
                        Read More
                      </Link>
                      {/* <a class="button is-solid grey-button raised">Read More</a> */}
                      <div class="actions">
                        {/* <p>a day ago</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    )

    // return (
    //   <div className="columns is-multiline">
    //     {posts &&
    //       posts.map(({ node: post }) => (
    //         <div className="is-parent column is-4" key={post.id}>
    //           <article
    //             className={`blog-list-item tile is-child box notification ${
    //               post.frontmatter.featuredpost ? 'is-featured' : ''
    //               }`}
    //           >
    //             <header>
    //               {post.frontmatter.featuredimage ? (
    //                 <div className="featured-thumbnail">
    //                   <PreviewCompatibleImage
    //                     imageInfo={{
    //                       image: post.frontmatter.featuredimage,
    //                       alt: `featured image thumbnail for post ${post.frontmatter.title}`,
    //                     }}
    //                   />
    //                 </div>
    //               ) : null}
    //               <p className="post-meta">
    //                 <Link
    //                   className="title has-text-primary is-size-4"
    //                   to={post.fields.slug}
    //                 >
    //                   {post.frontmatter.title}
    //                 </Link>
    //                 <span> &bull; </span>
    //                 <span className="subtitle is-size-5 is-block">
    //                   {post.frontmatter.date}
    //                 </span>
    //               </p>
    //             </header>
    //             <p>
    //               {post.excerpt}
    //               <br />
    //               <br />
    //               <Link className="button" to={post.fields.slug}>
    //                 Keep Reading →
    //                   </Link>
    //             </p>
    //           </article>
    //         </div>
    //       ))
    //     }
    //   </div>
    // )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                tags
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
