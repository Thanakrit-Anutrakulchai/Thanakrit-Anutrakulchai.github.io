import React, {createRef, Component} from 'react';

// using random html comments to deter bots
// code based off of this stackoverflow: https://stackoverflow.com/a/41131326
// modified due to deprecation: https://react.dev/reference/react-dom/findDOMNode#alternatives
const DETER_BOT_COMMENT = "comment to deter bots"
class DeterBot extends Component {
    inputRef = createRef(null);

    componentDidMount() {
        let el = this.inputRef.current;
        el.outerHTML = this.createComment();
    }

    createComment() {
        return `<!-- ${DETER_BOT_COMMENT} -->`;
    }

    render() {
        // changed from a div tag to get rid of 'div inside p' error
        return <em ref={this.inputRef} />;
    }
}

export default DeterBot;
