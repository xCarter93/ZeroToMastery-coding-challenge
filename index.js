// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array
// that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const answer1 = (arr) => {
    // Initialize empty object to store each item with how many times it occurs
    let arrayMap = {};
    for (const item of arr) {
        // If the item is already in the object, increment its value, else add to object
        if (!Object.keys(arrayMap).includes(item.toString())){
            arrayMap[item] = 1;
        } else {
            arrayMap[item]++;
        }
    }
    // Once object is built, use reduce method to fill in arrays based on how many times the item occurred, else push single value
    return Object.entries(arrayMap).reduce((result, [key, value]) => {
        if (value > 1) {
            result.push(Array(value).fill(Number(key)));
        } else {
            result.push(Number(key));
        }
        return result;
    }, []);
}

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that,
// when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const answer2 = (array, target) => {

    const complimentArray = [];
    for (const num of array) {
        let compliment = target - num;
        if (complimentArray.includes(compliment)){
            return [num, compliment];
        } else {
            complimentArray.push(num);
        }
    }
}

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-detect the formats so that if you enter HEX color format it returns RGB
// and if you enter RGB color format it returns HEX. Bonus: Release this tool as a npm package.

const convertColor = (color) => {
    // Remove any leading or trailing spaces
    color = color.trim();

    // Check if input is in HEX format (#RRGGBB)
    if (color.startsWith("#")) {
        color = color.slice(1); // Remove the '#' symbol

        // If the input is a short HEX color (#RGB), expand it to full HEX format
        if (color.length === 3) {
            color = color.replace(/([0-9A-Fa-f])/g, "$1$1");
        }

        // Parse the R, G, B values from the HEX color
        const red = parseInt(color.slice(0, 2), 16);
        const green = parseInt(color.slice(2, 4), 16);
        const blue = parseInt(color.slice(4, 6), 16);

        // Return the RGB format
        return `RGB(${red}, ${green}, ${blue})`;
    }

    // Check if input is in RGB format (RGB(r, g, b))
    if (color.startsWith("RGB(") && color.endsWith(")")) {
        color = color.slice(4, -1); // Remove 'RGB(' and ')'

        // Parse the R, G, B values from the RGB color
        const [red, green, blue] = color.split(",").map((value) => parseInt(value.trim()));

        // Convert the RGB values to HEX format
        const hex = `#${red.toString(16).padStart(2, "0")}${green.toString(16).padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;

        // Return the HEX format
        return hex.toUpperCase();
    }

    // If the input format is not recognized, return an error message
    return "Invalid color format. Please enter either HEX (#RRGGBB) or RGB (RGB(r, g, b)) format.";
}