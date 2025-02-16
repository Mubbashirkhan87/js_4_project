// Assignment  1 : String Manipulation
//toUpperCase
let a = "mubbashir khan"
console.log(a.toUpperCase());
// toLowerCase
let b = "MUBBASHIR KHAN"
console.log(b.toLowerCase());

// white space remove
let c = "                hamza khan"
let d = c.trim()
console.log(d);

// includes 
let  vegetables = ["potato","tomato","ginger","onion"]
console.log(vegetables.includes("banana"));  // true ststemnet
//console.log(vegetables.includes("banana")); false statement

// replace 
let f = "hamza khan "
let e = f.replace("khan","jan")
console.log(e);

// split the string into arry
let g = "What is your name ?"
let h = g.split()
console.log(h);

//  Assignment 2: Array Operations
//sort()
let i = ["Apple" , "Banana" , "Orange"]
let j = i.sort()
console.log(j);

// shift() , unshift() , pop() , push()
let k = [ "Orange" , "Man" ,"Apple" , "Banana" , "Women"]
//k.unshift("erd")
//k.shift()
//k.pop()
k.push("hello")
console.log(k)

// join()
let l = [ 45 , 65 , 67 ,87]
let m =l.join()
console.log(m)

// reverse 
let n = ["Banana", "Orange", "Apple", "Mango"]
let o = n.reverse()
console.log(o);

// indexOf()
let p = ["mango" ,"apple" ,"pineapple", "fruits"]
console.log(p.indexOf("apple"))


//Assignment 3: String and Array Combination
// sort the word in arry alaphabatically
let alpha = ["A", "B", "C" ,"D", "E" ,"F"]
let newAlpha = alpha.sort()
console.log(newAlpha)

// splice()
let q =  ["mango" ,"apple" ,"pineapple", "fruits"]
let r = q.splice(1,1)
console.log(q)

//join()
let s =  ["S Tatheer" ,"ammar zia" ,"mubbashir", "hamza"]
let t = s.join()
console.log(t)
//include()
let u = ["S Tatheer" ,"ammar zia" ,"mubbashir", "hamza"]
console.log(u.includes("S Tatheer"))

//Assignment 4: Array Methods
//push()
let ab = ["peshawar", "islamabad", "karachi", "lahore"]
let az =ab.push("hi")
console.log(az)
//pop()
let ac = ["peshawar", "islamabad", "karachi", "lahore"]
let ay =ac.pop()
console.log(ay)
//shift()
let ad = ["peshawar", "islamabad", "karachi", "lahore"]
let ax =ad.shift()
console.log(ax)
//unshift()
let ae = ["peshawar", "islamabad", "karachi", "lahore"]
let aw =ae.unshift("Where")
console.log(aw)

//Assignment 5: String Methods
let upr = "hello where are you going?"
console.log(upr.toUpperCase())
//tolowerCase()
let lwrc = "THIS IS A BOY "
let newLwrc = lwrc.toLowerCase()
console.log(newLwrc);

//trim()
let tim = "         How are?"
console.log(tim.trim());

//includes()
let incld = ["writter","singer","twitter","facebook"]
console.log(incld.includes("facebook"))


//Completed the js 4 projects