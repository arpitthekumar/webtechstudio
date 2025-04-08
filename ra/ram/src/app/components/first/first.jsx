'use client';

import { useState } from "react";

const First = () => {
  const [reviews, setReviews] = useState([]); // Holds reviews and ratings
  const [userInput, setUserInput] = useState({ rating: 0, comment: "" }); // For user input
  const [ownerResponses, setOwnerResponses] = useState({}); // Stores owner responses

  // Handle review submission
  const handleReviewSubmit = () => {
    if (userInput.rating === 0 || userInput.comment.trim() === "") {
      alert("Please provide a rating and a comment.");
      return;
    }
    setReviews([...reviews, { id: Date.now(), ...userInput }]);
    setUserInput({ rating: 0, comment: "" });
  };

  // Handle owner response submission
  const handleOwnerResponse = (reviewId, response) => {
    setOwnerResponses((prevResponses) => ({
      ...prevResponses,
      [reviewId]: response,
    }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-lg">
      <h1 className="text-2xl font-extrabold mb-6 text-gray-800 text-center">
        Review and Rating System
      </h1>

      {/* User review form */}
      <div className="mb-8 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Leave a Review</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Rating:
          </label>
          <select
            value={userInput.rating}
            onChange={(e) =>
              setUserInput({ ...userInput, rating: Number(e.target.value) })
            }
            className="border-gray-300 border p-2 w-full rounded-md focus:ring focus:ring-indigo-300"
          >
            <option value="0">Select Rating</option>
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star} Star{star > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Comment:
          </label>
          <textarea
            value={userInput.comment}
            onChange={(e) =>
              setUserInput({ ...userInput, comment: e.target.value })
            }
            className="border-gray-300 border p-2 w-full rounded-md focus:ring focus:ring-indigo-300"
            rows="4"
          ></textarea>
        </div>
        <button
          onClick={handleReviewSubmit}
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
        >
          Submit Review
        </button>
      </div>

      {/* Display reviews */}
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div
            key={review.id}
            className="mb-6 bg-white p-6 shadow-md rounded-lg"
          >
            <div className="mb-4">
              <p className="text-lg font-bold text-gray-700">
                Rating: {"⭐".repeat(review.rating)}
              </p>
              <p className="text-gray-600">{review.comment}</p>
            </div>
            {ownerResponses[review.id] ? (
              <div className="mt-4 p-4 bg-green-100 rounded-md">
                <strong className="text-green-700">Owner Response:</strong>
                <span> {ownerResponses[review.id]}</span>
              </div>
            ) : (
              <div className="mt-4">
                <textarea
                  placeholder="Owner's response..."
                  className="border-gray-300 border p-2 w-full rounded-md focus:ring focus:ring-indigo-300 mb-2"
                  rows="2"
                  onChange={(e) =>
                    handleOwnerResponse(review.id, e.target.value)
                  }
                ></textarea>
                <button
                  onClick={() =>
                    handleOwnerResponse(review.id, ownerResponses[review.id] || "")
                  }
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
                >
                  Submit Response
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-600 text-center">
          No reviews yet. Be the first to leave one!
        </p>
      )}
    </div>
  );
};

export default First;
