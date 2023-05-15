// Question 1

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

// Question 3

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