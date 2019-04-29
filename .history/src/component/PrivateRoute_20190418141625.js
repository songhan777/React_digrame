import React from 'react'
import { Route,Redirect } from "react-router-dom";


function PrivateRoute({ component: Component, authenticated:fakeAuth, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          fakeAuth.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
/* fucntion PrivateRoute() {
    constructor(props) {
        super(props)
        this.store = props.store.authenticated//加载仓库
        this.isAuthenticated = this.store.isAuthenticated//仓库中变量
        this.authenticated = this.store.authenticated// 登录修改变量方法
        this.sigout = this.store.sigout// 退出
    }
    render() {
        const { component:Com, ...rest } = this.props
        console.log(this.props)
        return (
            <Route
              {...rest}
              render={props => {
                  console.log(props)
                return this.isAuthenticated ? (
                    <Com {...props} />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/",
                        state: { from: props.location }
                      }}
                    />
                  )
              }
              }
            />
          );
    }

  } */
  
  export default PrivateRoute 