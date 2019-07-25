import React from 'react';
import './Snail.css';


class Snail extends React.Component{
    constructor(props){
        super(props);
        this.state = {snailText: "BUY DORITOS"};




    }

     

    render(){
        return(
        <div className="SnailContainer">
            <img src="./snail.jpg" alt=""/>
            <div className="SnailText"> {this.state.snailText} </div>
        </div>
        );
    }
};

export default Snail;