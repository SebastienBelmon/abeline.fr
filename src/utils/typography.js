import './global.css';
import 'katex/dist/katex.min.css';

import Typography from 'typography';
import sutroTheme from 'typography-theme-sutro';

sutroTheme.overrideThemeStyles = () => {
  const linkColor = '#1ca086';
  return {
    a: {
      color: linkColor,
      textDecoration: 'none',
      textShadow:
        '.03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff', // eslint-disable-line
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  };
};

delete sutroTheme.googleFonts;

const typography = new Typography(sutroTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
