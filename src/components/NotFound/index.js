import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
      className="not-found-img"
    />
    <NotFoundHeading className="not-found-heading">
      Page Not Found
    </NotFoundHeading>
    <NotFoundPara className="not-found-para">
      We are sorry, the page you requested could not be found.
    </NotFoundPara>
  </NotFoundContainer>
)

export default NotFound
