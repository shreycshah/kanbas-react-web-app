import { Link } from "react-router-dom";
import React from "react";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">

      <div className="wd-dashboard-course">
          <img src="/images/computer-science.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234
            </Link>
            <p className="wd-dashboard-course-title">
              Dummy Course
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/computer-science.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5010/Home">
              CS5010
            </Link>
            <p className="wd-dashboard-course-title">
              Programming Design Paradigm
            </p>
            <Link to="/Kanbas/Courses/5010/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/computer-science.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5200/Home">
              CS5200
            </Link>
            <p className="wd-dashboard-course-title">
              Database Management Systems
            </p>
            <Link to="/Kanbas/Courses/5200/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/computer-science.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5800/Home">
              CS5800
            </Link>
            <p className="wd-dashboard-course-title">
              Algorithms
            </p>
            <Link to="/Kanbas/Courses/5800/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/computer-science.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5100/Home">
              CS5100
            </Link>
            <p className="wd-dashboard-course-title">
              Foundation of Artificial Intelligence
            </p>
            <Link to="/Kanbas/Courses/5100/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/computer-science.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5610/Home">
              CS5610
            </Link>
            <p className="wd-dashboard-course-title">
              Web Development
            </p>
            <Link to="/Kanbas/Courses/5610/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/computer-science.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/3500/Home">
              CS3500
            </Link>
            <p className="wd-dashboard-course-title">
              Object Oriented Design
            </p>
            <Link to="/Kanbas/Courses/3500/Home"> Go </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

