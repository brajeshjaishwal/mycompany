import React from 'react';
import { Segment, Header, Image } from 'semantic-ui-react'

export const UserProfileComponent = () => {
    return (
            <Segment basic>
                <Header as='h3'>User profiles component</Header>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
        );
    }