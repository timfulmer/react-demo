import {doTogglePanel} from "../../actions/togglePanel";
import {TOGGLE_PANEL} from '../../constants/actionTypes'

describe('togglePanel', () => {
    it('should create an action to toggle panel.', () => {
        const componentName='test-componentName',
            panelName='test-panelName',
            expectedAction={
                type:TOGGLE_PANEL,
                event:{
                    componentName:componentName,
                    panelName:panelName
                }
            };
        expect(doTogglePanel(componentName,panelName)).toEqual(expectedAction);
    });
});
