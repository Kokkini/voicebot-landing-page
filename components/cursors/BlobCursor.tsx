// @ts-nocheck
'use client';
import { useTrail, animated } from '@react-spring/web';
import { useRef, useEffect, useCallback } from 'react';

import './BlobCursor.css';

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const BlobCursor = ({ blobType = 'circle', fillColor = '#fegefe' }) => {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));

  const handleMove = (e) => {
    console.log('Mouse move detected', e.clientX, e.clientY);
    api.start({ xy: [e.clientX, e.clientY] });
  };

  useEffect(() => {
    console.log('Setting up mouse move listener');
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, []);

  return (
    <div className='container'>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id='blob'>
          <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='30' />
          <feColorMatrix
            in='blur'
            values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10'
          />
        </filter>
      </svg>
      <div className='main'>
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{
              transform: props.xy.to(trans),
              borderRadius: blobType === 'circle' ? '50%' : '0%',
              backgroundColor: fillColor,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BlobCursor;