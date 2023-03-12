import styled from 'styled-components';

const Title = styled.div`
    font-size: 2rem;
    color:${(props) => props.color};
    margin: 1.5rem 0 1rem 0rem;
`;

Title.defaultProps = {
  color: 'white',
};

export default Title;
