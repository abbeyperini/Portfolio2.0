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
import { keepTheme } from './utils/themes';
import FullBlog from './components/FullBlog';
import SingleBlog from './components/SingleBlog';

function App() {
  const [hidden, setHidden] = useState(false);
  const [single, setSingle] = useState(false);
  const [singleShow, setSingleShow] = useState('');
  const [singleBlogID, setSingleBlogID] = useState(0);
  
  const hideHeader = () => {
    if (hidden) {
      setHidden(false);
    } else if (!hidden) {
      setHidden(true);
      setSingle(false);
    }
  }

  const chooseComponent = (component) => {
    if (component.id) {
      setSingle(true)
      setSingleBlogID(component.id)
      setSingleShow("SingleBlog")
    } else {
      setSingle(true);
      setSingleShow(component);
    } 
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
          <NavBar hideHeader={hideHeader} chooseComponent={chooseComponent}/>
        </CSSTransition>
        <MainFull condition={hidden && !single} component={<Work />}/>
        <MainFull condition={hidden && !single} component={<Blog chooseComponent={chooseComponent} />} />
        <MainFull condition={hidden && !single} component={<About />}/>
        <MainFull condition={hidden && !single} component={<Contact />}/>
        <Single condition={hidden && single && singleShow === "work"} component={<Work />}/>
        <Single condition={hidden && single && singleShow === "blog"} component={<Blog chooseComponent={chooseComponent} />} />
        <Single condition={hidden && single && singleShow === "about"} component={<About />}/>
        <Single condition={hidden && single && singleShow === "contact"} component={<Contact />}/>
        <Single condition={hidden && single && singleShow === "SingleBlog"} component={<SingleBlog id={singleBlogID} />}/>
        <Single condition={hidden && single && singleShow === "FullBlog"} component={<FullBlog />} />
      </div> }
    </div>
  );
}

export default App;
