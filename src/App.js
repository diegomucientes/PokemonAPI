
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Pokemon from './Components/Pokemon';
import PokemonAxios from './Components/PokemonAxios';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/axios">
                        <PokemonAxios />
                    </Route>
                    <Route exact path="/">
                        <Pokemon/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;