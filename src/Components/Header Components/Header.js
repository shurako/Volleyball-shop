import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated, useTransition } from "react-spring";
import Nav from "./Nav";
import "./Header.css";
import MainNav from "./MainNav";
import HeaderMainSection from "./HeaderMainSection";
import LoginSection from "./LoginSection";
import Basket from "./Basket";
import SocialMedia from "./SocialMedia";
import { render } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { headerHeight } from "../../actions";

function Header(props) {
  const dispatch = useDispatch()


  const header = useRef(<div></div>);
  const header__wrapper = useRef();
  const header__wrapper__style = { height: props.headerSize };
  window.addEventListener("resize", () => {
    props.setHeaderSize(header.current.clientHeight);
    
  });

  

  const [showMenu_mobile, setShowMenu_mobile] = useState(false);

  const transitions = useTransition(showMenu_mobile, {
    from: { x: "-100%" },
    enter: { x: "0%" },
    leave: { x: "-100%" },
  });

  useEffect(() => {
    if (window.innerHeight < window.innerWidth) {
      setShowMenu_mobile(false);
    }
  }, [showMenu_mobile]);

  const renderNav = () => {
    if (window.innerHeight > window.innerWidth) {
      return transitions((styles, item) =>
        item ? (
          <animated.div style={styles} className={"nav-wrapper"}>
            <MainNav />
            <animated.div className={"flex space-btw"}>
              {
                <Nav
                  showMenu_mobile={showMenu_mobile}
                  setShowMenu_mobile={setShowMenu_mobile}
                />
              }
            </animated.div>
          </animated.div>
        ) : (
          ""
        )
      );
    } else if (window.innerHeight < window.innerWidth) {
      return (
        <div className={"nav-wrapper"}>
          <MainNav />
          <div className={"flex space-btw"}>
            {
              <Nav
                showMenu_mobile={showMenu_mobile}
                setShowMenu_mobile={setShowMenu_mobile}
              />
            }
            <div className = {'flex'}>
            <SocialMedia />
            <Basket total={props.total} />
            </div>
          </div>
        </div>
      );
    }
  };

  const m_renderLoginSection = () => {
    if (window.innerHeight > window.innerWidth) {
      return <LoginSection />;
    } else return null;
  };

  

  return (
    <div
      style={header__wrapper__style}
      ref={header__wrapper}
      className={"header__wrapper"}
    >
      <div ref={header} className={"header"}>
        {m_renderLoginSection()}
        <HeaderMainSection />
        <div
          onClick={() => {
            setShowMenu_mobile(!showMenu_mobile);
          }}
          className={"hamburger"}
        >
          <div className={"hamburger-links"}></div>
          <div className={"hamburger-links"}></div>
          <div className={"hamburger-links"}></div>
        </div>
        {renderNav()}
      </div>
    </div>
  );
}

export default Header;


