import React from 'react';

export default class LocalAuthoritySelect extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleChange(e);
    }

    render() {
        const authorities = this.props.localAuthorities || {};

        return (
            <form>
                <select name="localAuthority"
                        onChange={this.handleChange}
                        value={this.props.selectedLocalAuthority}
                        disabled={this.props.disableForm}>
                    <option value=""> -- Please select -- </option>
                    {authorities.authorities && authorities.authorities.map(authority =>
                            <LocalAuthoritySelectOption localAuthority={authority}
                                                               key={authority.LocalAuthorityId.toString()} />)}
                </select>
            </form>
        );
    }
}

class LocalAuthoritySelectOption extends React.Component {
    render() {
        return (
            <option value={this.props.localAuthority.LocalAuthorityId}>{this.props.localAuthority.Name}</option>
        );
    }
}
