import React from 'react';


class QualificationComponent extends React.Component {

    componentDidMount(){
        this.props.qualifications
    }

    render() {
        const { qualifications = [] } = this.props

        return (
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
        );
    }

}

export default QualificationComponent;