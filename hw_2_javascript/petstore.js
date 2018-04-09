
/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    // IMPLEMENT THIS FUNCTION!

    // Check if numAnimals or avgFood are less than 0
    if (numAnimals < 0 || avgFood < 0) {
        return -1;
    }
    // Check if numAnimals or avgFood are non-numeric
    else if (typeof(numAnimals) != 'number' || typeof(avgFood) != 'number') {
        return -1;
    }
    // Return total number of food that should be ordered for the upcoming week
    else {
        var totalFood = numAnimals * avgFood;
        return totalFood;
    }
}

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */
function mostPopularDays(week) {
    // IMPLEMENT THIS FUNCTION!
    // Check if the array provided is null or empty and return null
    var i;
    var temp = 0;

    if (week == null || week.length == 0) {
        return null;
    }
    else {
        for (i = 0; i < week.length; i++) {
            if (temp < week[i].traffic) {
                temp = week[i].traffic;
            }
        }

        // array that will contain the indexes where highest number is found
        var arr = [];

        // stepping through the week array to find where the highest number occurs 
        // and pushing the indexes to array arr
        for (i = 0; i < week.length; i++) {
            if (temp == week[i].traffic) {
                arr.push(week[i].name);
            }
        }
        var topDays = [];

        if (arr.length >= 2) {
            return arr;
        }
        else {
            return arr[0];
        }
    }
}



/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */


var names = ['Jeff', 'Ross', 'Paulie'];
var types = ['Dog', 'Cat', 'Bird'];
var breeds = ['Yorkie', 'Tabbie', 'Finch'];

function createAnimalObjects(names, types, breeds) {
    // IMPLEMENT THIS FUNCTION!

    //var anInfo = [ names, types, breeds ];
    var zoo = ['first', 'second', 'third'];
    var finalArr = [];
    //var animal = new Animal (names[0]);
    //return animal.name;

    //for (i = 0; i < anInfo.length; i++){
    //    zoo[i] = new Animal (names[i].name, types[i].type, breeds[i].breed);
    //    finalArr.push(zoo[i]);
    //}
    var i = 0;
    var zoo;
    for (i = 0; i < names.length; i++) {
        for (i = 0; i < types.length; i++) {
            for (i = 0; i < breeds.length; i++) {
                zoo[i] = new Animal (names[i], types[i], breeds[i]);
                finalArr.push(zoo[i]);
            }
        }
    }
    return finalArr;
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}

