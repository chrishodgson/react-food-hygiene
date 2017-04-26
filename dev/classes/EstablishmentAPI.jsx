import RatingSummary from "./RatingSummary.jsx";

export default class EstablishmentAPI {
    getEstablishmentsForSummary(context, localAuthority) {
        const url = 'http://api.ratings.food.gov.uk/Establishments?pageSize=0&localAuthorityId=' + localAuthority;

        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                "x-api-version": 2
            })
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            // console.log(json, 'getEstablishments for ' + localAuthority);
            const ratingSummary = new RatingSummary();

            context.setState({
                summary: ratingSummary.generateSummary(json),
                loadingSummary: false
            });
        }.bind(context)).catch(function (err) {
            console.log(err, 'getEstablishments Error');
        });
    }
}