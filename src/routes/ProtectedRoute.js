import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import Landing from '../components/Login'

const ProtectedRoute = ({component:Component,authUser,...restProps}) => {
    return <Route 
    {...restProps}
    render={(props) =>{
        if(authUser){
            return <Component {...props}/>
        }else{
          return <Landing />
        }
    }}
    />
}


export default ProtectedRoute
