import React from 'react';
// import { useSelector } from 'react-redux';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles'

// import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

const WithSpinner = (WrapperComponent) => {
    const Spinner = ({ isLoading, ...otherProps }) => {

        // const isLoading = useSelector(selectIsCollectionsLoaded)

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