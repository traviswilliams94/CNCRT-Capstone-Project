import React from 'react';
import {NavLink} from 'react-router-dom';
import { Icon, Sidebar, Menu } from 'semantic-ui-react';

function NavBar(){
    return (
        <div>
            <header id='pageHeader'>
                
            </header>
        
        <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'
            style={{backgroundColor: 'rgb(0, 0, 0)', paddingTop: '50px'}}
            background='#000000'
        >
            <NavLink exact to='/'>
            <Menu.Item >
            <Icon name='home' />
            Home
            </Menu.Item>
            </NavLink>

            <NavLink to='/concerts'>
            <Menu.Item >
            <Icon name='music' />
            My Concerts
            </Menu.Item>
            </NavLink>

            <NavLink to='/festivals'>
            <Menu.Item >
            <Icon name='users' />
            My Festivals
            </Menu.Item>
            </NavLink>

            <NavLink to='venues'>
            <Menu.Item >
            <Icon name='building' />
            Venues
            </Menu.Item>
            </NavLink>

            <NavLink to='/account'>
            <Menu.Item >
            <Icon name='settings' />
            Account
            </Menu.Item>
            </NavLink>
        </Sidebar>
        </div>
    )
}

export default NavBar;