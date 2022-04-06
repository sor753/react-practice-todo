import React, { useState, useEffect } from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShoeFlag ] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShoeFlag = () => {
    setFaceShoeFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShoeFlag(true);
      } else {
        faceShowFlag && setFaceShoeFlag(false);
      }
    }
  }, [num])
  return (
    <React.Fragment>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShoeFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>（＾ω＾）</p>}
    </React.Fragment>

  );
}

export default App;
