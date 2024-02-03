import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const styles = {
    root: {
      '--button': '#ce157a',
      '--buttonColor': '#000000',
      '--shadow': '#000000',
      '--color': '#fafafa',
      '--litHeader': '#e6e6e6',
      '--speed': '2s',
      '--bg': 'radial-gradient(50% 90% at 50% 20%, grey, #000 75%)',
      '--header': '#7a7a7a',
    },
    body: {
      minHeight: '100vh',
      display: 'flex',
      fontFamily: 'Roboto, sans-serif',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg)',
      color: 'var(--color)',
      perspective: '1200px',
    },
    link: {
      textTransform: 'uppercase',
      textDecoration: 'none',
      background: 'var(--button)',
      color: 'var(--buttonColor)',
      padding: '1rem 4rem',
      borderRadius: '4rem',
      fontSize: '0.875rem',
      letterSpacing: '0.05rem',
    },
    paragraph: {
      fontWeight: 100,
      marginBottom: '3rem',
      color: 'white',
    },
    heading: {
      fontSize: 'clamp(5rem, 40vmin, 50rem)',
      fontFamily: 'Oswald',
      fontWeight: 800,
      margin: 0,
      marginBottom: '1rem',
      letterSpacing: '1rem',
      transform: 'translate3d(0, 0, 0vmin)',
      '--x': 'calc(50% + (var(--swingX) * 0.5) * 1%)',
      background: 'radial-gradient(var(--litHeader), var(--header) 45%) var(--x) 100%/200% 200%',
      color: '#555454',
      textShadow: '1px 1px 20px #000, 0 0 4px #313131, 0 0 4px #5c5c5c',
    },
    afterContent: {
      WebkitAnimation: `swing var(--speed) infinite alternate ease-in-out`,
      animation: `swing var(--speed) infinite alternate ease-in-out`,
      content: '"404"',
      position: 'absolute',
      top: 0,
      left: 0,
      color: 'var(--shadow)',
      filter: 'blur(1.5vmin)',
      transform: `scale(1.05) translate3d(0, 12%, -10vmin) translate(calc((var(--swingX, 0) * 0.05) * 1%), calc((var(--swingY) * 0.05) * 1%)`,
    },
    cloak: {
      animation: 'swing var(--speed) infinite alternate-reverse ease-in-out',
      height: '100%',
      width: '100%',
      transformOrigin: '50% 30%',
      transform: 'rotate(calc(var(--swingX) * -0.25deg))',
      background: 'radial-gradient(40% 40% at 50% 42%, transparent, #000 35%)',
    },
    info: {
      textAlign: 'center',
      lineHeight: 1.5,
      maxWidth: 'clamp(16rem, 90vmin, 25rem)',
      color: 'white',
    },
  };

  return (
    <div style={styles.root}>
      <div style={styles.body}>
        <h1 style={styles.heading}>404</h1>
        <div style={styles.afterContent}></div>
        <div style={styles.cloak}></div>
        <div style={styles.info}>
          <h2>We can't find that page</h2>
          <p style={styles.paragraph}>We're fairly sure that page used to be here, but seems to have gone missing. We do apologize on its behalf.</p>
          <Link to="/" rel="noreferrer noopener" style={styles.link}><b>Home</b></Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
