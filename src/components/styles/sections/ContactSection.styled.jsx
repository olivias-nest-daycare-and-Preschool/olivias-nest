import styled from "styled-components";

export const StyledContactSectionMain = styled.section`
min-height: 60vh;
padding: 10rem 0 5rem 0;
width: 100%;
margin-top: 10px;
`;

export const StyledSemiContactSectionMain = styled.div`
margin-top: 10px;
min-height: 20vh;
padding: 10rem 0 5rem 0;
width: 100%;
margin-bottom:20px;
/* background-color: #1d2022; */
`;

export const StyledContactSubSection = styled.div`
width: 50%;
justify-content: space-between;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
`;

export const Label = styled.label`
margin-bottom: 0.5rem;
font-family: "Poppins",sans-serif;
font-weight: bold;
font-size: 1.8rem;
`;

export const Textarea = styled.textarea`
margin-bottom: 1rem;
padding: 4rem;
border-radius: 20px;
border: 1px solid black;
font-family: "Poppins",sans-serif;
font-weight: bold;
resize: vertical;
`;

export const Input = styled.input`
margin-bottom: 1rem;
padding: 2rem;
border-radius: 20px;
border:1px solid #ccc;
font-family: "Poppins",sans-serif;
font-weight: bold;
`;

export const Button = styled.button`
padding: 1.5rem 1rem;
border:none;
border-radius: 40px;
background-color: ${({theme})=> theme.colors.orange};
color: white;
cursor: pointer;
justify-content: center;
transition: background-color 0.3s;
font-size: 3rem;
font-weight: bold;
width: fit-content;
margin-top: 20px;
&:hover{
    background-color: #0056b3;
}
@media(max-width: ${({theme})=> theme.mobile}){
    font-size: 1.5rem;
    margin-right: auto;
}
`;