import React from 'react';
import './QuoteBox.css';
import { connect } from 'react-redux';
import { getNewQuote, getNewBackgroundColor } from '../actions';

class QuoteBox extends React.Component {

    componentDidMount() {
        this.props.getNewQuote();
    }

    onButtonClick = () => {
        this.props.getNewQuote();
        this.props.getNewBackgroundColor();
    }

    tweetIntent = () => {
        return "http://twitter.com/intent/tweet?text=\"" + this.props.quote + "\" via @QuoteGenerator";
    }

    render() {
        return (
            <wrapper className="ui container" id="quote-box">
                    <div className="ui centered grid">
                        <div className="fifteen wide centered column">
                            <div className="quote-text row">
                                <i className="fas fa-quote-left" />
                                &nbsp; &nbsp; &nbsp;
                                <span id="text">{this.props.quote}</span>
                                &nbsp; &nbsp; &nbsp;
                                <i className="fas fa-quote-right" />
                            </div>
                        </div>
                        <div className="ten wide column">
                            <div className="quote-author row">
                                <div id="author">
                                    <em>-- {this.props.author}</em>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="five wide left aligned column">
                                <a href={this.tweetIntent()} target="_blank" id="tweet-quote" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
                            </div>
                            <div className="five wide right aligned column quote-button">
                                <button onClick={this.onButtonClick} className="mini ui primary button" id="new-quote">
                                    New Quote
                                </button>
                            </div>
                        </div>
                    </div>
            </wrapper>
        );
    }
};

const mapStateToProps = (state) => {
    return { quote: state.quote.quote,
             author: state.quote.author
    };
}

export default connect(mapStateToProps, { getNewQuote: getNewQuote, getNewBackgroundColor: getNewBackgroundColor })(QuoteBox);


