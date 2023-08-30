import './card.css'

const Card = ({data}) => {

    return (
        <>
            <div className="card" key={data.id}>
                    <img className="card-img" src={data.image} alt="" />
                    <div className="card-body">
                        <h4 className="card-price">{data.price}</h4>    
                        <div className="card-fav">❤️</div>
                        <h2 className="card-name">{data.name}</h2>
                        <span className="card-address"> {data.address}</span>
                    </div>
                    <div className="card-footer">
                        <span className="card-beds">{data.beds} beds</span>
                        <span className="card-bathrooms">{data.bathrooms} bathrooms</span>
                        <span className="card-area">{data.area} m3</span>
                    </div>
                </div>
        </>

            
     )
}
 
export default Card;