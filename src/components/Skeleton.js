import React from 'react'
import { Layout, TopBarItem } from '@deque/cauldron-react'
import { Link, Outlet } from 'react-router-dom'
import './Skeleton.css'

const Skeleton = () => (
  <div className="App">
    <nav className="TopBar">
      <ul>
        <TopBarItem>
          <Link to="/">Dashboard</Link>
        </TopBarItem>
        <TopBarItem>
          <Link to="/settings">Settings</Link>
        </TopBarItem>
      </ul>
    </nav>
    <Layout>
      <Outlet />
    </Layout>
  </div>
)

export default Skeleton
