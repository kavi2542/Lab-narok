import React from 'react'
// eslint-disable-next-line no-unused-vars
import styles from './Hero.module.css'
import { FaGithub, FaFacebook, FaYoutube } from 'react-icons/fa6'

import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
    return (
        <div className={styles.Hero}>
            <div className={styles.container}>
                <div className={styles.herocon}>
                    <div className={styles.hero_info}>
                        <p className={styles.text_1}></p>
                        <h3 className={styles.text_2}>
                            <span style={{marginRight:'10px'}}>WELCOME TO</span>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'LAB NAROK',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Electronic Technology',
                                    1000,
                                    
                                ]}
                                speed={50}
                                
                                repeat={Infinity}
                            />
                            </h3>
                        <p className={styles.text_3}>
                        </p>
                        <p className={styles.text_4}>Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit.
                            <br />Voluptates molestiae quisquam incidunt vel ex quae temporibus sit blanditiis in dolorem consequuntur cupiditate corporis maiores nobis nemo laudantium consequatur,
                            <br />quasi voluptate veniam officia possimus? Ea, consequuntur,
                            <br />excepturi facilis id laboriosam provident corporis reiciendis obcaecati ipsum eos,
                            <br />officiis voluptatem asperiores optio. Repellat?</p>
                        <ul className={styles.hero_social}>
                            <li><a href="https://github.com/kavi2542"><FaGithub /></a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100060244640310&locale=th_TH"><FaFacebook /></a></li>
                            <li><a href="https://www.youtube.com/@labnarok8877"><FaYoutube /></a></li>

                        </ul>
                    </div>
                    <Tilt scale={1.2} transitionSpeed={2500}tiltReverse={true}>
                        <div className={styles.hero_img}></div>
                     </Tilt>
                     </div>
            </div>
        </div>
    )
}

export default Hero