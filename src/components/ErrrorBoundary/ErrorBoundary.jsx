import React, { Component } from 'react';
import Spinner from '../../services/spinner';

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        const { hasError } = this.state;
        return <>{!hasError ? this.props.children : <Spinner />}</>;
    }
}
