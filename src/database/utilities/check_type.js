
// Here we will define the methods for check if a variable is of a specific type.
// That is important because we need to check whether the variable is correct or not.
//
// Its main objective is for the controllers, because we need to filter the data before
// proccess it.

export class CheckType {

    // This will check if a variable is a String.
    // It receives a variable and returns true if it is a string, and false if it is not
    isAString (inputVariable) {
        
        // We will use typeof for know the type of the variable, and then
        // we will compare that result with "string".

        if (typeof inputVariable === 'string' || inputVariable instanceof String) {
            // That means is a string, so we return true.
            return true;
        } else {
            // Otherwise we return false.
            return false;
        }
            
    }
}

