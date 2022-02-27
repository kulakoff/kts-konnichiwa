import React, { FC, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link, NavLink, useParams, useNavigate } from "react-router-dom"
import { Button, Radio, Menu, Dropdown } from 'antd';
import Header from "./Header";
import Navigation from "./Navigation";

interface LayoutType {
  // children: JSX.Element
  isActive: boolean
}

type UserType = {
  id: string;
  fullName: string
}

interface UsersPageI {
  users: UserType[]
}

// const Layout2: FC<LayoutType> = ({ children }) => {
//   return <main style={{ padding: '1rem 0' }}>{children}</main>;
// };

const Layout = () => {
  const style = (isActive: any) => ({ fontWeight: isActive ? "bold" : "normal" })
  return (
    <>
      <h1>React Router</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}>
        <NavLink to="/" style={style}> Main </NavLink>
        <NavLink to="/users" style={style}>| Users </NavLink>
        <NavLink to="/about" style={style}>| About </NavLink>
      </nav>
      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>

    </>

  )
};

const MainPage = () => {
  return (
    <>
      <h2>Main Page</h2>
    </>
  );
};
const UsersPage = (props: UsersPageI) => {

  return (
    <>
      <h2>Users Page</h2>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <NavLink to={user.id}>{user.fullName}</NavLink>
          </li>
        ))
        }
      </ul>
      <Outlet />
    </>
  );
};
const AboutPage = () => {

  return (
    <>
      <h2>About Page</h2>
    </>
  );
};
const NotFoundPage = () => {
  return (
    <>
      <p>There's nothing here: 404!</p>
    </>
  );
};

const User = (onRemoveUser:any) => {
  const { userId } = useParams();
  return (
    <>
      <h2>User: {userId}</h2>
      <button type="button"><NavLink to="/users">Back to Users page</NavLink></button>
      <button type="button"><NavLink to="/">Back to Main page</NavLink></button>
      <button type="button" onClick={()=>onRemoveUser(userId)}>Remove user</button>
    </>
  )
}



const usersData: UserType[] = [
  { id: "1", fullName: 'Robin Wieruch' },
  { id: "2", fullName: 'Sarah Finnley' },
];


export const TestElements = () => {
  const navigate=useNavigate()
  const [users, setUsers] = useState<UserType[]>([])
  useEffect(() => { setUsers(usersData); console.log("set users") }, [])


  const handleRemoveUser = (userId:string):void => {
    // const { userId } = useParams();
    setUsers((state) => state.filter((user) => user.id !== userId))
    navigate("/users")
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="users" element={<UsersPage users={users} />}>
            <Route path=":userId" element={<User onRemoveUser={handleRemoveUser}/>} />
          </Route>
        </Route>

      </Routes>
    </>
  )
}


export default TestElements
