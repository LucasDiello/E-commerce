import { Route, Switch } from 'react-router-dom'
import './App.css'
import products from './pages/Products'
import Login from './pages/Login'
import Cart from './components/Cart'

function App() {

  return (
    <div>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/products" exact component={products}/>
        <Route path="/cart" exact component={Cart}/>
      </Switch>
    </div>
    )
}

export default App
