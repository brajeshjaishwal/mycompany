import React, { Component } from 'react';
import './App.css';
import { AppOptions } from './AppOptions';
import { Grid, Segment } from 'semantic-ui-react'
import { AppHeader } from './AppHeader';
import { Dashboard } from './Dashboard';

class App extends Component {
  render() {
    return (
      <Segment >
        <AppHeader />
        <Grid columns={2}>
            <Grid.Column  width={3}>
              <AppOptions />
            </Grid.Column>
            <Grid.Column  width={13}>
              <Dashboard />
            </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default App;