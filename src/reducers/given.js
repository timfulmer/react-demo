const INITIAL_STATE = {
    "headerData": ["30%", "$2000000", "85%"],
    "contentA": "This should be displayed in Panel A. This is visible by default",
    "contentB": "This should be displayed in Panel B. This should be hidden by default"
};

// The given state is not mutated, so this is rather simple for now.
function givenReducer(state = INITIAL_STATE) {
    return state;
}

export default givenReducer;