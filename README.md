# React Demo Project

## Quick Overview
Quick react project illustrating best practices with a simple use case.

## Demo requirements

Given the following JSON string

    {
        "headerData": ["30%", "$2000000", "85%"],
        "contentA": "This should be displayed in Panel A. This is visible by default"
        "contentB": "This should be displayed in Panel B. This should be hidden by default"
    }

* Display header data horizontally in a header section. This is always visible
* The header section should display a "-" sign by default. When a user clicks this, it will change to a "+" sign.
* Display a content section by default under the header section. When the "-" sign in the header is clicked, this content section becomes hidden.
* The content section contains 2 panels side by side. The first panel (panel A) should display contentA data. Content in this panel is visible by default.
* The second panel (panel B) should display contentB data. The contents of this panel is hidden by default. The background of this should be #EEEEEE by default.
* When panel B (with the hidden content) is clicked, the background should change to #FFFFFF and it's content should become visible.
* When panel B content becomes visible, panel A content should become hidden and the background color should change to #EEEEEE.
* The hide/show behavior above should be repeatable any number of times.
* Renders the component multiple times.

See mockup.png for a reference.

## Design Choices

* Used `npx create-react-app react-demo` to create the project skeleton, based on:

    https://reactjs.org/docs/create-a-new-react-app.html

    * Moved `mockup.png`, and `README.md` got renamed to make room for the generated README.
    
    * The generated README was moved to `README.md.react`, while this README was put back in place.
    
    * Mockup image was put back in place as well
    
* Used a tutorial for setting up the React/Redux project:

    https://www.robinwieruch.de/react-redux-tutorial/
    
    * There seems to be two styles of creating components, the one used in this tutorial seemed more markup focused, which I like.
    
* View modeling

    * Didn't really think too much about view modeling until the part with rendering multiple components.
    
    * Researching, it looks like React-Redux uses a similar pattern to the View Model from MVVM.
    
    * Moved to creating the view model in a reducer, passing a name into the component instances at the App level, and querying the view model by name when reading and updating.
    
    * Seems to work!
    
    
* Used the Redux tutorial for unit testing, since the most of the JS code is in the Redux parts.

    https://redux.js.org/recipes/writing-tests

    * Did not write unit tests for the React code, since it's mostly markup and wiring.

    * Would be interesting to get some feedback on where to draw the unit test coverage line in a React-Redux project.
    
    * Ideally there would be coverage metrics, with thresholds failing a build if coverage drops too low.

* I am not sure about the React CSS stuff, feels like we are breaking up CSS into multiple files for no reason.

    * Maybe there's a SASS or LESS or something integration that makes more sense.
