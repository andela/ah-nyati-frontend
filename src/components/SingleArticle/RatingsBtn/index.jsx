import React, { Component } from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';


/**
 * This component is called DropRight component, it renders the dropdown component that holds
 * the link to article rating modal.
 */

class DropLeft extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  render() {
    return (
      <div>
        <Dropdown className="float-right mb-5" id="toggle" direction="left" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle className="bg-white text-dark remove-border">
            <i className="fas fa-ellipsis-v fa-4x" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Report This Article</DropdownItem>
            <DropdownItem divider />
            <DropdownItem data-toggle="modal" data-target="#ratingsModal">Rate this Article</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Bookmark this Article</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default DropLeft;
