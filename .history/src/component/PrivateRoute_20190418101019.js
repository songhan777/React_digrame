import React, {Component} from 'react'

export default class PrivateRoute extends Component () {
    constructor(props) {
        super(props)
        cosnt { component: Component, ...rest } = props
    }
    render() {
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
  