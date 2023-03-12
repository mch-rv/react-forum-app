import styled from 'styled-components';

const NavBar = styled.div`
    background-color:${(props) => props.backgroundColor};
    min-height: 55px;
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 1rem 3rem 1rem;
`;

NavBar.defaultProps = {
  backgroundColor: '#dc3d4b',
};

export default NavBar;
