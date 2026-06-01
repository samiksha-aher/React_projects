import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {Provider} from "react-redux";
import {store} from "./app/store";

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todos.todos));
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
