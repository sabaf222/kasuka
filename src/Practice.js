import './Practice.css'

import React from 'react'

export default function Practice(props) {

    return (
    props.price>100 &&
    <div className='card'>
        <img src={props.img} alt="" srcset="" />
        <h1>{props.title}</h1>
        <h4>{props.price}</h4>
        <p> sunt at nulla soluta blanditiis voluptatem earum magnam aliquam, architecto id distinctio? Sint repellat consectetur veritatis quia.</p>

    </div>
  )
}
