import React from 'react';
import { render } from 'react-dom';
import model from './model';

model.get('greeting')
  .then((response) => {
    render(
      <div>
        <div>Hello from React</div>
        <div>{response.json.greeting}</div>
      </div>,
      document.getElementById('app')
    );
  });
