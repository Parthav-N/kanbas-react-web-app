import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-3">
        {courses.map(course => (
          <div className="col" key={course.id}>
            <div className="card h-100">
              <img 
                src={course.image} 
                className="card-img-top" 
                alt={course.title} 
                style={{ height: '200px', objectFit: 'cover' }} // Inline styles for fixed height
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <Link to={course.link} className="btn btn-primary mt-auto">Go</Link> {/* mt-auto for spacing */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const courses = [
  { id: '1234', title: 'CS1234 React JS', description: 'Full Stack Software Developer', image: '/images/reactjs.png', link: '/Kanbas/Courses/1234/Home' },
  { id: '5678', title: 'CS5678 Node.js', description: 'Backend Development', image: '/images/nodejs.png', link: '/Kanbas/Courses/5678/Home' },
  { id: '9101', title: 'CS9101 Python', description: 'Data Science and Machine Learning', image: '/images/python.png', link: '/Kanbas/Courses/9101/Home' },
  { id: '1121', title: 'CS1121 JavaScript', description: 'Frontend Web Development', image: '/images/jsp.png', link: '/Kanbas/Courses/1121/Home' },
  { id: '3141', title: 'CS3141 Java', description: 'Object-Oriented Programming', image: '/images/java.png', link: '/Kanbas/Courses/3141/Home' },
  { id: '1617', title: 'CS1617 C#', description: 'Desktop and Web Applications', image: '/images/csharp.png', link: '/Kanbas/Courses/1617/Home' },
  { id: '1819', title: 'CS1819 Flutter', description: 'Mobile App Dev', image: '/images/flutter.png', link: '/Kanbas/Courses/1819/Home' },
  { id: '2021', title: 'CS2021 React Native', description: 'Native App Dev', image: '/images/rn.png', link: '/Kanbas/Courses/2021/Home' },
];
