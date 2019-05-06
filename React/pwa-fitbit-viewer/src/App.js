import React, { Component } from 'react';
import Chart from './components/Chart';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// const API_URL = 'https://api.fitbit.com/1/user/-/profile.json';
// const API_URL = 'https://api.fitbit.com/1/user/[user-id]/activities/heart/date/[date]/[period].json';
// const API_URL = 'https://api.fitbit.com/1/user/[user-id]/activities/heart/date/[base-date]/[end-date].json';
// const API_URL = 'https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json'
// const API_URL = 'https://api.fitbit.com/1/user/-/activities/tracker/calories/date/2019-03-26/2019-04-01.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              HealthViewer
            </Typography>
          </Toolbar>
        </AppBar>
        <header className="App-header">
          <Chart />
        </header>
      </div>
    );
  }
}

export default App;
