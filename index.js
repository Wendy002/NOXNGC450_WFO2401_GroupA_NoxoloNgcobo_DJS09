"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewTotalDisplay = void 0;
// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
exports.reviewTotalDisplay = document.querySelector('#reviews');
var isLoyal = false;
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];
// functon that that show review tota;
function showReviewTotal(value, reviewer, rating) {
    isLoyal = rating;
    var starRating = isLoyal ? '⭐' : '';
    exports.reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + starRating;
}
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
