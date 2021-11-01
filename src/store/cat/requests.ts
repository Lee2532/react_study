import axios from 'axios'
import {v4 as uuidv4} from 'uuid';

export const CreateCat = async () => {
    let uuid = uuidv4();
    const { data } = await axios({
      method: 'post',
      url: 'http://host.docker.internal:3300/cats',
      data: {
        id: uuid,
        name:"버튼 눌러서 고양이 생성",
        age:2,
        breed:"CC"
      }
    })
    console.log(data)
  
    return data
}


export const GetCat = async () => {
  console.log(1)
  
    const { data } = await axios({
      method: 'get',
      url: 'http://host.docker.internal:3300/cats',
    })
    console.log(data)
  
    return data
}


export const CreateCatBody = async (body:any) => {
  let uuid = uuidv4();
  console.log(body.name)
  const { data } = await axios({
    method: 'post',
    url: 'http://host.docker.internal:3300/cats',
    data: {
      id: uuid,
      name:body.name,
      age:body.age,
      breed:"CC"
    }
  })
  console.log(data)

  return data
}