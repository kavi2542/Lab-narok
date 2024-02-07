import React from 'react'
// eslint-disable-next-line no-unused-vars
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

const Contact = () => {
    return (
        <div  className={styles.Contact_wrapper}>
            <div className={styles.Contact_con}>
                <div className={styles.Contact_info}>
                    <h3 id='Contact'> Get in touch </h3>
                    <p className={styles.Contact_desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Mollitia totam exercitationem saepe odit at iure,
                        neque voluptatum culpa consequatur quibusdam.
                    </p>
                    <p className={styles.Contact_address}>
                        31110 nangrong
                        buriram,thailand
                    </p>
                    <p><FaPhone />012345678</p>
                    <p><FaEnvelope />kwinwlsutha@gmail.com</p>
                </div>
                <div className={styles.Contact_from}>
                    <form >
                        <div className={styles.input_group}>
                            <div>
                                <label htmlFor='firstname'>Firstname</label>
                                <input type="text" placeholder='eg.john' />
                            </div>
                            <div>
                                <label htmlFor='lastname'>Lastname</label>
                                <input type="text" placeholder='eg.Doe' />
                            </div>
                        </div>
                        <label htmlFor="email address">Email Address</label>
                        <input type="email" placeholder='eg.johndoe@gmail.com' />
                        <label htmlFor="message">your message</label>
                        <textarea name="" id=""cols="30" rows="10" placeholder='Type here'></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Contact