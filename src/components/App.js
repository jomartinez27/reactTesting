import React from 'react';
import {Route} from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends React.Component {
  render () {
    return (
      <div>
        <Route path="/post" component={CommentBox} />
        <Route path="/" component={CommentList} />
      </div>
    )
  }
}

export default App;
