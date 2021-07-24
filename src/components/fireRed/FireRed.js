import React, {useEffect} from 'react';
import {FireContainer} from "./styles/FireRedStyles";
import {connect} from "react-redux";
//import Animated from "react-mount-animation";
import background from "../fire/image/crosshair.png";
import {FireContainerDeactivate} from "../fire/styles/FireStyles";

const FireRed = ({mainText, secondaryText, color, isAnimation}) => {

    useEffect(() => {
        if (isAnimation) {
            const cnv = document.querySelector(`canvas`);
            const ctx = cnv.getContext("2d");
            ctx.font = '25px Verdana';
            ctx.fillStyle = "red";
            ctx.fillText("Hello", 100, 40);

            function init() {
                cnv.width = 500;
                cnv.height = 500;
            }

            init();

            const numberOfRings = 3; // items rings
            const ringRadiusOffset = 7;
            const ringRadius = 180; // radius
            const waveOffset = 15;
            const colors = [color, color, color];
            let startAngle = 0;

            function updateRings() {
                for (let i = 0; i < numberOfRings; i++) {
                    let radius = i * ringRadiusOffset + ringRadius;
                    let offsetAngle = i * waveOffset * Math.PI / 180;
                    drawRing(radius, colors[i], offsetAngle);
                }

                startAngle >= 360 ? startAngle = 0 : startAngle++;
            }

            let centerX = cnv.width / 2;
            let centerY = cnv.height / 2;

            const maxWavesAmplitude = 17;
            const numberOfWaves = 7; // number waves

            function drawRing(radius, color, offsetAngle) {
                ctx.strokeStyle = color;
                ctx.lineWidth = 9;

                ctx.beginPath();

                for (let j = -180; j < 180; j++) {
                    let currentAngle = (j + startAngle) * Math.PI / 180;
                    let displacement = 0;
                    let now = Math.abs(j);

                    if (now > 70) {
                        displacement = (now - 70) / 70;
                    }

                    if (displacement >= 1) {
                        displacement = 1;
                    }

                    let waveAmplitude = radius + displacement * Math.sin((currentAngle + offsetAngle) * numberOfWaves) * maxWavesAmplitude;
                    let x = centerX + Math.cos(currentAngle) * waveAmplitude;
                    let y = centerY + Math.sin(currentAngle) * waveAmplitude;
                    j > -180 ? ctx.lineTo(x, y) : ctx.moveTo(x, y);

                }
                ctx.closePath();
                ctx.stroke();
            }

            function loop() {
                cnv.width |= 0; // ctx.clearRect(0, 0, cnv.width, cnv.height);
                updateRings();
                requestAnimationFrame(loop);
            }

            loop();
            window.addEventListener(`resize`, init);
        }
    });


    return (
        <>
            {isAnimation ?
                <FireContainer>

                    <div className="containerText">
                        <div className="mainText">{mainText}</div>
                        <div className="secondaryText">{secondaryText}</div>
                    </div>
                    <canvas/>
                </FireContainer>
                :
                <FireContainerDeactivate color={color ? color : "cyan"}>
                    <div className="containerAnimation">
                        <div className="containerText">
                            <div className="mainText" style={{fontSize: "5vh"}}>New Alert!</div>
                            <div className="secondaryText" style={{backgroundImage: `url(${background})`}}/>
                        </div>
                    </div>
                </FireContainerDeactivate>
            }
        </>
    )
}

const mapStateToProps = state => ({
    mainText: state.mainText,
    secondaryText: state.secondaryText,
    counter: state.counter,
    color: state.color,
    isAnimation: state.isAnimation
})

export default connect(mapStateToProps)(FireRed);