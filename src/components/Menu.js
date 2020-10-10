import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Menu } from 'antd';
import { useHistory } from "react-router-dom";
import { PAGES_CONFIG } from "../config/menu"

const Page = Menu.Item

const MenuApp = () => {
  const history = useHistory()
  const usersReducer = useSelector(props => props.usersReducer);

  const { usersList } = usersReducer;


  const handlePage = (info) => {
    debugger
    const path = PAGES_CONFIG[info.key - 1].path;
    debugger
    history.push(path)
  }

  // useEffect(() => {
  //     dispatch(usersActions.fetchUsers())
  // }, []);

  return (
    <>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="horizontal"
        onClick={handlePage}
      // theme="dark"
      >
        {PAGES_CONFIG && PAGES_CONFIG.map(page => <Page key={page.key}>{page.name}</Page>)}

      </Menu>
    </>
  )
}

export default MenuApp
