import React from 'react'
// Components
import Header from "./components/Header";
import MainCard1 from "./components/MainCard1";
import MainCard2 from "./components/MainCard2";
import MainCard3 from "./components/MainCard3";
import Theme from "./styles/Theme";

const App = () => {
  return (
    <div>
      <Theme>
        <Header />
        <MainCard1 />
        <MainCard2 />
        <MainCard3 />
      </Theme>
    </div>
  );
}

export default App
