import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'

const renderField = ({ input, multiLine, rows, label, meta: { touched, error }, ...custom }) => (
    <TextField
      multiLine={multiLine}
      underlineShow={false}
      fullWidth={true}
      rows={rows}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )
  
  const renderCheckbox = ({ input, label }) => (
    <Checkbox label={label}
      checked={input.value ? true : false}
      onCheck={input.onChange} />
  )

class EditView extends Component {
    constructor(props, context) {
      super(props, context);
    }
  
    render() {
      const { user } = this.props;
      const { 
        skills = [], 
        qualifications = [], 
        projects = [] 
      } = user;
      return (
        <form>
          <div className="row">
            <div className="col-md-4 col-sm-5">
              <div className="cvHeader paper pd15 mb10">
                <i className="fa fa-user headerIcon"></i>
                <div className="row mb10">
                  <div className="col-xs-12">
                    <h4 className="mb10">
                      <Field name='firstname' component={renderField} type='text' floatingLabelText="First Name" underlineShow fullWidth />
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
                              <td key={index}>{skill.skill}</td>
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
        </form>
      )
    }
  }

export default reduxForm({ form: 'cv_form', enableReinitialize: true })(
  EditView
)