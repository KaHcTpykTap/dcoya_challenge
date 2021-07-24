import React from 'react';
import {FireContainer, FireContainerDeactivate} from "./styles/FireStyles";
import {connect} from "react-redux";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import background from "./image/crosshair.png";
import Animated from "react-mount-animation";

const Fire = ({mainText, secondaryText, color, isAnimation}) => {

    const tooltipContent = `
    Animation: ${isAnimation},
    Color: ${color},
    Main text: ${mainText},
    Secondary text: ${secondaryText}
    `;

    const renderTooltip = (props) => (
        <Tooltip id="animation-tooltip" {...props}>
            {tooltipContent}
        </Tooltip>
    );

    return (
        <>
            <OverlayTrigger
                placement="top"
                delay={{show: 250, hide: 400}}
                overlay={renderTooltip}
            >

                {isAnimation ?
                    <>
                    <FireContainer color={color ? color : "#89cff0"}>
                        <Animated.div
                            className="containerAnimation"
                            show={isAnimation}
                            mountAnim={`
                            0% {opacity: 0}
                            100% {opacity: 1}
                            `}
                            unMountAnim={`
                            0% {opacity: 0}
                            100% {opacity: 1}
                            `}
                            time={6}
                        >
                            <div className="containerText">
                                <div className="mainText">{mainText}</div>
                                <div className="secondaryText">{secondaryText}</div>
                            </div>
                        </Animated.div>
                    </FireContainer>
                    {/*<svg>*/}
                    {/*    <filter id="wave">*/}
                    {/*    <feTurbulence x='0' y="0" baseFrequency="0.02" numOctaves="5" seed="2">*/}
                    {/*        <animate attributeName="baseFrequency" dur="15" values="0.01; 0.02; 0.01"*/}
                    {/*        repeatCount="indefinite"/>*/}
                    {/*    </feTurbulence>*/}
                    {/*    <feDisplacementMap in="SourceGraphic" scale="30"/>*/}
                    {/*    </filter>*/}
                    {/*</svg>*/}
                    </>
                    :
                    <FireContainerDeactivate color={color ? color : "#89cff0"}>
                        <div className="containerAnimation">
                            <div className="containerText">
                                <div className="mainText" style={{fontSize: "5vh"}}>New Alert!</div>
                                <div className="secondaryText" style={{backgroundImage: `url(${background})`}}/>
                            </div>
                        </div>
                    </FireContainerDeactivate>
                }
            </OverlayTrigger>
        </>
    );
};

const mapStateToProps = state => ({
    mainText: state.mainText,
    secondaryText: state.secondaryText,
    counter: state.counter,
    color: state.color,
    isAnimation: state.isAnimation
})

export default connect(mapStateToProps)(Fire);