import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {MyInput} from "./MyInput";
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {clickAddDish} from "../actions";

class FormAddDish extends Component {
    render() {

        return (
            <div>
                <Fragment>
                    <div>
                        <label>Type</label>
                        <div>
                            <Field
                                name="type"
                                component={MyInput}
                                type="text"
                                placeholder="Type"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Name</label>
                        <div>
                            <Field
                                name="name"
                                component={MyInput}
                                type="text"
                                placeholder="Name"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Image</label>
                        <div>
                            <Field
                                name="image"
                                component={MyInput}
                                type="text"
                                placeholder="Src for image"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Ingredients</label>
                        <div>
                            <Field
                                name="ingredients"
                                component={MyInput}
                                type="text"
                                placeholder="Cheese, potatoes..."
                            />
                        </div>
                    </div>
                    <div>
                        <label>Price</label>
                        <div>
                            <Field
                                name="price"
                                component={MyInput}
                                type="text"
                                placeholder="125"
                            />
                        </div>
                    </div>
                    <button onClick={()=>this.props.clickAddDish(this.props.input)}>Ku</button>
                </Fragment>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        input:state.form
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({clickAddDish},dispatch);

FormAddDish.propTypes = {};
FormAddDish.defaultProps = {};

export default connect(mapStateToProps,mapDispatchToProps)(FormAddDish);
