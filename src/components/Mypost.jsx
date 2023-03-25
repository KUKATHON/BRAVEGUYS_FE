import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { categoryState } from '../assets/atom';

function Mypost() {
  const [myPost, setMyPost] = useState([
    {title:"제목1", user:"사용자1", contents:"1 내용입니다.", category: "용기내챌린지", imgUrl:"url_here"},
    {title:"제목2", user:"사용자2", contents:"2 내용입니다.", category: "용기내챌린지", imgUrl:"url_here"},
    {title:"제목3", user:"사용자3", contents:"3 내용입니다.", category: "용기내챌린지", imgUrl:"url_here"},
    {title:"제목1", user:"사용자1", contents:"1 내용입니다.", category: "용기내챌린지", imgUrl:"url_here"},
    {title:"제목2", user:"사용자2", contents:"2 내용입니다.", category: "플로깅", imgUrl:"url_here"},
    {title:"제목3", user:"사용자3", contents:"3 내용입니다.", category: "비건라이프", imgUrl:"url_here"},
  ])
  const [selectedPostFilter, setSelectedPostFilter] = useState("최신순");
  const [unselectedPostFilter, setUnselectedPostFilter] = useState("카테고리순")
  const [selectedCategory, setSelectedCategory] = useState("용기내챌린지")
  const postFilter = ["최신순", "카테고리순"]
  const category = ["용기내챌린지", "플로깅", "비건라이프", "분리배출", "친환경물품"]

  useEffect(() => {
    setUnselectedPostFilter(postFilter.filter((item)=>item!=selectedPostFilter))
  }, [selectedPostFilter])
  

  const MypostItem = styled.div`
    #mypost-info{
        display: flex;
        justify-content: space-between; 
        padding: 16px 20px;
        font-size: 16px;
    }

    #mypost-filter{
        font-size: 14px;
        display: flex;
        gap: 8px;
    }

    #mypost-img{
        display: flex;
        flex-wrap: wrap;
        gap: 1px;
        padding: 0 20px;
    }

    #imgitem{
        background-color: #e2cece;
        flex-basis: calc((100% - 2px) / 3 );
        aspect-ratio: 1/1;
        box-sizing: border-box;
    }

    #navbar-category{
        display: flex;
        gap: 8px;
        white-space: nowrap;
        color: var(--gray-500);
        overflow-x: scroll;
        scrollbar-width: none;
    }

    #navbar-category::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }

    #navbar-category > button{
        border: none;
        border-radius: 8px;
        padding: 8px;
        background: white;
    }
`

  return (
    <div>
        <MypostItem>
        <div id="mypost-wrapper">
            
            <div id="mypost-info">
                <div>오늘의 인증횟수 {myPost.length}회</div>
                <div id="mypost-filter">
                    {postFilter.map((item, idx)=>(
                        <div id="mypost-select" onClick={()=>setSelectedPostFilter(item)} style={item==selectedPostFilter?{"color":"black"}:{"color":"var(--gray-400)"}}>{item}</div>
                    ))}
                </div>
            </div>
            <div id="mypost-img">
                {(selectedPostFilter=="최신순")?
                myPost.map((item, idx)=>(
                    <div key={idx} id="imgitem">
                        <img src={item.imgUrl}/>
                    </div>
                )):
                <>
                <div id="navbar-category">
                {category.map((item, idx)=>(
                    <button key={idx} onClick={()=>setSelectedCategory(item)} style={selectedCategory===item?{"color":"var(--blue-600)", "background":"var(--blue-200)"}:{"color":"var(--gray-500)", "border":"1px solid var(--gray-100)"}}>{item}</button>
                ))}
                </div>
                {myPost.map((item, idx)=>(
                    item.category===selectedCategory?
                    <div key={idx} id="imgitem">
                        <img src={item.imgUrl}/>
                    </div>:""
                ))}
                </>
                }
            </div>
        </div>
        </MypostItem>
    </div>
  )
}

export default Mypost