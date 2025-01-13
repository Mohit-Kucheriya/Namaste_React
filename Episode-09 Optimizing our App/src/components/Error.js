import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div>
            <h2>Error Page</h2>
            <p>{error.error.message}</p>
            <p>{error.status} : {error.statusText}</p>
        </div>
    )
}

export default Error