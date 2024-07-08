import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Foodlist = (props) => {

  console.log(`props(=searchWord) is ${props.area}`);
  const searchWord = props.area; 

  const [allData, setData] = useState(null);

  let url = "https://seoul.openapi.redtable.global/api/food/img?serviceKey=PSafw88jNtQzTwgyVbphiirQHchBOt21iOAMBIMSdrWcQT338ouMWbzU5Q13mU1b";

  useEffect(() => { // 버튼 click없이 자동으로 실행
    // async를 사용하는 다른 함수 선언
   const fetchData = async () => {
    const response = await axios.get(url);
      console.log('조회된 전체 데이터');
      console.log(response.data.body);

      // 전체 데이터 - 내림차순 정렬
      const allData=response.data.body
      .sort((a,b) => a.MENU_ID > b.MENU_ID ? -1 : a.MENU_ID > b.MENU_ID ? 1 : 0) // 내림차순 정렬
      .map(
          (item)=>{
              return(
                  // list item일 때 key props 넣어야 함. 없으면 warning 나옴
                  <tr key={item.MENU_ID} className="stripe">
                    <td>{item.RSTR_NM}</td>
                    <td>{item.AREA_NM}</td>
                    <td><img className="card-img-top people-img" src={item.FOOD_IMG_URL} alt="음식" /></td>
                  </tr>
              );
          }
      )
      setData(allData);

      // filter() test 
      // 지역 데이터 - 오름차순 정렬
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchWord])

  // 데이터 체크 (마지막으로)
  console.log("전체 데이터[내림차순 정렬] : ", allData);
  return (
    <div>
      {/* <h2>JSON 데이터 보기</h2> */}
        {/* {allData && <textarea rows={20} cols={100} value={JSON.stringify(allData, null, 2)} readOnly={true}/>} */}
      <div className='card-all'>
        {allData}   
      </div>
    </div>
  )
}

export default Foodlist;
