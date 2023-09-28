import {Component} from 'react'
import './index.css'

export default class EventItem extends Component {
  render() {
    const {item, onClickBtnFunc, active} = this.props
    const {id, imageUrl, name, location} = item

    const onClickBtn = () => {
      onClickBtnFunc(id)
    }
    const x = active === id ? 'border' : ''

    return (
      <li className="event-item-container">
        <button id={id} type="button" onClick={onClickBtn}>
          <img className={`img ${x}`} src={imageUrl} alt="event" />
        </button>
        <p className="event-name">{name}</p>
        <p className="event-place">{location}</p>
      </li>
    )
  }
}
