import {TOGGLE_PANEL} from "../constants/actionTypes";

const doTogglePanel = (componentName,panelName) => ({
    type: TOGGLE_PANEL,
    event:{
        componentName:componentName,
        panelName:panelName
    }
});

export {
    doTogglePanel
};