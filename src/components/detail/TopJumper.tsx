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
    return () => document.removeEventListener('scroll', listener);// 组件销毁后，取消监听
  }, [show])

  return show ? (
    <div className="top-jumper" onClick={() => window.scrollTo(0, 0)}>
      <span className="text"> </span>
    </div>) : null;
}

export default TopJumper;
//浏览器滚动事件调用频繁，会造成一定的性能问题。