import { LoyaltyUser } from "./enum.ts"

/* showReviewTota Function to display review total and reviewer information
   Determine whether the user is a gold user (loyalty status)
   Update the reviewTotalDisplay element's content
   populateUser Function to populate user-related information
   If the user is returning, display "back" in the returningUserDisplay element
   isplay the user's name in the userNameDisplay element
   */

const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

export function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}