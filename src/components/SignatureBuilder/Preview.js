import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Template2 } from '../Templates'

const Preview = () => {
    


    return (
        <Fragment>
          <StyledPreview id="signatureMarkup"><Template2 /></StyledPreview>
        </Fragment>
    )
}


const StyledPreview = styled.div`
    height:100vh;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-left:20%;
    z-index: -1; 
}
`
export default Preview