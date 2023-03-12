import styled from 'styled-components';

const Card = styled.div`
    background-color:${(props) => props.backgroundColor};
    padding:${(props) => props.padding};
    border-radius: ${(props) => props.borderRadius};
    border: 1px solid rgb(20, 20, 20, 0.3);
`;

Card.defaultProps = {
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '10px',
};

export default Card;
