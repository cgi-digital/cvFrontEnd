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
    const { user } = this.props;
    return (
      <div>
        <div id="appBar">
          <div className="container-fluid">
            <img className="appBarLogo" src={Logo} />
            <div className="appBarTitle">CV Library</div>
            <ul id="nav">
              <li>
                <Link to="/search" className="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Search"><i className="fa fa-search"></i></Link>
              </li>
              <li>
                <Link to="view" className="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Profile" ><i className="fa fa-user"></i></Link>
              </li>
              <li>
                <Link to="logout" className="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Logout" ><i className="fa fa-sign-out"></i></Link>
              </li>
            </ul>
          </div>
        </div>
        <Tabs className="tabs hidden visible-xs">
          <Tab containerElement={<Link to="/view" />} label="My CV" />
          <Tab containerElement={<Link to="/edit" />} label="Edit" />
          <Tab containerElement={<Link to="/search" />} label="Search" />
        </Tabs>
        {content}
        <footer>
          <div className="container-fluid">
            <div className="copyright">© CGI Group Inc.</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default CvComponent;
