import styled from 'styled-components'

export const RegisterBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const RegisterContainer = styled.div`
  display: flex;
  width: 50%;
`

export const RegisterLogo = styled.img`
  width: 60%;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const FormHeading = styled.h1`
  font-size: 40px;
  font-family: 'Roboto';
  color: #475569;
  font-weight: 500;
`

export const Label = styled.label`
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #7b8794;
  margin-bottom: 5px;
`

export const Input = styled.input`
  height: 5vh;
  width: 100%;
  border: 1px solid #cbd5e1;
  margin-bottom: 20px;
  padding-left: 10px;
  border-radius: 5px;
  outline: none;
`

export const Select = styled.select`
  height: 5vh;
  width: 100%;
  border: 1px solid #cbd5e1;
  margin-bottom: 20px;
  padding-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`

export const RegisterBtn = styled.button`
  padding: 10px;
  width: 140px;
  background-color: #2563eb;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  color: #ff0b37;
  margin-top: 5px;
`
