import React, {useState,useEffect} from 'react'
import {FaBars , FaTimes} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Button } from '../../globalStyles'

import { 
  Nav ,
  NavbarContainer,
  NavLogo ,
  NavIcon,
  Drawer,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from './NavbarElements'



const Navbar = () => {
  const[click, setClick] = useState(false)
  const[button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton)

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon/>
              OGZ KARGO
            </NavLogo>
            <Drawer onClick={handleClick}>
              {click ? <FaTimes/> : <FaBars/>}
            </Drawer>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/login'>
                    <Button primary>Log in</Button>
                  </NavBtnLink>
                ):(
                  <NavBtnLink to='/login'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                    Log in
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/register'>
                    <Button primary>Register</Button>
                  </NavBtnLink>
                ):(
                  <NavBtnLink to='/register'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                    Register
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>


            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar