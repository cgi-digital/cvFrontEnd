import  React from 'react';
class SkillComponent extends React.Component {

    componentDidMount(){
        this.props.skills
    }

    render() {
        const { skills = [] } = this.props;
        return (
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
        );
    }

}

export default SkillComponent;