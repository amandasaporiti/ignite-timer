import styled from "styled-components"

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`
const BaseButton = styled.button`
  width: 100%;
  border-radius: 8px;
  opacity: 0.7;
  border: 0;
  padding: 1rem 2.5rem;

  font-weight: bold;
  font-size: 1rem;
  color: var(--gray-100);
  line-height: 1.18125rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;
`
export const InterruptButton = styled(BaseButton)`
  background: var(--red-500);
  :hover {
    background: var(--red-700);
  }
`

export const StartButton = styled(BaseButton)`
  background: var(--green-700);

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  :not(:disabled) {
    background: var(--green-500);
  }
  :not(:disabled):hover {
    background: var(--green-300);
  }
`
