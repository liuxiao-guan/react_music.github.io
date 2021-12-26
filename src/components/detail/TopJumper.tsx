import React, { useEffect, useState } from 'react';
import { createThrottle } from './createThrottle';
import './TopJumper.css';

function TopJumper() {
  const [show, switchShow] = useState(false);
  useEffect(() => {
    const listener = createThrottle(() => {
      const shouldShow = window.scrollY > 300;
      if (shouldShow !== show) {
        switchShow(shouldShow)
      }
    }, 500) as EventListener;
    document.addEventListener('scroll', listener);
    return () => document.removeEventListener('scroll', listener);
  }, [show])

  return show ? (
    <div className="top-jumper" onClick={() => window.scrollTo(0, 0)}>
      <span className="text"> </span>
    </div>) : null;
}

export default TopJumper;