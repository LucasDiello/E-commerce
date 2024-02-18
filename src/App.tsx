import { Route, Switch } from 'react-router-dom'
import './App.css'
import Products from './pages/Products'
import Login from './pages/Login'
import Cart from './components/Cart'
import ProtectedRoute from './services/ProtectRoute'

function App() {

  return (
      <Switch>
        <Route path="/" exact component={Login}/>
        <ProtectedRoute path="/products" component={Products} />
        <Route path="/cart" exact component={Cart}/>
      </Switch>
    )
}

export default App
