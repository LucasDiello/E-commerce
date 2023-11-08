import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ItemsProvider from './context/ItemsProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <ItemsProvider>
    <App />
  </ItemsProvider>
  </BrowserRouter>
)
