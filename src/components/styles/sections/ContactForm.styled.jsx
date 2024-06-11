import styled from "styled-components";


export const ContactFormContainer = styled.div`
  width: 50%;
  padding: 7rem;
  height: 80%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all 300ms ease-in-out;
&:hover{
    transform: translateY(-1rem);
}
@media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1rem; 
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export const FormCheckbox = styled.input`
  margin-right: 0.5rem;
`;

export const FormLabel = styled.label`
  font-weight: bold;
`;

export const ImageCardContainer = styled.div`
  width: 40%;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
   transition: all 300ms ease-in-out;

&:hover{
    transform: translateY(-1rem);
}
`;

export const ImageCardImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const EmailUsButton = styled.button`
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

/* card form*/
export const HomeContainer = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const CardForm = styled.div`
  display: flex;
  align-items: center;
  margin-left: 120px;
  width: 90%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.0);
  border-radius: 25px;
  transition: all 300ms ease-in-out;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  @media(max-width: ${({theme})=> theme.mobile}){
    flex-direction: column;
    margin-left: 0;
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: white;
`;

export const Paragraph = styled.p`
  font-size: 25px;
  margin-bottom: 10px;
  color: white;
  @media(max-width: ${({theme})=>theme.mobile}){
    font-size: 16px;
  }
`;

export const CheckBoxWrapper = styled.div`
  margin-bottom: 20px;
`;

export const CheckBoxLabel = styled.label`
  display: block;
  margin-bottom: 20px;
  color: white;
  font-size: 25px;
    @media(max-width: ${({theme})=>theme.mobile}){
    font-size: 16px;
  }
`;

export const CheckBox = styled.input.attrs({type: 'radio'})`
  margin-right: 12px;
`;

export const Select = styled.select`
  width: 30%;
  padding: 10px;
  border-radius: 45px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const TextArea = styled.textarea`
  width: 45%;
  height: 120px;
  padding: 20px;
  border-radius: 30px;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

/* end of card form */




export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '0')};
  margin-top:40px;
`;

export const Icon = styled.div`
  color: orange;
  transform: scaleX(-1);
  font-size: 32px;
  margin-right: 15px;
`;

export const Text = styled.p`
  margin-left: 10px;
  font-size: 32px;
  @media(max-width: ${({theme})=> theme.mobile}){
    font-size: 16px;
  }
`;


