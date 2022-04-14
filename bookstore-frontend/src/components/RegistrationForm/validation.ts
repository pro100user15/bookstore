export const emailValidation = {
    required: "Email cannot be empty",
    validate: (value: string) => {
        if(value.length < 5 || value.length > 40) {
            return "Email must be between 5 and 40 characters long";
        }

        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!re.test(String(value).toLowerCase())) {
            return "Email must match format";
        }

        return true;
    }
}

export const passwordValidation = {
    required: "Password cannot be empty",
    validate: (value: string) => {
        if(value.length < 8 || value.length > 64) {
            return "Password must be between 8 and 64 characters long";
        }

        return true;
    }
}