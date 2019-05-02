import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({ component: Component, isSet, ...rest }) => {
    return (
        <Route
        {...rest}
        render={props =>
            isSet ? (
                <Component {...props} />
            ) : (
            <Redirect
                to={{
                    pathname: "/login",
                    state: { from: props.location }
                }}
            />
            )
        }
        />
    );
}
  
const mapStateToProps = (state) => {
    return {
        isSet: state.user.isSet
    };
};
  

export default connect(
    mapStateToProps
)(PrivateRoute)