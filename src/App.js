import React, { Component } from 'react';
import './App.css';
import { AppOptions } from './AppOptions';
import { Segment, Header, Image, Grid } from 'semantic-ui-react'
import { AppHeader } from './header';

class App extends Component {
  render() {
    return (
      <div >
        <AppHeader />
        <Grid stretched>
            <Grid.Column width={3} >
              <AppOptions />
            </Grid.Column>
            <Grid.Column width={13} >
              <Segment basic>
                <Header as='h3'>Application Content</Header>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Segment>
            </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
