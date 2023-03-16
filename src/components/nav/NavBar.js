import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { LoginModal } from "../auth/LoginModal";
import HamburgerIcon from "../utilities/HamburgerIcon";
import useMediaQuery from "../utilities/MediaQuery";
import './NavBar.css'


export const NavBar = () => {
    const navigate = useNavigate()
    const isDesktop = useMediaQuery('(min-width: 768px)');
    //the variable isDesktop will be true if screen width exceeds 768px
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showMenu, setShowMenu] = useState("show")

      useEffect(() => {
          const user = localStorage.getItem("passport_token");
          if (user) {
            setName(JSON.parse(user).name);
          }
          if (isDesktop) {
            setShowMenu("show")
          } else{
            setShowMenu("hide")
          }
        }, [loggedIn, isDesktop]);

      const clickHandler = () =>{// if the hamburger is clicked, toggle the showMenu variable to hide/show the nav links
        if (showMenu==="hide"){
          setShowMenu("show")
        } else{
          setShowMenu("hide")
        }
      }

    return (
      <>
        <div className="top_bar">
          {/* Do not  show the hamburger icon if in Desktop mode*/}
          {isDesktop ? "" : <HamburgerIcon clickHandler={clickHandler} />}
          <img src="/media/photos/passport_logo_2.png" className="navbar__logo" alt="logo" />
            <div className={showMenu}>
              <ul>
                <li className="navbar__item active">
                  <Link className="navbar__link" to="/home">
                    <h5>Home</h5>
                  </Link>
                </li>
                {localStorage.getItem("passport_token") ? (
                  <>
                    <li className="navbar__item active">
                      <Link className="navbar__link" to="/trips">
                        <h5>Trips</h5>
                      </Link>
                    </li>
                    <li className="navbar__item active">
                      <Link className="navbar__link" to="/stamps">
                        <h5>Stamps</h5>
                      </Link>
                    </li>
                    <li className="navbar__item active">
                      <Link className="navbar__link" to="Discovery">
                        <h5>Discovery</h5>
                      </Link>
                    </li>
                    <li className="navbar__item navbar__logout">
                      <Link
                        className="navbar__link"
                        to=""
                        onClick={() => {
                          if (
                            window.confirm(
                              `${name}, do you really want to log out?`
                            )
                          ) {
                            setLoggedIn(false);
                            setName("");
                            localStorage.removeItem("passport_token");
                            navigate("/", { replace: true });
                          }
                        }}
                      >
                        <h5>Logout</h5>
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="navbar__item active">
                    <Link className="navbar__link" onClick={handleShow}>
                      <h5>Login</h5>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            {isDesktop ? (
            <div className="welcome">{name ? `Welcome, ${name}!` : ""}</div>
          ) : (
            ""
          )}

        </div>
        <LoginModal
          show={show}
          handleClose={handleClose}
          setLoggedIn={setLoggedIn}
        />
      </>
    );
}

