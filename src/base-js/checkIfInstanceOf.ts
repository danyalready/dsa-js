function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    if (obj == null || typeof classFunction !== "function") {
        return false;
    }

    let proto = Object.getPrototypeOf(obj);

    while (proto !== null) {
        if (proto === classFunction.prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }

    return false;
}

checkIfInstanceOf(5, Number);
