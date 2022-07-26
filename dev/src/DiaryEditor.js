import { useRef, useState } from "react"

export default ({OnCreate}) => {
    const AuthorRef = useRef();
    const ContentRef = useRef();

    const [state, setState] = useState({
        author: "",
        content: ""
    });

    const OnClick = () => {
        OnCreate(state.author, state.content);
    }

    const HandleChange = (e) => {
        console.log(e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return <div class="flex flex-col text-white">
        <p class="text-center text-2xl mb-5">My Diary</p>
        <textarea ref={AuthorRef} name="author" value={state.author} onChange={HandleChange} class="text-dark m-auto w-[40%] h-8 mb-5"></textarea>
        <textarea ref={ContentRef} name="content" value={state.content} onChange={HandleChange} class="text-dark m-auto w-[40%] h-24 mb-5"></textarea>
        <button
            class="w-[500px] cursor-pointer text-white border-2 mb-5 m-auto"
            onClick={OnClick}>일기 저장하기
        </button>
    </div>
}