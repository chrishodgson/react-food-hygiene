
export default class LocalAuthorityAPI {
    getLocalAuthorities(context) {
        const url = 'http://api.ratings.food.gov.uk/Authorities/basic';

        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                "x-api-version": 2
            })
        }).then(function(response) {
            return response.json();
        }).then(function(json) {
            // console.log(json, 'getLocalAuthorities - json');
            context.setState({
                localAuthorities: json,
                loadingLocalAuthorities: false
            });
        }.bind(context)).catch(function(err) {
            console.log(err, 'getLocalAuthorities Error');
        });
    }
}