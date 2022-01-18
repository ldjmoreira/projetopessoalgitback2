import styles from './Footer.module.css'
import React from 'react'

export default props =>
    <footer className={styles.footer}>
        <span>
            Desenvolvido com232 <i className="fa fa-heart text-danger"></i> por
            <strong> Cod<span className="text-danger">3</span>r</strong>
        </span>
    </footer>