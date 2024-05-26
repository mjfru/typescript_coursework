"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
    console.log("Woo!");
    // const { data } = res;
    // console.log(res.data) // Parsed JSON here
    printUser(res.data);
})
    .catch((e) => {
    console.log("Error: ", e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
