import React, { Component } from 'react';

export const withData = (WrappedComponent, getData) => {
    return class extends Component {
        state = {
            data: null
        };

        componentDidMount() {
            getData().then(res => {
                this.setState({ data: res });
            });
        }

        render() {
            return <WrappedComponent {...this.props} data={this.state.data} />;
        }
    };
};
