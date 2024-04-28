const axios = require("axios");

axios.get("https://www.google.com").then((res) => {
    console.log("results: ", res);
}).catch(err => {
    console.log("error");
}).then(() => {
    console.log("all done") //runs irrespective of the error or not
})