import {TOGGLE_CONTENT} from "../constants/actionTypes";


const doToggleContent = (componentName) => ({
    type: TOGGLE_CONTENT,
    event:{
        componentName:componentName
    }
});

export {doToggleContent};