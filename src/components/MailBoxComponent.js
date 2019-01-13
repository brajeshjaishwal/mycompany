import React from 'react';
import { Segment, Header, Image } from 'semantic-ui-react'

export const MailBoxComponent = () => {
    return (
            <Segment basic>
                <Header as='h3'>Your emails</Header>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
        );
    }