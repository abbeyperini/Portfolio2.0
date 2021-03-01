import './styles/App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Work from './components/Work';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import { CSSTransition } from 'react-transition-group';
import MainFull from './components/MainFullCSS';
import Single from './components/SingleCSS';
import { setTheme, keepTheme } from './utils/themes';
import Blog1 from './components/blog/Blog1';
import Blog2 from './components/blog/Blog2';
import Blog3 from './components/blog/Blog3';
import Blog4 from './components/blog/Blog4';
import Blog5 from './components/blog/Blog5';
import Blog6 from './components/blog/Blog6';
import Blog7 from './components/blog/Blog7';
import Blog8 from './components/blog/Blog8';
import FullBlog from './components/FullBlog';

function App() {
  const [hidden, setHidden] = useState(false);
  const [single, setSingle] = useState(false);
  const [singleShow, setSingleShow] = useState('');
  
  const hideHeader = () => {
    if (hidden) {
      setHidden(false);
    } else if (!hidden) {
      setHidden(true);
      setSingle(false);
    }
  }

  const chooseComponent = (component) => {
      setSingle(true);
      setSingleShow(component);
  }

  useEffect(() => {
    keepTheme()
  })

  return (
    <div className="App">
      <CSSTransition
        classNames="header"
        in={!hidden}
        timein={500}
        timeout={300}
        unmountOnExit>
        <Header key="1" hideHeader={hideHeader}/>
      </CSSTransition>
      { hidden && <div className="main-container">
        <CSSTransition
          classNames="navBar"
          in={hidden}
          timein={500}
          timeout={300}
          unmountOnExit>
          <NavBar setTheme={setTheme} hideHeader={hideHeader} chooseComponent={chooseComponent}/>
        </CSSTransition>
        <MainFull condition={hidden && !single} component={<Work />}/>
        <MainFull condition={hidden && !single} component={<Blog chooseComponent={chooseComponent}/>} />
        <MainFull condition={hidden && !single} component={<About />}/>
        <MainFull condition={hidden && !single} component={<Contact />}/>
        <Single condition={hidden && single && singleShow === "work"} component={<Work />}/>
        <Single condition={hidden && single && singleShow === "blog"} component={<Blog chooseComponent={chooseComponent}/>}/>
        <Single condition={hidden && single && singleShow === "about"} component={<About />}/>
        <Single condition={hidden && single && singleShow === "contact"} component={<Contact />}/>
        <Single condition={hidden && single && singleShow === "Blog1"} component={<Blog1 />}/>
        <Single condition={hidden && single && singleShow === "Blog2"} component={<Blog2 />}/>
        <Single condition={hidden && single && singleShow === "Blog3"} component={<Blog3 />}/>
        <Single condition={hidden && single && singleShow === "Blog4"} component={<Blog4 />}/>
        <Single condition={hidden && single && singleShow === "Blog5"} component={<Blog5 />}/>
        <Single condition={hidden && single && singleShow === "Blog6"} component={<Blog6 />}/>
        <Single condition={hidden && single && singleShow === "Blog7"} component={<Blog7 />}/>
        <Single condition={hidden && single && singleShow === "Blog8"} component={<Blog8 />}/>
        <Single condition={hidden && single && singleShow === "FullBlog"} component={<FullBlog />}/>
      </div> }
    </div>
  );
}

export default App;
