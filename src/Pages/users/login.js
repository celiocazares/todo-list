import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { authenticationActions } from "../../actions/authenticationActions"

//STYLE
import styled from 'styled-components'

const Login = () => {
  const [userName, setUser] = useState('');
  const [userPassword, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory()


  const Container = styled.div`
    display: grid;
    grid-template-rows: 20vh 70vh 10vh;
    text-align:center;
  `

  const Header = styled.header`
    // background-color: red
  `

  const InputBox = styled.div`
    // margin: auto 0
  `

  const Footer = styled.footer`
    // background-color: blue
  `

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

  console.log('userName', userName)
  console.log('userPassword', userPassword)

  return (
    <Container>
      <Header>
        Login
      </Header>
      <InputBox>
        <input type="text" value={userName} onChange={event => setUser(event.target.value)} placeholder="Username" />
        <input type="password" value={userPassword} onChange={event => setPassword(event.target.value)} placeholder="Password" />
        <div>
          <button onClick={login}>Login</button>
        </div>
      </InputBox>
      <Footer>
        FOOTER
      </Footer>
    </Container>
  )
}

export default Login
