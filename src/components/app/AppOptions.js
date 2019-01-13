import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export class AppOptions extends Component {

    state = {
        activeMenu: 'user'
    }

    onClickHandler = (name) => {
        this.setState({ activeMenu: name })
        this.props.history.push(`/{name}`)
    }

    render() {
        return <Menu vertical inverted color='blue'>
                <Menu.Item as='a' active={this.state.activeMenu === 'email'} onClick={ e => this.onClickHandler('email')} >
                    <Icon name='envelope' />
                    Mail Box
                </Menu.Item>
                <Menu.Item as='a' active={this.state.activeMenu === 'invoice'} onClick={e => this.onClickHandler('invoice')}>
                    <Icon name='clone' />
                    Invoices
                </Menu.Item>
                <Menu.Item as='a' active={this.state.activeMenu === 'user'} onClick={e => this.onClickHandler('user')}>
                    <Icon name='user' />
                    User Profile
                </Menu.Item>
                <Menu.Item as='a' active={this.state.activeMenu === 'purchase'} onClick={e => this.onClickHandler('purchase')}>
                    <Icon name='clipboard list' />
                    Purchases
                </Menu.Item>
                <Menu.Item as='a' active={this.state.activeMenu === 'documents'} onClick={e => this.onClickHandler('documents')}>
                    <Icon name='folder open' />
                    Documents
                </Menu.Item>
                <Menu.Item as='a' active={this.state.activeMenu === 'settings'} onClick={e => this.onClickHandler('settings')}>
                    <Icon name='cogs' />
                    Settings
                </Menu.Item>
            </Menu>
        }
    }