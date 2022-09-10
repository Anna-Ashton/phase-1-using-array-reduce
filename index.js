const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//const totalBatteries=batteryBatches.reduce(((accumulator,currentValue)=>accumulator + currentValue),0);

let totalBatteries = batteryBatches.reduce( (batteryAmount, assembledBatteries) => { return batteryAmount + assembledBatteries })
