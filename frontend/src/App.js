import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={TicketList} />
                <Route path='/submit' component={TicketForm} />
            </Switch>
        </Router>
    );
}

export default App;