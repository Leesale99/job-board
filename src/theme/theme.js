// @flow

const theme = {
  font: {
    size: {
      small: '1.2rem',
      p: '1.5rem',
      h6: '1.6rem',
      h5: '1.8rem',
      h4: '2.2rem',
      h3: '2.8rem',
      h2: '3.2rem',
      h1: '3.8rem'
    }
  },
  colors: {
    /**
     * Primary Colors
     */
    primary: '#218fe6',
    primaryDark: '#2a628f',
    accent: '#1b998b',
    danger: '#fe4a49',
    warning: '#fed766',
    success: '#0cce6b',
    /**
     * Helper Colors
     */
    light: '#ffffff',
    bgHover: '#333333',
    bgGray: '#787878',
    disabled: '#e6e6ea',
    baseText: '#686868',
    headingText: '#303030',
    placeholderText: '#55595c',
    borderColor: '#e6e6e6'
  },
  btn: {
    /**
     * Font-Size
     */
    size: {
      sm: '1rem',
      regular: '1.2rem',
      md: '1.4rem',
      lg: '1.6rem',
      xl: '1.8rem'
    },
    /**
     * Border-Radius
     */
    shape: {
      square: '0',
      regular: '4px',
      circle: '50px'
    }
  },
  getColor(color: string): string {
    return this.colors[color];
  },
  getFontSize(size: string): string {
    return this.font.size[size];
  },
  getBtnSize(size: string): string {
    return this.btn.size[size];
  },
  getBtnShape(shape: string): string {
    return this.btn.shape[shape];
  }
};

export default theme;
