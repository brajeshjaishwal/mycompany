import React from 'react';
import { Grid, Image, Menu, Input } from 'semantic-ui-react';

export const AppHeader = () => {
    return (
        <div>
            <Grid columns={2} stretched>
                <Grid.Column width={3}>
                    <Menu vertical inverted color='grey'>
                        <Menu.Item as='a' >
                            XYZ
                        </Menu.Item>
                    </Menu>
                </Grid.Column >
                <Grid.Column width={13}>
                    <Grid columns={2} stretched>
                        <Grid.Column width={9}>
                            <Input icon='search' placeholder='search ...' fluid/>  
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <div>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' avatar size ='mini' />
                                <span>Nihal Shetty</span>
                            </div>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
        </div>
    )
}