import * as crypto from "crypto";

const secr = "secret-key";
const salt = "0dcce3627ce528d9";
const pass = "evas-secret-pass";

const db = [
    {
        salt: "ff732942db62227c",
        pass: "f769506df51f620b53a4542a2cfe93db", // <- salt + 'evas-secret-pass'
    },
    {
        salt: "0dcce3627ce528d9",
        pass: "ea3d33370f89cb213587dac0659237f8", // <- salt + 'evas-secret-pass'
    },
];

function hash(input: string) {
    return crypto.createHash("md5").update(input).digest("hex");
}

const secret1 = "secret-key";
const message = "send 10$ to Alex";

const sending = {
    message,
    signature: hash(secret1.concat(message)),
};
// =======
sending.message = "send 10$ to Alex";

// =======
const secret2 = "secret-key";
const isValid = hash(secret2.concat(sending.message)) === sending.signature;

// =======

const key = crypto.createSecretKey(crypto.randomBytes(32));
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
cipher.update("hello", "utf-8", "hex");
const encrypted = cipher.final("hex");

const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
decipher.update(encrypted, "hex", "utf-8");
const decrypted = decipher.final("utf-8");
console.log(decrypted);

const byte = crypto.randomBytes(3);
const bhex = byte.toString("hex");
console.log(byte, bhex, Buffer.from(Uint8Array.fromHex(bhex)));

// 0b11010110 => 0xd6
// 0b1101 => 1 + 0 + 4 + 8 = 13 => 0xd
// 0b0110 => 0 + 2 + 4 + 0 = 6  => 0x6
