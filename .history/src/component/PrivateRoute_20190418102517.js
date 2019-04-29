import React from 'react'
import { Redirect } from "react-router-dom";
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class PrivateRoute extends React.Component () {
    constructor(props) {
        super(props)
        this.store = props.store.authenticated//加载仓库
        this.isAuthenticated = this.store.isAuthenticated//仓库中变量
        this.authenticated = this.store.authenticated// 登录修改变量方法
        this.sigout = this.store.sigout// 退出
    }
    render() {
        const { component:Component, ...rest } = this.props
        return (
            <Route
              {...rest}
              render={props =>
                this.isAuthenticated ? (
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