import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchItem,addToBasket} from "../actions";
import {itemSelector} from "../selectors";
import {Link } from 'react-router-dom'
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';

const LeftPart = styled.div`
    min-width:50%
    float:left
    
`
const RightPart = styled.div`
    max-width:50%;
    float:left
`

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

const Image = styled.img`
    margin-left:20%
`

const AddToBasket = styled.div`
    margin-top:5%
    margin-bottom:5%
`


class ItemPage extends Component {

    componentDidMount() {
        this.props.fetchItem(this.props.match.params.id)
    }


    render() {
        const item = this.props.data.get('data').toJS()
        return (
            <div>
                <div className='spinner'>
                    <ClipLoader
                        classname='spinner'
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={this.props.data.get('loading')}
                    />
                </div>
                {this.props.data.get('success') === true && this.props.data.get('loading') === false  &&
                    <div>

                        <LeftPart >
                            <div>
                                <Name>{item.name}</Name>
                                <Image src={item.image} width={300} height={300} alt=""/>
                                <Price>Цена {item.price}грн</Price>

                            </div>

                        </LeftPart>
                        <RightPart >
                            <AddToBasket>
                                <RaisedButton onClick={()=>this.props.addToBasket(item)} primary={true}>
                                    Добавить в корзину
                                </RaisedButton>
                            </AddToBasket>
                            <Tabs>
                                <Tab label='Описание'>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                    </p>
                                </Tab>
                                <Tab label='Состав'>
                                    <ul>{item.ingredients !== undefined && item.ingredients.split(',').map((item)=><li key={item}>{item}</li>)}</ul>
                                </Tab>

                            </Tabs>


                        </RightPart>
                    </div>
                }



            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data:itemSelector(state),
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({fetchItem,addToBasket},dispatch);


export default connect(mapStateToProps,mapDispatchToProps)(ItemPage);
