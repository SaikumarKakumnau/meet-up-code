import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'

import {
  HomeContainer,
  HomeHeading,
  HomePara,
  HomeBtn,
  MeetupImg,
  RegisterSuccessHeading,
  RegisterSuccessPara,
} from './styledComponents'

const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }
  return (
    <RegisterContext.Consumer>
      {value => {
        const {name, topic, isRegistered} = value
        return (
          <>
            {isRegistered === true ? (
              <HomeContainer>
                <RegisterSuccessHeading>Hello {name}</RegisterSuccessHeading>
                <RegisterSuccessPara>Welcome to {topic}</RegisterSuccessPara>
                <MeetupImg
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <HomeHeading>Welcome to Meetup</HomeHeading>
                <HomePara>Please register for the topic</HomePara>
                <Link to="/register">
                  <HomeBtn
                    type="button"
                    className="home-btn"
                    onClick={onClickRegister}
                  >
                    Register
                  </HomeBtn>
                </Link>
                <MeetupImg
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
