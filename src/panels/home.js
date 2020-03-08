import React from 'react';
import styles from './home.module.css';
import TransactionLog from '../components/transactionslog.js';

//calls comopents from other files to load into html
//.css with a .module tag are module based styling meaning they dont follow from page to page


const Home = () => (
    <>
    <div className={styles.grid_container}>
        <div className={styles.left}>
            <TransactionLog></TransactionLog>
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