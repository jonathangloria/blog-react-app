import styled, {css} from 'styled-components';

export default styled.select`
    font-family: 'roboto';
    font-size:0.9rem; 
    border:none;
    padding:7px 10px; 
    margin:10px 10px;
    box-shadow: 2px 2px grey;
    ${(props) =>
        props.background && 
        css`
        background:${(props) =>props.background};
        `} 
    color:black;
`;
