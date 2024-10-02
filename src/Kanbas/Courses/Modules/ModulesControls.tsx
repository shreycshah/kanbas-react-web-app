// import { FaPlus } from "react-icons/fa6";
// import GreenCheckmark from "./GreenCheckmark";

// export default function ModulesControls() {
//     return ( 
//         <div id="wd-modules-controls" className="text-nowrap">
//             <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
//                 <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//                 Module
//             </button>

//             <div className="dropdown d-inline me-1 float-end">
//                 <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
//                     type="button" data-bs-toggle="dropdown">
//                     <GreenCheckmark />
//                     Publish All
//                 </button>
//                 <ul className="dropdown-menu">
//                     <li>
//                         <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
//                             <GreenCheckmark />
//                             Publish all modules and items
//                         </a>
//                     </li>
//                     <li>
//                         <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
//                             <GreenCheckmark />
//                             Publish modules only
//                         </a>
//                     </li>
//                     <li>
//                         <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#">
//                             <GreenCheckmark />
//                             Unpublish all modules and items
//                         </a>
//                     </li>
//                     <li>
//                         <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
//                             <GreenCheckmark />
//                             Unpublish modules only
//                         </a>
//                     </li>
//                 </ul>
//             </div>

//             <button id="wd-view-progress" className="btn btn-lg btn-info me-1 float-end">
//                 View Progress
//             </button>
//             <button id="wd-collapse-all" className="btn btn-lg btn-warning me-1 float-end">
//                 Collapse All
//             </button>
//         </div>


//     );
// }

import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import React from 'react';

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="d-flex justify-content-end align-items-center gap-2 mb-2">
      {/* Add Module Button */}
      <button id="wd-add-module-btn" className="btn btn-sm btn-danger d-flex align-items-center">
        <FaPlus className="me-2" style={{ position: "relative", bottom: "1px" }} />
        Module
      </button>

      {/* Publish All Dropdown */}
      <div className="dropdown">
        <button id="wd-publish-all-btn" className="btn btn-sm btn-secondary dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown">
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish modules only
            </a>
          </li>
          <li>
            <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#">
              <GreenCheckmark />
              Unpublish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
              <GreenCheckmark />
              Unpublish modules only
            </a>
          </li>
        </ul>
      </div>

      {/* Collapse All Button */}
      <button id="wd-collapse-all" className="btn btn-sm btn-warning d-flex align-items-center">
        Collapse All
      </button>

      {/* View Progress Button */}
      <button id="wd-view-progress" className="btn btn-sm btn-info d-flex align-items-center">
        View Progress
      </button>
    </div>
  );
}


