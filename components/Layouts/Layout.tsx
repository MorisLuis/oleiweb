import Head from 'next/head'
import React, { useState } from 'react'
import ModalCart from '../Modals/ModalCart'
import Header from '../Navigation/Header'

interface Props {
    children: any
}

export const Layout = ({ children }: Props) => {

    const [openModalCart, setOpenModalCart] = useState(false)

    return (
        <>
            <Head>
                <title>Olei web</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/circle-solid.svg" />
            </Head>
            <Header
                setOpenModalCart={setOpenModalCart}
            />
            <div>
                {children}
            </div>

            <ModalCart
                visible={openModalCart}
                onClose={() => setOpenModalCart(false)}
            />
        </>
    )
}
