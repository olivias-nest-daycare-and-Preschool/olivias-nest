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
