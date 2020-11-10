import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import InfiniteScroll from 'react-infinite-scroller';
import { Col, Row } from 'react-bootstrap';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const notes = '595 notes';
  const source = 'animatedtext';
  const tags = '#green #gif #animatedtext #wordart #transparent #prismhibiscusroesmary'

  useEffect(() => {
    searchTumblr();
  });

  async function searchTumblr() {
    //const num = Math.floor(Math.random() * 49 + 1);
    const queryURL =
      'https://api.tumblr.com/v2/blog/animatedtext.tumblr.com/posts?api_key=6zhnqA40ToF48oXKQFOVWRNfxfSTCFpO8xAJzWqUQOY3E1NOYj';

    try {
      const res = await axios.get(queryURL);
      const tumblr = res.data;

      setPosts(tumblr.response.posts);
      console.log(tumblr.response.posts);
    } catch (err) {
      console.error(err);
    }
  }

  const handlePosts = () => {
    const items = posts.map((item, i) => {
      let photo;
      if (!item.photos) {
        return console.log(item.summary);
        /*             <div>
              {item.summary}
            </div> */
      } else if (item.photos) {
        photo = item.photos[0].alt_sizes[0].url;

        return (
          <div>
            <Row className='my-5'>
              <Col sm={3} lg={4}></Col>
              <Col sm={6} lg={4}>
                <div
                  className='card'
                  style={{ borderRadius: 7, borderColor: '#f8f7fd' }}
                >
                  <div className='card-img-top'>
                  <img className="w-100" src={photo} alt='tumblr post'/>
                  </div>
                  <div className='card-section'>
                    Source:{source} {tags}
                    <Col className="pt-1 pb-2" style={{ fontWeight: 600 }}>
                    {notes}
                      <div className='float-right'>
                      <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                        <i class="fa fa-retweet" aria-hidden="true"></i>
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                    </Col>
                    <Row/>
                  </div>
                </div>
              </Col>
              <Col sm={3} lg={4}></Col>
            </Row>
          </div>
        );
      }
    });

    return <div>{items}</div>;
  };

  return (
    <div>
      <h1>Blog</h1>
      <div>{handlePosts()}</div>
    </div>
  );
};

export default Blog;
