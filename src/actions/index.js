import quoteBag from "../quoteBag.js";

const GET_NEW_QUOTE = 'GET_NEW_QUOTE';
const NUMBER_QUOTES = quoteBag.length;
const GET_NEW_BACKGROUND_COLOR = 'GET_NEW_BACKGROUND_COLOR';
const bgColors = ['#636FA0', '#97D199', '#DB4F54', '#CAD627', '#D9AF55']

export const getNewQuote = () => {
    const newQuote = randomQuoteSelector();
    return {
        type: GET_NEW_QUOTE,
        payload: {
            quote: newQuote.quote,
            author: newQuote.author 
    }};
};

const randomQuoteSelector = () => {
    const selector = Math.floor(Math.random() * (NUMBER_QUOTES));
    return quoteBag[selector];
}

export const getNewBackgroundColor = () => {
    const selector = Math.floor(Math.random() * bgColors.length);
    return {
        type: GET_NEW_BACKGROUND_COLOR,
        payload: { color: bgColors[selector] }
    };
};