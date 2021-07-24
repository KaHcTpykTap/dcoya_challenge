import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {HeaderContainer} from "./styles/HeaderStyles";
import {bindActionCreators} from "redux";
import {setAnimation, setColor, setMainText, setSecondaryText, setUserCount} from "../../action/userAction";
import {connect} from "react-redux";

const Header = ({setCounter, setMainText, setSecondaryText, setAnimation, setColorDiv, isAnimation}) => {

    const [count, setCount] = useState('');
    const [mainText, setMain] = useState('');
    const [secondaryText, setSecondary] = useState('');
    const [color, setColor] = useState('');

    return (
        <HeaderContainer>
            <div className="divButtonAnimation">
                <Button size="sm"
                        onClick={() => {
                    setAnimation(!isAnimation);
                }}>
                    {!isAnimation ? 'Show animation' : 'Stop animation'}
                </Button>
            </div>
            <div className="divFormInput">
                <input placeholder='Color' type='text' value={color}
                       onChange={(e) => {
                           setColor(e.currentTarget.value.trim());
                       }}/>
                <Button variant="primary" size="sm" onClick={() => {
                    setColorDiv(color);
                    setColor('');
                }}> Set color </Button>
            </div>
            <div className="divFormInput">
                <input placeholder='Main text' type='text' value={mainText}
                       onChange={(e) => {
                           setMain(e.currentTarget.value);
                       }}/>
                <Button variant="primary" size="sm" onClick={() => {
                    setMainText(mainText ? mainText : "00");
                    setMain('');
                }}> Set main text </Button>
            </div>
            <div className="divFormInput">
                <input placeholder='Secondary text' type='text' value={secondaryText}
                       onChange={(e) => {
                           setSecondary(e.currentTarget.value);
                       }}/>
                <Button variant="primary" size="sm" onClick={() => {
                    setSecondaryText(secondaryText ? secondaryText : "Your Score");
                    setSecondary('');
                }}> Set secondary text</Button>
            </div>
            <div className="divFormInput">
                <input placeholder="Counter" type='number' min={0} value={count}
                       onChange={(e) => {
                           setCount(e.currentTarget.value.trim());
                       }}/>
                <Button variant="primary" size="sm" onClick={() => {
                    setCounter(count ? count : 0);
                    setCount('');
                }}> Set counter </Button>
            </div>
        </HeaderContainer>
    );
}

const mapStateToProps = state => ({
    isAnimation: state.isAnimation
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setMainText: setMainText,
        setCounter: setUserCount,
        setSecondaryText: setSecondaryText,
        setAnimation: setAnimation,
        setColorDiv: setColor
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);