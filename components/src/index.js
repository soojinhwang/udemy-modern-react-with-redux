// React 17 method
// import ReactDOM from 'react-dom';

// React 18 method
import React from 'react';
import { createRoot } from 'react-dom/client';
import { faker } from '@faker-js/faker';
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Sam"
        timeAgo="Today at 4:45PM"
        body="Nice blog post!"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Alex"
        timeAgo="Today at 2:00AM"
        body="That's good to know"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        body="Cool"
      />
    </div>
  );
};

// React 18 method
const root = createRoot(document.querySelector('#root'));
root.render(<App />);

// React 17 method
// ReactDOM.render(<App />, document.querySelector('#root'))
