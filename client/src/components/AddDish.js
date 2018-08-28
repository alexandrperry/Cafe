import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm,submit } from 'redux-form';
import {MyInput} from "./MyInput";
import FormAddDish from "./FormAddDish";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SavedDish from "./SavedDish";


class AddDish extends Component {




    render() {


        return (
            <div>
                <FormAddDish/>
                <SavedDish data={this.props.saveData.toJS()}/>
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        saveData:state.addDish
    }
}

export default connect(mapStateToProps,null)(reduxForm({form:'addDish'})(AddDish));
