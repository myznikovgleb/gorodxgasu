import React, { useState, useEffect } from 'react';
import './runningLine.css';



function RunningLine() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => index + 1);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textArray = ['Go', 'Gor', 'Goro', 'Gorod', 'Gorodx', 'GorodxG', 'GorodxGa', 'GorodxGas', 'GorodxGasu'];
    setText(textArray[index % textArray.length]);
  }, [index]);

  return (
    <div className="running">
      <h1 className='run'>{text}</h1>
    </div>
  );
}

export default RunningLine


