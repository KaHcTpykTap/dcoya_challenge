import React, {useEffect} from 'react';
import {FooterContainer} from "./styles/FooterStyles";
import {connect} from "react-redux";

const Footer = ({logItems}) => {

    useEffect(() => {
        localStorage.removeItem('log');
    }, [])

    const elementLog = () => {
        return logItems
            ?
            logItems.map((item, index) => <div key={index}>{item.date + " " + item.action + " => " + item.payload}</div>)
            :
            ""
    };

    return (
        <FooterContainer>
            {elementLog()}
        </FooterContainer>
    )
};

const mapStateToProps = state => ({
    logItems: state.logFile
})

export default connect(mapStateToProps, null)(Footer);