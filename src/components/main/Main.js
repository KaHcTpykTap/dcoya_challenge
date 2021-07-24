import React from 'react';
import {MainContainer} from "./styles/MainStyles";
import {connect} from "react-redux";
import Fire from "../fire/Fire";
import FireRed from "../fireRed/FireRed";
import Wave from "../wave/Wave";

const Main = ({counter, color}) => {

    return (
        <MainContainer>
            <div className="divCount">
                <div className="divCounter" style={{backgroundColor: color ? color : "#89cff0"}}>{counter}</div>
            </div>
            <div className="divAnimation">
                <Fire/>
            </div>
        </MainContainer>
    );
}

const mapStateToProps = state => ({
    counter: state.counter,
    color: state.color,
})

export default connect(mapStateToProps)(Main);