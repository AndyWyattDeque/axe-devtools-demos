import React from 'react'
import { Layout, TopBarItem, Icon } from '@deque/cauldron-react'
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
    <footer className="Footer">
      <p>Awesome Recipes Inc.</p>
      <div>
        <a href="https://github.com/dequelabs">
          <Icon type="github" />
        </a>
        <a href="https://linkedin.com/deque">
          <Icon type="linkedin" />
        </a>
      </div>
      <div>
        <label className="Field__label">Site Search</label>
        <input type="text" className="Field__text-input" />
      </div>
    </footer>
  </div>
)

export default Skeleton
