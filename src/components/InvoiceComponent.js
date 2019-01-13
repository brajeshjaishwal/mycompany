import React from 'react';
import { Segment, Header, Image } from 'semantic-ui-react'

export const InvoiceComponent = () => {
    return (
            <Segment basic>
                <Header as='h3'>Your invoices</Header>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
        );
    }