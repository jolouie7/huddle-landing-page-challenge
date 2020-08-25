import React from 'react'
// Components
import Header from "./components/Header";
import MainCard1 from "./components/MainCard1";
import MainCard2 from "./components/MainCard2";
import MainCard3 from "./components/MainCard3";
import Theme from "./styles/Theme";
import FooterCard from "./components/FooterCard";
import Footer from "./components/Footer";
import {HTMLStyles, BodyStyles} from "./styles/HtmlStyles";

const App = () => {
  return (
      <HTMLStyles>
        <BodyStyles>
          <Theme>
            <Header />
            <MainCard1 />
            <MainCard2 />
            <MainCard3 />
            <FooterCard />
            <Footer />
          </Theme>
        </BodyStyles>
      </HTMLStyles>
  );
}

export default App
