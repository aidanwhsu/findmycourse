import React, { useState, useEffect } from 'react';
import coursesData from '../data/courses.json';
import reviewsData from '../data/reviews.json';
import '../App.css';

function Courses() {
  const [major, setMajor] = useState('All');
  const [majors, setMajors] = useState([]);
  const [sortBy, setSortBy] = useState('courseId');
  const [expanded, setExpanded] = useState({});
  const [showReviewForm, setShowReviewForm] = useState({});
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    comment: '',
    courseId: ''
  });

  useEffect(() => {
    const uniqueMajors = Array.from(new Set(coursesData.map(course => course.major)));
    setMajors(uniqueMajors);
  }, []);

  const filteredCourses =
    major === 'All'
      ? coursesData
      : coursesData.filter(course => course.major === major);

  // Helper to get reviews for a course
  const getReviewsForCourse = (courseId) =>
    reviewsData.filter(review => review.courseId === courseId);

  // Helper to calculate average rating
  const getAverageRating = (courseId) => {
    const reviews = getReviewsForCourse(courseId);
    if (reviews.length === 0) return null;
    const sum = reviews.reduce((acc, review) => acc + Number(review.rating), 0);
    return (sum / reviews.length).toFixed(2);
  };

  // Sort courses based on selected option
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'courseId':
        return a.courseId.localeCompare(b.courseId);
      case 'rating':
        const ratingA = getAverageRating(a.courseId);
        const ratingB = getAverageRating(b.courseId);
        // Sort by rating descending (highest first), courses with no rating go to end
        if (ratingA === null && ratingB === null) return 0;
        if (ratingA === null) return 1;
        if (ratingB === null) return -1;
        return parseFloat(ratingB) - parseFloat(ratingA);
      default:
        return 0;
    }
  });

  const toggleExpand = (courseId) => {
    setExpanded(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  const toggleReviewForm = (courseId) => {
    setShowReviewForm(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
    setReviewForm({
      name: '',
      rating: 5,
      comment: '',
      courseId
    });
  };

  // Helper to get rating color based on value
  const getRatingColor = (rating) => {
    const numRating = parseFloat(rating);
    if (numRating > 4.5) return 'var(--color-good)'; // Green for excellent
    if (numRating >= 3.5) return 'var(--color-okay)'; // Orange for good
    if (numRating >= 2.5) return 'var(--color-warning)'; // Yellow for okay
    return 'var(--color-review)'; // Red for poor
  };

  // Placeholder for review submission (does not persist)
  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    alert(
      `Review "submitted"! Need a database to have this work properly\nName: ${reviewForm.name}\nRating: ${reviewForm.rating}\nComment: ${reviewForm.comment}`
    );
    setShowReviewForm(prev => ({
      ...prev,
      [reviewForm.courseId]: false
    }));
  };

  

  return (
    <div className="main-container">
      <h1>Courses</h1>
      <div className="filters-container">
        <div className="filter-group">
          <label htmlFor="major-select">Filter by Major: </label>
          <select
            id="major-select"
            value={major}
            onChange={e => setMajor(e.target.value)}
          >
            <option value="All">All</option>
            {majors.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="sort-select">Sort by: </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
          >
            <option value="courseId">Course Number</option>
            <option value="rating">Average Rating</option>
          </select>
        </div>
      </div>
      <ul>
        {sortedCourses.map(course => {
          const avgRating = getAverageRating(course.courseId);
          return (
          <li key={course.courseId} className="course-item">
            <strong>{course.courseId}: {course.courseName}</strong><br />
            <em>Professor:</em> {course.professorName}<br />
            <em>Major:</em> {course.major}<br />
            <em>Semesters Offered:</em> {course.semestersOffered.join(', ')}<br />
            <em>Description:</em> {course.description}<br />
            <em>
            Average Rating:{' '}
            {avgRating ? (
                <span 
                  className="course-rating" 
                  style={{ color: getRatingColor(avgRating) }}
                >
                  {avgRating} / 5.00
                </span>
            ) : (
                <span className="course-no-rating">No ratings yet</span>
            )}
            </em><br />
            <button
              onClick={() => toggleExpand(course.courseId)}
              className="course-button"
            >
              {expanded[course.courseId] ? 'Hide Reviews' : 'See Reviews'}
            </button>
            <button
              onClick={() => toggleReviewForm(course.courseId)}
              className="course-button-secondary"
            >
              {showReviewForm[course.courseId] ? 'Cancel' : 'Create Review'}
            </button>
            {expanded[course.courseId] && (
              <div className="reviews-section">
                <strong>Reviews:</strong>
                <div className="reviews-empty">
                  {getReviewsForCourse(course.courseId).length === 0 ? (
                    <span>No reviews yet.</span>
                  ) : (
                    getReviewsForCourse(course.courseId).map((review, idx) => (
                      <div key={idx} className="review-item">
                        <strong>{review.reviewer}</strong> ({review.rating}/5):<br />
                        {review.comment}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
            {showReviewForm[course.courseId] && (
              <div
                className="modal-overlay"
                onClick={() => toggleReviewForm(course.courseId)}
              >
                <form
                  onClick={e => e.stopPropagation()}
                  onSubmit={handleReviewSubmit}
                  className="modal-form"
                >
                  <h3>Leave a Review for {course.courseName}</h3>
                  <div>
                    <label>
                      Name:
                      <input
                        type="text"
                        name="name"
                        value={reviewForm.name}
                        onChange={handleReviewChange}
                        required
                        className="form-input"
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Rating:
                      <select
                        name="rating"
                        value={reviewForm.rating}
                        onChange={handleReviewChange}
                        className="form-select"
                      >
                        {[5, 4, 3, 2, 1].map(r => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <div>
                    <label>
                      Comment:
                      <textarea
                        name="comment"
                        value={reviewForm.comment}
                        onChange={handleReviewChange}
                        required
                        className="form-textarea"
                      />
                    </label>
                  </div>
                  <button type="submit" className="form-button-primary">Submit</button>
                  <button type="button" onClick={() => toggleReviewForm(course.courseId)}>
                    Cancel
                  </button>
                </form>
              </div>
            )}
          </li>
        );
        })}
      </ul>
    </div>
  );
}

export default Courses;