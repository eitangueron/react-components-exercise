import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    render(){
        let aLotOfSpam = []
        for(let i=0; i<500; i++){
            aLotOfSpam.push(<Spam/>)
        }
        return aLotOfSpam
    } 
}

export default Spamalot

