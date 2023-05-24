import styled from "styled-components"

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--gray-100);
  flex-wrap: wrap;
  font-size: 1.125rem;
  font-weight: bold;
`
const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid var(--gray-500);
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: var(--gray-100);

  ::placeholder {
    font-weight: 700;
    font-size: inherit;
    color: var(--gray-500);
  }

  :focus {
    box-shadow: none;
    border-bottom: 2px solid var(--green-500);
  }
`

export const MinuteAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  ::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
