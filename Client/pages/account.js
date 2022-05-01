import Image from 'next/image'
import React from 'react'
import { getSession } from 'next-auth/react'
import Account from '../components/Account'

const account = (props) => {
    return (
        <>
            {
                !props.session && <Account />
            }
        </>
    )
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    return ({ props: { session } })
}

export default account