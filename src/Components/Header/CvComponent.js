import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

import CvEditComponent from "../../scenes/EditCV/component";
import CvSearchComponent from "../../scenes/Search/component";
import Logo from "../../CGI_Logo_color.png"

class CvComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  render() {
    const { content } = this.props;
    return (
      <div>
        <div id="appBar">
          <div className="container-fluid">
            <img className="appBarLogo" src={Logo} />
            <div className="appBarTitle">CV Library</div>
            <nav>
              <Link to="/view">View</Link>
              <Link to="/edit">Edit</Link>
              <Link to="/search">Search</Link>
              <Link to="/logout"><i className="fa fa-sign-out"></i></Link>
            </nav>
          </div>
        </div>
        <Tabs className="tabs hidden">
          <Tab containerElement={<Link to="/view" />} label="My CV" />
          <Tab containerElement={<Link to="/edit" />} label="Edit" />
          <Tab containerElement={<Link to="/search" />} label="Search" />
        </Tabs>
        {content}
        <footer>
          <div className="container-fluid">
            <div className  ="copyright">© CGI Group Inc.</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default CvComponent;
