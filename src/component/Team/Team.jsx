import React from 'react';
import PropTypes from 'prop-types';
import styles from './Team.module.css';
// eslint-disable-next-line no-unused-vars
import Navbar from '../navbar/Navbar';

const TeamMember = ({ name, position, imageSrc }) => {
  return (
    <div className={styles['team-member']}>
      <img src={imageSrc} alt={`${name}'s profile`} />
      <h2>{name}</h2>
      <p>{position}</p>
    </div>
  );
};

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

const Team = () => {
  return (
    <div id='TEAM' className={styles['team-container']}>
        <h1 >Team</h1>
      <div className={styles['team-members']}>
      
        <TeamMember
          name="Kanok "
          position="Engineer"
          imageSrc="https://scontent.fnak3-1.fna.fbcdn.net/v/t39.30808-6/254737457_3041009509482621_2264534541632644268_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeF1X7ffmZoXJFRpi2hQjjLaO4UrZFgk0cM7hStkWCTRw4BAsvsq4gKNf-N07K_w8iQzFwy18XTadLcm-rtYVr71&_nc_ohc=gXj-z1yfH7MAX-EjcLV&_nc_ht=scontent.fnak3-1.fna&oh=00_AfC3jZLtV5ZGNV8HbfryyImWOErtcvaUl6rUi__abCJ-yg&oe=65C739B6"
        />
        <TeamMember
          name="Chalongrut"
          position="Engineer"
          imageSrc="https://scontent.fnak3-1.fna.fbcdn.net/v/t1.18169-9/15965044_1318670784865618_6599789762273582659_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeFFmMefGFP7Nhq-TQ2-cslvnermdSKeKhud6uZ1Ip4qG66yBwunbzz2iaVNjEGuoBiB3JEAYgnCfa68QYzM_p00&_nc_ohc=A6V5-3Bj5zsAX9gtcAr&_nc_ht=scontent.fnak3-1.fna&oh=00_AfDssux3gdCKp8q4lUfmvDb214vUmJ1-NBEznNaG4rceZw&oe=65E9181F"
        />
      </div>
    </div>
  );
};

export default Team;
