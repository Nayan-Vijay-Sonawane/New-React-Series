import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Card from './component/Card.jsx';
import CreateTodo from './component/CreateTodo.jsx'
import NewEelement from './component/NewEelement.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewEelement />
  </StrictMode>,
)
