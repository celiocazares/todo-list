import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authenticationActions } from "../../actions/authenticationActions"

//COMPONENTS
import { Button, Input } from 'antd';

//STYLE
import styled from 'styled-components'


const Container = styled.div`
  display: grid;
  grid-template-rows: 20vh 70vh 10vh;
  text-align:center;
  align-items: middle;
`
const Header = styled.header`
  // background-color: red
`

const InputBox = styled.div`
  // margin: auto 0
  width: 50%;
  margin: 0 auto;
  align-self: center;
  input {
    margin: 5px
  }
`

const Footer = styled.footer`
  // background-color: blue
`

const Login = () => {
  const [userName, setUser] = useState('');
  const [userPassword, setPassword] = useState('');
  const loginReducer = useSelector(props => props.authenticationReducer);
  const dispatch = useDispatch();
  const history = useHistory()




  const loginCallBack = (response) => {
    history.push('/users')
  }

  const login = () => {
    const params = {
      username: userName,
      password: userPassword
    }
    dispatch(authenticationActions.login(params, loginCallBack))
  }

  console.log('loginReducer', loginReducer)

  return (
    <Container>
      <Header>
        Login
      </Header>
      <InputBox>
        <Input type="text" value={userName} onChange={event => setUser(event.target.value)} placeholder="Username" />
        <Input type="password" value={userPassword} onChange={event => setPassword(event.target.value)} placeholder="Password" />
        <Button loading={loginReducer.loginLoading} type="primary" onClick={login}>Login</Button>
      </InputBox>
      <Footer>
        FOOTER
      </Footer>
    </Container>
  )
}

export default Login
