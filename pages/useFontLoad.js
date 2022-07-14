import { useState, useEffect } from 'react';
import FontFaceObserver from 'fontfaceobserver';

export default function useFontLoad() {
  const [font4Loaded, setFont4Loaded] = useState(false);
  // const [font5Loaded, setFont5Loaded] = useState(false);
  // const [font7Loaded, setFont7Loaded] = useState(false);
  // const [font9Loaded, setFont9Loaded] = useState(false);

  useEffect(() => {
    var font4 = new FontFaceObserver('NotoSansKR', {
      weight: 400,
    });
    // var font5 = new FontFaceObserver('NotoSansKR', {
    //   weight: 500,
    // });
    // var font7 = new FontFaceObserver('NotoSansKR', {
    //   weight: 700,
    // });
    // var font9 = new FontFaceObserver('NotoSansKR', {
    //   weight: 900,
    // });
    font4.load(null, 10000).then(function () {
      console.log('NotoSansKR has loaded.');
      setFont4Loaded(true);
    });
    // font5.load(null, 10000).then(function () {
    //   console.log('NotoSansKR has loaded.');
    //   setFont5Loaded(true);
    // });
    // font7.load(null, 10000).then(function () {
    //   console.log('NotoSansKR has loaded.');
    //   setFont7Loaded(true);
    // });
    // font9.load(null, 10000).then(function () {
    //   console.log('NotoSansKR has loaded.');
    //   setFont9Loaded(true);
    // });
  }, []);

  // return [font4Loaded && font5Loaded && font7Loaded && font9Loaded];
  return [font4Loaded];
}
