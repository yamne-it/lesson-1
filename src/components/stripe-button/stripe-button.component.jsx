import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HqkgzKpAjLUtQVoD4xQ8TWNAreIt0uRze6v8Uw5juD3MOjkFvwImnGisUboW3D2L6fabWxwoiqDv7C6FP64j6dG00R6UtiHgF'

    const onToken = (token) => {
        console.log(token)
        alert('Payment Successful')
    }

    const stripeCheckoutButton = (
        <StripeCheckout label='Pay Now' name='CRWN Clothing Ltd.'
            billingAddress shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
    return stripeCheckoutButton
}

export default StripeCheckoutButton