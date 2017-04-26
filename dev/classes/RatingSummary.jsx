
export default class RatingSummary {
    generateSummary(json) {
        let ratings = [], summary = [], total = 0;

        if (!json.establishments) {
            return summary;
        }

        //create ratings from establishments
        json.establishments.forEach((establishment) => {
            let label = establishment['RatingValue'] || null,
                index = ratings.findIndex(rating => rating['label'] === label);

            if (index === -1) {
                ratings.push({"label": label, "count": 0});
                index = ratings.length - 1;
            }

            // console.log(establishment['BusinessName'] + ': ' + establishment['PostCode'] + ': ' + establishment['RatingValue']);

            ratings[index]['count']++;
            total++;
        });

        //create summary from ratings
        ratings.forEach(rating => summary.push(this.convertRating(rating, total)));

        return summary;
    }

    convertRating(rating, total) {
        const label = isNaN(rating.label) ? rating.label : rating.label + '-Star',
            percentage = ( (rating['count'] / total) * 100).toFixed(2) + '%';

        return {"label": label, "percentage": percentage};
    }
}