function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    //validation logic
    if (input.startsWith("pet_") && /^[a-zA-Z0-9]/.test(input.slice(4))){
        result = "Valid Syntex \n Lets's start with the adoption!!🌞";
    } else {
        result = "Invalid Syntex;⚠️⚠️. \n Input should start with 'pet_' and followed by alphanumeric characters.";
    }

            document.getElementById('result').innerText = result;
            document.alert(result);
}


