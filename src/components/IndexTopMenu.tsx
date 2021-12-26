import { Menu } from 'antd'
import { CustomerServiceOutlined, HeartOutlined } from '@ant-design/icons'
import React from 'react'
import { Link, Routes, HashRouter as Router, Route } from 'react-router-dom'
import SearchTop from './search/SearchTop'
import RecommendMusic from './find_music/RecommendMusic'

const { SubMenu } = Menu
//主页顶部菜单
class IndexTopMenu extends React.Component {
  state = {
    current: 'mail',
    redirect: 1
  }

  handleClick = (e: { key: any; }) => {
    this.setState({ current: e.key })
  }
  recommendClick = () => {
    this.setState({
      current: 'mail',
      redirect: this.state.redirect++,
    })
    console.log(this.state.redirect)
    return (
      <Routes>
        <Route path="/recommend" element={<RecommendMusic />}>
        </Route>
      </Routes>
    );
  }


  render() {
    const { current, redirect } = this.state
    return (
      <nav>
        <Menu
          theme='dark'
          // style={{width:1920,padding:16,fontSize:16}}
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode='horizontal'
          id='TopMenu'
        >
          <SubMenu className='SubMenu' key='SubMenu' title='发现音乐' icon={<CustomerServiceOutlined />}>
            <Menu.ItemGroup>
              <Menu.Item key='recommend' onClick={this.recommendClick}>
                <Link to='/recommend'>
                  推荐
                </Link>
              </Menu.Item>
              <Menu.Item key='top'>
                <Link to='/top'>
                  排行
                </Link>
              </Menu.Item>
              <Menu.Item key='sheet'><Link to='/sheet'>
                歌单
              </Link></Menu.Item>
              <Menu.Item key='liver'><Link to='/liver'>
                电台
              </Link></Menu.Item>
              <Menu.Item key='musician'><Link to='/musician'>
                歌手
              </Link></Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key='myMusic' icon={<HeartOutlined />}>
            <Link to='/my'>
              我的音乐
            </Link>
          </Menu.Item>
          <SearchTop />
        </Menu>
      </nav>
    )
  }
}

export default IndexTopMenu