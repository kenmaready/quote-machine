import React from 'react';
import './App.css';
import QuoteBox from './QuoteBox.js';
import { connect } from 'react-redux';

class App extends React.Component {

    render() {
        return (
            <div className="ui middle aligned grid fullPage" style={{backgroundColor: this.props.bgcolor}}>
                    <div className="center aligned column">
                        <QuoteBox />
                    </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { bgcolor : state.color.color };
};

export default connect(mapStateToProps)(App);