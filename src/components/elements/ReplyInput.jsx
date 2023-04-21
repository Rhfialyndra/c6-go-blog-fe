import {IoIosSend} from "react-icons/io"

const ReplyInput = () => {
    return (
      <div className=" w-full">
        <div className="flex flex-col relative w-full">
          <input
            type="text"
            placeholder="say something"
            className={
              "input h-[40px] rounded-[5px] pr-14 focus:outline-none border-2 border-[#DFE1E6] focus:border-blue-300 bg-[#FAFBFC] text-[16px] text-gray-600"
            }
          ></input>
        <button className="absolute right-0 bg-cyan-500 p-3 py-2 rounded-r-[5px] hover:bg-cyan-600 h-full">
          <IoIosSend className="text-white text-base h-6" />
        </button>
        </div>
        
      </div>
    );
  };
export default ReplyInput;