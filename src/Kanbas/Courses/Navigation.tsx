// import React from "react";
// import { NavLink } from "react-router-dom";
// export default function CoursesNavigation() {
//   return (
//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       <NavLink className="list-group-item" id="wd-course-home-link" to="/Kanbas/Courses/1234/Home">Home</NavLink>
//       <NavLink className="list-group-item" id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules">Modules</NavLink>
//       <NavLink className="list-group-item" id="wd-course-piazza-link" to="/Kanbas/Courses/1234/Piazza">Piazza</NavLink>
//       <NavLink className="list-group-item" id="wd-course-zoom-link" to="/Kanbas/Courses/1234/Zoom">Zoom</NavLink>
//       <NavLink className="list-group-item" id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments">Assignments</NavLink>
//       <NavLink className="list-group-item" id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Quizzes">Quizzes</NavLink>
//       <NavLink className="list-group-item" id="wd-course-grades-link" to="/Kanbas/Courses/1234/Grades">Grades</NavLink>
//       <NavLink className="list-group-item" id="wd-course-people-link" to="/Kanbas/Courses/1234/People">People</NavLink>
//     </div>
//   );
// }

import { Link, useLocation, useParams } from "react-router-dom";

export default function CourseNavigation() {

  const { cid } = useParams(); // Get the current course's ID from the route params
  const { pathname } = useLocation(); // Get the current pathname
  const links = [
    { label: "Home", path: `/Kanbas/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kanbas/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kanbas/Courses/${cid}/Grades` },
    { label: "People", path: `/Kanbas/Courses/${cid}/People` },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link.path} to={link.path}  className={`list-group-item border border-0 ${pathname.includes(link.label) ? "active" : "text-danger"}`}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}