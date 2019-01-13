import React from 'react';
import { Grid, Search, Button, Menu } from 'semantic-ui-react';

export const AppHeader = () => {
    return (
        <div>
            <Grid columns={2}>
                <Grid.Column >
                    <Menu vertical inverted color='blue'>
                        <Menu.Item as='a' >
                            XYZ Company
                        </Menu.Item>
                    </Menu>
                </Grid.Column>
                <Grid.Column >
                    <Grid columns={2}>
                        <Grid.Column>
                            <Search ></Search>
                        </Grid.Column>
                        <Grid.Column >
                            <Button >Logout</Button>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
        </div>
    )
}