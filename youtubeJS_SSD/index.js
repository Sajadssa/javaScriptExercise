//json:javascript object notation

//this is json file in below
const jsObject={
    name:'shirt',
    'delivery-time':'1 day',
    rating:{
        starts:4.5,
        count:87
    }
    ,fun:function function1 () {
        console.log('function inside object');
        
    }

}
jsObject.fun();
//convert jsObject to JSON object?
/*Sure, to convert a JavaScript object to a JSON string, you can use the JSON.stringify() method. Here's how you can do it with the jsObject: */

const jsonString = JSON.stringify(jsObject);
console.log(jsonString);
console.log(typeof jsonString);

/*THE RESULT IS 
'JSON.stringify(jsObject)'
JSON={"name":"shirt","delivery-time":"1 day","rating":{"starts":4.5,"count":87}} */
//JSON DOES NOT SUPPORT FUNCTION
//type of JSON IS 'String'
//CONVERT JSON TO JAVASCRIPT OBJECT
//JSON.parse(json)
const jsObject2=JSON.parse(jsonString);
console.log(jsObject2);
console.log(typeof jsObject2);

/*THE RESULT IS 
'JSON.parse(jsonString)'
{name:'shirt', 'delivery-time': '1 day', rating: { starts: 4.5, count: 87 }, fun: function function1 () { console.log('function inside object'); } } */
//next BUILT-in object localStorage:SAVE VALUES MORE PERMANENTLY
//localstorage?
//localStorage.setItem('key', 'value');
//localstorage only support string values
/*// ذخیره نام کاربر در localStorage
localStorage.setItem('username', 'johndoe');

// بازیابی نام کاربر از localStorage
const username = localStorage.getItem('username');

// حذف نام کاربر از localStorage
localStorage.removeItem('username');
 */

localStorage.setItem('NameIN','sajadSS');
// console.log(localStorage);
console.log(localStorage.getItem('NameIN'));