import React, { Component } from 'react'
import image from '../images/p.png';
import HeaderV from '../js-files/nav-bars/NavHomeV2';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
export class Ss extends Component {
    constructor(props){
        super(props)
        this.state = {
            first: false,
            second: false,
            third: false,
            fourth: false,
        }
    }
    changerSt() {
        this.setState({
            first: !(this.state.first),
            second: false,
            third: false,
            fourth:false
            
        })
        
        console.log(this.state.first)
    }
    changerNd() {
        this.setState({
            first: false,
            second: !(this.state.second),
            third: false,
            fourth:false
            
        })
        
        console.log(this.state.second)
    }
    changerTh() {
        this.setState({
            first: false,
            second: false,
            third: !(this.state.third),
            fourth:false
            
        })
        
        console.log(this.state.third)
    }
    changerFTh() {
        this.setState({
            first: false,
            second: false,
            third: false,
            fourth: !(this.state.fourth)
            
        })
        
        console.log(this.state.fourth)
    }
  render() {
    
    return (
      <div>
        <div className='MainContOfProfile'>
            <div className='ListOfProfile'>
                <div className='Img--Profile'>
                 <img className='imgOfProfile'  src={image} ></img>
                 </div>
                <div className='MainDivOfListOfWordsOfProfile'>
                    <div className='ListOfWordsOfProfile'>
                        <button onClick={() => this.changerSt()} id="StBut" className={`buttonSt`} ><Link style={{color: 'gray'}} to="/Profile-info">Profile Info </Link></button>
                        <br></br>
                        <br></br>
                        <button onClick={() => this.changerNd()}id="NdBut" className={`buttonNd`}><Link style={{color: 'gray'}} to="/Profile-pass">Change Password </Link></button>
                        <br></br>
                        <br></br>
                        <button onClick={() => this.changerTh()} id="ThBut"className={`buttonTh`}><Link style={{color: 'gray'}} to="/Profile-num">Change Number </Link></button>
                        <br></br>
                        <br></br>
                        <button onClick={() => this.changerFTh()} id="FthBut" className={`buttonFth`}><Link style={{color: 'gray'}} to="/Profile-orders">Orders</Link></button>
                        <br></br>
                        <br></br>
                        <button  id="FiThBut" style={{color: "gray"}}>Log Out</button>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    )
  }
}

export default Ss
