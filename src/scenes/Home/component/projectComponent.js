import React from 'react';

class ProjectComponent extends React.Component {

    componentDidMount(){
        this.props.projects;
    }

    render(){
        const { projects = [] } = this.props;
        return (
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
        );
    }


}

export default ProjectComponent;