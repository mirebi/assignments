// solution 1

let soln1 = () => {
    var a = 12
    var b = 12.3
    var c = "hello"
    var d = true

    document.write(`${a} ${b} ${c} ${d}`)
}

soln1()

// solution 2

let soln2 = () => {
    var username = prompt("Username:")
    var sid = prompt("Student ID:")

    alert(`${username}: ${sid}`)
}


// solution 3

let soln3 = () => {
    var marks = prompt("Enter marks:")

    if (marks >= 80 && marks <= 100) {
        alert("Distinction")
    } else if (marks >= 60 && marks <= 79) {
        alert("First Division")
    } else if (marks >= 50 && marks <= 69) {
        alert("Second Division")
    } else if (marks >= 40 && marks <= 49) {
        alert("Third Division")
    } else {
        alert("Fail")
    }

}

let soln4 = () => {
    var day = prompt("Enter day(1-7):")

    switch (day) {
        case 1: alert("Sunday")
            break;
        case 2: alert("Monday")
            break;
        case 3: alert("Tuesday")
            break;
        case 4: alert("Wednesday")
            break;
        case 5: alert("Thursday")
            break;
        case 6: alert("Friday")
            break;
        case 7: alert("Saturday")
            break;
        default:
            alert("invalid")
            break;
    }
}

let soln5 = () => {
    var images = ["./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg"]

    for (var image in images) {
        document.write(`<img src="${images[image]}" alt="${parseInt(image)+1}.jpg">`)
    }
}

let soln6 = () => {
    for (var i = 1; i <= 10; i++) {
        document.write(`<br>5 x ${i} = ${5 * i}`)
    }
}


let soln7 = () => {
    var domstr = ""
    for (var i = 1; i <= 4; i++) {
        domstr += `<tr>
        <td>${i}</td>
        <td>Name${i}</td>
        <td>${i}.jpg</td>`
    }
    document.write(`
    <table>
    <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
    </tr>
    ${domstr}
    </table>
    <style>
    tr:nth-child(even) {
        background-color: skyblue;
    }
    tr:nth-child(odd) {
        background-color: lightblue;
    }
    </style>
    `)
}

let soln8 = () => {
    var myColor = ["Red", "Green", "White", "Black"]
    myColor.join(",")
    myColor.join("+")
}

let soln9 = () => {
    var intarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    console.log(intarray.reduce((a,b) => a+b,0))
    console.log(intarray.reduce((a,b) => a*b,1))
}


let soln10 = (length,breadth) => {
    var area = length * breadth
    console.log(area) 
}


// solution 11
    var array = []
    
    function add_to_array() {
       array.push(document.getElementById("input").value)
       document.getElementById("input").value = ""
    }

    function display_array(){
        resStr = "<hr/>"
        for (i in array){
            resStr += `Element ${i} = ${array[i]} <br/>`
        }
        console.log(array)
        document.getElementById("result").innerHTML = resStr
    }
