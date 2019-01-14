import React, {Component} from 'react';
import { Icon, Menu, Button, Grid, Checkbox, Card, Divider, Segment, Container } from 'semantic-ui-react';
import { UserComponent } from './user';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUsersAction } from '../../actions/actions'

class UserProfileComponent extends Component {
    componentDidMount = async () => {
        await this.props.fetchUsers()
    }
    render() {
        let users = this.props.users;
        if(!users) 
            return <div>Loading</div>
        else 
            return (<div>
                    <Menu text>
                        <Menu.Item header>Team</Menu.Item>
                        <Menu.Item><Icon name='users' />{users.length} Candidates</Menu.Item>
                        <Menu.Item position='right'>
                            <Button icon='add user' content='Add Member' size='small' circular primary/>
                        </Menu.Item>
                    </Menu>
                    <Grid columns={2}>
                        <Grid.Column width={3}>
                            <Menu vertical>
                                <Menu.Item><Checkbox label='Team'/></Menu.Item>
                                <Menu.Item><Checkbox label='Customer'/></Menu.Item>
                                <Menu.Item><Checkbox label='Vendor'/></Menu.Item>
                            </Menu>
                        </Grid.Column >
                        <Grid.Column width={13}>
                            <Card.Group >
                                {
                                    users.map(u => <UserComponent user = {u} key={u.id} />)
                                }
                            </Card.Group>
                        </Grid.Column>
                    </Grid>
                </div>)
    }
}

function mapStateToProps(state) {
    return {
        users: state.user.users,
        error: state.auth.error,
        loading: state.auth.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: bindActionCreators (fetchUsersAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileComponent);