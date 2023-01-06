import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Shcart from '../../images/so.png'
import Logo from '../../images/248.png'
import { NavLink } from 'react-bootstrap';

function BasicExample() {
  return (
    <>
        <header className='navBarOfMain'>
            <div className='NavAndLogoOfMain'>
                <div className="Sh-cart">
                    <img src={Shcart} width="30px" height="30px" margin></img>
                </div>
                <div className='logo'>
                    <img src={Logo} width="100px" height='100px'></img> 
                </div>
            </div>
            <Nav>
                <NavLink to='/home'>
                    Home
                </NavLink>
                <NavLink to='/Collection'>
                    Collection
                </NavLink>
                <NavLink to='/About-us'>
                    About Us
                </NavLink>
                <NavLink to='/Login'>
                    Login
                </NavLink>
            </Nav>
        </header>
    </>
  );
}

export default BasicExample;