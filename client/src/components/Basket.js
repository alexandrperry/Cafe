import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'material-ui/List';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {basketSelector} from "../selectors";
import RaisedButton from 'material-ui/RaisedButton';
import {deleteItem} from "../actions";

class Basket extends Component {
    render() {
        const basket = this.props.basket
        return(
            <div>
                {basket.size === 0 ? <p>Ничего не добавленно</p>
                    : basket.toJS().map(item => {
                        return (
                            <List>
                                <ListItem
                                    key={item.id}
                                    primaryText={item.name}
                                    secondaryText={`${item.price}грн`}
                                    disabled={true}
                                    rightIconButton={<RaisedButton onClick={() => this.props.deleteItem(item.id)}>Удалить</RaisedButton>}/>
                            </List>
                        )
                    })
                }
            </div>
        )


    }
}


const mapStateToProps = state =>{
    return {
        basket:basketSelector(state)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({deleteItem},dispatch)



export default connect(mapStateToProps,mapDispatchToProps)(Basket);
