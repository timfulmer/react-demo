import componentReducer from "../../reducers/components";
import {TOGGLE_CONTENT, TOGGLE_PANEL} from "../../constants/actionTypes";

describe('componentReducer', () => {
   it('should return initial state', () => {
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
       expect(componentReducer(undefined,{})).toEqual(INITIAL_STATE);
   });
   it('should toggle content on a named component', () => {
       const action={
               type:TOGGLE_CONTENT,
               event:{
                   componentName:'component3'
               }
           },
           expectedState=[
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
                   contentPanelClassName: 'contentDisabled',
                   buttonText:'+',
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
       expect(componentReducer(undefined, action)).toEqual(expectedState);
   });
   it('should toggle content back on a named component', () => {
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
                   contentPanelClassName: 'contentDisabled',
                   buttonText:'+',
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
           ],action={
               type:TOGGLE_CONTENT,
               event:{
                   componentName:'component2'
               }
           },
           expectedState=[
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
       expect(componentReducer(INITIAL_STATE, action)).toEqual(expectedState);
   });
   it('should toggle panel on a named component and named panel, when named panel is disabled', () => {
       const action = {
               type: TOGGLE_PANEL,
               event: {
                   componentName: 'component3',
                   panelName: 'panelB'
               }
           },
           expectedState = [
               {
                   name: 'component1',
                   contentPanelClassName: 'contentEnabled',
                   buttonText: '-',
                   panelAClassName: 'enabled',
                   panelBClassName: 'disabled'
               },
               {
                   name: 'component2',
                   contentPanelClassName: 'contentEnabled',
                   buttonText: '-',
                   panelAClassName: 'enabled',
                   panelBClassName: 'disabled'
               },
               {
                   name: 'component3',
                   contentPanelClassName: 'contentEnabled',
                   buttonText: '-',
                   panelAClassName: 'disabled',
                   panelBClassName: 'enabled'
               },
               {
                   name: 'component4',
                   contentPanelClassName: 'contentEnabled',
                   buttonText: '-',
                   panelAClassName: 'enabled',
                   panelBClassName: 'disabled'
               },
               {
                   name: 'component5',
                   contentPanelClassName: 'contentEnabled',
                   buttonText: '-',
                   panelAClassName: 'enabled',
                   panelBClassName: 'disabled'
               }
           ];
       expect(componentReducer(undefined, action)).toEqual(expectedState);
   });
   it('should not toggle panel on a named component and named panel, when named panel is enabled', () => {
       const action = {
               type: TOGGLE_PANEL,
               event: {
                   componentName: 'component3',
                   panelName: 'panelA'
               }
           },
           expectedState = [
               {
                   name: 'component1',
                   contentPanelClassName: 'contentEnabled',
                   buttonText: '-',
                   panelAClassName: 'enabled',
                   panelBClassName: 'disabled'
               },
               {
                   name: 'component2',
                   contentPanelClassName: 'contentEnabled',
                   buttonText: '-',
                   panelAClassName: 'enabled',
                   panelBClassName: 'disabled'
               },
               {
                   name: 'component3',
                   contentPanelClassName: 'contentEnabled',
                   buttonText: '-',
                   panelAClassName: 'enabled',
                   panelBClassName: 'disabled'
               },
               {
                   name: 'component4',
                   contentPanelClassName: 'contentEnabled',
                   buttonText: '-',
                   panelAClassName: 'enabled',
                   panelBClassName: 'disabled'
               },
               {
                   name: 'component5',
                   contentPanelClassName: 'contentEnabled',
                   buttonText: '-',
                   panelAClassName: 'enabled',
                   panelBClassName: 'disabled'
               }
           ];
       expect(componentReducer(undefined, action)).toEqual(expectedState);
   });
    it('should toggle panel back on a named component and named panel, when named panel is disabled', () => {
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
                    panelAClassName:'disabled',
                    panelBClassName:'enabled'
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
            ],action = {
                type: TOGGLE_PANEL,
                event: {
                    componentName: 'component2',
                    panelName: 'panelA'
                }
            },
            expectedState = [
                {
                    name: 'component1',
                    contentPanelClassName: 'contentEnabled',
                    buttonText: '-',
                    panelAClassName: 'enabled',
                    panelBClassName: 'disabled'
                },
                {
                    name: 'component2',
                    contentPanelClassName: 'contentEnabled',
                    buttonText: '-',
                    panelAClassName: 'enabled',
                    panelBClassName: 'disabled'
                },
                {
                    name: 'component3',
                    contentPanelClassName: 'contentEnabled',
                    buttonText: '-',
                    panelAClassName: 'enabled',
                    panelBClassName: 'disabled'
                },
                {
                    name: 'component4',
                    contentPanelClassName: 'contentEnabled',
                    buttonText: '-',
                    panelAClassName: 'enabled',
                    panelBClassName: 'disabled'
                },
                {
                    name: 'component5',
                    contentPanelClassName: 'contentEnabled',
                    buttonText: '-',
                    panelAClassName: 'enabled',
                    panelBClassName: 'disabled'
                }
            ];
        expect(componentReducer(INITIAL_STATE, action)).toEqual(expectedState);
    });
});