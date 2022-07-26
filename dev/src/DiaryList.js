import { data } from "autoprefixer";
import DiaryItem from "./DiaryItem";

const DiaryList = ({ OnEdit, OnDelete, data }) => {
    return (
        <div class="">
            <div class="border-t-2 text-white"></div>
            <div class="text-white">
                {
                    data.map((it) => (
                        <DiaryItem OnDelete={OnDelete} OnEdit={OnEdit} key={it.id} {...it} />
                    ))
                }
            </div>
        </div>
    )
}

DiaryList.defaultProps = [
    data = []
]

export default DiaryList;