import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    Link,
    withRouter
} from "react-router-dom";

import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account_type:0,
            mobileMenu:false,
            logoIcon:'',
            err:{}
        };
        this.onLogout = this.onLogout.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    onLogout(params) {
        
    }

    toggleMenu(params){

    }

    componentDidMount(){
        console.log('header mounted');
    }

    render() {
        return (
            <Box className='main-header'>
            <div className='logo-wrapper'>Header <Icon>star</Icon></div>
            <div className='nav-link'>
                <ul>
                    <li><Link to='./'>Home</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </div>
            </Box>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //logout: userData => dispatch(logout(userData))
    };
}

const mapStateToProps = state => ({
    ...state
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));