//  Tong quan
/// Ví Dụ

/*
var fullName = 'nguyen van anh';
var age = '17';
alert (fullName);
alert (age);
*/

/// Học

/**
 * Một số loại built-in
 * use: Để hiện thị 1 thông báo
 * 1.alert 
 * hiện ra 1 thông báo
 * 2.console
 * hien ra 1 thong bao trong console
 * 3.confirm
 * hien thong bao xac nhan
 * 4.prompt
 * input xac nhan
 * 5.setTimeout
 * sau mot khoang thoi gian se hien ra mot bang thong bao
 * 6.setInterval
 * sau mot khoang thoi gian hien ra thong bao lien tuc
 */

///ví Dụ

/*
console.log("day la log");
console.warn(fullName);
console.error("day la loi");

confirm("xac nhan tuoi");

prompt("nhap ten");

setTimeout(function() {alert("Xin chao Nguyen Van Anh")},5000);

setInterval(function() {console.log("Xin chao Nguyen Van Anh")},1000);
*/

/// Học

/**
 Gioi thieu ve toan tu trong javascript
 1.Toán tử số học - Arithmetic
 2.Toán tử gán - Assigment
 3.Toán tử so sánh - Comparison
 4.Toán tử logic - logical
 */ 

/// Ví Dụ

/**
 * 1 toan tu so hoc
 var a = 1;
 var b = 2;
 var c = a + b;
 console.log(c);
 * 2 toan tu gan
 var a = 1;
 * 3 toan tu so sanh
 var a = 2;
 var b = 3;
 if(a<b) {
     console.log("Yes")
 }
 * 4 toan tu logical
 var a = 3;
 var b = 4;
 if(a>0 && b>0) {
     console.log("Yes")
 }
 */

/// Học

 /**
  * Toán tử số học
  +      ----> Cộng
  -      ----> Trừ
  *      ----> Nhân
  **     ----> Lũy Thừa
  /      ----> Chia
  %      ----> Chia Dư
  ++     ---->Tăng 1 giá trị số
  --     ----> Giảm 1 giá trị số
  */
/// Ví Dụ
/** 
 var a = 5;
 console.log(a**2);
 */

/// Học

  /**
   Toán Tử ++ --
   prefix / tiền tố & postfix / hậu tố
   */
  ///Ví Dụ
   //tiền tố
   /*
   var a = 5;
   var output = ++a;
   console.log(output);
   */
   //hậu tố
   /*
   var a = 5;
   var output = a++;
   console.log(output);
   */

   ///Học
   /** Toán tử gán 
    Toán tử     ví Dụ            Tương Đương
    =           x = y            x = y
    +=          x += y           x = x + y
    -=          x -= y           x = x - y
    *=          x *= y           x = x * y
    /=          x /= y           x = x / y
    **=         x **= y          x = x ** y
 */
/// Ví Dụ
/*
var a = 5;
a += 5;
console.log(a);
*/
/*
var a = 5;
a *= 3;

console.log(a);
*/
///Học

/**
 Toán tử chuỗi - String operator
 */
///Ví Dụ
/*
var firstName = "Anh";
var lastName = "Nguyen";
console.log(firstName + ' '+ lastName);
*/

///Học

/**
 Toán Tử So sánh
 ==   --> Bằng
 !=   --> Không Bằng
 >    --> lớn hơn
 <    --> nhỏ hơn
 >=   --> Lớn hơn hoặc bằng
 <=   --> Nhỏ hơn hoặc bằng

 */
 /// Ví Dụ
 /*
 var a = 2;
 var b = 4;
 if(b==a) {
   console.log("True");
 }
   else {
     console.log("No");
   }
   */

   ///Học
   /**
    Boolean
    Trả về true hoặc false
    */
   /*
   var a = 2;
   var b = 4;
var isSuccess = a > b;
console.log(isSuccess);
*/
///Học

/**
 Câu Diều Kiện
 if - else
 */
/**
 * Các loại giá trị
 * 0
 * false
 * NaN
 * "" or ''
 * undefined
 * null
 */
///Ví Dụ
/*
var isSuccess = 1<3;
 if(isSuccess) {
   console.log("Diều Kiện Đúng");
 }
 else{
   console.log("ĐIều Kiện Sai");
 }
 */
 /// Học

 /** Toán Tử Logic
  * 1. && - and 
  * 2. || - or
  * 3. ! - not
  */

 /// Ví Dụ
 /*
var a = 1;
var b = 2;
var c = 3;
if (a>0 && b>0 && c<0) {
  console.log("điều kiện đúng");
}
*/
/*
var a = 1;
var b = 2;
var c = 3;
if (a>0 || b>0 || c<0) {
  console.log("điều kiện đúng");
}
*/
/*
var a = 1;
var b = 2;
var c = 3;
if (!(a<0)) {
  console.log("điều kiện đúng");
}
*/

///Học

/** Các kiểu dữ liêu trong javascript
 * Dữ liệu nguyen thủy - primitive Data
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Undefined
 * 5. Null
 * 6. Symbol
 * Kiểu dữ liệu phức tạp
 * 1. Function
 * 2. Object
 */

///Ví Dụ
//Number type
/*
var a = 1;
console.log(typeof a)
*/

//String type
/*
var fullName = 'Nguyen Van Anh';
console.log(typeof fullName)
*/

//Boolean type
/*
var isSuccess = true;
console.log(typeof isSuccess)
*/

//Undefined type
/*
var age;
console.log(typeof age)
*/

//Null type
/*
var isNull = null;
console.log(typeof isNull)
*/

//symbol type
/*
var id = Symbol('id');
var id2 = Symbol('id');
console.log(typeof id)
*/

//Function
/*
var myFunction = function() {
  console.log('xin chao cac ban');
}
console.log(typeof myFunction)
*/  

//Object type
/*
var myObject = {
  name: 'Ánh',
  age: '17'
}
console.log(typeof myObject)
*/
/*
var myArray = [
  'Van Anh',
  '17'
]
console.log(typeof myArray)
*/

///Học
/**
 * Toán tử so sánh tuyệt đối
 * ===  --> Bằng
 * !==  --> Không bằng
 */

/// Ví Dụ
/*
var a = 1;
var b = "1";
console.log(a !== b)
*/

///Học

/**
 * Chuỗi trong javascript
 * 1. tạo chuỗi
 * 2. một số cách sử dụng backslash (\)
 * 3. xem độ dài chuỗi
 * 4. chú ý độ dài chuỗi khi vết code
 * 5. Template string ES6
 */

///Ví Dụ

//Cách tạo chuỗi
// cách 1
/*
var fullName = 'Nguyen Van Anh';
// cách 2
var fullName = new String('Nguyen Van Anh');
*/
 // sử dung backslash
 /*
 var fullName = 'Nguyen Van \'Anh\'';
 console.log(fullName)
 */
// Xem độ dài chuỗi
/*
var fullName = 'Nguyen Anh';
console.log(fullName.length)
*/
// Template (nối chuỗi)
/*
var Name = 'Anh';
console.log(`Tôi là ${Name}`)
*/

///Học

/**
 * Làm việc với chuỗi
 * 1. find index [indexOf(), lastIndexOf()]
 * 2. cut string [slice()]
 * 3. replace [replace()]
 * 4. convert to upper case [toUpperCase()]
 * 5. convert to lower case [toLowerCase()]
 * 6. trim [trim()]
 * 7. split [split()]
 * 8. get a charater by index
 */

/// Ví Dụ

// var myString = 'Hoc JS cùng F8!  ';

// Tìm kiếm trong chuỗi

// console.log(myString.indexOf('JS'))

/*
console.log(myString.indexOf('JS', 6))
*/
/*
console.log(myString.lastIndexOf('JS'))

console.log(myString.lastIndexOf('JS', 8))
*/

//cắt chuỗi
/*
console.log(myString.slice(4, 6))
console.log(myString.slice(-3, -1))
*/

// thay thế trong chuỗi
/*
console.log(myString.replace('JS', 'Javascrpit'))
console.log(myString.replace(/JS/g, 'Javascript'))
*/

// Viết tất cả thành chữ hoa
//console.log(myString.toUpperCase())

//Viết tất cae thành chữ thường
//console.log(myString.toLowerCase())

//Loại bỏ dấu cách thường của chuỗi
//console.log(myString.trim().length)

// Tách chuỗi thành Array
//console.log(myString.split(' '))

// Lấy một ký tự từ một chuỗi
//console.log(myString.charAt(20))

/// Học
/**
 * 1. Các cách tao kiểu number
 * 2. Làm việc với to string
 * 3. làm việc với to fixed
 */

///Ví Dụ
//cách 1
//var a = 12;

//Cách 2
//var a = new Number(1);

//biến kiểu number thành string
/*
var number = 12;
console.log(typeof number.toString())
*/

// Làm tròn số thập phân
/*
var PI = 32.14;
console.log(PI.toFixed(1))
*/
 
///Học 

/**
 * Mảng trong Javascrpit
 * 
 * 1. Các tạo mảng
 * 0 kiểm tra data 
 * 2. Truy xuất mảng
 * - Độ đài mảng
 * - Lấy phần tử theo index
 */

/// Ví Dụ

// Các tạo mảng
//cách 1
/*
var myArray = [
  'javascript',
  'HTML', 
  'CSS',
  123,
  function() {

  },
  {}
];
*/
// kiểm tra data type
//console.log(Array.isArray(myArray))
//Cách 2
//var myArray = new Array('javascript', 'HTML', 'CSS');

// Truy xuất mảng
// độ dài mảng
/*
var myArray = ['javascript', 'HTML', 'CSS'];
console.log(myArray.length)
*/

// Lấy phần tử theo index
/*
var myArray = ['javascript', 'HTML', 'CSS'];
console.log(myArray[2])
*/

/// Học

/**
 *  Làm việc với Array
 * 
 * 1. to string [.toString()]
 * 2. join [.join()]
 * 3. pop [.pop()]
 * 4. push [.push()]
 * 5. shift [.shifrt()]
 * 6. unshift [.unshift()]
 * 7. splicing [.splice()]
 * 8. concat [.concat()]
 * 9. slicing  [slice()]
 */

/// Ví Dụ

/*
var languages = [
  'javascript',
  'PHP',
  'Ruby'
]

var languages2 = [
  'HTML',
  'CSS',
]
*/
//Biến array thành chuỗi
//console.log(languages.toString())

// join()
//console.log(languages.join(' - '))

// xóa phần tử cuối trong mảng
/*
console.log(languages.pop())
console.log(languages)
*/

// thêm phân tử vào cuối mảng
/*
console.log(languages.push('java'));
console.log(languages)
*/

// xóa phần tử đầu trong mảng
/*
console.log(languages.shift());
console.log(languages)
*/

// thêm phân tử vào cuối mảng
/*
console.log(languages.unshift('java'))
console.log(languages)
*/

// Vừa thêm vừa xóa phần tử trong mảng
// xóa
/*
languages.splice(1, 1)
console.log(languages)
*/

//thêm
/*
languages.splice(1, 1, 'Java')
console.log(languages)
*/

// nối hai mảng
//console.log(languages.concat(languages2))

// Cắt phần tử trong mảng
/*
console.log(languages.slice(1,2))
console.log(languages)
*/

/// Học 

/**
 * Hàm (function) trong javascript
 * 1. Hàm 
 * - Một khối mã
 * - làm 1 việc cụ thể
 * 
 * 2. Loại hàm 
 * - Built-in
 * - Tự định nghĩa
 * 3. Tính chất 
 * - Không thực thi khi định nghĩa
 * - sẽ thực thi khi được gọi
 * - có thể nhận tham số
 * - có thể trả về một giá trị
 * 
 * 4. Tạo hàm đầu tiên
 */

/// Ví Dụ

/*
function myFunction() {
  alert('xin chào ánh');
}
myFunction()
*/

/// Học 

/**
 * Tham số trong javasrcipt
 * 
 * 1.Tham số
 * - Định nghĩa
 * - kiểu dữ liêu
 * 2. Truyền tham số
 * - 1 tham số
 * - Nhiều tham số
 * 3. Arguments ?
 * - Đối tượng arguments
 * - Giới thiều vòng lặp for of
 */

/// Ví Dụ

// Tham số
/*
function cars(car, hey) {
  console.log(car);
  console.log(hey);
}
cars('hello các bạn trẻ', 'mong là không sao')
*/

// Arguments
/*
function writelog() {
  console.log(arguments);
}
writelog('hello các bạn trẻ', 'mong là không sao')
*/

// vòng lặp
/*
function write() {
  myString = '';
  for(var param of arguments) {
    myString += `${param} - `
      }
     console.log(myString);
}
write('log1', 'log2', 'log3')
*/

/// Học

// Return trung hàm - javascrpit

/// Ví Dụ

/*
function nhan(a, b) {
  return a * b;
}
var tich = nhan(2, 5)
console.log(tich)
*/

/// Học

/**
 * Một số điều cần biết về function
 * 1. khi function trùng tên ?
 * 2. khai báo biến trong hàm ?
 * 3. định nghĩa hàm trong hàm ?
 */

/// Ví Dụ

//Một số điều cần biết về function
/*
function myFunction() {
  console.log('Xin chao');
}

function myFunction() {
  console.log('Xin chao 1');
}
myFunction()
*/

//khai báo biến trong hàm ?
/*
function myFunction() {
  var fullName = 'nguyen van anh';
  console.log(fullName);
}

myFunction()
*/

//định nghĩa hàm trong hàm ?
/*
function myFunction() {
  function myFunction2() {
    var firstName = 'Anh';
    console.log(firstName) 
  }
  myFunction2()
}
myFunction()
*/

/// Học

/**
 * Các loại function
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function
 */

/// Ví Dụ

// Declaration function
/*
myFunction();
function myFunction() {
  alert('xin chao')
}
*/

// Expression function()

// cách 1
/*
var isFunction = function() {
  alert('xin chao')
}

isFunction()
*/

// cách 2
/*
setTimeout(function() {
  alert('hello')
},2000)
*/

// Cách 3
/*
var myObject = {
  myFunction: function() {
    alert('hello');
  }

}
*/


/// Học

/**
 * Polyfill ?
 * đoạn mã cung cấp chức năng cho các trình duyệt cũ
 */

/// Ví dụ
/*
if (!Array.prototype.includes) {
  Array.prototype.includes = function includes(searchElement) {
    return this.indexOf(searchElement) !== -1
  }
}
*/

/// Học

/**
 * Object trong javascript
 * 1. cách thêm 1 key
 * 2. Lấy 1 key ra ngoài
 * 3. cách xóa key
 * - function --> phương thức / method
 * - Others --> thuộc tính / property
 */

/// Ví Dụ
/*
var gmailkey = 'gmail';

var myObject = {
  name: 'Nguyen Anh',
  age: 17,
  address: 'Hai Duong',
  [gmailkey]: 'toplaiphaiwin@gmail.com',
  myfunction: function() {
    return this.name
  }
  }
*/

// Cách thêm key
// Cách 1
/*
myObject.gmail = 'toplaiphaiwin@gmail.com'
console.log(myObject)
*/

// cách 2
/*
myObject['gmail'] = 'toplaiphaiwin@gmail.com'
console.log(myObject)
*/

// Cách 3
// dòng 796
//console.log(myObject)

// Cách lấy key 

// Cách 1
//console.log(myObject.name)

//Cách 2
//console.log(myObject['age'])

//Cách 3
/*
var myObject2 = 'address';
console.log(myObject[myObject2])
*/

// Cách xóa key
/*
delete myObject.address;
console.log(myObject)
*/

// Cách gọi function trong object
/*
console.log(myObject.myfunction())
*/

/// Học

/**'
 * Object construtor / xây dựng đối tượng
 */

/// Ví Dụ

/*
function User(firstName, lastName, Avata) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.Avata = Avata;

  this.getName = function() {
    return `${this.firstName} ${this.lastName}`
  } 
}

var author = new User('Anh', 'Nguyen', "Avata");
var student = new User('An', 'Nguyen', 'Avata');

author.Title = 'Học lập trình của F8';
student.comment = 'Em đang học nè';

console.log(author.getName());
console.log(student.getName());
*/

/// Học

/**
 * Object prototype - Basic
 * 
 * 1. Prototype
 * 2. Sử dụng khi nào ?
 */

/// Ví Dụ

/*
function User(firstName, lastName, Avata) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.Avata = Avata;

  this.getName = function() {
    return `${this.firstName} ${this.lastName}`
    
  } 
}

User.prototype.className = 'F8';
User.prototype.getclassName = function() {
  return this.className
}


var user = new User('Anh', 'Nguyen', "Avata");
var user2 = new User('An', 'Nguyen', 'Avata');

console.log(user.className);
console.log(user2.getclassName());
*/

/// Học 

/**
 * Đối tượng date
 * 
 * - javascript date
 */

/// Ví Dụ

/*
var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();


console.log(`${day} - ${month} - ${year}`);
console.log(hour + "-" + minute + "-" + second)
*/

/// Học 

/**
 * Câu lệnh rẽ nhánh - If else
 */

/// Ví Dụ

/*
var date = 8;

if(date === 2){
  console.log('Hôm nay là thứ 2')
} else if(date === 3) {
  console.log('Hôm này là thứ 3')
} else if(date === 4) {
  console.log('Hôm nay là thứ 4')
}
else{
console.log('Không biết')
}
*/

/// Học

/**
 * Câu lệnh rẽ nhánh - Switch
 */

/// Ví Dụ

/*
var date = 2;

switch(date) {
  
  case 2:
  case 3:
    console.log('Hôm nay là thứ 3')
    break;
  case 4:
    console.log('Hôm nay là thứ 4')
    break;
  case 5:
    console.log('Hôm nay là thứ 5')
    break;
  case 6:
    console.log('Hôm nay là thứ 6')
    break;
  default:
    console.log('Không biết')
}
*/

/// Học

/**
 * Toán tử ba ngôi - Ternary operator
 */

/// Ví Dụ

/*
var course = {
  name: 'javascript',
  coin: 250
}

var result = course.coin > 0 ? `${course.coin}.000 VND` : 'Miễn phí'
console.log(result)
*/


/// Học

/**
 *  Chuyển object thành array
 */


/// Ví Dụ
/*
var myObject = {
  name: 'Anh',
  age: 17,
  address: 'Hong Lac'
}
*/

// console.log(Object.keys(myObject))
//or
//console.log(Object.values(myObject))
/// Học

/**
 *          Vòng lặp 
 * 1. for loop
 * 2. for / in loop
 * 3. for / of loop
 * 4. while loop
 * 5. Do while loop
 */

/// Ví Dụ

// Vòng for
/*
for(var i = 1; i <= 1000; i++) {
  console.log(i)
}
*/

/*
var myArray = [
  'javascript',
  'PHP',
  'java'
]

var arraylength = myArray.length;

for(var i = 0; i < arraylength; i++) {
  console.log(myArray[i]); 
}
*/

// Vòng for / in
/*
var myObject = {
  name: 'Nguyen Anh',
  age: 17,
  address: 'Hong Lac',
}

for(var key in myObject) {
  console.log(key + ': ' + myObject[key])
}
*/
/*
var myArray = [
  'javascript',
  'PHP',
  'java'
]

for(var key in myArray) {
  console.log(myArray[key])
}
*/

// Vòng for / of
/*
var myInfo = [
  'javascript',
  'PHP',
  'java'
]
 

for(var value of myInfo) {
  console.log(value)
}
*/

// Vòng while
/*
var i = 0
while(i < 1000 ) {
  i++
  console.log(i)
}
*/

// Vòng Do While
/*
var i = 0;
var isSccuss = false

do {
  i++
  console.log('Nap the lan' + ' ' + i)


  if(true) {
    isSccuss = true ;
  }
  
} while (!isSccuss && i <= 3)
*/


/// Học

/**
 * Break và Continue 
 * 1. Break
 * 2. Continue
 */

/// Ví Dụ

//Break
/*
for(var i = 0; i <= 10; i++) {
  console.log(i)
  if(i >= 5) {
    break;
  }
}
*/

// Continue
/*
for(var i = 0; i <= 10; i++) {
  if(i%2 !== 0) {
    continue;
  }
  console.log(i)
}
*/

/// Học

/**
 * Vòng lặp lồng nhau
 */

/// Ví Dụ

/*
var myArray = [
  [1, 2],
  [3, 4],
  [5, 6],
]

for(var key of myArray) {

  for(var value of key) {
    console.log(value)
  }
}
*/

/// Học

/**
 * Array methods:
 * 1. forEach()
 * 2. every()
 * 3. some()
 * 4. find()
 * 5. filter()
 * 6. map()
 * 7. reduce()
 */

/// Ví Dụ

/*
var courses = [
  {
    id: 1,
    name: 'javascript',
    coin:  200,
  },

  {
    id: 2,
    name: 'HTML',
    coin: 500,
  },

  {
    id: 3,
    name: 'CSS',
    coin: 0,
  },

  {
    id: 4,
    name: 'PHP',
    coin: 200,
  },

  {
    id: 5,
    name: 'CSS',
    coin: 100,
  },
]
*/

// forEach (gọi ra các phần tử)
/*
courses.forEach(function(course, index) {
  console.log(course.name, course.id)
})
*/

// every (kiểm tra các phần tử thỏa mãn 1 điều kiện)
/*
var isFree = courses.every(function(course) {
    return course.coin !== 0;
});

console.log(isFree)
*/

// Some (Kiểm tra 1 phần tử có thỏa mãn điều kiện hay không)
/*
var isFree = courses.some(function(course) {
  return course.coin === 0;
});

console.log(isFree)
*/

//find (Tìm kiếm)
/*
var isFree = courses.find(function(course) {
  return course.name === 'CSS';
});

console.log(isFree)
*/

// filter
/*
var isFree = courses.filter(function(course) {
  return course.name === 'CSS';
});

console.log(isFree)
*/

// map (Thêm phần tử vào mảng)

/*
var coursesFunction = function(course){
  return {
    id: course.id,
    name: `Khoa Hoc:  ${course.name}`,
    coin: `Gia: ${course.coin} `
  };
} 

var newCourses = courses.map(coursesFunction)
console.log(newCourses)
*/

// reduce()
/*
 var i = 0;
var coursesFunction = function(accumulator, currenValue, curreIndex, originArray) {
  i++
   var giatricoin = accumulator + currenValue.coin
  console.table({
      'Luot chay': i,
      'Gia tri luu tru': accumulator,
      'Gia tri goc': currenValue.coin,
      'Gia tri cuoi': giatricoin
    });
    
    return giatricoin;
}

var totalCoin = courses.reduce(coursesFunction, 0)
console.log(totalCoin)
*/

/*
var totalCoin = courses.reduce(function(accumulator, currenValue) {
  return accumulator + currenValue.coin
}, 0)
console.log(totalCoin)
*/


/// Học 

/**
 * String / Array includes() method
 */


/// Ví Dụ

// String 
/*
var myString = 'HTML CSS Javascript';
console.log(myString.includes('CSS'))
*/

//Array
/*
var myArray = ['HTML', 'CSS', 'Javascript'];
console.log(myArray.includes('HTML'))
*/


/// Học

/**
 * Math object
 * 1. Math.PI
 * 2. Math.round()
 * 3. Math.abs()
 * 4. Math.ceil()
 * 5. Math.floor()
 * 6. Math.random()
 * 7. Math.min()
 * 8. Math.max()
 */

/// Ví Dụ

// Math..PI
//console.log(Math.PI)

//Math.round()
//console.log(Math.round(5.6))

//Math.ads()
//console.log(Math.abs(-5))

//Math.cell
//console.log(Math.ceil(5.00002))

//Math.floot()
//console.log(Math.floor(4.999))

//Math.random()
//console.log(Math.ceil(Math.random() * 10))

//Math.min
//console.log(Math.min(-3, - 50, 27, 100))

//Math.max
//console.log(Math.max(-3, - 50, 27, 100))

/// Học 

/**
 * Callback ?
 * 
 * Là hàm (function) đuoẹc truyền qua đối số
 * khi gọi hàm khác
 * 
 */

/// Ví Dụ
/*
function myFunction(param) {
  if(typeof param === 'function')
        param('hello');
}



function Callback(value) {
        console.log('value: ' + value)
}

myFunction(Callback)
*/
 
/// Học 


/**
 * Callback 2 ?
 * 
 * 1. Là hàm
 * 2. truyền qua đối số
 * 3. Được gọi lại trong hàm đối số
 */

/// Ví Dụ
/*
Array.prototype.map1 = function(Callback) {
  var arraylength = this.length;
  var output = [];
    for(var i = 0; i < arraylength; i++) {
      var result = Callback(this[i])
      output.push(result)
    }
    return output
}


var courses = [
  'javascript',
  'PHP',
  'Ruby'
]

var htmls = courses.map1(function(course) {
  return `<h2>${course}</h2>`
})

console.log(htmls)
*/
/*
var htmls = courses.map(function(course) {
    return `<h2>${course}</h2>`
})
*/
//console.log(htmls.join(' '))


/// Học
/**
 * Empty  of Array
 */


/// Ví Dụ 

/*
var courses = new Array(12)

courses.push('javascript', 'PHP')

for(var index in courses) {
  console.log(courses[index])
}
*/

/// Học 


/**
 * Xây dựng đối tượng forEach()
 */

/// Ví Dụ
/*
Array.prototype.forEach2 = function(Callback) {
  for(var index in this) {
    if(this.hasOwnProperty(index)) {
     Callback(this[index], index)
    }
  }
}

var myArray = [
  'javascript',
  'PHP',
  'Ruby'
]
myArray.length = 10;
myArray.forEach2(function(array, index) {
  console.log(index, array)
})
*/


/// Học

 /**
  * Xây dưng filter
  */

///Ví Dụ

/*
Array.prototype.filter2 = function(Callback) {
  output = []
  for(var index in this) {
    if(this.hasOwnProperty(index)){
      var result = Callback(this[index],index)
      if(result) {
        output.push(this[index])
      }
    }
  }
  return output
}
var courses = [
  {
    id: 1,
    name: 'Javascript',
    coin: 200,
  },

  {
    id: 2,
    name: 'HTML',
    coin: 0
  },

  {
    id: 3,
    name: 'CSS',
    coin: 500,
  }

]
var filtercourses = courses.filter2(function(course, index) {
    
  return course.coin > 100
})
console.log(filtercourses)
*/


/// Học


/**
 * Xây dựng find
 */


/// Ví Dụ

/*
Array.prototype.find2 = function(Callback) {
  output = []
  for(var index in this) {
    if(this.hasOwnProperty(index)){
      var result = Callback(this[index],index)
      if(result) {
        output.push(this[index])
        break;
      }
    }
  }
  return output
}
var courses = [
  {
    id: 1,
    name: 'Javascript',
    coin: 200,
  },

  {
    id: 2,
    name: 'HTML',
    coin: 0
  },

  {
    id: 3,
    name: 'CSS',
    coin: 500,
  }

]
var findcourses = courses.find2(function(course, index) {
    
  return course.coin > 100
})
console.log(findcourses)
*/


/// Học

/**
 * Xây dựng some()
 */

/// Ví Dụ
// Cách 1
/*
Array.prototype.some2 = function(callback) {
  for(var index in this) {
    if(this.hasOwnProperty(index)) {
      if(callback(this[index], index)) {
        return true
      }
    }
  }
  return false
}
var courses = [
  {
    id: 1,
    name: 'Javascript',
    coin: 200,
    isFinish: false
  },

  {
    id: 2,
    name: 'HTML',
    coin: 10,
    isFinish: true
  },

  {
    id: 3,
    name: 'CSS',
    coin: 500,
    isFinish: false
  }

]

var result = courses.some2(function(course, index) {
      return course.isFinish;
})
console.log(result)
*/

// Cách 2
/*
Array.prototype.some2 = function(callback) {
  var output = false
  for(var index in this) {
    if(this.hasOwnProperty(index)) {
      if(callback(this[index], index)) {
         output = true
      break; 
      }
    }
  }
  return output
}
var courses = [
  {
    id: 1,
    name: 'Javascript',
    coin: 0,
    isFinish: false
  },

  {
    id: 2,
    name: 'HTML',
    coin: 0,
    isFinish: true
  },

  {
    id: 3,
    name: 'CSS',
    coin: 500,
    isFinish: false
  }

]

var result = courses.some2(function(course, index) {
      return course.coin === 0;
})
console.log(result)
*/

/// Học

/**
 * Xây dưng every()
 */

/// Ví Dụ
/*
Array.prototype.every2 = function(callback) {
  var output = true;
  for(var index in this) {
    
    if(this.hasOwnProperty(index)) {
      var result = callback(this[index], index)
      if(!result){
        output = false;
        break;
      }
    }
  }
  return output
}
var courses = [
  {
    id: 1,
    name: 'Javascript',
    coin: 0,
    isFinish: true
  },

  {
    id: 2,
    name: 'HTML',
    coin: 0,
    isFinish: true
  },

  {
    id: 3,
    name: 'CSS',
    coin: 500,
    isFinish: false
  }

]

var result1 = courses.every2(function(course, index) {
  return course.isFinish === true;
})
console.log(result1)
*/

/// Học 

/**
 * Đệ Quy
 * 1. Xác định điểm ngừng  
 * 2. logic handle ==> tạo ra điểm ngừng
 */


/// Ví Dụ 

/**
input: arr = ['a', 'b', 'c', 'a', 'b', 'c']
output: arr = ['a', 'b', 'c']
 */
// Giai
/*
var arr = ['a', 'b', 'c']
console.log([...new Set(arr)])
*/

/// Dowcout

/*
function dowCout(number) {
  if(number > 0) {
    console.log(number)
    return dowCout(number - 1)
  }
  return number
}

dowCout(10)
*/

// Vòng lặp
/*
function loop(start, end, callback) {
  if(start < end) {
    callback(start) 
    return loop(start + 1, end, callback)
  }
}


var isArray = [
  'javascript',
  'PHP',
  'Ruby'
]

loop(0, isArray.length, function(index) {
  console.log('index: ', isArray[index])
})
*/

// Giai Thừa 
//3! = 3 * 2 * 1


// Tinh giai thua de quy
/*
function giaiThua(number) {
if(number > 0) {
  return number * giaiThua(number - 1)
}
return 1
}

console.log(giaiThua(6))
*/

//Tinh giai thua vong lap
/*
function giaiThua(number) {
  var output = 1;
  for(var i = number; i > 0; --i) {
    output *= i
  }
  return output
}

console.log(giaiThua(3))
*/


/// Học

/**
 * HTML DOM
 * 
 * 1. Node Element
 * 2. Node Attribue
 * 3. Node Text
 */

/// Ví Dụ


/**
 *  Get Node Element
 * 
 * 1. ID
 * 2. ClassName
 * 3. TagName
 * 4. CSS Selector
 * 5. HTML Collection
 */


// ID - get Element
/*
var headingNode = document.getElementById('heading');
console.log(headingNode)
*/

// ClassName - HTMl collection
/*
var headingList = document.getElementsByClassName('box');
console.log(headingList[0])
*/

// TagName HTML collection
/*
var headingNodes = document.getElementsByTagName('h2');
console.log(headingNodes)
*/

// CSS Selector
/*
// Get so it - Element
var Lists = document.querySelector('.box1 ul li');
console.log(Lists)
*/

// Get so nhieu - Nodelist
/*
var nodeList = document.querySelectorAll('.box1 ul li')
console.log(nodeList)
*/

// HTML collection
/*
 var head = document.anchors
 console.log(head)
*/

/**
 * Set Node Element
 * - innerHTML
 * - outerHTML
 */

// innerHTML
/*
var innerHtml = document.querySelector('.box2');
innerHtml.innerHTML = ('<a href="#">My Computer</a>')
*/
/*
var outerHtml = document.querySelector('.box2');
console.log(outerHtml.outerHTML)
*/
/**
 * Attribute 
 * - Thêm trực tiếp
 * - Thêm qua setAttribute
 * - Lấy trực tiếp
 * - Lấy qua getAttribute
 */

// Thêm trực tiếp
/*
var headingAttribute = document.querySelector('h1');
headingAttribute.title = 'JS'
headingAttribute.className = 'Nguyen Van Anh'
*/

// Thêm qua setAttribute
/*
var headingAttribute = document.querySelector('h1');
headingAttribute.setAttribute('href', '#')
*/

// Lấy trực tiếp
/*
var headingAttribute = document.querySelector('h1');
console.log(headingAttribute.id)
*/

// Lấy qua getAttribute
/*
var headingAttribute = document.querySelector('.box');
 console.log(headingAttribute.getAttribute('class'))
*/

/**
 * Node Text
 * - innerText
 * - textContent
 */

/// innerText

// Thêm text (Giống)
/*
var headingText = document.querySelector('h1');
headingText.innerText = 'New Javascript'
*/
/*
var headingText = document.querySelector('h1');
headingText.textContent = 'New Javascript'
*/

// Lấy text (Khác nhau)
/*
var headingText = document.querySelector('h1');
console.log(headingText.innerText)
*/
/*
var headingText = document.querySelector('h3');
console.log(headingText.textContent)
*/

/// DOM CSS
/*
var headingCss = document.querySelector('h1');
headingCss.style.color = 'violet'
*/
/*
var headingCss = document.querySelector('h1');
Object.assign(headingCss.style, {
  color: 'violet',
})
*/


/// Học
  

/**
 * classList 
 * 1. add()
 * 2. contains()
 * 3. remove()
 * 4. toggle()
 */


/// Ví Dụ


// classList add()
/*
var headingList = document.querySelector('h1');
headingList.classList.add('red')
*/

// classList contains()
/*
var headingList = document.querySelector('h1');
console.log(headingList.classList.contains('red'))
*/

// classList remove()
/*
var headingList = document.querySelector('h1');
headingList.classList.remove('listing')
*/

// classList toggle()
/*
var headingList = document.querySelector('h1');
setInterval(function() {
  headingList.classList.toggle('red')
}, 500)
*/

/// Học

/**
 * DOM events
 * 1. onclick
 * 2. omdblclick
 * 3. onchange
 * 4. oninput
 * 5. ...
 */


/// Ví Dụ

/*
var headingEvent = document.querySelector('h1');
headingEvent.onclick = function(e) {
  console.log(e)
}
*/

// Còn nhiều ...


/// Học


/**
 * DOM events example
 * 1. input
 * - input vs type="text"
 * - input vs type="checkbox"
 * 2. keyup / keydown
 * - keyup
 * - leydown
 */


/// Ví Dụ

// Input
// onchange
/*
var headingExample  = document.querySelector('input[type="text"]')
headingExample.onchange = function(e) {
  console.log(e.target.value)
}
*/

/*
var headingExample  = document.querySelector('input[type="checkbox"]');
headingExample.onchange = function(e) {
  console.log(e.target.checked)
}
*/

/*
var headingExample = document.querySelector('select')
headingExample.onchange = function(e) {
  console.log(e.target.value)
}
*/

// oninput
/*
var output 
var headingExample  = document.querySelector('input[type="text"]')
headingExample.oninput = function(e) {
  output = e.target.value
}
setTimeout(function() {
  console.log(output)
}, 3000)
*/

//Keyperss
//keyup
/*
var headingExample  = document.querySelector('input[type="text"]')
headingExample.onkeyup = function(e) {
  console.log(e.target.value)
}
*/

//keydown
/*
var headingExample  = document.querySelector('input[type="text"]')
headingExample.onkeydown = function(e) {
  console.log(e.target.value)
}
*/

//Thao tác các phím
/*
var headingExample  = document.querySelector('input[type="text"]')
headingExample.onkeyup = function(e) {
  console.log(e.which)
  switch(e.which) {
    case 27:
      console.log('exit')
      break;
  }
}
*/
/*
var headingExample  = document.onkeyup = function(e) {
  switch(e.which) {
    case 27: 
    console.log('EXIT')
    break;
  }
}
*/


/// Học


/**
 * preventDefault / stopPropagation
 */

/// Ví Dụ


//preventDefault
/*
var aElenment = document.links

for(var i = 0; i < aElenment.length; ++i) {
aElenment[i].onclick = function(e) {
  if(!e.target.href.startsWith('https://f8.edu.vn')) {
    e.preventDefault()
}
}
}
*/
/*
var olElement = document.querySelector('ol')
olElement.onmousedown = function(e) {
  e.preventDefault()
  olElement.onclick = function(e) {
    console.log(e.target)
  }
}
*/

//stopPropagation
/*
var divElement = document.querySelector('.box3')
divElement.onclick = function() {
  console.log('DIV')
}
var divElement = document.querySelector('button')

divElement.onclick = function(e) {
  e.stopPropagation()
  console.log('click me')
}
*/


/// Học

/**
 * 1. Event listener
 * - addEventlistener / removeEventListener
 * 2. JSON
 * 3. Fetch
 * 4. DOM location
 * 5. Local storage
 * 6. Sessiopn Storage
 * 7. Coding convention
 * 8. Best Practices
 * 9. Mistakes
 * 10. Preformance
 */

/// Ví Dụ
/*
var listenerEvent = document.querySelector('h1')

function event1() {
  console.log('hello')
}

function event2() {
  alert('hello')
}

listenerEvent.addEventListener('click', event1)
listenerEvent.addEventListener('click', event2)

setTimeout( function() {
listenerEvent.removeEventListener('click', event2)
}, 5000)
*/

/// Học 

/**
 * JSON
 * 1. là một định dạng dữ liệu (chuỗi)
 * 2. các kiểu dự liệu đc mã hóa: boolean, null, number, array, object,
 * 3. các kiểu chuyễn đổi stringify / parse
 */

/// Ví Dụ


/*
var json = '{"name": "Nguyen Anh","age": 17}'

console.log(JSON.parse(json))
*/
/*
console.log(JSON.stringify([
  'Nguyen Anh',
  17
]))
*/


/// Học 

/**
 * Promise
 */

/// Ví Dụ 


// eg1
/*
var promise = new Promise(
  function(resolve, reject) {
    //logic
    //reject() or resolve()
  }
)

promise
.then(
  function() {
    console.log('Thành Công')
  }
)
.catch(
  function() {
    console.log('Thất Bại')
  }
)
.finally(
  function() {
    console.log('Done')
  }
)
*/

// eg2
/*
var promise = Promise.resolve('hello')

promise

.then(
  function(data) {
    console.log(data)
    return data
  }
)
.then(
  function(data) {
    console.log(data)
    return data
  }
)
*/

// eg3
/* 
var promise = Promise.reject('Có Lỗi')

promise

.catch(
  function(data) {
    console.log(data)
  }
)
*/

// eg4
/*
function Sleep(ms) {
  return new Promise(
    function(resolve) {
      setTimeout(resolve, ms)
    }
  )
}

Sleep(1000)

.then(
  function() {
    console.log(1)
   return Sleep(1000)
  }
)
.then(
  function() {
    console.log(2)
   return Sleep(1000)
  }
)
.then(
  function() {
    console.log(3)
   return Sleep(1000)
  }
)
.then(
  function() {
    console.log(4)
   return Sleep(1000)
  }
)
.then(
  function() {
    console.log(5)
   return Sleep(1000)
  }
)
*/

// eg5
/*
var promise = new Promise(
  function(resolve, reject) {
    setTimeout(function() {
      resolve([1, 2])
    }, 1000)
  }
)


var promise2 = new Promise(
  function(resolve, reject) {
    setTimeout(function() {
      resolve([3])
    }, 3000)
  }
)

Promise.all([promise, promise2])
.then(
  function(result) {
    var result1 = result[0]
    var result2 = result[1]
    console.log(result1.concat(result2))
  }
)
*/

/// Học

/**
 * ES6
 * let, const
 * var / let, const scope, hosting
 * const / let, var Assignment
 */

/// Ví Dụ
/*
{
  var a = 1;  // yes
  let a = 2; // No
  const a = 3;  // No
}
console.log(a)
*/
/*
a = 1;
let or const a
console.log(a)
*/
/*
//No
const a = 2
a = 3
console.log(a)
*/
/*
// Yes
const a = {
  name: 'Nguyen Anh'
}

a.name = 'Nguyen A';

console.log(a.name)
*/

/// Học


/**
 * ES6
 * arrow function
 * không có trong object constructor
 */

/// Ví Dụ


//eg1
/*
var logger = (log) => {
  console.log(log)
}

logger(2004)
*/

//eg2
/*
var logger = (a, b) => a + b

console.log(logger(2, 5))
*/

//eg3
/*
var logger = (name, age) => ({name: name, age: age})

console.log(logger('Nguyen anh', 17))
*/

//eg4
/*
var logger = log => console.log('hello')
logger()
*/

/// Học

/**
 * template string
 */

/// Ví Dụ

//eg1
/*
var name = 'Name:'
var lenguage = `${name} \${Javascript} `
console.log(lenguage)
*/

//eg2
/*
var name = `Javascript
PHP
Java`
console.log(name)
*/

/// Học 

/**
 * Classes = constructor
 */

/// Ví Dụ


/*
class Course {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getName() {
    return this.name
  }
}

var fontEnd = new Course('Javascript', 200);
var backEnd = new Course('PHP', 500)

console.log(fontEnd)
console.log(backEnd)
console.log(backEnd.getName())
*/


/// Học

/**
 * enhanced object literals
 */

/// Ví Dụ

//eg1
/*
var name = 'Javascript';
var price = 200;

var course = {
  name,
  price,
}

console.log(course)
*/

//eg2
/*
var name = 'new name';
var price = 'new price';

var course = {
  [name]: 'Javascript',
  [price]: 500
}

console.log(course)
*/

/// Học

/**
 * Default parameter values
 */

/// Ví Dụ

//eg1
/*
function logger(log = 'Gia tri mac dinh') {
  console.log(log)
}
logger()
*/

//eg2
/*
function logger(log, type='log') {
  console[type](log)
}
logger('thong bao', 'warn')
*/

/// Học


/**
 * destructuring - rest parameters
 */


/// Ví Dụ

//eg1
/*
var array = ['javascript', 'PHP', 'Ruby']

var [a, b, c] = array
var [a, ...rest] = array

console.log(a, b, c)
console.log(rest)
*/

//eg2
/*
var object = {
  name: 'javascript',
  price: 500,
  children:{
    name: 'js'
  }
}

var {name: parentName, children: {name}} = object

console.log(parentName)
console.log(name)
*/

//eg3
/*
function logger(a, ...log) {
  console.log(log)
}
logger(1, 2, 3, 4, 5)
*/


/// Học 


/**
 * Spreak
 */

/// Ví Dụ

//eg1
/*
var array1 = ['javascript', 'PHP']
var array2 = ['python', 'Ruby']
var array = [...array1, ...array2]
console.log(array)
*/

//eg2
/*
var object1 = {
  name: 'javascript'
}
var object2 = {
  price: 500.000
}
var object = {
  ...object1,
  ...object2,
}
console.log(object)
*/

//eg3
/*
var array = ['javascript', 'PHP', 'Ruby']

function logger(...rest) {
  for(var i = 0; i < rest.length; i++) {
    console.log(rest[i])
  }
}

logger(...array)
*/


/// Học

/**
 * tagged template literals
 */

/// Ví Dụ

//eg1
/*
function highlight([first, ...strings], ...values) {
	return values.reduce(
	(acc, curr, a) =>  [...acc, `<span>${curr}</span>`, strings.shift()],
	[first]
		).join()
}

var barnd = 'F8';
var course = 'javascript'

var html = highlight`Hoc lap trinh ${course} tai ${barnd} !`
console.log(html)
*/

/// Học


/**
 * Module
 * import / export
 */

/// Ví Dụ
/*
import { 
  TYPE_LOG,
  TYPE_WARN,
  TYPE_ERROR
 } from './constants.js'
import logger  from './logger.js'
logger('hello', TYPE_WARN)
*/