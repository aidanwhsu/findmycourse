import React from 'react';
import '../App.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About FindMyCourse</h1>
        
        <div className="about-section">
          <h2>Project Background</h2>
          <p>
            FindMyCourse is a remake of my CSCI2254 (Web Application Development) final project from Boston College.
            The original version was frankly a disappointing display of my skill. While
            it served its purpose for the class, I always felt it could be so much better.
          </p>
        </div>

        <div className="about-section">
          <h2>The Original Project</h2>
          <p>
            The first iteration of FindMyCourse was built with React and used the wouter router 
            for navigation. While functional, it was very buggy and lacked the polish and modern design patterns that I've since 
            learned to appreciate. The user interface was basic, the code wasn't as clean as it could be, 
            and the overall user experience was frankly, terrible.
          </p>
        </div>

        <div className="about-section">
          <h2>Why a Remake?</h2>
          <p>
            As I've grown as a developer, I've often looked back at that project with mixed feelings. It was 
            a significant milestone in my programming journey, and I knew I could do it justice with my improved 
            skills. This remake represents not just a technical upgrade, but a commitment to tie up loose ends and work on my
            attention to detail.
          </p>
          <p>
            I wanted to create something that students would actually want to use: clean, intuitive, and genuinely 
            helpful for course selection. This version features modern React patterns, responsive design, 
            thoughtful user experience, and a minimalistic aesthetic that puts the content first.
          </p>
        </div>

        <div className="about-section">
          <h2>Built With</h2>
          <ul className="tech-list">
            <li>React.js with modern functional components and hooks</li>
            <li>CSS custom properties for consistent theming</li>
            <li>Responsive design principles</li>
            <li>Clean, semantic HTML structure</li>
            <li>Thoughtful user experience design</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>The Goal</h2>
          <p>
            My goal was simple: create a course review platform that I would be proud to show off, 
            that demonstrates growth as a developer, and that actually serves students well. This remake 
            is a testament to the importance of revisiting our work with fresh eyes and improved skills.
          </p>
        </div>

        <div className="about-footer">
          <p>
            <strong>Developed by Aidan Hsu</strong><br />
            Originally created for CSCI2254 - Web Application Development<br />
            Boston College, 2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;