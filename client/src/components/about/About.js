import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Press from './Press';
import { Col, Row } from 'react-bootstrap';

const About = () => {
  //tumblr assets
  //text with formatting
  //modals for press
  //include contact and faq links

  return (
    <Fragment>
      <Row className='align-middle'>
        <Col md={3} lg={4} />
        <Col md={6} lg={4}>
          <img
            src='https://64.media.tumblr.com/ba67a6e2f1dd3311844bf20816e54f05/tumblr_inline_n6p90dTTBG1rtx1y2.gif'
            alt='catherine'
          />
        </Col>
        <Col md={3} />
      </Row>
      <Row>
        <Col md={3} />
        <Col md={6}>
          <h3>But call me Cat.</h3>

          <p>
            <Link>This is what I look like.</Link> This blog began in fall 2012.
            I was inspired by the 3D text gifs from old Geocities sites and
            realized that I could make AnimatedText by using{' '}
            <Link>Xara 3d Maker.</Link> I started accepting requests not long
            after that and the rest is history.{' '}
          </p>

          <p>
            I love getting to know the people who follow me so{' '}
            <Link>message me anytime.</Link>
          </p>

          <p>Hobbies: Yearning</p>
          <p>Location: California</p>

          <p>AnimatedText Press</p>
        </Col>
        <Col md={3} lg={4} />
      </Row>
      <Row className='align-middle py-5'>
        <Col className='text-center' sm={4}>
          <Press id='nyt' />
        </Col>
        <Col className='text-center' sm={4}>
          <Press id='gawker' />
        </Col>
        <Col className='text-center' sm={4}>
          <Press id='buzzFeed' />
        </Col>
      </Row>
      <Row className='align-middle py-5'>
        <Col className='text-center' sm={3} />
        <Col className='text-center' sm={3}>
          <Press id='sportsIll' />
        </Col>
        <Col className='text-center' sm={3}>
          <Press id='gawker' />
        </Col>
        <Col className='text-center' sm={3} />
      </Row>
    </Fragment>
  );
};

export default About;
