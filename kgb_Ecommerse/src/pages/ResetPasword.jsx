import React, { useState } from 'react'
import Modal from '../component/Modal'

const ResetPasword = () => {
    const [isModal,setIsModal]=useState(true)
    const toggleModal=()=>{
        console.log("clicked")
        setIsModal(!isModal)
    }
    return (
        <section className="bg-light-pink-1 dark:bg-gray-900 ">
       
         { isModal && <Modal toggleModal={toggleModal} />  }
        </section>
    )
}

export default ResetPasword