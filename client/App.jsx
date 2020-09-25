import React from 'react';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    }
  }

  render() {
    return (
      <h4>More to consider</h4>
      <div id="recommended-items">
        <List listItems={this.state.items}/>
      </div>

    );
  }
}

export default App;
