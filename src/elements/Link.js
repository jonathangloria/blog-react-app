import styled, {css} from 'styled-components';

export default styled.a`
    font-family: 'roboto';
    font-size:1.2rem; 
    border:2px solid white;
    border-radius:10px;
    padding:5px 20px;
    width: 90px; 
    margin:10px 10px;
    ${(props) =>
        props.background && 
        css`
        background:${(props) =>props.background};
        `}
    ${(props) =>
        props.color && 
        css`
        color:${(props) =>props.color};
        `}
`;
