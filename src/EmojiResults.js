import React from 'react';
import EmojiResultRow from './EmojiResultRow';
import PropTypes from 'prop-types';
import './EmojiResults.css'

class EmojiResults extends React.Component {
    render() {
        const emojiArr = this.props.emojiData.map((emoji, index) => {
            return (
                <EmojiResultRow title={emoji.title} key={index} symbol={emoji.symbol} />
            );
        });
        return (
            <div className="component-emoji-results">
                {emojiArr}
            </div>
        )
    }
}

EmojiResults.propTypes = {
    emojiData: PropTypes.array.isRequired
}
export default EmojiResults;
