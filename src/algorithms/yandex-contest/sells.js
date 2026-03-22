const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const data = [];

rl.on("line", (input) => {
    if (input === "") rl.close();

    data.push(input.trim().split(" "));
});

rl.on("close", () => {
    const customers = new Map();
    const answer = [];

    for (const [customer, item, count] of data) {
        if (!customers.get(customer)) {
            customers.set(customer, new Map());
        }

        const customerItems = customers.get(customer);

        customerItems.set(item, (customerItems.get(item) || 0) + +count);
    }

    const sortedCustomers = Array.from(customers.entries()).sort(
        ([customerA], [customerB]) => customerA.localeCompare(customerB),
    );

    for (const [customer, items] of sortedCustomers) {
        answer.push(customer + ":");

        const sortedItems = Array.from(items.entries()).sort(
            ([itemA], [itemB]) => itemA.localeCompare(itemB),
        );

        for (const [item, count] of sortedItems) {
            answer.push(item + " " + count);
        }
    }

    console.log(answer.join("\n"));
});
