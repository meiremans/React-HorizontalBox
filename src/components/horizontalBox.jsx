import React from 'react';

class HorizontalBox extends React.Component {

    render() {

        return (
            <div>
                <div className="horizontalBox">
                    <h1> {this.props.header}</h1>
                    <p>{this.props.text}</p>
                </div>
                <div className="divider-bottom-arrow">
                </div>
            </div>
        )
    }
}
;

export default HorizontalBox;