import React from 'react';

// ClockComponent tar emot tiden som en prop och visar den på sidan
class ClockComponent extends React.Component {
    render() {
        return (
            <>
                {/* JSX som renderas till HTML-element */}
                <h1>
                Current Time
                </h1><br></br>
                <div>{ this.props.time }</div>
            </>
        )
    }
}
export default ClockComponent;
