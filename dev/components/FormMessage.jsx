import React from 'react';

export default class FormMessage extends React.Component {
    render() {
        return (
            <div>
                <h4>Local Authority Food Hygiene Ratings</h4>
                <p>This screen shows how food hygiene ratings are distributed by percentage across a selected Local Authority.</p>
                <p>
                    {this.props.loadingLocalAuthorities ? 'Loading Local Authorities...' : ''}
                    {this.props.loadingSummary ? 'Loading Ratings Summary...' : ''}
                </p>
            </div>
        );
    }
}