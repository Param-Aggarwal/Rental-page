import './card.css'
import useFetch from '../../Function/useFetch';

const Card2 = () => {
    const { data,isPending,error } = useFetch("http://localhost:8000/data")

    return (
        <>
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {}
            {data && data.map((d) => {
                <div>{d.name}
                <div className="card" key={d.id}>
                    <img className="card-img" src={d.image} alt="" />
                    <div className="card-body">
                        <h4 className="card-price">{d.price}</h4>    
                        <div className="card-fav">❤️</div>
                        <h2 className="card-name">{d.name}</h2>
                        <span className="card-address"> {d.address}</span>
                    </div>
                    <div className="card-footer">
                        <span className="card-beds">{d.beds} beds</span>
                        <span className="card-bathrooms">{d.bathrooms} bathrooms</span>
                        <span className="card-area">{d.area} m3</span>
                    </div>
                    </div>
                    </div>
            })}
        </>
     )
}
 
export default Card2;