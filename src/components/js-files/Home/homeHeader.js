import Logo from '../../images/248.png'
import {Link} from 'react-router-dom'
import './home.css'
import {useRef} from 'react'
import { FaBars, FaTimes} from 'react-icons/fa';
import Basket from '../../images/download.png'
function Header() {
    
    return(
        <header className="Home--Header">
            <div className="Home--Header-St-Div">
                <div className="Home--Header-St-DivOne">
                    <img src={Basket} width="30px" height="30px"></img>
                </div>
                <div className="Home--Header-St-Divtwo">
                    <img src={Logo} width="100px" height="100px"></img>
                </div>
            </div>
            <nav className="Home--Header-Nav">
                <button className="Home--Header-Btn-st">
                    <p>HOME</p>
                </button>
                <button className="Home--Header-Btn-nd">
                   <p>NEW</p> 
                </button>
                
                <button className="Home--Header-Btn-rd">
                    <p>ABOUT US</p>
                </button>
                
                <button className="Home--Header-Btn-th">
                    <p>LOGIN</p> 
                </button> 
                </nav>               
        </header>
    )
    }


export default Header