import styled from "styled-components";

export const StyledContactSection = styled.section`
min-height: 90vh;
padding: 10rem 0 5rem 0;
width: 100%;
`;

export const DetailsWrapper = styled.div`
display: flex;
align-items: center;
justify-content: start;
@media(max-width: ${({theme})=> theme.mobile}){
    flex-direction: column-reverse;
}
`;

export const ContactInfo = styled.div`
flex:1;
font-family: "Poppins",sans-serif;
font-size: 18px;
p{
    padding: 0;
    margin-bottom: 2rem;
    text-align: justify;
}
div{
    display: flex;
    align-items: center;
    p{
        display: flex;
        align-items: center;
        margin: 0 2rem 2rem 0;
        span, a{
            margin-right:0.5rem;
        }
    }
    @media(max-width: ${({theme})=> theme.mobile}){
    align-items: flex-start;
    flex-direction: column;
    p{
        margin: 0 0 2rem 0;
        font-size: 16px;
    }
}
}
`;

export const FormWrapper = styled.div`
flex: 1;
display:grid;
justify-content: flex-end;
grid-template-columns: 2fr 2fr;
gap: 1rem;
input[type='text'],
input[type='email'],
textarea{
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

button{
    width: 100%;
    padding: 0.5rem;
    background-color: #007bff;
    color: white;
    border:none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
    display: flex;
    justify-content: center;
}

label{
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

textarea{
    resize: vertical;
    height: 150px;
}
@media(max-width: ${({theme})=> theme.mobile}){
    justify-content: flex-start;
    margin-bottom: 2rem;
}
`;