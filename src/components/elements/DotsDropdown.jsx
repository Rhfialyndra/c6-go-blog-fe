import { BsThreeDots } from "react-icons/bs";
import { RiDeleteBin2Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import DeleteModal from "./DeleteModal";
import { deletePost } from "../../queries/post/deletePost";
import UpdatePostModal from "../modules/post/UpdatePostModal";

const DotsDropdown = ({ postData, posts, postsSetter, index }) => {

  const {postId} = postData

  console.log("post id is :" , postId)
  return (
    <div className="dropdown dropdown-hover dropdown-start">
      <label
        tabIndex={0}
        className=" flex items-center justify-between  gap-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-200 transition-all duration-100"
      >
        <BsThreeDots className="w-5 h-5 font-semibold text-black" />
      </label>
      <div className="pt-2">
        <ul
          tabIndex={0}
          className="bg-white dropdown-content menu p-2 rounded-box w-44 border shadow-xl"
        >
          <li>
            <label
              onClick={(e) => e.stopPropagation()}
              htmlFor={"delete-modal-" + postId}
              className="w-full flex items-center text-red-500 hover:bg-gray-200 transition-all duration-100"
            >
              <RiDeleteBin2Line className="w-5 h-5" />
              <p>Delete</p>
            </label>
          </li>
          <li>
            <label
              onClick={(e) => e.stopPropagation()}
              htmlFor={"edit-modal-" + postId}
              className="w-full flex items-center text-black hover:bg-gray-200 transition-all duration-100"
            >
              <BiEditAlt className="w-5 h-5" />
              <p>Edit</p>
            </label>
          </li>
        </ul>
      </div>

      <DeleteModal
        htmlFor={"delete-modal-" + postId}
        isPost={true}
        deleteCallback={deletePost}
        postId={postId}
        posts={posts}
        postsSetter={postsSetter}
        index={index}
      />

      <UpdatePostModal htmlFor={"edit-modal-" + postId} posts={posts}
        postsSetter={postsSetter} index={index} postData={postData}/>
    </div>
  );
};

export default DotsDropdown;
