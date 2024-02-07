import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { FaBars } from 'react-icons/fa6';


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    function smoothScrolling(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
      const startingY = window.pageYOffset;
      const diff = targetTop - startingY;
      const speed = 1;

      function step() {
        const elapsed = Date.now() - start;
        const progress = Math.min(speed * elapsed, diff);
        window.scrollTo(0, startingY + progress);
        if (progress < diff) {
          requestAnimationFrame(step);
        }
      }

      const start = Date.now();
      requestAnimationFrame(step);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScrolling);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScrolling);
      });
    };
  }, []);

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.navcon}>
          <div className={styles.logo}>
            <a href="">LAB NAROK</a>
          </div>
          <ul>
            <li><a href="#TEAM">Team</a></li>
            <li><a href="#MyServices">My Services</a></li>
            <li><a href="#SKILLS">My Skill Set</a></li>
            <li><a href="#Job">Job</a></li>
            <li><a href="#Testimonials">Testimonials</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
          <div className={styles.button}>
            <a href="">Hire Me</a>
          </div>
        </div>
        <FaBars className={styles.bars} onClick={handleMenu} />
        {menu && (
          <>
            <ul className={styles.mobile_menu}>
              
              <li><a href="#TEAM">Team</a></li>
              <li><a href="#MyServices">My Services</a></li>
              <li><a href="#SKILLS">My SkillSet</a></li>
              <li><a href="#Job">Job</a></li>
              <li><a href="#Testimonials">Testimonials</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul>
            <div className={styles.mobile_button}>
              <a href="">Hire Me</a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
