import {Component} from 'react'
import './index.css'

const stateView = {
  yetToRegister: 'YET_TO_REGISTER',
  registrationClosed: 'REGISTRATIONS_CLOSED',
  registered: 'REGISTERED',
}

export default class ActiveEventRegistrationDetails extends Component {
  emptyFunc = () => (
    <p className="no-event-takes-place">
      Click on an event, to view its registration details
    </p>
  )

  yetToRegistration = () => (
    <div className="event-main-result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="event-result-img"
      />
      <p className="event-result-des">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you to fall totally in love with thid
        beautiful art form.
      </p>
      <button type="button" className="button">
        Register Here
      </button>
    </div>
  )

  registrationClosedFun = () => (
    <div className="event-main-result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="event-result-img"
      />
      <h1 className="registration-closed-head">
        Registrations Are Closed Now!
      </h1>
      <p className="registration-closed-des">Stay tuned. We will reopen</p>
    </div>
  )

  registeredFunc = () => (
    <div className="event-main-result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="event-result-img-one"
      />
      <p className="registration-closed-head">
        You have already registered for the event
      </p>
    </div>
  )

  render() {
    const {filt} = this.props
    console.log(filt)
    switch (filt.registrationStatus) {
      case stateView.yetToRegister:
        return this.yetToRegistration()
      case stateView.registrationClosed:
        return this.registrationClosedFun()
      case stateView.registered:
        return this.registeredFunc()
      default:
        return this.emptyFunc()
    }
  }
}
