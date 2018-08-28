import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';

const Name = styled.h5`
    color: #CC0033;
    font-size:20px;
    text-align:center
`

const Price = styled.p`
    color: #CC0033;
    font-size:15px;
    text-align:center
`

const CenterButton = styled.div`
    display:flex;
    justify-content:center
`


class MenuItem extends Component {

    render() {
        const {item} = this.props;
        return (
            <div className='menu_item' key={item.id}>
                <Name>{item.name}</Name>
                <img src={item.image} alt=""/>
                <Price>{item.price}грн</Price>
                <CenterButton>
                    <Link to={`/catalog/${item.id}`}>
                        <RaisedButton primary={true}>
                            Детальней
                        </RaisedButton>
                    </Link>
                </CenterButton>


            </div>
        );
    }
}

MenuItem.propTypes = {};
MenuItem.defaultProps = {};

export default MenuItem;
