import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu pointing secondary >
          <Menu.Item className='menu' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item className='menu' name='your history' active={activeItem === 'your history'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }

}