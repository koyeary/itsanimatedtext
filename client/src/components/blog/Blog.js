import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import InfiniteScroll from 'react-infinite-scroller';
import { Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
  faShareSquare,
  faHeart
} from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const tumble = <FontAwesomeIcon icon={['fab, tumblr']}/>;
  const msg = <FontAwesomeIcon icon={faPaperPlane} style={{margin:3}}/>;
  const share = <FontAwesomeIcon icon={faShareSquare} style={{margin:3}} />;
  const heart = <FontAwesomeIcon icon={faHeart} style={{margin:3}} />;

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
            <Row style={{ padding: '10px;' }}>
              <Col small={3} large={4}></Col>
              <Col small={6} large={4}>
                <div
                  className='card'
                  style={{ borderRadius: 5, maxWidth: 500 }}
                >
                  <img src={photo} alt='tumblr post' />
                  <div className='card-section'>
                    {/* source and tabs in <p> */}

                    <Col>
                      {heart}

                      <div className='float-right'>
                        {tumble}
                        {msg}
                        {share}
                      </div>
                    </Col>
                  </div>
                </div>
              </Col>
              <Col small={3} large={4}></Col>
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
