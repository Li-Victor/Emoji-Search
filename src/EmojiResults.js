import React from 'react';
import EmojiResultRow from './EmojiResultRow';
import PropTypes from 'prop-types';

class EmojiResults extends React.Component {
    render() {
        const emojiArr = this.props.emojiData.map((emoji) => {
            return (
                <EmojiResultRow title={emoji.title} key={emoji.symbol} symbol={emoji.symbol} />
            );
        });
        return (
            <div>
                {emojiArr}
            </div>
        )
    }
}

EmojiResults.propTypes = {
    emojiData: PropTypes.array.isRequired
}
export default EmojiResults;
