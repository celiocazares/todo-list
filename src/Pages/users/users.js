import { Button, Drawer, Input, Table } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../../actions/usersActions";

//STYLE
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const UserWrap = styled.div`
  input {
    margin: 5px 0px
  }
`


const Users = () => {
  const initialUserData = { name: '', password: '', confirmPassword: '' };
  const dispatch = useDispatch();
  const [drawerActivated, setDrawer] = useState(false);
  const [isUpdating, setUpdating] = useState(false);
  const [userData, setUserData] = useState(initialUserData);

  // PROPS
  const usersReducer = useSelector(props => props.usersReducer);
  const { usersList, userLoading, usersLoading, user } = usersReducer

  const handleDrawer = (bool) => {
    setDrawer(bool)
    if (bool === false) setUserData(initialUserData)
  }

  const handleInputs = (event) => {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value })
  }

  const handleUpdateDrawer = (info) => {
    dispatch(usersActions.fetchUserById(info.public_id, () => { setUpdating(true); handleDrawer(true) }))
    // setUpdating(true)
  }

  useEffect(() => {
    dispatch(usersActions.fetchUsers())
  }, []);

  useEffect(() => {
    setUserData({ ...userData, name: user?.name })
    debugger
  }, [user, isUpdating]);



  const actionButtons = (props, record) => {
    return (
      <>
        <Button loading={userLoading} onClick={() => handleUpdateDrawer(record)} shape="circle" type="primary" icon={<FontAwesomeIcon icon={faEdit} />}></Button>
        <Button loading={userLoading} danger shape="circle" type="primary" icon={<FontAwesomeIcon icon={faTrash} />}></Button>
      </>
    )
  }


  const userColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: "50%"
    },
    {
      title: 'Profile',
      dataIndex: 'admin',
      key: 'admin',
      width: "40%",
      render: (value) => value ? "Yes" : "No"
    },
    {
      title: 'Actions',
      dataIndex: 'admin',
      key: 'public_id',
      width: "10%",
      render: actionButtons
    },
  ]
  return (
    <>
      <h1>Users <Button onClick={() => setDrawer(!drawerActivated)} type="primary" shape="circle" > + </Button></h1>
      <Table loading={usersLoading} columns={userColumns} rowKey="public_id" dataSource={usersList} />

      <Drawer
        title={isUpdating ? "Update" : "Insert"}
        placement="right"
        closable={false}
        onClose={() => handleDrawer(false)}
        visible={drawerActivated}
      // key={placement}
      >
        <UserWrap >
          <Input name="name" onChange={handleInputs} value={userData.name} placeholder="Inform user name" />
          <Input name="password" onChange={handleInputs} type="password" value={userData.password} placeholder="Inform user password" />
          <Input name="confirmPassword" onChange={handleInputs} type="password" value={userData.confirmPassword} placeholder="Confirm user password" />
        </UserWrap>

      </Drawer>
    </>
  )
}

export default Users
