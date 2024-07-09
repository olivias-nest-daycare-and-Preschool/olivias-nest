import styled from 'styled-components';

const TeamyContainer = styled.div`
  /* Add your global styles here */
`;

const TeamyItem = styled.div`
  /* Add your specific item styles here */
`;

const TeamyLayout = styled.div`
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: "";
    background-color: var(--teamy-back-background-color, rgba(0, 0, 0, .7));
    opacity: 0;
    position: absolute;
    z-index: 1;
  }
`;

const TeamyAvatar = styled.img`
  display: block;
  block-size: 100%;
  inline-size: 100%;
  object-fit: cover;
`;

const TeamyBack = styled.div`
  display: flex;
  padding: var(--teamy-back-padding, 1.25rem);
  position: absolute;
  inset: 0; 
  z-index: 1;
`;

const TeamyBackContent = styled.div`
  opacity: 0;
  margin: auto;

  &:focus-within,
  &:hover {
    opacity: 1;
  }
`;