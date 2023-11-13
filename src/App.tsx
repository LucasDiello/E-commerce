import { Route, Switch } from 'react-router-dom'
import './App.css'
import products from './pages/Products'
import Login from './pages/Login'

function App() {

  return (
    <div>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/products" exact component={products}/>
      </Switch>
    </div>
    )
}

export default App
