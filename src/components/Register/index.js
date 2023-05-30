import RegisterContext from '../../context/RegisterContext'
import {
  RegisterBgContainer,
  RegisterContainer,
  RegisterLogo,
  FormContainer,
  FormHeading,
  Label,
  Input,
  Select,
  RegisterBtn,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        updateError,
        showError,
        registerName,
      } = value

      const onSubmitForm = event => {
        event.preventDefault()
        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
        console.log(event.target.value)
      }

      return (
        <RegisterBgContainer>
          <RegisterContainer>
            <RegisterLogo
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="register-logo"
            />
            <FormContainer className="form-container" onSubmit={onSubmitForm}>
              <FormHeading className="form-heading">Let us join</FormHeading>
              <Label htmlFor="name" className="label">
                NAME
              </Label>
              <Input
                id="name"
                type="text"
                className="input"
                placeholder="Your name"
                value={name}
                onChange={onChangeName}
              />
              <Label htmlFor="topic" className="label">
                TOPICS
              </Label>
              <Select
                id="topic"
                className="select"
                value={topic}
                onChange={onChangeTopic}
              >
                {topicsList.map(eachItem => (
                  <option value={eachItem.id} key={eachItem.id}>
                    {eachItem.displayText}
                  </option>
                ))}
              </Select>
              <RegisterBtn type="submit">Register Now</RegisterBtn>
              {showError ? <ErrorMsg>Please enter your name</ErrorMsg> : ''}
            </FormContainer>
          </RegisterContainer>
        </RegisterBgContainer>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
