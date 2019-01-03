import React from 'react';
import {Route} from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default () => (
  <div>
    <Route path="/post" component={CommentBox} />
    <Route exact path="/" component={CommentList} />
  </div>
)
