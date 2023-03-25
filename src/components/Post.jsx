import React, {useState} from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil';
import { categoryState } from '../assets/atom';

const PostItems = styled.div`
    #post-wrapper{
        height: 100%;
        padding: 0 20px;
        padding-bottom: 180px;
    }

    #post-item{
        border: 1px solid var(--gray-50);
        border-radius: 8px;
        padding: 16px;
        margin-top: 24px;
        font-size: 14px;
    }

    #post-title{
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        margin-bottom: 12px;
    }

    #post-img{
        height: 160px;
        width: 100%;
        border-radius: 8px;
        background-color: var(--blue-400);
        margin-bottom: 8px;
    }

    #post-menu{
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
    }

    #post-menu > div{
        color: var(--gray-400);
    }

    #post-contents{
        margin-bottom: 16px;
    }

    #post-reaction{
        display: flex;
        justify-content: left;
        gap: 24px;
    }
`

const Category = styled.div`
    #navbar-category{
        display: flex;
        white-space: nowrap;
        overflow-x: scroll;
        scrollbar-width: none;
        padding: 0 20px;
        margin-bottom: 8px;
    }

    #navbar-category::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
    #navbar-category button{
        background: none;
        border: none;
        padding: 15px;
        font-size: 16px;
    }
`

function Post() {
  const [postItems, setPostItems] = useState([
    {title:"제목1-용기내", user:"사용자1", contents:"1 내용입니다.", category: "용기내챌린지", imgUrl:"url_here", date:"2023.03.23"},
    {title:"제목2-용기내", user:"사용자2", contents:"2 내용입니다.", category: "용기내챌린지", imgUrl:"url_here", date:"2023.03.23"},
    {title:"제목3-용기내", user:"사용자3", contents:"3 내용입니다.", category: "용기내챌린지", imgUrl:"url_here", date:"2023.03.23"},
    {title:"제목1-용기내", user:"사용자1", contents:"1 내용입니다.", category: "용기내챌린지", imgUrl:"url_here", date:"2023.03.23"},
    {title:"제목2-플로깅", user:"사용자2", contents:"2 내용입니다.", category: "플로깅", imgUrl:"url_here", date:"2023.03.23"},
    {title:"제목3-비건라이프", user:"사용자3", contents:"3 내용입니다.", category: "비건라이프", imgUrl:"url_here", date:"2023.03.23"},
   ])
   const [selectedCategory, setSelectedCategory] = useRecoilState(categoryState)
   const category = ["용기내챌린지", "플로깅", "비건라이프", "분리배출", "친환경물품"]
  
  return (
    <div>
        <Category>
        <div id="navbar-category">
            {category.map((item, idx)=>(
                <button key={idx} onClick={()=>setSelectedCategory(item)} style={selectedCategory===item?{"color":"var(--blue-400)", "borderBottom":"1px solid var(--blue-400"}:{color:"var(--gray-300)"}}>{item}</button>
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
                    <div></div>
                </div>
                <div id="post-img">
                    <img src={item.imgUrl}></img>
                </div>
                <div id="post-menu">
                    <div>{item.user}</div>
                    <div>{item.date}</div>
                </div>
                <div id="post-contents">
                    {item.contents}
                </div>
                <div id="post-reaction">
                    <div>💬 3</div>
                    <div>❤️ 3</div>
                </div>
            </div>
            ):""
        ))}
        </div>
    </PostItems>
    </div>
  )
}

export default Post