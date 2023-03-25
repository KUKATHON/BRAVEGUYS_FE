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
        margin-bottom: 8px;
    }

    #post-img >img{
        height: 100%; width: 100%;
        border-radius: 8px;
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
    {title:"용기내챌린지 인증!!", user:"쥬쥬", contents:"오늘도 텀블러 사용인증합니당", category: "용기내챌린지", imgUrl:"https://src.hidoc.co.kr/image/lib/2021/12/10/1639120589234_0.jpg", date:"2023.03.23"},
    {title:"텀블러 사용인증합니다", user:"잠만보", contents:"오늘도 좋은하루 되세요~", category: "용기내챌린지", imgUrl:"https://cdn.pixabay.com/photo/2017/08/05/01/33/bottle-2582012_1280.jpg", date:"2023.03.23"},
    {title:"텀블러 인증", user:"사용자3", contents:"아아 마셨어요!", category: "용기내챌린지", imgUrl:"https://images.chosun.com/resizer/aj7wsVNF2lwXOlfySuAtN9RCabw=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/UEXE37TUSFPSPNMQYYIORXASV4.JPG", date:"2023.03.23"},
    {title:"인증합니다", user:"금쪽이", contents:"텀블러 사용 인증합니다.", category: "용기내챌린지", imgUrl:"https://dimg.donga.com/wps/NEWS/IMAGE/2022/07/21/114576403.2.jpg", date:"2023.03.23"},
    {title:"플로깅 인증", user:"황운용123", contents:"가족들과 플로깅 다녀왔읍니다", category: "플로깅", imgUrl:"https://www.100ssd.co.kr/news/photo/202207/89548_69687_5338.jpg", date:"2023.03.23"},
    {title:"오늘 저녁은 샐러드!", user:"비건킹", contents:"샐러드로 건강도 챙기고 환경도 지켜요 ><", category: "비건라이프", imgUrl:"https://recipe1.ezmember.co.kr/cache/recipe/2020/01/08/915d7c6597ecfb3960119b7a707171ed1.jpg", date:"2023.03.23"},
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