import React from 'react';
import { Icon, Menu, Button, Grid, Checkbox, Card } from 'semantic-ui-react'
import { UserComponent } from './user';

export const UserProfileComponent = ({types = [], users = []}) => {
    types = ['Team']
    users = [
                {
                    "id": 1,
                    "name": "Sayli Patel ",
                    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg",
                    "jobTitle": "Web Developer",
                    "email": "sayalipatel1987@redifmail.com",
                    "address": {
                        "street": "62977 Giovanni Track",
                        "city": "New Carmelomouth",
                        "country": "Colombia",
                        "zipcode": "46974"
                    }
                },
                {
                    "id": 2,
                    "name": "Joy Farnadis",
                    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/ritu/128.jpg",
                    "jobTitle": "Web Designer",
                    "email": "joyfarnadis@redifmail.com",
                    "address": {
                        "street": "62977 Giovanni Track",
                        "city": "New Carmelomouth",
                        "country": "Colombia",
                        "zipcode": "46974"
                    }
                },
                {
                    "id": 3,
                    "name": "Rushi Chand",
                    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg",
                    "jobTitle": "UI/UX Designer",
                    "email": "rushi.chand@redifmail.com",
                    "address": {
                        "street": "62977 Giovanni Track",
                        "city": "New Carmelomouth",
                        "country": "Colombia",
                        "zipcode": "46974"
                    }
                },
                {
                    "id": 4,
                    "name": "Bradford Kyen",
                    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg",
                    "jobTitle": "Web Developer",
                    "email": "bradford.keyn@redifmail.com",
                    "address": {
                        "street": "62977 Giovanni Track",
                        "city": "New Carmelomouth",
                        "country": "Colombia",
                        "zipcode": "46974"
                    }
                },
            ]
    return (
        
            <div>
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
                        <Card.Group fluid>
                        {
                            users.map(u => <UserComponent user = {u} />)
                        }
                        </Card.Group>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }