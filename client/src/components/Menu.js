import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAllMenu} from "../actions";
import {allMenuSelector, pizzaMenuSelector, saladMenuSelector, wingsMenuSelector} from "../selectors";
import MenuItem from "./MenuItem";

// First way to import
import { ClipLoader } from 'react-spinners';


class Menu extends Component {
    constructor(){
        super()
        this.state = {
            type:'all'
        }
    }

    componentDidMount() {
        this.props.fetchAllMenu()
    }

    changeType = type => this.setState({type})

    render() {
        console.log('стейт',this.props.pizzaMenu.get('success'));
        return (
            <div>
                <div className='filters'>
                    <span className={this.state.type === 'all' ? 'select' : ''} onClick={() => this.changeType('all')}>All</span>
                    <span className={this.state.type === 'pizza' ? 'select' : ''} onClick={() => this.changeType('pizza')}>Pizza</span>
                    <span className={this.state.type === 'wings' ? 'select' : ''} onClick={() => this.changeType('wings')}>Wings</span>
                    <span className={this.state.type === 'salad' ? 'select' : ''} onClick={() => this.changeType('salad')}>Salad</span>
                </div>
                <div className='spinner'>
                    <ClipLoader
                        classname='spinner'
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={this.props.allMenu.get('loading')}
                    />
                </div>

                <div className='menu_container'>
                    {this.state.type === 'all' && this.props.allMenu.get('success') === true && this.props.allMenu.get('data').map((item) => {
                        return (
                            <MenuItem  item={item.toJS()}/>
                        )
                    })}
                </div>
                <div className='menu_container'>
                    {this.state.type === 'pizza' && this.props.pizzaMenu.get('success') === true && this.props.pizzaMenu.get('data').map((item) => {
                        return (
                            <MenuItem  item={item.toJS()}/>
                        )
                    })}
                </div>
                <div className='menu_container'>
                    {this.state.type === 'wings' && this.props.wingsMenu.get('success') === true && this.props.wingsMenu.get('data').map((item) => {
                        return (
                            <MenuItem  item={item.toJS()}/>
                        )
                    })}
                </div>
                <div className='menu_container'>
                    {this.state.type === 'salad' && this.props.saladMenu.get('success') === true &&  this.props.saladMenu.get('data').map((item) => {
                        return (
                            <MenuItem  item={item.toJS()}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        allMenu:allMenuSelector(state),
        pizzaMenu:pizzaMenuSelector(state),
        wingsMenu:wingsMenuSelector(state),
        saladMenu:saladMenuSelector(state)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({fetchAllMenu},dispatch);


export default connect(mapStateToProps,mapDispatchToProps)(Menu);
