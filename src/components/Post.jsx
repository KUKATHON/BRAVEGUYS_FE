import React, {useState} from 'react'
import styled from 'styled-components'
import Titletoggle from './Titletoggle';
import { useRecoilState } from 'recoil';
import { categoryState } from '../assets/atom';

const PostItems = styled.div`
    #post-wrapper{
        height: 100%;
    }

    #post-item{
        background-color: grey;
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 10px;
    }

    #post-title{
        display: flex;
        justify-content: space-between;
    }

    #post-img{
        height: 100px;
        width: 100%;
        background-color: black;
    }

    #post-menu{
        display: flex;
        justify-content: right;
    }

    #post-menu button{
        background: none;
        border: none;
    }
`

const Category = styled.div`
    #navbar-category{
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
    }

    #navbar-category button{
        background: none;
        border: none;
        padding: 10px;
    }
`

function Post() {
  const [postItems, setPostItems] = useState([
    {title:"제목1-용기내", user:"사용자1", contents:"1 내용입니다.", category: "용기내챌린지", imgUrl:"url_here"},
    {title:"제목2-용기내", user:"사용자2", contents:"2 내용입니다.", category: "용기내챌린지", imgUrl:"url_here"},
    {title:"제목3-용기내", user:"사용자3", contents:"3 내용입니다.", category: "용기내챌린지", imgUrl:"url_here"},
    {title:"제목1-용기내", user:"사용자1", contents:"1 내용입니다.", category: "용기내챌린지", imgUrl:"url_here"},
    {title:"제목2-플로깅", user:"사용자2", contents:"2 내용입니다.", category: "플로깅", imgUrl:"url_here"},
    {title:"제목3-비건라이프", user:"사용자3", contents:"3 내용입니다.", category: "비건라이프", imgUrl:"url_here"},
   ])
   const [selectedCategory, setSelectedCategory] = useRecoilState(categoryState)
   const category = ["용기내챌린지", "플로깅", "비건라이프", "분리배출", "친환경물품"]
  
  return (
    <div>
        <Category>
        <div id="navbar-category">
            {category.map((item, idx)=>(
                <button key={idx} onClick={()=>setSelectedCategory(item)} style={selectedCategory===item?{"color":"blue", "borderBottom":"1px solid black"}:{color:"black"}}>{item}</button>
            ))}
        </div>
        </Category>

        <PostItems>
        <div id="post-wrapper">
        {postItems.map((item,idx)=>(
            item.category===selectedCategory?(
            <div id="post-item">
                <div id="post-title">
                    <div>{item.title}</div>
                    <div>신고</div>
                </div>
                <div id="post-img">
                    <img src={item.imgUrl}></img>
                </div>
                <div id="post-menu">
                    <button>댓글</button>
                    <button>스크랩</button>
                    <button>좋아요</button>
                </div>
                <div id="post-contents">
                    {item.contents}
                </div>
            </div>
            ):""
        ))}
        </div>
    </PostItems>
    <Titletoggle></Titletoggle>
    </div>
  )
}

export default Post