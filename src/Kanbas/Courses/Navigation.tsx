import React from "react";
import { NavLink } from "react-router-dom";
export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink className="list-group-item" id="wd-course-home-link" to="/Kanbas/Courses/1234/Home">Home</NavLink>
      <NavLink className="list-group-item" id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules">Modules</NavLink>
      <NavLink className="list-group-item" id="wd-course-piazza-link" to="/Kanbas/Courses/1234/Piazza">Piazza</NavLink>
      <NavLink className="list-group-item" id="wd-course-zoom-link" to="/Kanbas/Courses/1234/Zoom">Zoom</NavLink>
      <NavLink className="list-group-item" id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments">Assignments</NavLink>
      <NavLink className="list-group-item" id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Quizzes">Quizzes</NavLink>
      <NavLink className="list-group-item" id="wd-course-grades-link" to="/Kanbas/Courses/1234/Grades">Grades</NavLink>
      <NavLink className="list-group-item" id="wd-course-people-link" to="/Kanbas/People">People</NavLink>
    </div>
  );
}
