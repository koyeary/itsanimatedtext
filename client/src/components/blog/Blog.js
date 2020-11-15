import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import { Col, Row } from 'react-bootstrap';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    searchTumblr();
  });

  async function searchTumblr() {
    //const num = Math.floor(Math.random() * 49 + 1);
    const queryURL =
      'https://api.tumblr.com/v2/blog/animatedtext.tumblr.com/posts?api_key=6zhnqA40ToF48oXKQFOVWRNfxfSTCFpO8xAJzWqUQOY3E1NOYj&limit=50';

    try {
      const res = await axios.get(queryURL);
      const tumblr = res.data;

      setPosts(tumblr.response.posts);
    } catch (err) {
      console.error(err);
    }
  }

  const handlePosts = () => {
    const items = posts.map((item, i) => {
      if (!item.photos) {
        return console.log(item.summary);
      } else if (item.photos) {
        const photo = item.photos[0].alt_sizes[0].url;
        const notes = item.note_count;
        const source = item.source_title;
        const sourceUrl = item.source_url;
        const tags = item.tags.map((tag) => (
          <span className='px-2'>{`#${tag}`}</span>
        ));

        return (
          <div>
            <Row className='my-5'>
              <Col sm={3} xs={12}></Col>
              <Col sm={6} xs={12}>
                <div
                  className='card blog'
                  style={{ borderRadius: 7, borderColor: '#f8f7fd' }}
                >
                  <div className='card-img-top'>
                    <img className='w-100' src={photo} alt='tumblr post' />
                  </div>
                  <div className='card-section p-3'>
                    Source:
                    <Link to={sourceUrl} className='pl-2 pr-3 source'>
                      {source}
                    </Link>{' '}
                    {tags}
                    <Col className='pt-3 pb-2' style={{ fontWeight: 600 }}>
                      {notes}
                      <div className='float-right'>
                        <i class='fa fa-ellipsis-h' aria-hidden='true'></i>
                        <i class='fa fa-retweet' aria-hidden='true'></i>
                        <i class='fa fa-heart-o' aria-hidden='true'></i>
                      </div>
                    </Col>
                    <Row />
                  </div>
                </div>
              </Col>
              <Col sm={3} xs={12}></Col>
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
      <Footer/>
    </div>

  );
};

export default Blog;
