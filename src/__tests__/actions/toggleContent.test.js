import {doToggleContent} from "../../actions/toggleContent";
import {TOGGLE_CONTENT} from '../../constants/actionTypes'

describe('toggleContent', () => {
    it('should create an action to toggle content.', () => {
        const componentName='test-componentName',
            expectedAction={
                type:TOGGLE_CONTENT,
                event:{
                    componentName:componentName
                }
            };
        expect(doToggleContent(componentName)).toEqual(expectedAction);
    });
});
