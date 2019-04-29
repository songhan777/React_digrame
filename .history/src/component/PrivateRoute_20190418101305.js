import React, {Component} from 'react'

export default class PrivateRoute extends Component () {
    constructor(props) {
        super(props)
        
    }
    render() {
        const { component, ...rest } = this.props
        return (
            <Route
              {...rest}
              render={props =>
                fakeAuth.isAuthenticated ? (
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

  }
  