import InProgressIcon from "../Untitled/icons_FEtask/in-progress.svg";
import ThreeDots from "../Untitled/icons_FEtask/3 dot menu.svg";
import lowIcon from "../Untitled/icons_FEtask/Img - Low Priority.svg";
import MediumIcon from "../Untitled/icons_FEtask/Img - Medium Priority.svg";
import HighIcon from "../Untitled/icons_FEtask/Img - High Priority.svg";
import UrgentIcon from "../Untitled/icons_FEtask/SVG - Urgent Priority colour.svg";
import BackLog from "../Untitled/icons_FEtask/Backlog.svg";
import TodoIcon from "../Untitled/icons_FEtask/To-do.svg";
import DoneIcon from "../Untitled/icons_FEtask/Done.svg";
import CanceledIcon from "../Untitled/icons_FEtask/Cancelled.svg";
export const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case "No priority":
      return <img src={ThreeDots} alt="three Dots" />;
    case "Low":
      return <img src={lowIcon} alt="Low icon" />;
    case "Medium":
      return <img src={MediumIcon} alt="Medium Icon" />;
    case "High":
      return <img src={HighIcon} alt="High Icon" />;
    case "Urgent":
      return <img src={UrgentIcon} alt="Urgent Icon" />;
    default:
      return <img src={UrgentIcon} alt="Urgent Icon" />;
  }
};

export const getStatusIcon = (priority: string) => {
  switch (priority) {
    case "Backlog":
      return <img src={BackLog} alt="BackLog Icon" />;
    case "Todo":
      return <img src={TodoIcon} alt="Todo Icon" />;
    case "In progress":
      return <img src={InProgressIcon} alt="In Progress Icon" />;
    case "Done":
      return <img src={DoneIcon} alt="Done Icon" />;
    case "Canceled":
      return <img src={CanceledIcon} alt="Canceled Icon" />;
    default:
      return <img src={CanceledIcon} alt="Canceled Icon" />;
  }
};
