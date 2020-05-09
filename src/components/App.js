import React from 'react';
import { connect } from 'react-redux';
import Component from './Component';
import './App.css';

const App = ({componentsState}) =>
    <div className="app">
        {
            componentsState.map((componentState, idx) => (
                <Component componentName={componentState.name} key={idx} />
            ))
        }
    </div>;

const mapStateToProps = state => ({
        componentsState: state['componentsState']
    });

export default connect(
    mapStateToProps
)(App);