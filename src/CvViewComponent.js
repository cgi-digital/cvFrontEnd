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
    this.props.getUser()
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
        <div className="container-fluid">
          <div className="cvHeader paper pd15 mb30">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <i className="fa fa-user headerIcon"></i>
                <h1>{user.lastname}, {user.firstname}</h1>
                <h2><small>{user.title}</small></h2>
              </div>
              <div className="col-sm-6 col-xs-12">
                <h3>Summary</h3>
                <p>{user.summary}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-xs-12">
              <div className="nav-vertical">
                <ul className="nav nav-tabs">
                  <li className="active"><a data-toggle="tab" href="#skills">Skills</a></li>
                  <li><a data-toggle="tab" href="#qualifications">Qualifications</a></li>
                  <li><a data-toggle="tab" href="#projects">Projects</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-9 col-xs-12">
              <div className="tab-content">
                <div id="skills" className="tab-pane fade in active">
                  <div className="paper pd15 mb20">
                    <h2 className="mb20">Skills</h2>
                  </div>

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
                            <td key={index}>{skill.skill}</td>
                            <td >{skill.level}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div id="qualifications" className="tab-pane fade">
                  <div className="paper pd15 mb20">
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
                  <div className="paper pd15 mb20">
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
      </div>
    );
  }
}



export default CvViewComponent;
