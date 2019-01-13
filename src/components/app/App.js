import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react';
import AppOptions from './AppOptions';
import { AppHeader } from './AppHeader';

import { UserProfileComponent } from '../UserProfileComponent';
import { InvoiceComponent } from '../InvoiceComponent';
import { MailBoxComponent } from '../MailBoxComponent';

export const App = () => {
    return <BrowserRouter>
                <Container >
                    <AppHeader />
                    <Grid columns={2}>
                        <Grid.Column  width={3}>
                            <AppOptions />
                        </Grid.Column>
                        <Grid.Column  width={13}>
                            <Switch>
                                {/*<Route exact path="/" component={login}/>
                                <Route exact path="/Login" component={login}/>
                                <Route exact path="/Register" component={register}/>*/}
                                <Route exact path="/" component={UserProfileComponent}/>
                                <Route exact path="/user" component={UserProfileComponent}/>
                                <Route exact path="/invoice" component={InvoiceComponent}/>
                                <Route exact path="/email" component={ MailBoxComponent }/>
                            </Switch>
                        </Grid.Column>
                    </Grid>
                </Container>
            </BrowserRouter>
}