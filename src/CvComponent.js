import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

import CvEditComponent from "./CvEditComponent";
import CvSearchComponent from "./CvSearchComponent";

class CvComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    const { content } = this.props;
    return (
      <div id="appBar">
        <AppBar className="AppBarHeader"
          title="CV Lib"
          showMenuIconButton={false}
        />
        <Tabs className="tabs">
          <Tab containerElement={<Link to="/view" />}label="My CV" />
          <Tab containerElement={<Link to="/edit" />} label="Edit" />
          <Tab containerElement={<Link to="/search" />}label="Search" />
        </Tabs>
        {content}
      </div>
    );
  }
}

export default CvComponent;
