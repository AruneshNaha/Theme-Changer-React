import React, {useState} from 'react';
import themeContext from './Context/ThemeContext';
import HeroSection from './Components/HeroSection';

const App=()=>{
  const themeHook = useState("light")

  return (
    <themeContext.Provider value={themeHook}>
      <div>
        
        <HeroSection></HeroSection>
      </div>
    </themeContext.Provider>
  );
}

export default App;
