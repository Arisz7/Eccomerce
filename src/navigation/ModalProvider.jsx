import React from 'react'
import { useEffect, useState } from 'react'
import Modal from '../components/Modal'
import Card from '../components/Card'


const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null
    }


    return (
        <>
            <Modal />

        </>
    )
}

export default ModalProvider