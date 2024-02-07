import React from 'react';
// eslint-disable-next-line no-unused-vars
import style from './Skills.module.css';
import { FaBitcoin } from 'react-icons/fa';//FaReact , FaGitAlt , FaNode
import { PiSpeakerHifiBold } from "react-icons/pi";
import { DiAndroid,  DiApple,  } from "react-icons/di";// DiBootstrap 
// import { IoLogoJavascript } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";

const Skills = () => {
  return (
    <div id='SKILLS' className={style.skills_con}>
      <h3 className={style.skills_title}>My SkillSet</h3>
      <ul className={style.skills_list}>
         <li>
        {/* <IoLogoJavascript/> */}
        <MdMiscellaneousServices />
        </li>
        
        {/* <li>
        <FaReact />
        </li>
        <li>
          <FaGitAlt/>
        </li>
        <li>
          <FaNode/>
        </li>
        <li>
        <DiBootstrap />
        </li> */}
        <li> 
        <FaBitcoin />
        </li>
        <li>
        <PiSpeakerHifiBold />
        </li>
        <li>
        <DiAndroid />
        </li>
        <li>
        <DiApple />
        </li>
        
      </ul>
    </div>
  );
}

export default Skills;
