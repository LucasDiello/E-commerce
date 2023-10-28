import { Route, Switch } from 'react-router-dom'
import './App.css'
import Login from './components/Login'

function App() {

  return (
    <div>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </div>
    )
}

export default App
