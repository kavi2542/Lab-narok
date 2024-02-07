import React from 'react';
import styles from './Services.module.css'; // Update the import path
import { FaBitcoin} from 'react-icons/fa6';

import { PiSpeakerHifiBold } from "react-icons/pi";
// import { DiAndroid,  DiApple, DiBootstrap  } from "react-icons/di";

import { MdMiscellaneousServices } from "react-icons/md";



const Services = () => {
    return (
        <div id='MyServices' className={styles.Services_con}>
            <h3 className={styles.Services_title}>My Services</h3>
            <div className={styles.Services_list}>
                <div className={styles.Services_items}>
                    <FaBitcoin />
                    <h4>bitcoin</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem cumque, tempora rerum aliquam provident expedita eius hic libero sint!
                    </p>
                </div>
                <div className={styles.Services_items}>
                    <PiSpeakerHifiBold />
                    <h4>Speaker</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem cumque, tempora rerum aliquam provident expedita eius hic libero sint!
                    </p>
                </div>
                <div className={styles.Services_items}>
                    <MdMiscellaneousServices />
                    <h4> Services </h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem cumque, tempora rerum aliquam provident expedita eius hic libero sint!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
