import React, { Component } from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import EmojiResults from './EmojiResults';

class App extends Component {

  handleSearchChange = (event) => {
      console.log('search input changed to: ', event.target.value);
  }
  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange}/>
        <EmojiResults
            emojiData={[
                { title: "Grinning", symbol: "😀" },
                { title: "heart_eyes", symbol: "😍" },
                { title: "poop", symbol: "💩" }
            ]}/>
      </div>
    );
  }
}

export default App;
