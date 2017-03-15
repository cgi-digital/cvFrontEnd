import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const searchFields = [
  'username',
  'firstname',
  (item, query) => item.skills.find(skill => skill.skill.toLowerCase().indexOf(query) !== -1),
  (item, query) => item.qualifications.find(q => q.qualification.toLowerCase().indexOf(query) !== -1)
];

const matchUser = (query, user) => {
  // Any user should be shown if the query is empty
  if (query.length === 0) {
    return true;
  }

  // Match the query string in any of the search fields we're interested in
  for (let i = 0; i < searchFields.length; i++) {
    const fieldType = searchFields[i];

    if (typeof fieldType === 'function') {
      if (fieldType(user, query)) {
        return true;
      }
    } else {
      const fieldVal = user[fieldType];
      if (fieldVal.indexOf(query) !== -1) {
        return true;
      }
    }
  }

  // If not fields were matched the don't include this user
  return false;
};

class CvSearchComponent extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const {
      users = [],
      query,
      onSearchChange,
    } = this.props;

    const filteredUsers = users.filter(user => matchUser(query.toLowerCase(), user));

    return (
      <div>
        <div>
          <input type="text" onChange={onSearchChange}/>
        </div>
        {filteredUsers.map((user) => (
          <pre>
            {JSON.stringify(user, false, 2)}
          </pre>
        ))}
      </div>
    );
  }
}

export default CvSearchComponent;
