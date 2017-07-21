import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="component-header">
                <img alt="cat laughing" src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" />
                Emoji Search
                <img alt="cat smiling" src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png" />
            </header>
        )
    }
}

export default Header;
