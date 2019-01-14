import React from 'react'
import { Card, Image, Icon, Dropdown, Grid, Divider } from 'semantic-ui-react';

export const UserComponent = ({user}) => {
    return (
        <Card>
            <Card.Content>
                <Grid columns={3}>
                    <Grid.Column >
                        <Dropdown icon='bars' floating button className='icon' position='left'>
                            <Dropdown.Menu>
                                <Dropdown.Item icon='pencil' text='Edit' />
                                <Dropdown.Item icon='delete' text='Remove' />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Image size='tiny' src = {user.img} circular/>
                    </Grid.Column>
                    <Grid.Column textAlign='right'>
                        <Icon name='share' />
                    </Grid.Column>
                </Grid>
                <Divider hidden></Divider>
                <Card.Header textAlign='center' >{user.name}</Card.Header>
                <Card.Meta  textAlign='center'>{user.jobTitle}</Card.Meta>
                <Card.Description  textAlign='center'>{user.email}</Card.Description>
            </Card.Content>
            <Card.Content extra textAlign='center' >
                <div >
                    <Icon name='facebook' />
                    <Icon name='twitter' />
                    <Icon name='instagram' />
                    <Icon name='linkedin' />
                </div>
            </Card.Content>
            </Card>
    )
}