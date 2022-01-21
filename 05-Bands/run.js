let bandList = require("./bands")

for(let genero in bandList){
    console.log(`A ${genero} band is ${bandList[genero]}`)
}