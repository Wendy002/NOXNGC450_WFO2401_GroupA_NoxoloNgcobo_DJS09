// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
export const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement;

const userNameDisplay = document.querySelector('#user') as HTMLElement;
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement;
let isLoyal: boolean;

let isOpen : boolean;

const reviews : {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] = [
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
]

// functon that that show review tota;
function showReviewTotal(value: number, reviewer: string, rating: boolean){
    isLoyal = rating;
    const starRating = isLoyal? '⭐': '';
    reviewTotalDisplay.innerHTML ='review total ' + value.toString() + '| last reviewed by ' + reviewer + starRating;
}
function populateUser(isReturning: boolean, userName:string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

//fix code below
const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

//Properties
const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: string;
    isAvailable: boolean;
}[] = [
    {
        image: '',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: 'marywinkle@gmail.com',
        isAvailable: true  
    },
    {
        image: '',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: 'garydavis@hotmail.com',
        isAvailable: false 
    },
    {
        image: '',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: 'andyluger@aol.com',
        isAvailable: true
    }
]





showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName)