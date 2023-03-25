import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { categoryState } from '../assets/atom';

function Mypost() {
  const [myPost, setMyPost] = useState([    
    {title:"용기내챌린지 인증!!", user:"쥬쥬", contents:"오늘도 텀블러 사용인증합니당", category: "용기내챌린지", imgUrl:"https://src.hidoc.co.kr/image/lib/2021/12/10/1639120589234_0.jpg", date:"2023.03.23"},
  {title:"텀블러 사용인증합니다", user:"잠만보", contents:"오늘도 좋은하루 되세요~", category: "용기내챌린지", imgUrl:"https://cdn.pixabay.com/photo/2017/08/05/01/33/bottle-2582012_1280.jpg", date:"2023.03.23"},
  {title:"텀블러 인증", user:"사용자3", contents:"아아 마셨어요!", category: "용기내챌린지", imgUrl:"https://images.chosun.com/resizer/aj7wsVNF2lwXOlfySuAtN9RCabw=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/UEXE37TUSFPSPNMQYYIORXASV4.JPG", date:"2023.03.23"},
  {title:"인증합니다", user:"금쪽이", contents:"텀블러 사용 인증합니다.", category: "용기내챌린지", imgUrl:"https://dimg.donga.com/wps/NEWS/IMAGE/2022/07/21/114576403.2.jpg", date:"2023.03.23"},
  {title:"플로깅 인증", user:"황운용123", contents:"가족들과 플로깅 다녀왔읍니다", category: "플로깅", imgUrl:"https://www.100ssd.co.kr/news/photo/202207/89548_69687_5338.jpg", date:"2023.03.23"},
  {title:"오늘 저녁은 샐러드!", user:"비건킹", contents:"샐러드로 건강도 챙기고 환경도 지켜요 ><", category: "비건라이프", imgUrl:"https://recipe1.ezmember.co.kr/cache/recipe/2020/01/08/915d7c6597ecfb3960119b7a707171ed1.jpg", date:"2023.03.23"},

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

    #imgitem > img{
        height: 100%;
        width: 100%;
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
                <div>오늘의 인증횟수 1회</div>
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