import { styled } from '../stitches.config';

const Button = styled('button', {
    backgroundColor: 'gainsboro',
    borderRadius: '9999px',
    fontSize: "$base",
    lineHeight: '1',
    fontWeight: "$400",
    paddingTop: '$3',
    paddingBottom: '$3',
    paddingLeft: '$4',
    paddingRight: '$4',
    border: '0',
    ':hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 10px 25px rgba(0, 0, 0, .3)',
      },
      variants: {
        color: {
          violet: {
            backgroundColor: '$purple600',
            color: 'white',
            ':hover': {
              backgroundColor: '$purple700',
            },
          },
          gray: {
            backgroundColor: '$gray500',
            ':hover': {
              backgroundColor: '$gray200',
            },
          },
        },
    }
  });
  
export default Button