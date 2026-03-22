const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const operations = [];

rl.on("line", (input) => {
    if (input === "") rl.close();
    else operations.push(input.trim().split(" "));
});

rl.on("close", () => {
    const bank = new Bank();

    function makeOperation(operation) {
        switch (operation[0]) {
            case "DEPOSIT":
                bank.deposit(operation[1], +operation[2]);
                break;
            case "WITHDRAW":
                bank.withdraw(operation[1], +operation[2]);
                break;
            case "BALANCE":
                bank.balance(operation[1]);
                break;
            case "TRANSFER":
                bank.transfer(operation[1], operation[2], +operation[3]);
                break;
            case "INCOME":
                bank.income(+operation[1]);
        }
    }

    for (let i = 0; i < operations.length; i++) {
        makeOperation(operations[i]);
    }
});

function Bank() {
    this.accounts = new Map();
}
Bank.prototype.createAccount = function (client) {
    this.accounts.set(client, 0);
};
Bank.prototype.deposit = function (client, sum) {
    if (!this.accounts.has(client)) {
        this.createAccount(client);
    }

    this.accounts.set(client, this.accounts.get(client) + sum);
};
Bank.prototype.withdraw = function (client, sum) {
    if (!this.accounts.has(client)) {
        this.createAccount(client);
    }

    this.accounts.set(client, this.accounts.get(client) - sum);
};
Bank.prototype.balance = function (client) {
    if (!this.accounts.has(client)) console.log("ERROR");
    else console.log(this.accounts.get(client));
};
Bank.prototype.transfer = function (client1, client2, sum) {
    if (!this.accounts.has(client1)) {
        this.createAccount(client1);
    }

    if (!this.accounts.has(client2)) {
        this.createAccount(client2);
    }

    this.accounts.set(client1, this.accounts.get(client1) - sum);
    this.accounts.set(client2, this.accounts.get(client2) + sum);
};
Bank.prototype.income = function (p) {
    for (const [client, balance] of this.accounts) {
        if (balance > 0) {
            this.accounts.set(
                client,
                Math.floor(balance + balance * (p / 100)),
            );
        }
    }
};

console.log(Bank.prototype.__proto__ === Object.prototype);
