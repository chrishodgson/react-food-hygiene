import React from "react";
import LocalAuthoritySelect from "./LocalAuthoritySelect.jsx";
import RatingsTable from "./RatingsTable.jsx";
import FormMessage from "./FormMessage.jsx";
import LocalAuthorityAPI from "../classes/LocalAuthorityAPI.jsx";
import EstablishmentAPI from "../classes/EstablishmentAPI.jsx";

export default class FilterableHygieneRatings extends React.Component {
    constructor(props) {
        const localAuthorityApi = new LocalAuthorityAPI();

        super(props);

        this.state = {
            summary: [],
            loadingLocalAuthorities: true,
            loadingSummary: false,
            selectedLocalAuthority: 0,
            localAuthorities: []
        };

        localAuthorityApi.getLocalAuthorities(this);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const localAuthority = e.target.value,
            establishmentApi = new EstablishmentAPI();

        this.setState({
            summary: [],
            loadingSummary: true,
            selectedLocalAuthority: localAuthority
        });

        establishmentApi.getEstablishmentsForSummary(this, localAuthority);
    }

    render() {
        return (
            <div>
                <FormMessage
                    loadingLocalAuthorities={this.state.loadingLocalAuthorities}
                    loadingSummary={this.state.loadingSummary} />
                <LocalAuthoritySelect
                    localAuthorities={this.state.localAuthorities}
                    selectedlocalAuthority={this.state.selectedLocalAuthority}
                    disableForm={this.state.loadingSummary || this.state.loadingLocalAuthorities}
                    handleChange={this.handleChange} />
                <RatingsTable summary={this.state.summary} />
            </div>
        );
    }
}
