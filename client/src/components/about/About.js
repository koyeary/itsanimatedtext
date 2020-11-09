import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const About = () => {
  //tumblr assets
  //text with formatting
  //modals for press
  //include contact and faq links

  return (
    <Fragment>
      <Row className='align-middle'>
        <Col medium={3} large={4} />
        <Col medium={6} large={4}>
          <img
            src='https://64.media.tumblr.com/ba67a6e2f1dd3311844bf20816e54f05/tumblr_inline_n6p90dTTBG1rtx1y2.gif'
            alt='catherine'
          />
        </Col>
        <Col medium={3} />
      </Row>
      <Row>
        <Col medium={3} />
        <Col medium={6}>
          <h3>But call me Cat.</h3>

          <p>
            This is what I look like. This blog began in fall 2012. I was
            inspired by the 3D text gifs from old Geocities sites and realized
            that I could make AnimatedText by using Xara 3d Maker. I started
            accepting requests not long after that and the rest is history.{' '}
          </p>

          <p>
            I love getting to know the people who follow me so message me
            anytime.
          </p>

          <p>Hobbies: Yearning</p>
          <p>Location: California</p>

          <p>AnimatedText Press</p>
        </Col>
        <Col medium={3} large={4} />
      </Row>
      <Row className='align-middle'>
        <Col className='text-center' small={4}>
          <Link to='press' />
          Press
        </Col>
        <Col className='text-center' small={4}>
          <Link to='press' />
          Press
        </Col>
        <Col className='text-center' small={4}>
          <Link to='press' />
          Press
        </Col>
      </Row>
    </Fragment>
  );
};

export default About;
