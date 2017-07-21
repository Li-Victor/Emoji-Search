import React from 'react';
import PropTypes from 'prop-types';

class EmojiResultRow extends React.Component {
    render() {
        const codePointHex = this.props.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`

        return (
            <div>
                <img alt={this.props.title} src={src} />
                <span>{this.props.title}</span>
            </div>
        );
    }
}

EmojiResultRow.propTypes = {
    title: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired
}

export default EmojiResultRow;
