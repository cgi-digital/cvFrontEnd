import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux';

const renderField = ({ input, multiLine, rows, label, meta: { touched, error }, ...custom }) => (
    <TextField
        multiLine={multiLine}
        floatingLabelText={label}
        rows={rows}
        errorText={touched && error}
        {...input}
        {...custom}
    />
)

class SearchSkillComponent extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            skillInput: { name: '' },
            skillList: []
        }

        // BIND THIS
        this.skillInputChange = this.skillInputChange.bind(this);
        this.addSkill = this.addSkill.bind(this);
        this.removeSkill = this.removeSkill.bind(this);
        this.submit = this.submit.bind(this);
    }

    // When User changes the Skill Input Field set the state so that it persists
    skillInputChange(e) {
        // new var skillName is set to current skill input 
        const skillName = this.state.skillInput;
        // skillName is now set to new skill input value
        skillName.name = e.target.value;
        // state is changed so that it persists
        this.setState({ skillInput: skillName });
    }

    // When User hits enter on the skill input the current Skill Object is added to the Skill List in the State
    addSkill(e) {
        // prevent page from refreshing
        e.preventDefault();
        // new var concatArr is the new Skill List Array
        const concatArr = this.state.skillList.concat(this.state.skillInput);
        // reset Skill Input so that it is now empty 
        this.setState({ skillInput: { name: '' } })
        // set state so that Skill List Array now has new Skill in it
        this.setState({ skillList: concatArr });
    }

    removeSkill(i) {
        var concatArr = this.state.skillList;
        concatArr.splice(i, 1);
        this.setState({ skillList: concatArr });
    }

    submit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state.skillList);
    }

    render() {
        const { searchSkills } = this.props;
        return (
            <div>
                <form id="searchSkillForm" onSubmit={this.submit}>
                    <div className="row">
                        <div className="col pull-left">
                            {this.state.skillList.map((skill, index) => (
                                <span key={index} className="badge">{skill.name}({index})<a onClick={() => this.removeSkill(index)}><i className="fa fa-close"></i></a></span>
                            ))}
                        </div>
                        <div className="col pull-right">
                            <button className="btn btn-default" type="submit" form="searchSkillForm" value="Search"><i className="fa fa-search">&nbsp;</i>Search</button>
                            <a className="btn btn-default" onClick={this.refreshSearch} value="Refresh"><i className="fa fa-refresh">&nbsp;</i>Refresh</a>
                        </div>
                    </div>
                </form>
                <form id="skillInput" autoComplete="off" onSubmit={this.addSkill}>
                    <TextField className="mb20"
                        type='text'
                        floatingLabelText="Search Skill"
                        floatingLabelFixed={true}
                        underlineShow
                        fullWidth
                        onChange={this.skillInputChange}
                        autoComplete="false"
                    ></TextField>
                </form>
            </div>
        )
    }
}

export default SearchSkillComponent