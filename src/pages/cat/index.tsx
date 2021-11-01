import ReactDOM from 'react-dom';
import { CreateCat, GetCat, CreateCatBody } from "../../store/cat/requests";
import React, { useState } from 'react'

export default function Cat(props:any) { 

  const [name, SetName] = useState("");
  const [age, SetAge] = useState("");


  const nameHandler = (e:any) => {
    e.preventDefault();
    SetName(e.target.value);
  };

  const ageHandler = (e:any) => {
    e.preventDefault();
    SetAge(e.target.value);
  };


  const saveBtnClick = (e:any) => {
    e.preventDefault();
    // state에 저장한 값을 가져옵니다.
    
    let body = {
      name: name,
      age: age,
    };
    
    CreateCatBody(body)

  };

    

  
    return (
      <>
        <h2>cat page</h2>
        <div >
          <button type="submit" onClick={PostApi}> 고양이생성 </button>
        </div>
        
        <div >
          <button type="submit" onClick={CreateCat}> 이것도 가능 </button>
        </div>

        <form onSubmit={saveBtnClick}>
          <div>
            이름 : <input id='name' type='string' value={name} onChange={nameHandler}></input>
          </div>
          <div>
            나이 : <input id='age' type='number' value={age} onChange={ageHandler}></input>
          </div>
          
          <div>
            품종 : <input id='breed' type='string'></input>
          </div>
          <input type="hidden" value='제출'/>
          <tr>
                <td ><input type='submit' value='제출'/></td>
              </tr>
        </form>

      </>
    )
  }

  function GetLog(e:any){
    console.log(e)
    e.preventDefault();
    console.log('You clicked submit.');
  }

  function PostApi(){
    const data = CreateCat();
    console.log(data)
  }
  
  
  
