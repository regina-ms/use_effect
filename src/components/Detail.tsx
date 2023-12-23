import { DetailProps } from '../types'

export default function Detail({ item }: DetailProps) {
    return (
        <div className='details card'>
            <img className='card-img-top' src={item.avatar} alt='' />
            <div className='card-body'>
                <ul className="list-group list-group-flush">
                    <div className='card-title list-group-item'>{item.name}</div>
                    <div className='list-group-item'>City: {item.details.city}</div>
                    <div className='list-group-item'>Company: {item.details.company}</div>
                    <div className='list-group-item'>Position: {item.details.position}</div>
                </ul>
            </div>
        </div>
    )
}
