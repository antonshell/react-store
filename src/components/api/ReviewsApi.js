import React from 'react';

const ReviewsApi = {

    reviews: [
        {
            "name": "William R. Cross",
            "message": "dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec",
            "rate": 2,
            "created": "29/06/2018"
        },
        {
            "name": "Galvin X. Fields",
            "message": "vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel,",
            "rate": 1,
            "created": "13/07/2017"
        },
        {
            "name": "Nicole H. Delgado",
            "message": "ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus.",
            "rate": 5,
            "created": "30/07/2018"
        },
        {
            "name": "Samantha Z. Good",
            "message": "semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut",
            "rate": 4,
            "created": "19/07/2017"
        },
        {
            "name": "Chiquita Greene",
            "message": "et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum",
            "rate": 1,
            "created": "18/09/2018"
        },
        {
            "name": "Ella B. Barrera",
            "message": "Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis",
            "rate": 5,
            "created": "25/11/2017"
        },
        {
            "name": "Sage D. Alvarez",
            "message": "urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida",
            "rate": 2,
            "created": "04/05/2018"
        },
    ],
    all: function() { return this.reviews},
    get: function(id) {
        const isReview = p => p.id === id;
        return this.reviews.find(isReview)
    }
};

export default ReviewsApi;