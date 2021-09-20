import React from 'react'
import locationIcon from '../Fill219.svg'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={`../images/${props.imageUrl}`} className='card__image'/>
      <div className='card_content'>
        <div className='card__location'>
            <span className='card__country'><img src={locationIcon}/> {props.location}</span>
            <span>
                <a href={props.googleMapsUrl} target='_blank' className='card__google__map'> View on Google Maps</a>
            </span>
            <div className='card__title'>{props.title}</div>
        </div>
        <div className='card__date'>{props.startDate} - {props.endDate}</div>
        <div className='card__description'>{props.description}</div>
      </div>
    </div>
  )
}
