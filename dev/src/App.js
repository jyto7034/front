import { useEffect, useRef, useState } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";


// https://jsonplaceholder.typicode.com/comments

function App() {
  const [data, SetData] = useState([]);

  const DataId = useRef(0);

  const OnCreate = (author, content) => {
    const created_date = new Date().getTime();
    const _data = {
      author,
      content,
      created_date,
      id : DataId.current,
    };
    DataId.current += 1;
    SetData([_data, ...data]);
  }

  const OnDelete = (id) => {
    const _data = data.filter((it) => {
      return it.id != id
    })
    SetData(_data);
  }

  const OnEdit = (id, content) => {
    const _data = data.filter((it) => {
       return it.id == id ?  it.content = content : it.content
    })
    SetData(_data);
  }

  const GetData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author : it.email,
        content : it.body.replace(/\n/g, ""),
        created_date : new Date().getTime(),
        id : DataId.current++
      }
    })
    console.log(initData);    
    SetData(initData);
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div class="h-screen w-screen">
      <DiaryEditor OnCreate={OnCreate}/>
      <DiaryList OnEdit={OnEdit} OnDelete={OnDelete} data={data}/>
    </div>
  );
}

export default App;