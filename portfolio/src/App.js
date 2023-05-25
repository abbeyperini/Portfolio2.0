import './styles/App.css';
import React, { useEffect, useState } from 'react';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Blog from './components/Blog';
import Speaking from './components/Speaking';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import { CSSTransition } from 'react-transition-group';
import MainFull from './components/MainFullCSS';
import Single from './components/SingleCSS';
import { keepTheme } from './utils/themes';

function App() {
  const [hidden, setHidden] = useState(false);
  const [single, setSingle] = useState(false);
  const [singleShow, setSingleShow] = useState('');
  const [className, setClassName] = useState("theme-dark");
  
  const hideLanding = () => {
    if (hidden) {
      setHidden(false);
    } else if (!hidden) {
      setHidden(true);
      setSingle(false);
    }
  }

  const chooseComponent = (component) => {
    setSingle(true)
    setSingleShow(component)
  }

  useEffect(() => {
    keepTheme(setClassName)
  }, [setClassName])

  return (
    <div className={`App ${className}`}>
      <CSSTransition
        classNames="header"
        in={!hidden}
        timein={500}
        timeout={300}
        unmountOnExit>
        <LandingPage key="1" hideLanding={hideLanding}/>
      </CSSTransition>
      { hidden && <div className="main-container">
        <CSSTransition
          classNames="navBar"
          in={hidden}
          timein={500}
          timeout={300}
          unmountOnExit>
          <NavBar hideLanding={hideLanding} chooseComponent={chooseComponent} setClassName={setClassName}/>
        </CSSTransition>
        <MainFull condition={hidden && !single} component={<Blog />}/>
        <MainFull condition={hidden && !single} component={<Speaking />}/>
        <MainFull condition={hidden && !single} component={<Work />}/>
        <MainFull condition={hidden && !single} component={<About />}/>
        <MainFull condition={hidden && !single} component={<Contact />}/>
        <Single condition={hidden && single && singleShow === "blog"} component={<Blog />}/>
        <Single condition={hidden && single && singleShow === "speaking"} component={<Speaking />}/>
        <Single condition={hidden && single && singleShow === "work"} component={<Work />}/>
        <Single condition={hidden && single && singleShow === "about"} component={<About />}/>
        <Single condition={hidden && single && singleShow === "contact"} component={<Contact />}/>
      </div> }
    </div>
  );
}

export default App;
