import React from 'react';
import { connect } from 'react-redux';
import './Component.css';
import {doToggleContent} from "../actions/toggleContent";
import Content from "./Content";

const Component = ({componentName,headerData,buttonText,onContentToggle}) =>
    <div className="component">
        <div className="framed header">
            <ul>
                {(headerData || []).map(headerItem => {
                    return (<li key={headerItem}>{headerItem}</li>);
                })}
                <li>
                    <span onClick={() => onContentToggle(componentName)}>{buttonText}</span>
                </li>
            </ul>
        </div>
        <Content componentName={componentName}/>
    </div>;

const mapStateToProps = (state,props) => {
    let componentState=state['componentsState'].find(componentState => componentState.name===props.componentName);
    return {
        headerData: state['givenState'].headerData,
        buttonText: componentState.buttonText
    };
};

const mapDispatchToProps = dispatch => ({
    onContentToggle: (componentName) => dispatch(doToggleContent(componentName)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);