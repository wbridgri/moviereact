import { useState } from "react";
import { useId } from "react"

const Reviews = () => {
    const [userName, setUserName] = useState("");
    const [rating, setRating] = useState(1);
    const [review, setReview] = useState("");
    const [reviews, setReviews] = useState([]);
    const { id } = useId()
    /**
     * 
     * setting to empty strs and rating default rating to 1/5
     *  
     */

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userName || !rating || !review) {
            alert("Please fill in all fields!");
            return;
        }

        const newReview = {
            id, 
            userName,
            rating,
            review,
            //this isn't very good, as there's nothing to guarantee that the same review id won't occur some than once.
        };

        setReviews([...reviews, newReview]);


        setUserName("");
        setRating(1);
        setReview("");
    };


    const renderStars = (rating) => {
        return "★".repeat(rating) + "☆".repeat(5 - rating); //inspired by FCC pyramid generator
    };
    //input field, when the user and rating are entered, and review text length is greater than zero; the reviews array is mapped to li elements with the values of the input
    return (
        <div className="container mt-4">
            <form className="form" onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <div className="col-auto">
                        <label htmlFor="userName" className="form-label text-capitalize">
                            Enter user name
                        </label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-auto">
                        <label htmlFor="rating" className="form-label text-capitalize">
                            Enter rating (1-5)
                        </label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            value={rating}
                            onChange={(e) => setRating(Number(e.target.value))}
                            min="1"
                            max="5"
                            className="form-control"
                            required
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <textarea
                        id="review"
                        name="review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control"
                        placeholder="Enter your review here!"
                        cols="50"
                        rows="5"
                        required
                    />
                </div>

                <div className="mb-3">
                    <button className="btn btn-primary" type="submit">
                        Submit Review
                    </button>
                </div>
            </form>

            {reviews.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-center">User Reviews</h3>
                    <ul className="list-group">
                        {reviews.map((r) => (
                            <li key={r.id} className="list-group-item">
                                {r.userName} rated this movie {r.rating}/5  
                                <div style={{ color: "gold", fontSize: "1.2em" }}>
                                    {renderStars(r.rating)}
                                </div>
                                <p>{r.review}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Reviews;