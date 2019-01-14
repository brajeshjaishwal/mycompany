import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Segment, Grid } from 'semantic-ui-react';
import AppOptions from './AppOptions';
import { AppHeader } from './AppHeader';

import UserProfileComponent from '../users/users'
import { InvoiceComponent } from '../invoice/InvoiceComponent';
import { MailBoxComponent } from '../emails/MailBoxComponent';
import { DocumentsComponent } from '../documents/Documents';
import { SettingsComponent } from '../settings/Settings';
import { PurchaseComponent } from '../purchases/Purchase'
import RegisterComponent from '../users/register';
import LoginComponent from '../users/login';

export const App = () => {
    return <BrowserRouter>
                <Segment >
                    <AppHeader />
                    <Grid columns={2} >
                        <Grid.Column width={3}>
                            <AppOptions />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <Segment >
                                <Switch>
                                    <Route exact path="/Login" component={LoginComponent}/>
                                    <Route exact path="/Register" component={RegisterComponent}/>
                                    <Route exact path="/" component={ UserProfileComponent }/>
                                    <Route exact path="/user" component={ UserProfileComponent }/>
                                    <Route exact path="/invoice" component={InvoiceComponent}/>
                                    <Route exact path="/email" component={ MailBoxComponent }/>
                                    <Route exact path="/documents" component={DocumentsComponent}/>
                                    <Route exact path="/purchase" component={PurchaseComponent}/>
                                    <Route exact path="/settings" component={ SettingsComponent }/>
                                </Switch>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </BrowserRouter>
}