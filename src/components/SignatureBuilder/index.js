import React, { Fragment} from 'react'
import Sidebar from '../Sidebar'
import Preview from './Preview'
import { InputProvider } from '../Contexts/InputContext'

const SignatureBuilder = () => {

    return (

        <Fragment>
            <InputProvider>
                <Sidebar />
                <Preview />
            </InputProvider>
        </Fragment>

    )

}

export default SignatureBuilder