import React, {useState, useEffect} from 'react'
import Titletoggle from './Titletoggle'
import styled from 'styled-components';
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
  const postFilter = ["최신순", "카테고리순"]


  useEffect(() => {
    setUnselectedPostFilter(postFilter.filter((item)=>item!=selectedPostFilter))
  }, [selectedPostFilter])
  

  const MypostItem = styled.div`
    #mypost-info{
        display: flex;
        justify-content: space-between; 
    }

    #mypost-img{
        display: flex;
        flex-wrap: wrap;
        gap: 1px;
    }

    #imgitem{
        background-color: black;
        flex-basis: calc((100% - 2px) / 3 );
        aspect-ratio: 1/1;
        box-sizing: border-box;
    }
  `
  const showDropDown = ()=>{

  }

  const hideDropDown = ()=>{
    setSelectedPostFilter(unselectedPostFilter);
  }

  return (
    <div>
        <MypostItem>
        <div id="mypost-wrapper">
            <div id="mypost-info">
                <div>오늘의 인증횟수 {myPost.length}회</div>
                <div onClick={()=>showDropDown()}>
                    <div>{selectedPostFilter}🔽</div>
                    <div onClick={()=>hideDropDown()}> {unselectedPostFilter}</div>
                </div>
            </div>
            {}
            <div id="mypost-img">
                {(selectedPostFilter==="커뮤니티")?
                myPost.map((item, idx)=>(
                    <div key={idx} id="imgitem">
                        <img src={item.imgUrl}/>
                    </div>
                )):
                myPost.map((item, idx)=>(
                    <div key={idx} id="imgitem">
                        <img src={item.imgUrl}/>
                    </div>
                ))
                }
            </div>
        </div>
        </MypostItem>
        <Titletoggle></Titletoggle>
    </div>
  )
}

export default Mypost