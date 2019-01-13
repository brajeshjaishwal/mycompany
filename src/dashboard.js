import React, { Component } from 'react';
import './App.css';
import { Segment, Header, Image, Grid, Search, Button } from 'semantic-ui-react'

export const dashboard = () => {
    return (
        <div>
            <div>
                <Search></Search>
                <Button>Logout</Button>
            </div>
            <Segment basic>
                <Header as='h3'>Application Content</Header>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
        </div>
        );
    }