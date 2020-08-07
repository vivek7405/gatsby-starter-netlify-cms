import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import './blog-roll.scss'

class BlogRoll extends React.Component {
  getNewsHeaderDiv = () => {
    return (
      <div id="news-layout" class="news-header" style={{ position: 'relative' }}>
        <div id="top-1" class="news-hero-wrapper has-background-image is-accent fadeIn"
          data-background="assets/img/demo/news/bg6.jpg">
          <div class="overlay-layer">
            <div class="text-layer">
              <div class="hero-text">
                <span class="tag">Chat</span>
                <span class="tag">Expert</span>
                <h2>Ask Us!</h2>
                <p>With several product alternatives out there in the market, it's really difficult to choose the
                right one for you which offers the best value for money. Click the Chat button below and get
                        help from our experts in choosing the best!</p>
                <div class="cta-wrap">
                  <a class="button">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="top-2" class="news-hero-wrapper has-background-image is-accent fadeIn is-hidden"
          data-background="assets/img/demo/news/bg2.jpg">
          <div class="overlay-layer">
            <div class="text-layer">
              <div class="hero-text">
                <span class="tag">Why us?</span>
                <h2>We help you choose the best!</h2>
                <p>We have technology experts having product specific knowledge to help
                        you make the right buying dicision.</p>
                <div class="cta-wrap">
                  <a class="button">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="top-3" class="news-hero-wrapper has-background-image is-primary fadeIn is-hidden"
          data-background="assets/img/demo/news/bg3.jpg">
          <div class="overlay-layer">
            <div class="text-layer">
              <div class="hero-text">
                <span class="tag">Blockchain</span>
                <span class="tag">Tech</span>
                <h2>How saturation killed the Market</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboro autem non sine causa; Si longus,
                levis. Ad eos igitur
                        converte.</p>
                <div class="cta-wrap">
                  <a class="button">Read More</a>
                  <a class="button">Save</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="top-4" class="news-hero-wrapper has-background-image is-accent fadeIn is-hidden"
          data-background="assets/img/demo/news/bg4.jpg">
          <div class="overlay-layer">
            <div class="text-layer">
              <div class="hero-text">
                <span class="tag">Health</span>
                <span class="tag">Food</span>
                <h2>5 Steps to Green Heaven</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboro autem non sine causa; Si longus,
                        levis.</p>
                <div class="cta-wrap">
                  <a class="button">Read More</a>
                  <a class="button">Save</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="top-5" class="news-hero-wrapper has-background-image is-red fadeIn is-hidden"
          data-background="assets/img/demo/news/bg5.jpg">
          <div class="overlay-layer">
            <div class="text-layer">
              <div class="hero-text">
                <span class="tag">Movies</span>
                <h2>Why are Zombies so popular?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboro autem non sine causa; Si longus,
                        levis.</p>
                <div class="cta-wrap">
                  <a class="button">Read More</a>
                  <a class="button">Save</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="top-6" class="news-hero-wrapper has-background-image is-accent fadeIn is-hidden"
          data-background="assets/img/demo/news/bg1.jpg">
          <div class="overlay-layer">
            <div class="text-layer">
              <div class="hero-text">
                <span class="tag">Politics</span>
                <span class="tag">International</span>
                <h2>Pdt. Obama enters in History</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboro autem non sine causa; Si longus,
                levis. Ad eos igitur
                        converte te, quaeso.</p>
                <div class="cta-wrap">
                  <a class="button">Read More</a>
                  <a class="button">Save</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="news-hero-menu">
          <div class="stories">
            <a data-story="top-1" class="story is-accent is-active">
              <div class="avatar-wrap">
                <img src="assets/img/avatars/leana.jpg" data-user-popover="15" alt="" />
              </div>
              <div class="meta">
                <span>Chat</span>
                <span>Ask Us!</span>
                <span>By Leana Marks, Apr 22, 2019</span>
              </div>
            </a>
            <a data-story="top-2" class="story is-accent">
              <div class="avatar-wrap">
                <img src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/ken.jpg" alt=""
                  data-user-popover="14" />
              </div>
              <div class="meta">
                <span>Why Us?</span>
                <span>We help you choose the best!</span>
                <span>By Ken Rogers, Apr 19, 2019</span>
              </div>
            </a>
            <a data-story="top-3" class="story is-primary">
              <div class="avatar-wrap">
                <img src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/aline.jpg"
                  data-user-popover="16" alt="" />
              </div>
              <div class="meta">
                <span>Blockchain</span>
                <span>How saturation killed the Market</span>
                <span>By Aline Cambell, Apr 22, 2019</span>
              </div>
            </a>
            <a data-story="top-4" class="story is-accent">
              <div class="avatar-wrap">
                <img src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/michael.jpg"
                  data-user-popover="17" alt="" />
              </div>
              <div class="meta">
                <span>Health</span>
                <span>5 Steps to Green Heaven</span>
                <span>By Mike Donovan, Apr 21, 2019</span>
              </div>
            </a>
            <a data-story="top-5" class="story is-red">
              <div class="avatar-wrap">
                <img src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/george.jpg"
                  data-user-popover="18" alt="" />
              </div>
              <div class="meta">
                <span>Movies</span>
                <span>Why are Zombies so popular?</span>
                <span>By George A. Romero, Apr 20, 2019</span>
              </div>
            </a>
            <a data-story="top-6" class="story is-accent">
              <div class="avatar-wrap">
                <img src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/ken.jpg" alt=""
                  data-user-popover="14" />
              </div>
              <div class="meta">
                <span>Politics</span>
                <span>Pdt. Obama enters in History</span>
                <span>By Ken Rogers, Apr 23, 2019</span>
              </div>
            </a>
          </div>
        </div>

        <div class="arrow-down" style={{ width: '100%', textAlign: 'center', position: 'absolute', bottom: 0, zIndex: 10 }}>
          <a class="action is-like" onclick="pageDown()">
            <i data-vi="angle-bottom" data-vi-size="60" data-vi-primary="#FFFFFF" data-vi-accent="#FFFFFF"></i>
          </a>
        </div>
      </div >
    )
  }

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
      // <div className="columns is-multiline">
      <div>
        {/* {this.getNewsHeaderDiv()} */}
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
                  <span class="tag category city">
                    City Life
                  </span>
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
                    </div>
                  ) : null}
                  <div class="news-content">
                    {/* <h3 class="news-title">A beginners’ guide to brewing with Chemex</h3> */}
                    <h3>
                      <Link
                        className="news-title"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </h3>
                    {/* <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                  </p> */}
                    <p>
                      {post.excerpt}
                    </p>
                    <div class="button-wrap">
                      <a class="button is-solid grey-button raised">Read More</a>
                      {/* <div class="actions">
                      <p>a day ago</p>
                    </div> */}
                    </div>
                  </div>
                </div>
                // <div className="is-parent column is-6" key={post.id}>
                //   <article
                //     className={`blog-list-item tile is-child box notification ${
                //       post.frontmatter.featuredpost ? 'is-featured' : ''
                //     }`}
                //   >
                //     <header>
                //       {post.frontmatter.featuredimage ? (
                //         <div className="featured-thumbnail">
                //           <PreviewCompatibleImage
                //             imageInfo={{
                //               image: post.frontmatter.featuredimage,
                //               alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                //             }}
                //           />
                //         </div>
                //       ) : null}
                //       <p className="post-meta">
                //         <Link
                //           className="title has-text-primary is-size-4"
                //           to={post.fields.slug}
                //         >
                //           {post.frontmatter.title}
                //         </Link>
                //         <span> &bull; </span>
                //         <span className="subtitle is-size-5 is-block">
                //           {post.frontmatter.date}
                //         </span>
                //       </p>
                //     </header>
                //     <p>
                //       {post.excerpt}
                //       <br />
                //       <br />
                //       <Link className="button" to={post.fields.slug}>
                //         Keep Reading →
                //       </Link>
                //     </p>
                //   </article>
                // </div>            
              ))}
          </div>
        </div>
      </div>
    )
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
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
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
