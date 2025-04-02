import  data from  './product.json'
export  function  getData(){
    return  data;
}
export function getDataById(id){
    return data.find(item => item.id === id)
}
