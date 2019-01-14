import React, {Component} from 'react';
import { Image, Input, Grid, Segment, Button, Header } from 'semantic-ui-react';

export class AppHeader extends Component {
    onLogout = () => {

    }
    render() {
        //let user = sessionStorage.getItem('name')
        return (
                    <Segment inverted color='blue'>
                        <Grid stretched columns={4}>
                            <Grid.Column >
                                <Header as='h2' color='orange'>XYZ</Header>
                            </Grid.Column>
                            <Grid.Column />
                            <Grid.Column><Input icon='search' placeholder='Search ...' /></Grid.Column>
                            <Grid.Column >
                                <Grid columns={2} >
                                    <Grid.Column >
                                        <div>
                                            <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' avatar size ='mini' />
                                            <span>Nihal Shetty</span>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column >
                                        <Button icon='lock' compact circular content='Logout' onClick={this.onLogout}></Button>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                        </Grid>
                    </Segment>
        
        )
    }
}