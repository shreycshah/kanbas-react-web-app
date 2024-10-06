import { Link } from "react-router-dom";
import React from "react";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />

      {/* Course Container */}
      <div id="wd-dashboard-courses" className="row">

        {/* Grid System with Multiple Rows and Columns */}
        <div className="row row-cols-1 row-cols-md-5 g-4">

          {/* Each Course */}
          <div className="wd-dashboard-course col" style={{ maxWidth: "270px", minWidth: "250px", margin: "30px 0" }}>
            <div className="card rounded-3 overflow-hidden" style={{ width: "100%" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/computer-science.png" width="100%" height={160} alt="Course" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1234 Dummy Course</h5>
                  <p className="card-text">Term: Fall 2024 | Year: 2024 | Sec: A</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ maxWidth: "270px", minWidth: "250px", margin: "30px 0" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5010/Home">
                <img src="/images/computer-science.png" width="100%" height={160} alt="Course" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5010 PDP</h5>
                  <p className="card-text">Term: Fall 2024 | Year: 2024 | Sec: A</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ maxWidth: "270px", minWidth: "250px", margin: "30px 0" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5200/Home">
                <img src="/images/computer-science.png" width="100%" height={160} alt="Course" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5200 DBMS</h5>
                  <p className="card-text">Term: Fall 2024 | Year: 2024 | Sec: A</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ maxWidth: "270px", minWidth: "250px", margin: "30px 0" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5800/Home">
                <img src="/images/computer-science.png" width="100%" height={160} alt="Course" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5800 Algorithms</h5>
                  <p className="card-text">Term: Fall 2024 | Year: 2024 | Sec: A</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ maxWidth: "270px", minWidth: "250px", margin: "30px 0" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5100/Home">
                <img src="/images/computer-science.png" width="100%" height={160} alt="Course" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5100 FAI</h5>
                  <p className="card-text">Term: Fall 2024 | Year: 2024 | Sec: A</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ maxWidth: "270px", minWidth: "250px", margin: "30px 0" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5610/Home">
                <img src="/images/computer-science.png" width="100%" height={160} alt="Course" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5610 Web Development</h5>
                  <p className="card-text">Term: Fall 2024 | Year: 2024 | Sec: A</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ maxWidth: "270px", minWidth: "250px", margin: "30px 0" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/3500/Home">
                <img src="/images/computer-science.png" width="100%" height={160} alt="Course" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS3500 OOD</h5>
                  <p className="card-text">Term: Fall 2024 | Year: 2024 | Sec: A</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}