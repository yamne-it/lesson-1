import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles'

const WithSpinner = WrapperComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {

        const withSpinnerLayout = isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer>
                </SpinnerContainer>
            </SpinnerOverlay>
        ) : (
            <WrapperComponent {...otherProps} />
        )

        return withSpinnerLayout
    }
    return Spinner
}
export default WithSpinner