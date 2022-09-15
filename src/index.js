import React from 'react';
import App from './App/index.js';
import './index.css';
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
// const container2 = document.getElementById('modal');
// const modalRoot = createPortal(container2);
const root = createRoot(container);
root.render(<App />);
// modalRoot.render(<App/>);
