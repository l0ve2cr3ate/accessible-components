import { styled } from '../stitches.config';

const Button = styled('button', {
    backgroundColor: 'gainsboro',
    borderRadius: '9999px',
    fontSize: '13px',
    lineHeight: '1',
    fontWeight: 500,
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '16px',
    paddingRight: '16px',
    border: '0',
    ':hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 10px 25px rgba(0, 0, 0, .3)',
      },
      variants: {
        color: {
          violet: {
            backgroundColor: 'blueviolet',
            color: 'white',
            ':hover': {
              backgroundColor: 'darkviolet',
            },
          },
          gray: {
            backgroundColor: 'gainsboro',
            ':hover': {
              backgroundColor: 'lightgray',
            },
          },
        },
    }
  });
  
export default Button