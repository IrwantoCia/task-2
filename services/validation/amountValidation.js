export const validateAmount = amount => {
    if (!amount) {
        return "Amount is required";
    }

    if (amount <= 0) {
        return "Amount must be greater than 0";

    }

};
