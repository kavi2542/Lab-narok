import React from 'react'
// eslint-disable-next-line no-unused-vars
import styles from './Testimonials.module.css'

const Testimonials = () => {
    return (
        <div  className={styles.testi_con}>
            <h3  id='Testimonials'className={styles.testi_title}>Testimonials</h3>
            <div className={styles.testi_list}>
                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Nemo quas a tenetur commodi molestiae suscipit magni nostrum alias.
                        A totam laudantium quasi sapiente autem eveniet!</p>
                    <img src="https://scontent.fnak3-1.fna.fbcdn.net/v/t1.15752-9/420507951_3815739898672432_960041126112740776_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHJ_4TtK-c6OqHSySTFyb6HecKwprT9_wh5wrCmtP3_CAX7fG7bNpsGKv_MBaqbfcDbQModL8XIhp54JImST_2Y&_nc_ohc=XydMnYIAbzgAX9er7-C&_nc_ht=scontent.fnak3-1.fna&oh=03_AdSVlIhpWqYEYgphdFrv8J_qpFM0vXGwmJCP3k_G3cWA1g&oe=65E82E79" alt="" />
                    <h4>John Doe</h4>
                    <p className={styles.bio}>Web Developer</p>
                </div>
                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Nemo quas a tenetur commodi molestiae suscipit magni nostrum alias.
                        A totam laudantium quasi sapiente autem eveniet!</p>
                    <img src="https://scontent.fnak3-1.fna.fbcdn.net/v/t1.15752-9/416113499_1178231759819885_8232989428094161728_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGQ-tu8mJywpziEesTyHCR4J7mLpssvmfonuYumyy-Z-q25TzpDXV0KHn6eRezZesUUUDyjaCTq89NGlk9ULx-l&_nc_ohc=NIgkYQ1-q2EAX_l_-Gc&_nc_ht=scontent.fnak3-1.fna&oh=03_AdTbqBDFlIJ_sFzDvdDfswlru-7FiaHyb60ZDv5vJsAgWw&oe=65E84822" alt="" />
                    <h4>Joh Doe</h4>
                    <p className={styles.bio}>Web Developer</p>
                </div>
                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Nemo quas a tenetur commodi molestiae suscipit magni nostrum alias.
                        A totam laudantium quasi sapiente autem eveniet!</p>
                    <img src="https://scontent.fnak3-1.fna.fbcdn.net/v/t1.15752-9/423422483_1062064461576430_2378987142826164492_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFGw6qjueJafBID-DaZH6VCeUou7h0gLH55Si7uHSAsfvg8ygwKklKpKPD8TIGSAOYY6JepHtg1cSMca-dSiZz4&_nc_ohc=WyWu2s6Axr0AX-oqDi-&_nc_ht=scontent.fnak3-1.fna&oh=03_AdT0QFnNLveR2UjnxVc6uBRJZ01-dlYGh1SIlazw7Cb8xw&oe=65E83326" alt="" />
                    <h4>Jon Doe</h4>
                    <p className={styles.bio}>Web Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials