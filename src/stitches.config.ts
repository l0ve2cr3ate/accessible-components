import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
  prefix: '',
  tokens: {
    colors: {
      $gray100: '#F7FAFC',
      $gray200: '#EDF2F7',
      $gray300: '#E2E8F0',
      $gray400: '#CBD5E0',
      $gray500: '#A0AEC0',
      $gray600: '#718096',
      $gray700: '#4A5568',
      $gray800: '#2D3748',
      $gray900: '#1A202C',

      $teal100: '#E6FFFA',
      $teal200: '#B2F5EA',
      $teal300: '#81E6D9',
      $teal400: '#4FD1C5',
      $teal500: '#38B2AC',
      $teal600: '#319795',
      $teal700: '#2C7A7B',
      $teal800: '#285E61',
      $teal900: '#234E52',

      $purple100: '#FAF5FF',
      $purple200: '#E9D8FD',
      $purple300: '#D6BCFA',
      $purple400: '#B794F4',
      $purple500: '#9F7AEA',
      $purple600: '#805AD5',
      $purple700: '#6B46C1',
      $purple800: '#553C9A',
      $purple900: '#44337A',

     
    },
    space: {
      $0: '0',
      $1: '0.25rem',
      $2: '0.5rem',
      $3: '0.75rem',
      $4: '1rem',
      $5: '1.25rem',
      $6: '1.5rem',
      $7: '2rem',
      $8: '2.5rem',
      $9: '3rem',
      $10: '4rem'   
    },
    fontSizes: {
      $xs: '0.75rem',
      $sm: '0.875rem',
      $base: '1rem',
      $lg: '1.125rem',
      $xl: '1.25rem',
      $2xl: '1.5rem',
      $3xl: '1.875rem',
      $4xl: '2.25rem',
      $5xl: '3rem',
      $6xl: '4rem'
    },
    fontWeights: {
      $400: '400',
      $700: '700',
      $bold: '700'
    }
  },
  breakpoints: {},
  utils: {},
});