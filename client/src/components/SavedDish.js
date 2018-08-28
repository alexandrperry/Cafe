import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SavedDish extends Component {

    render() {
        console.log(this.props.data)
        const data = this.props.data.data
        return (
            <div>
                {this.props.data.loading === true ? <p>Saving...</p> :
                    this.props.data.success === true && this.props.data.error !== true &&
                        <div>
                            <h5>Your Saved Dish</h5>
                            <p>{data.type}</p>
                            <p>{data.name}</p>
                            <img src={data.image} alt="image"/>
                            <p>Ingredients: {data.ingredients}</p>
                            <p>Price: {data.price}</p>
                        </div>

                }
                {this.props.data.error === true && this.props.data.loading !== true  && <p>Error</p>}
            </div>
        );
    }
}

SavedDish.propTypes = {};
SavedDish.defaultProps = {};

export default SavedDish;
