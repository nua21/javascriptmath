// QUESTION-1
// Sarah has 25 apples and buys 15 more apples from the store. How many apples does Sarah have in total?

// SOLVE-1
let beforeApple = 25;
let afterApple = 15;
let totalApple = beforeApple + afterApple;
console.log( "Sarah has total" + " " + totalApple + " "+ "apples." );
// Output: 40
// QUESTION-1 SOLVED



//QUESTION-2
//John had 500 taka. He spent 200 taka at the grocery shop. How much money does John have left now?

// SOLVE-2
let beforeMoney = 500;
let afterMoney = 200;
let totalMoney = beforeMoney - afterMoney;
console.log( "John has left total" + " " + totalMoney + " " + "taka now." );
// Output: 300
//QUESTION-2 SOLVED



//QUESTION-3
//A factory produces 120 machines per hour. How many machines will the factory produce in 8 hours?

//SOLVE-3
let beforeProduces = 120;
let afterProduces = 8;
let totalMachines = beforeProduces * afterProduces;
console.log( "The factory will produce total" + " " + totalMachines + " " + "machines in 8 hours." );
// Output: 960
// QUESTION-3 SOLVED



//QUESTION-4
// In a garden, there are 12 trees in each row and a total of 8 rows. The owner of the garden plans to plant an additional 20 trees. How many trees will there be in total in the garden?

// SOLVE-4
let beforeTrees = 12;
let totalRows = 8;
let totalTreesPerRow = beforeTrees * totalRows;
let moreTrees = 20;
let totalTrees = totalTreesPerRow + moreTrees;
console.log( "There will be" + " " + totalTrees + " " + "trees in the garden." );
// Output: 116
// QUESTION-4 SOLVED



// QUESTION-5
//Rahim has 5 boxes, and each box contains 10 oranges. He gave 12 oranges to his friend. How many oranges does Rahim have now?

// SOLVE-5
let allBox = 5;
let beforeOranges = 10;
let allOranges = allBox * beforeOranges;
let orangesGiven = 12;
let totalOranges = allOranges - orangesGiven;
console.log( "Rahim have total" + " " + totalOranges + " " + "oranges.");
// Output: 38
// QUESTION-5 SOLVED



// QUESTION-6
// A train takes 3 hours to travel a distance of 150 kilometers. How many kilometers does the train travel per hour?

// SOLVE-6
let distance = 150;
let hours = 3;
let totalDistancePerHour = distance / hours;
console.log( "The train travels " + " " + totalDistancePerHour + " " + " kilometers per hours." );
// Output: 50
// QUESTION-6 SOLVED



// QUESTION-7
// A factory uses 6 machines to produce 200 products per day. If 2 more machines are added, what will be the total production? And if 3 products are not sold, how many products will remain?

// SOLVE-7
let factoryProducts = 200;
let factoryMachines = 6;
let perMachineProduct = factoryProducts / factoryMachines;
let addedMachines = 2;
let totalFactoryMachines = factoryMachines + addedMachines ;
let totalProduction = totalFactoryMachines * perMachineProduct ;
let productsNotSold = 3;
let remainingProducts = totalProduction - productsNotSold ;
console.log( "If 3 products are not sold then total" + " " + remainingProducts + " " + "product will be remain." );
// Output: 263.6667
// QUESTION-7 SOLVED



// QUESTION-8
// A shopkeeper buys 120 chocolates and puts 9 chocolates in each packet. How many chocolates will be left after filling all the packets?

// SOLVE-8
let boughtChocolates = 120;
let putsChocolates = 9;
let totalPackets = boughtChocolates / putsChocolates;
let totalChocolates = totalPackets * putsChocolates;
let remainsChocolates = boughtChocolates - totalChocolates;
console.log( "Total" + " " + remainsChocolates + " " + "chocolates will be left after filling all the packets.");
 // Output: 0
// QUESTION-8 SOLVED
