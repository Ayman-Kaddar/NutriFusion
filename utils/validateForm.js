export function validateField(field) {
    if (field === "" || field === null || field === undefined) {
        return false;
    } else {
        return true;
    }
};
export function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    return false;
};
export function validateCheck(check) {
    if (check) return true;
    else {
        return false;
    }
};
export function validateSelect(field) {
    if (
        field === "" ||
        field === "0" ||
        field === null ||
        field === undefined
    ) {
        return false;
    } else {
        return true;
    }
};

export function validateRadioOption(selectedOption) {
    if (
        selectedOption === "" ||
        selectedOption === null ||
        selectedOption === undefined
    ) {
        return false;
    } else {
        return true;
    }
};

export function validatePhone(phone) {
    if (/^(?:(?:\+?[0-9]{2,4})?[ ]?[6789][0-9 ]{8,13})$/i.test(phone)) {
        return true;
    }
    return false;
};



