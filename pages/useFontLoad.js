import { useState, useEffect } from 'react';
import FontFaceObserver from 'fontfaceobserver';

export default function useFontLoad() {
  const [font4Loaded, setFont4Loaded] = useState(false);
  const [font5Loaded, setFont5Loaded] = useState(false);
  const [font7Loaded, setFont7Loaded] = useState(false);
  const [font9Loaded, setFont9Loaded] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  useEffect(() => {
    console.log(window.localStorage.fontLoaded);
    var font4 = new FontFaceObserver('NotoSansKR', {
      weight: 400,
    });
    var font5 = new FontFaceObserver('NotoSansKR', {
      weight: 500,
    });
    var font7 = new FontFaceObserver('NotoSansKR', {
      weight: 700,
    });
    var font9 = new FontFaceObserver('NotoSansKR', {
      weight: 900,
    });
    if (true) {
      //window.localStorage.getItem('fontLoaded') !== 'true'
      console.log('아직 로드 안함');

      font4.load(null, 5000).then(function () {
        console.log('NotoSansKR400 has loaded.');
        setFont4Loaded(true);
      });
      font5.load(null, 5000).then(function () {
        console.log('NotoSansKR500 has loaded.');
        setFont5Loaded(true);
      });
      font7.load(null, 5000).then(function () {
        console.log('NotoSansKR700 has loaded.');
        setFont7Loaded(true);
      });
      font9.load(null, 5000).then(function () {
        console.log('NotoSansKR900 has loaded.');
        window.localStorage.setItem('fontLoaded', 'true');
        setFont9Loaded(true);
      });
    } else {
      console.log('아까 로드함');

      // setFont4Loaded(true);
      // setFont5Loaded(true);
      // setFont7Loaded(true);
      // setFont9Loaded(true);
    }
  }, []);

  useEffect(() => {
    setAllLoaded(font4Loaded && font5Loaded && font7Loaded && font9Loaded);
  }, [font4Loaded, font5Loaded, font7Loaded, font9Loaded]);

  return [allLoaded];
}
