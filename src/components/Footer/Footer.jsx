import React from 'react';
import { Copyright } from '../Copyright/Copyright';
import style from '../Footer/StyledFooter.module.css'

export default function Footer() {
    return (
      <>
        <footer className={style.footer}>
          <Copyright />
        </footer>
      </>
    );
}