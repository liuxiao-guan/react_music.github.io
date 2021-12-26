import React, { Component } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import IndexTopMenu from '../IndexTopMenu'

export default class SearchTop extends Component {
  goToSearchPage = (e:any) => {
    window.open(`#/search/${e.target.value}`, '_self')
    console.log(e.target.value)
    // return <Router>
    //   <Routes>
    //     <Route path="/:keyword" element={<FirstSearchResult/>}>
    //     </Route>
    //   </Routes>
    // </Router>
  }

  render() {
    return (
      <>
      {/* <IndexTopMenu/> */}
      <div className='top-container'>
          <Input
            size='small'
            // style={{width:200,paddingTop:0}}
            prefix={<SearchOutlined />}
            placeholder='搜索'
            onPressEnter={this.goToSearchPage} />
        </div></>
    )
  }
}