import React from 'react'
import { Redirect } from "react-router-dom";
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class PrivateRoute extends React.Component () {
    constructor(props) {
        super(props)
        
    }
    render() {
        const { component:Component, ...rest } = this.props
        return (
            <Route
              {...rest}
              render={props =>
                fakeAuth.isAuthenticated ? (
                  <Component {...this.props} />
                ) : (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: this.props.location }
                    }}
                  />
                )
              }
            />
          );
    }

  }
  
  export default PrivateRoute 