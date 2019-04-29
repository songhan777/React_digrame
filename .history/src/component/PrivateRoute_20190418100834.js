import React, {Component} from 'react'

export default class PrivateRoute extends Component ({ component: Component, ...rest }) {
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
  