import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react';
import { UserProfileComponent } from '../UserProfileComponent';
import { InvoiceComponent } from '../InvoiceComponent';
import { MailBoxComponent } from '../MailBoxComponent';

export const Dashboard = () => {
    return <BrowserRouter>
                <Container >
                    <Switch>
                        {/*<Route exact path="/" component={login}/>
                        <Route exact path="/Login" component={login}/>
                        <Route exact path="/Register" component={register}/>*/}
                        <Route exact path="/" component={UserProfileComponent}/>
                        <Route exact path="/user" component={UserProfileComponent}/>
                        <Route exact path="/invoice" component={InvoiceComponent}/>
                        <Route exact path="/email" component={MailBoxComponent}/>
                    </Switch>
                </Container>
            </BrowserRouter>
}