import React, { Component } from 'react'

class Error extends Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError(error) {
        return { hasError: true}
    }
    componentDidCatch(error, info) {
        alert('Oops! looks like there was an issue loading the map!' + error)
    }
    render() {
        if (this.setState.hasError) {
            return <h2>RUh OH!</h2>
        }
        return this.props.children
    }
}

export default Error; 