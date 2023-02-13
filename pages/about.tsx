import { LegacyRef, useRef, useState } from 'react';
import Layout from '../components/layout/layout';
import styles from '../styles/About.module.css';

export default function About() {
  const rightContainerRef = useRef<HTMLElement>(null);
  const [currentSection, setCurrentSection] = useState('bio');
  const [currentRotation, setCurrentRotation] = useState(0);
  const baseTransform = 'perspective(2000px) rotateX(-90deg) rotate(180deg) scaleX(-1)';
  
  //TODO: refactor this ugly shit, and add some CSS to indicate which section is selected
  const setSection = (newSection: string) => {
    if (!rightContainerRef.current) {
      return;
    }

    let newRotation = currentRotation;
    switch (newSection) {
      case 'bio':
        newRotation = currentSection === 'education' ? currentRotation + 120 : currentRotation - 120;
        break;
      case 'education':
        newRotation = currentSection === 'employment' ? currentRotation + 120 : currentRotation - 120;
        break;
      case 'employment':
        newRotation = currentSection === 'bio' ? currentRotation + 120 : currentRotation - 120;
        break;
    }    

    setCurrentSection(newSection);
    setCurrentRotation(newRotation);
    rightContainerRef.current.style.transform = `${baseTransform} rotate(${newRotation}deg)`;
  }
  
  return (
    <>
      <Layout pageTitle='Portfolio - About'>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            {/* TODO: look at https://codepen.io/nikolamitic/pen/vpNoNq */}
            <div className={styles.sectionLink} onClick={() => setSection('bio')}>
              <span className={styles.sectionLinkStatic}>Bio</span>
              <div className={styles.sectionLinkDynamic}>
                <span className={styles.sectionLinkDynamicInner}>Bio</span>
              </div>
            </div>
            <div className={styles.sectionLink} onClick={() => setSection('employment')}>
              <span className={styles.sectionLinkStatic}>Employment</span>
              <div className={styles.sectionLinkDynamic}>
                <span className={styles.sectionLinkDynamicInner}>Employment</span>
              </div>
            </div>
            <div className={styles.sectionLink} onClick={() => setSection('education')}>
              <span className={styles.sectionLinkStatic}>Education</span>
              <div className={styles.sectionLinkDynamic}>
                <span className={styles.sectionLinkDynamicInner}>Education</span>
              </div>
            </div>
          </div>
          <div ref={rightContainerRef as LegacyRef<HTMLDivElement>} className={`${styles.rightContainer}`}>
            <div className={styles.sectionWrapper}>
              <div className={styles.sectionContainer}>
                Here is the Bio. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                <br/>
                <br/>
                Here is the Employment. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              </div>
            </div>
            <div className={styles.sectionWrapper}>
              <div className={styles.sectionContainer}>
                <h3>Degree name</h3>
                <br/>
                <h4>Universtity name - Grade</h4>
                <br/>
                <p>Here are some details of the degree. Some of the modules studied include placeholder1, placeholder2 and placeholder3.</p>
                <p>The final year project was on blank and involved such and such.</p>
              </div>
            </div>
            <div className={styles.sectionWrapper}>
              <div className={styles.sectionContainer}>
                Here is the Employment. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                <br/>
                <br/>
                Here is the Employment. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
};
