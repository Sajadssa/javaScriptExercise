const userName="sajad";
function fetchApi(){
    console.log('url successfully fetched...');
}
// export codes for use in anther files
//module is an object and thats have property called name "exports" that it is an object so we can change value property

// module.exports.userName=userName;
// module.exports.fetchApi=fetchApi;
module.exports=fetchApi;
// module.exports={
//     userName,
//     fetchApi,
// }
// console.log(module);