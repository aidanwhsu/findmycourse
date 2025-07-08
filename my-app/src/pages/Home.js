import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="main-container">
      <h1>Welcome to <b>FindMyCourse</b>!</h1>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
          Discover and review Boston College courses with insights from fellow students
        </p>
        
        <div style={{ 
          background: 'var(--color-bg-white)', 
          padding: '2rem', 
          borderRadius: '12px', 
          boxShadow: '0 2px 8px var(--color-shadow-light)',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>
          <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
            What You'll Find Here
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
            Explore <strong>20 Boston College classes</strong> spanning <strong>5 different majors</strong>. 
            Read honest reviews from students, see average ratings, and share your own experiences 
            to help future students make informed decisions about their course selections.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            to="/courses" 
            style={{
              background: 'var(--color-primary)',
              color: 'white',
              textDecoration: 'none',
              padding: '1rem 2rem',
              borderRadius: '6px',
              fontWeight: '500',
              transition: 'background-color 0.2s ease',
              display: 'inline-block'
            }}
            onMouseOver={(e) => e.target.style.background = 'var(--color-primary-hover)'}
            onMouseOut={(e) => e.target.style.background = 'var(--color-primary)'}
          >
            Browse Courses
          </Link>
          
          <Link 
            to="/about" 
            style={{
              background: 'var(--color-secondary)',
              color: 'white',
              textDecoration: 'none',
              padding: '1rem 2rem',
              borderRadius: '6px',
              fontWeight: '500',
              transition: 'background-color 0.2s ease',
              display: 'inline-block'
            }}
            onMouseOver={(e) => e.target.style.background = 'var(--color-secondary-hover)'}
            onMouseOut={(e) => e.target.style.background = 'var(--color-secondary)'}
          >
            Learn More
          </Link>
        </div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem',
        marginTop: '3rem'
      }}>
        <div style={{
          background: 'var(--color-bg-white)',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px var(--color-shadow-light)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>📚 Course Reviews</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Read detailed reviews from students who have taken the courses
          </p>
        </div>

        <div style={{
          background: 'var(--color-bg-white)',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px var(--color-shadow-light)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>⭐ Ratings & Feedback</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            See average ratings and get insights into course difficulty and quality
          </p>
        </div>

        <div style={{
          background: 'var(--color-bg-white)',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px var(--color-shadow-light)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>🎓 Multiple Majors</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Courses from 5 different majors to help you explore your academic interests
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;