import './home.css'
import useFetch from "../../Function/useFetch";
import Search from "../../Components/Search/search";

const Home = () => {
    const { data, isPending, error } = useFetch("http://localhost:9000/data");
 
    return ( 
        <>
            <div className="home">
                <h2 className="home-title">Search Properties to rent</h2>
                    <Search data={data} />
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading....</div>}
            </div>
        </>
     );
}
 
export default Home;



