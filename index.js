const data = [{
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "ppu": 0.78,
        "batters": {
            "batter": [
                { "id": "1001", "type": "Regular" },
                { "id": "1002", "type": "Chocolate" },
                { "id": "1003", "type": "Blueberry" },
                { "id": "1004", "type": "Devil's Food" }
            ]
        },
        "topping": [
            { "id": "5001", "type": "None" },
            { "id": "5002", "type": "Glazed" },
            { "id": "5005", "type": "Sugar" },
            { "id": "5007", "type": "Powdered Sugar" },
            { "id": "5006", "type": "Chocolate with Sprinkles" },
            { "id": "5003", "type": "Chocolate" },
            { "id": "5004", "type": "Maple" }
        ]
    },
    {
        "id": "0002",
        "type": "donut",
        "name": "Raised",
        "ppu": 0.55,
        "batters": {
            "batter": [
                { "id": "1001", "type": "Regular" }
            ]
        },
        "topping": [
            { "id": "5001", "type": "None" },
            { "id": "5002", "type": "Glazed" },
            { "id": "5005", "type": "Sugar" },
            { "id": "5003", "type": "Chocolate" },
            { "id": "5004", "type": "Maple" }
        ]
    },
    {
        "id": "0003",
        "type": "donut",
        "name": "Old Fashioned",
        "ppu": 0.26,
        "batters": {
            "batter": [
                { "id": "1001", "type": "Regular" },
                { "id": "1002", "type": "Chocolate" }
            ]
        },
        "topping": [
            { "id": "5001", "type": "None" },
            { "id": "5002", "type": "Glazed" },
            { "id": "5003", "type": "Chocolate" },
            { "id": "5004", "type": "Maple" }
        ]
    }
];

let sum = 0;
let avg = 0;
let listTopping = [];
let listBatter = [];
let listID = [];

for (var i in data) {
    sum += data[i].ppu;

}
for (var i in data) {
    avg += data[i].ppu;
}
avg /= data.length;

for (i = 0; i < data.length; i++) {
    for (j = 0; j < data[i].topping.length; j++) {
        listTopping.push(data[i].topping[j].type);
    }
}


for (i = 0; i < data.length; i++) {
    for (j = 0; j < data[i].batters.batter.length; j++) {
        listBatter.push(data[i].batters.batter[j].type);

    }
}

for (var i in data) {
   listID.push(data[i].id);
}

for (i = 0; i < data.length; i++) {
    for (j = 0; j < data[i].topping.length; j++) {
        listID.push(data[i].topping[j].id);
    }
}
for (i = 0; i < data.length; i++) {
    for (j = 0; j < data[i].batters.batter.length; j++) {
        listID.push(data[i].batters.batter[j].id);

    }
}

let uniqueBatter = listBatter.filter((v, i, a) => a.indexOf(v) === i);
let uniqueTopping = listTopping.filter((v, i, a) => a.indexOf(v) === i);
let uniqueID = listID.filter((v, i, a) => a.indexOf(v) === i);




console.log("All topping: " + uniqueTopping);
console.log("All batter: " + uniqueBatter);
console.log("Ppu average: " + avg);
console.log("Ppu sum: " + sum);
console.log("ID: " + uniqueID);