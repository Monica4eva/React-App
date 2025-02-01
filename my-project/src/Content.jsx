import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "This is the initial content message.",
            counter: 0
        };
    }

    handleButtonClick = () => {
        this.setState(prevState => ({
            message: prevState.message === "This is the initial content message."? "The message has been updated!": "This is the initial content message.",
            counter: prevState.counter + 1
        }));
    };

    render() {  
        return (
            <main className="app-content">
                <p>{this.state.message}</p>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.handleButtonClick}>Change Message</button>

                {this.state.counter > 2 && (
                    <p>You've clicked the button more than twice!</p>
                )}
            </main>
        );
    }
}

export default Content;