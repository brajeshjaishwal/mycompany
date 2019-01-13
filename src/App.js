import React, { Component } from 'react';
import './App.css';
import { AppOptions } from './AppOptions';
import { Grid, Segment } from 'semantic-ui-react'
import { AppHeader } from './header';
import { UserProfileComponent } from './components/UserProfileComponent';

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
              <UserProfileComponent />
            </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default App;
