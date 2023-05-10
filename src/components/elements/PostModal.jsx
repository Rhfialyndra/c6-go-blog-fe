//@ts-check
import React from "react";


const PostModal= ({htmlFor}) => {
    return(<>
{/* Put this part before </body> tag */}
<input type="checkbox" id={htmlFor} className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box bg-white">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor={htmlFor} className="btn">Yay!</label>
    </div>
  </div>
</div>
    </>)
}

export default PostModal;