import React from 'react';
import { connect } from 'react-redux';
import './Content.css';
import {doTogglePanel} from "../actions/togglePanel";

const Content = ({componentName,contentPanelClassName,panelAClassName,contentA,panelBClassName,contentB,onPanelToggle}) =>
    <div className={contentPanelClassName+ " framed content"}>
        <ContentPanel className={panelAClassName+" panel"} onPanelToggle={onPanelToggle} componentName={componentName} id="panelA">{contentA}</ContentPanel>
        <ContentPanel className={panelBClassName+" panel"} onPanelToggle={onPanelToggle} componentName={componentName} id="panelB">{contentB}</ContentPanel>
    </div>;

const ContentPanel = (props) =>
    <div className={props.className} onClick={() => props.onPanelToggle(props.componentName,props.id)}>
        <span className={props.className}>{props.children}</span>
    </div>;

const mapStateToProps = (state,props) => {
    let componentState=state['componentsState'].find(componentState => componentState.name===props.componentName);
    return {
        headerData: state['givenState'].headerData,
        contentPanelClassName: componentState.contentPanelClassName,
        panelAClassName: componentState.panelAClassName,
        contentA: state['givenState'].contentA,
        panelBClassName: componentState.panelBClassName,
        contentB: state['givenState'].contentB
    };
};

const mapDispatchToProps = dispatch => ({
    onPanelToggle: (componentName,panelName) => dispatch(doTogglePanel(componentName,panelName)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);