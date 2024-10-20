// import React from "react";
// import { BsGripVertical } from "react-icons/bs";
// import ModulesControls from "./ModulesControls";
// import LessonControlButtons from "./LessonControlButtons";
// import ModuleControlButtons from "./ModuleControlButtons";
// import { useParams } from "react-router";
// import * as db from "../../Database";
// export default function Modules() {
//   const { cid } = useParams();
//   const modules = db.modules;
//   return (
//     <div className="flex-fill" style={{ color: 'black' }}>
//       <ModulesControls /><br />
//       <ul id="wd-modules" className="list-group rounded-0">

//         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" style={{ color: 'black', border: '1px solid black' }}>
//           <div className="wd-title p-3 ps-2 bg-secondary" style={{ color: 'black', border: '1px solid black' }}>
//             <BsGripVertical className="me-2 fs-3" />
//             Week 1 <ModuleControlButtons /></div>
//           <ul className="wd-lessons list-group rounded-0">
//             <li className="wd-lesson list-group-item p-3 ps-1" style={{ color: 'black', border: '1px solid black' }}>
//               <BsGripVertical className="me-2 fs-3" />
//               LEARNING OBJECTIVES<LessonControlButtons /></li>
//             <li className="wd-lesson list-group-item p-3 ps-1" style={{ color: 'black', border: '1px solid black' }}>
//               <BsGripVertical className="me-2 fs-3" />
//               Introduction to the course<LessonControlButtons /></li>
//             <li className="wd-lesson list-group-item p-3 ps-1" style={{ color: 'black', border: '1px solid black' }}>
//               <BsGripVertical className="me-2 fs-3" />
//               Learn what is Web Development <LessonControlButtons /></li>
//             <li className="wd-lesson list-group-item p-3 ps-1" style={{ color: 'black', border: '1px solid black' }}>
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 1<LessonControlButtons /></li>
//             <li className="wd-lesson list-group-item p-3 ps-1" style={{ color: 'black', border: '1px solid black' }}>
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 2<LessonControlButtons /></li>
//           </ul>
//         </li>


//         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" style={{ color: 'black', border: '1px solid black' }}>
//           <div className="wd-title p-3 ps-2 bg-secondary" style={{ color: 'black', border: '1px solid black' }}>
//             <BsGripVertical className="me-2 fs-3" />
//             Week 2 <ModuleControlButtons /></div>
//           <ul className="wd-lessons list-group rounded-0">
//             <li className="wd-lesson list-group-item p-3 ps-1" style={{ color: 'black', border: '1px solid black' }}>
//               <BsGripVertical className="me-2 fs-3" />
//               LEARNING OBJECTIVES<LessonControlButtons /></li>
//             <li className="wd-lesson list-group-item p-3 ps-1" style={{ color: 'black', border: '1px solid black' }}>
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 1<LessonControlButtons /></li>
//             <li className="wd-lesson list-group-item p-3 ps-1" style={{ color: 'black', border: '1px solid black' }}>
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 2<LessonControlButtons /></li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// }

import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";
export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;
  return (
    <div className="flex-fill" style={{ color: 'black' }}>
      <ModulesControls /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary" style={{ color: 'black', border: '1px solid black' }}>
                <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1" style={{ color: 'black', border: '1px solid black' }}>
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name} <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>

    </div>
  );
}
