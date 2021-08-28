const flattenArray = (arr, res) => {
    for(let i = 0;i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenArray(arr[i], res);
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

const flattenObject = (obj, parent, res) => {
    for(let ob in obj) {
        const key = parent ? `${parent}_${ob}` : ob;
        if (typeof obj[ob] == "object" && !Array.isArray(obj[ob])) {
            flattenObject(obj[ob], key, res);
        } else {
            res[key] = obj[ob]
        }
    }
    return res;
}

const arr = [1, [2, 3], [4, [5, 6, 7, [8, [9]]]]];
const obj = {
    name: "test",
    address: {
        personal: "abc",
        office: {
            building: 'random',
            street: 'some street'
        }
    }
};

console.log(flattenArray(arr, []));
console.log(flattenObject(obj, "", {}));