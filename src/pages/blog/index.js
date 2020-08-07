import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
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
                <img src="https://via.placeholder.com/150x150" data-demo-src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/leana.jpg" data-user-popover="15" alt="" />
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
    return (
      <Layout>
        {this.getNewsHeaderDiv()}
        <BlogRoll />
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section> */}
      </Layout>
    )
  }
}
