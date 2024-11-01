import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";

export default function AssignmentLevelControl({ assignmentId, deleteAssignment }:
    { assignmentId: string; deleteAssignment: (assignmentId: string) => void }) {
    const handleDelete = () => {
        const confirmed = window.confirm("Are you sure you want to delete this assignment?");
        if (confirmed) {
            deleteAssignment(assignmentId);
        }
    };
    return (
        <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1" onClick={handleDelete} />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
