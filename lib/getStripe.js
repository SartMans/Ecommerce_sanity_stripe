import {loadStripe} from '@stripe/stripe-js';
let stripePromis;

const getStripe=()=>{
    if(!stripePromis){
        stripePromis= new loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }
    return stripePromis
}
export default getStripe;
    







