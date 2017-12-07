import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import { Tabs, Tab } from 'material-ui/Tabs';
import { Link } from 'react-router';
import FontIcon from 'material-ui/FontIcon';


import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class CvViewComponent extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { user } = this.props;
    const {
      skills = [],
      qualifications = [],
      projects = [],
    } = user;

    return (
      <div className={'viewCvPage'}>
        <div id="ActionBar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 col-sm-5">
                <h1>{user.firstname}'s Profile</h1>
              </div>
              <div className="col-md-8 col-sm-7">
                <ul className="nav nav-tabs pull-left">
                  <li className="active"><a data-toggle="tab" href="#skills">Skills</a></li>
                  <li><a data-toggle="tab" href="#qualifications">Qualifications</a></li>
                  <li><a data-toggle="tab" href="#projects">Projects</a></li>
                </ul>
                <Link to="/edit" id="editProfileButton" className="btn btn-default pull-right">Edit Profile</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-5">
              <div className="cvHeader paper pd15 mb10">
                <i className="fa fa-user headerIcon"></i>
                <div className="row mb10">
                  <div className="col-xs-12">
                    <h4 className="mb10">
                      {user.lastname}, {user.firstname}
                      <a className="tableToggle" data-toggle="collapse" data-target="#InfoTable" aria-expanded="trues"><i className="fa fa-angle-down"></i></a>
                    </h4>
                    <div id="InfoTable" className="collapse in">
                      <table className="table table-condensed">
                        <tbody>
                          <tr>
                            <th>Title</th>
                            <td>{user.title}</td>
                          </tr>
                          <tr>
                            <th>Username</th>
                            <td>{user.username}</td>
                          </tr>
                          <tr>
                            <th>Email</th>
                            <td>guest@cgi.com</td>
                          </tr>
                          <tr>
                            <th>Work Phone</th>
                            <td>+44777777 7777</td>
                          </tr>
                          <tr>
                            <th>Summary</th>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-7 col-xs-12">
              <div className="tab-content">
                <div id="skills" className="tab-pane fade in active">
                  <div className="paper pd15 mb20 tab-header">
                    <h2 className="mb20">Skills</h2>
                  </div>
                  <div className="table-responsive">
                    <table className="table paper">
                      <thead>
                        <tr>
                          <th>Skill</th>
                          <th>Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        {skills.map((skill, index) => {
                          return (
                            <tr>
                              <td key={index}>{skill.skillName}</td>
                              <td >{skill.level}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div id="qualifications" className="tab-pane fade">
                  <div className="paper pd15 mb20 tab-header">
                    <h2 className="mb20">Qualifications</h2>
                  </div>
                  <table className="table paper">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Qualification Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {qualifications.map((q, index) => {
                        return (
                          <tr>
                            <td>{q.id}</td>
                            <td key={index}>{q.qualification}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div id="projects" className="tab-pane fade">
                  <div className="paper pd15 mb20 tab-header">
                    <h2 className="mb20">Projects</h2>
                  </div>
                  <table className="table paper">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Employer</th>
                        <th>Project Name</th>
                        <th>Role</th>
                        <th>Summary</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projects.map((p, index) => {
                        return (
                          <tr>
                            <td>{p.id}</td>
                            <td key={index}>{p.employer}</td>
                            <td>{p.projectName}</td>
                            <td>{p.role}</td>
                            <td>{p.summary}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-xs-12">
              <div className="">
              </div>
            </div>
            <div className="col-sm-9 col-xs-12">
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default CvViewComponent;
