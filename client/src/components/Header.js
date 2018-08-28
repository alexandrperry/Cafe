import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {sumSelector} from "../selectors";

class Header extends Component {


    render() {

        console.log('sum',this.props.sum);
        const Badge = () => (

            <Badge
                badgeContent={this.props.sum}
                primary={false}
                badgeStyle={{top: 18, right: 15}}
            />

        );

        return (
            <AppBar
                iconElementLeft={<div>
                    <Link to={'/'}>
                        <RaisedButton secondary={false}>
                            Главная
                        </RaisedButton>
                    </Link>
                    <Link to={'/basket'}>
                        <RaisedButton secondary={true}>
                            Корзина
                        </RaisedButton>
                    </Link>
                </div>}

            >

                <h3>Сумма в корзине {this.props.sum}</h3>


            </AppBar>
        );
    }
}


const mapStateToProps = state =>{
    return {
        sum:sumSelector(state)
    }
}


export default connect(mapStateToProps,null)(Header);