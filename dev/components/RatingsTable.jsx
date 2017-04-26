import React from 'react';

export default class RatingsTable extends React.Component {
    render() {
        const summary = this.props.summary || [];

        if(summary.length === 0){
            return null;
        }

        return (
            <table className="table table-striped table-condensed">
                <thead>
                <tr>
                    <th>Rating</th>
                    <th>Percentage %</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.summary.map(row => <RatingsTableRow row={row} key={row.label} />)}
                </tbody>
            </table>
        );
    }
}

class RatingsTableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.row.label}</td><td>{this.props.row.percentage}</td>
            </tr>
        );
    }
}