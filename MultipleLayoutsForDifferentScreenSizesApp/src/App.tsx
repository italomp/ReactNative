import React, { useEffect } from 'react';
import {
  useWindowDimensions
} from 'react-native';

import HomeSmartphoneLandscape from './pages/HomeSmartphoneLandscape';
import HomeSmartphonePortrait from './pages/HomeSmartphonePortrait';
import HomeTabletLandscape from './pages/HomeTabletLandscape';
import HomeTabletPortrait from './pages/HomeTabletPortrait';

function App(): JSX.Element {
  const { height, width } = useWindowDimensions();
  useEffect(() => { loadLayout() }, [height, width]);

  function loadLayout(){
    console.log("dentro do loadLayout")

    // smartphone portrait
    if(height <= 900 && width <= 600){
      console.log("smartphone portrait");
      return <HomeSmartphonePortrait />;
    }
    // smartphone landscape
    else if(height <= 480 && width > 600){
      console.log("smartphone landscape");
      return <HomeSmartphoneLandscape />;
    }
    // table portrait
    else if(height > 900 && width <= 840){
      console.log("tablet portrait");
      return <HomeTabletPortrait />;
    }
    // tablet landscape
    else if (height <= 900 && width > 840){
      console.log("smartphone landscape");
      return <HomeTabletLandscape />;
    }
    // if no layout was choosed
    return <HomeSmartphonePortrait />;
  }

  return(
    loadLayout()
  );
}

export default App;
