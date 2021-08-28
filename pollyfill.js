// Create own polyfill for javascript preparation for interview

// Function Polyfill
const person = {
    name: "Sanchit Agarwal",
    city: "Ghaziabad",
}

const getInfo = function(state, country) {
    console.log(`name is ${this.name}, city is ${this.city}, state is ${state} and country is ${country}`)
}

Function.prototype.myBind = function(obj, ...args) {
    obj.fn = this;
    return () => {
        obj.fn(...args);
    }
}

Function.prototype.myApply = function(obj, ...args) {
    obj.fn = this;
    obj.fn(...args);
}

Function.prototype.myCall = function(obj, ...args) {
    obj.fn = this;
    obj.fn(...args);
}

const getInfoWithBind = getInfo.bind(person, "Uttar Pradesh", "India");
const getInfoWithMyBind = getInfo.myBind(person, "Uttar Pradesh", "India");
getInfoWithBind()
getInfoWithMyBind()
getInfo.call(person, "Uttar Pradesh", "India");
getInfo.myCall(person, "Uttar Pradesh", "India");

//Array Polyfill

Array.prototype.myMap = function(callback) {
    const result = [];
    const arr = this;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] != undefined) {
            res.push(callback(arr[i], i, arr));
        }
    }
    return result;
}

Array.prototype.myFilter = function(callback) {
    const result = [];
    const arr = this;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] != undefined && callback(arr[i], i, arr)) {
            res.push(arr[i]);
        }
    }
    return result;
}

Array.prototype.myReduce = function(callback, initialValue) {
    let accum = initialValue || undefined;
    const arr = this;
    for(let i = 0; i < arr.length; i++) {
        if (accum) {
            accum = callback(accum, arr[i], i, arr);
        } else {
            accum = arr[i];
        }
    }
    return accum;
}