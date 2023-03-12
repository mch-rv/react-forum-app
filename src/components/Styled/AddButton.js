import styled from 'styled-components';

const AddButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    width: 50px;
    height: 50px;
    border:0;
    border-radius: 50px;
    background-color:${(props) => props.backgroundColor};
    color: white;
    padding: 8px;
    cursor: pointer;
`;

AddButton.defaultProps = {
  backgroundColor: '#dc3d4b',
};

export default AddButton;
