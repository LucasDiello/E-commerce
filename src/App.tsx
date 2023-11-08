import { Route, Switch } from 'react-router-dom'
import './App.css'
import Items from './components/Items'

function App() {

  return (
    <div>
      <Switch>
        <Route path="/" exact component={Items}/>
      </Switch>
    </div>
    )
}

export default App
