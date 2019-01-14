import React, {Component} from 'react';
import { Image, Input, Grid, Segment, Button, Header } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchUsersAction } from '../../actions/actions';

class AppHeader extends Component {
    onLogout = () => {

    }

    onChangeSearchString = async (event) => {
        await this.props.searchUsers(event.target.value)
    }
    render() {
        //let user = sessionStorage.getItem('name')
        return (<Segment inverted color='blue'>
                    <Grid stretched columns={4}>
                        <Grid.Column >
                            <Header as='h2' color='orange'>XYZ</Header>
                        </Grid.Column>
                        <Grid.Column />
                        <Grid.Column>
                            <Input icon='search' placeholder='Search ...' onChange={this.onChangeSearchString}/>
                        </Grid.Column>
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

function mapDispatchToProps(dispatch) {
    return {
        searchUsers: bindActionCreators (searchUsersAction, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(AppHeader)