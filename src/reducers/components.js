import {TOGGLE_CONTENT, TOGGLE_PANEL} from "../constants/actionTypes";

const INITIAL_STATE = [
    {
        name:'component1',
        contentPanelClassName: 'contentEnabled',
        buttonText:'-',
        panelAClassName:'enabled',
        panelBClassName:'disabled'
    },
    {
        name:'component2',
        contentPanelClassName: 'contentEnabled',
        buttonText:'-',
        panelAClassName:'enabled',
        panelBClassName:'disabled'
    },
    {
        name:'component3',
        contentPanelClassName: 'contentEnabled',
        buttonText:'-',
        panelAClassName:'enabled',
        panelBClassName:'disabled'
    },
    {
        name:'component4',
        contentPanelClassName: 'contentEnabled',
        buttonText:'-',
        panelAClassName:'enabled',
        panelBClassName:'disabled'
    },
    {
        name:'component5',
        contentPanelClassName: 'contentEnabled',
        buttonText:'-',
        panelAClassName:'enabled',
        panelBClassName:'disabled'
    }
];


// Moved to an if statement here, seems more appropriate.
function componentReducer(state = INITIAL_STATE, action) {
    if(action.type===TOGGLE_CONTENT) {
        let componentState=state.find(componentState => componentState.name===action.event.componentName),
            updatedState={};
        if (componentState.buttonText === '-') {
            updatedState= Object.assign({},componentState,{
                contentPanelClassName: 'contentDisabled',
                buttonText: '+'
            });
        } else {
            updatedState=Object.assign({},componentState,{
                contentPanelClassName: 'contentEnabled',
                buttonText: '-'
            });
        }

        return state.map(componentState => componentState.name===action.event.componentName
                ? updatedState
                : componentState
            );
    }
    if(action.type===TOGGLE_PANEL) {
        let componentState=state.find(componentState => componentState.name===action.event.componentName),
            updatedState=undefined;
        console.log(JSON.stringify(componentState,null,2));
        console.log(JSON.stringify(action,null,2));
        if (componentState.panelAClassName === 'enabled' && action.event.panelName === 'panelB') {
            updatedState=Object.assign({},componentState,{
                "panelAClassName": "disabled",
                "panelBClassName": "enabled"
            });
        } else if (componentState.panelBClassName === 'enabled' && action.event.panelName === 'panelA') {
            updatedState=Object.assign({},componentState,{
                "panelAClassName": "enabled",
                "panelBClassName": "disabled"
            });
        }

        if(updatedState){
            return state.map(componentState => componentState.name===action.event.componentName
                ? updatedState
                : componentState
            );
        }
    }

    return state;
}

export default componentReducer;