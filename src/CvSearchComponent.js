import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class CvSearchComponent extends Component {
  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    const {
      users = [],
    } = this.props;

    return (
      <div>
        {users.map((user) => (
          <pre>
            {JSON.stringify(user, false, 2)}
          </pre>
        ))}
      </div>
    );
  }
}

export default CvSearchComponent;
