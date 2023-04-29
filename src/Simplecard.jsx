import React, { Component } from "react";
import Title from "./Title";
import Description from "./Description";
import Picture from "./Picture"
import "./App.css";

class Simplecard extends Component {
    render() {
        return (
            <div className="card"> 
             <Picture />
            <div className="container" >  
           <Title className="tit" name="HARRY POTTER & THE GOBLET OF FIRE"/>
           <Description className="des" about="It follows Harry Potter, a wizard in his fourth year of Hogwarts School
            of Witchcraft and Wizardry,and the mystery surrounding the entry of Harry's name into the
            Triwizard Tournament,in which he is forced to compete."
            
             /> 
            </div>
            </div>
        
        )
    }
}









export default Simplecard;