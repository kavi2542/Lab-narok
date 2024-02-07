import React from 'react';
import styles from './Number.module.css'; // Correct path for the module
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Number = () => {
  return (
    <div className={styles.Number_con}> {/* Use 'styles' instead of 'style' */}
      <div className={styles.Number_items}>
        <h3>
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? <CountUp start={0} end={100} duration={5} /> : null}+
              </div>
            )}
          </VisibilitySensor>

        </h3>
        <p>Projects Delivered</p>
      </div>
      <div className={styles.Number_items}>
        <h3>
        <VisibilitySensor partialVisibility offset={{bottom: 200}}>
  {({ isVisible }) => (
    <div>
      {isVisible ? <CountUp start={0} end={50} duration={5} /> : null}+
    </div>
  )}
</VisibilitySensor>

        </h3>
        <p>Companies Helped</p>
      </div>
      <div className={styles.Number_items}>
        <h3>
        <VisibilitySensor partialVisibility offset={{bottom: 200}}>
  {({ isVisible }) => (
    <div>
      {isVisible ? <CountUp start={0} end={10} duration={5} /> : null}+
    </div>
  )}
</VisibilitySensor>

        </h3>
        <p>Years of Experience</p>
      </div>
      <div className={styles.Number_items}>
        <h3><VisibilitySensor partialVisibility offset={{bottom: 200}}>
  {({ isVisible }) => (
    <div>
      {isVisible ? <CountUp start={0} end={200} duration={5} /> : null}+
    </div>
  )}
</VisibilitySensor>
</h3>
        <p>Happy Clients</p>
      </div>
    </div>
  );
}

export default Number;
