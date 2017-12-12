import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux';

const renderField = ({ input, multiLine, rows, label, meta: { touched, error }, ...custom }) => (
    <TextField
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
        this.clearSkillList = this.clearSkillList.bind(this);
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
        if (this.state.skillInput.name) {
            // new var concatArr is the new Skill List Array
            const concatArr = this.state.skillList.concat(this.state.skillInput);
            // reset Skill Input so that it is now empty 
            this.setState({ skillInput: { name: '' } })
            // set state so that Skill List Array now has new Skill in it
            this.setState({ skillList: concatArr });
        }
        else {
            this.submit();
        }
    }

    removeSkill(i) {
        var concatArr = this.state.skillList;
        concatArr.splice(i, 1);
        this.setState({ skillList: concatArr });
    }

    clearSkillList() {
        this.setState({ skillList: [] })
    }

    submit(e) {
        if (e) {
            e.preventDefault();
        }
        this.props.handleSubmit(this.state.skillList);
    }

    render() {
        const { searchSkills } = this.props;
        return (
            <div>
                <div className="paper formInline clearfix">
                    <div className="col-xs-12">
                        <form id="skillInput" autoComplete="off" onSubmit={this.addSkill}>
                            <TextField
                                ref="skillInput"
                                value={this.state.skillInput.name}
                                type='text'
                                label="Search Skill"
                                placeholder="Search Skill"
                                onChange={this.skillInputChange}
                                autoComplete="false"
                                underlineShow={false}
                                fullWidth={true} />
                        </form>
                    </div>
                    <div className="col-xs-12">
                    </div>
                    <form id="searchSkillForm" onSubmit={this.submit} className="searchButtons clearfix">
                        <button type="submit" form="skillInput" value="Search"><i className="fa fa-plus"></i></button>
                        <button className="btn btn-default" type="submit" form="searchSkillForm" value="Search"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <div id="searchTags" className="col">
                    <span onClick={this.clearSkillList} className="badge badge-delete"><i className="fa fa-trash"></i></span>
                    {this.state.skillList.map((skill, index) => (
                        <span key={index} className="badge">{skill.name}<a onClick={() => this.removeSkill(index)}><i className="fa fa-close"></i></a></span>
                    ))}
                </div>
            </div>
        )
    }
}

export default SearchSkillComponent