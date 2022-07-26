import { useEffect, useState } from "react";

console.log("asd");
export default ({ OnEdit, OnDelete, author, content, created_date, id }) => {
  const [isEdit, setisEdit] = useState(false);
  const setIsEdit = () => setisEdit(!isEdit);

  const [LocalContent, setLocalContent] = useState(content);

  const HandleEdit = () => {
    console.log(LocalContent);
    OnEdit(id, LocalContent);
    setisEdit();
  };

  const HandleDelete = () => {
    OnDelete(id);
  };

  return (
    <div class="p-3">
      <div id="Diaryitem" class="bg-gray p-3">
        <div>
          작성자 : {author}
          <br />
          {new Date(created_date).toLocaleDateString()}
          <br />
          <span>
            {isEdit ? (
              <textarea
                value={LocalContent}
                onChange={(e) => setLocalContent(e.target.value)}
                class="text-dark"
              ></textarea>
            ) : (
              <div>{content}</div>
            )}
          </span>
        </div>
        <div>
          {isEdit ? (
            <>
              <button onClick={HandleEdit}>Done</button>|
              <button onClick={setIsEdit}>Cancle</button>
            </>
          ) : (
            <>
              <button onClick={setIsEdit}>Edit</button>|
              <button onClick={HandleDelete}>Delete</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
