import React from 'react';
import ReactDOM from 'react-dom'; // ✅ Use the classic React 17 import
import App from './components/App'; // Make sure the path is correct
import './components/styles.css';
import './components/MarkdownEditor';

ReactDOM.render(<App />, document.getElementById('root')); // ✅ React 17 syntax
