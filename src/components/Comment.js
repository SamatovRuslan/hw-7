import React from "react"
import CommentWrapper from "../UI/CommenWrapper";
import CommentDate from "./CommentDate"
import UserInfo from './UserInfo'
import './Comment.css'
import CommentAvatar from "./CommentAvatar";
import CommentText from "./CommentText";

function Comment(props) {

    function renderId(){
        var id = {
            id: Math.random().toString()
        }
        return id.id
    } 

    return <div className="Comment">
        {props.items.map((item)=>{
            return <div key={renderId()}>
                <CommentWrapper>
                <CommentAvatar pic = {item.author.avatarUrl}/>
                <UserInfo author={item.author.name}/>
                </CommentWrapper>
                {/* ------------------------- */}
                <CommentWrapper>
                <CommentText text = {item.text}/>
                <CommentDate date = {item.date}/>
                </CommentWrapper>
            </div>
        })}
    </div>
}

export default Comment;