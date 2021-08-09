import React from 'react';
import './styles.css';

class Launch extends React.Component {
    render() {
        return (
            <div className = "Launch">
                <img src = { this.props.banner } alt = "Launch"/>
                <div>
                    <h1>{this.props.title}:</h1>
                        <p>{this.props.name}</p>
                    <h2>{this.props.launchDate}:</h2>
                        <p>{this.props.date}</p>
                    <h3>{this.props.description}</h3>
                        <p>{this.props.details}</p>
                </div>
            </div>
        )
    }
}

export default Launch