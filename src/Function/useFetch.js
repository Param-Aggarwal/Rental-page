import {useState,useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch data from that resource!!")
                }
                // console.log(res);
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
                // console.log(data);
            })
            .catch(err => {
                if (err.name === 'AbortError')
                    console.log('fetch aborted')
                else {
                    setIsPending(false);
                    setError(err.message);
                    console.log(`error is ${err}`);
                }
            });
        },1000)
        return () => abortCont.abort();
     }, [url,data])

    return {data, isPending, error};
}

export default useFetch;