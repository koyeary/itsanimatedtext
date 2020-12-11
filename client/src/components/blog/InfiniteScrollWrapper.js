import React, { useState, useEffect, Fragment } from 'react';
import Blog from './Blog';

const InfiniteScrollWrapper = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
if (isBottom) {
    console.log('bottom');
}
  }, [isBottom]);

  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setIsBottom(true);
    }
  };

  return (
    <Fragment>
      <Blog />
    </Fragment>
  );
};

export default InfiniteScrollWrapper;
