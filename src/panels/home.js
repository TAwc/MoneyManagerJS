import React from 'react';
import styles from './home.module.css'


//calls comopents from other files to load into html
//.css with a .module tag are module based styling meaning they dont follow from page to page


const Home = () => (
    <>
    <div className={styles.grid_container}>
        <div className={styles.left}>
            
        </div>
        
        <div className={styles.middle}>
            
        </div>
        
        <div className={styles.right}>
        
        </div>

        <div className={styles.footer}>
        
        </div>
    </div>
    </>
);

export default Home;