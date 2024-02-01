import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConversationPage = ({ isOpen, onClose, data }) => {
  return (
    <div
      className={` text-black fixed inset-y-0 right-0 w-full min-h-screen bg-white overflow-y-scroll transition-transform duration-500 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="px-4 border-b-2">
        <div className="flex pt-3 w-full justify-between">
          <button onClick={onClose} className="text-xl font-bold pb-3">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <h2 className="text-center text-xl font-bold">Message</h2>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
