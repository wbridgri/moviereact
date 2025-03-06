import { useParams } from "react-router-dom";
import Reviews from "./Reviews";
import data from "../data"; 
const Movie = () => {
    const { id } = useParams();

    const movie = data.find((item) => item.id === parseInt(id));
    //returns the first element from data when the useParamsid is equivalent to the item.id

    if (!movie) {
    return <h2 className="text-center">Movie not found</h2>;
    }

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{movie.title}</h2>
                    <p className="card-text">Director: {movie.director}</p>
                </div>
            </div>

            <Reviews movieTitle={movie.title} director={movie.director} />
        </div>
);
};

export default Movie;