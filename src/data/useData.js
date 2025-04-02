import  data from  './product.json'
// get all data
export  function  getData(){
    return  data;
}
// get data by id
export function getDataById(id){
    return data.find(item => item.id === id)
}
