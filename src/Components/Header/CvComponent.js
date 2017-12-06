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

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

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
                <Link to="/search" className="btn btn-default"><i className="fa fa-search"></i></Link>
              </li>
              <li className="dropdown">
                <a className="btn btn-default dropdown-toggle" data-toggle="dropdown" ><i className="fa fa-user"></i></a>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li className="dropdown-user-detail">
                    {this.props.user.firstname}&nbsp;{this.props.user.lastname}
                  </li>
                  <li><Link to="/view"><i className="fa fa-user"></i>&nbsp;Profile</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="/logout"><i className="fa fa-sign-out"></i>&nbsp;Logout</Link></li>
                </ul>
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
