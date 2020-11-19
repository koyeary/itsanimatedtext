import React from 'react';
import { Link } from 'react-router-dom';

const Overlay = ({ product, imgFile }) => {;
  return (
    <div className="overlay" style={{backgroundColor:imgFile}}>
      <div className="text">
        <Link to={`/details/${product._id}`}>details</Link>
      </div>
    </div>
  );
};

export default Overlay;
