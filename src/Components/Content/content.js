import Card from "../card/card.js";
import './content.css'

const Content = ({data}) => {

    return (
        <div className="content">
            {(JSON.stringify(data) === '[]') && <div>No Property related to this search!!!</div>}
            {data && data.map((d) => (
                <Card data={d} key={d.id} />
            ))}
        </div>
    )
}
 
export default Content; 