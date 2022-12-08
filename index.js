const { Client, Intents, MessageCollector } = require("discord.js");
const client = new Client({

    intents: ['GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILDS', "MESSAGE_CONTENT"]
});
const { token, prefix } = require("./config.json");
const fs = require("fs");

// initialize the client

client.once("ready", () => {
    console.log("ready");
    fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

        if (err) throw err;
        let activePlayers = JSON.parse(data)
        activePlayers.players = [""]



        fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
            if (err) throw err;


        })


    })
});


client.on("messageCreate", async (message) => {
    var status;

    var numArrays = ["1", "2", "3"
        , "4", "5", "6"
        , "7", "8", "9"]
    var ticTacToe;
    var collector;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    async function checkWin() {

        //top horizontal

        if (numArrays[0] == "X" && numArrays[1] == "X" && numArrays[2] == "X") {
            ticTacToe.edit(`**GAME ENDED | X WON**\n${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
            collector.stop()
            fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

                if (err) throw err;
                let activePlayers = JSON.parse(data)
                let index = activePlayers.players.indexOf(message.author.id)

                activePlayers.players.splice(index, 1)



                fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                    if (err) throw err;


                })
                return

            })
        } else if (numArrays[0] == "O" && numArrays[1] == "O" && numArrays[2] == "O") {
            ticTacToe.edit(`**GAME ENDED | O WON**\n${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
            collector.stop()
            fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

                if (err) throw err;
                let activePlayers = JSON.parse(data)
                let index = activePlayers.players.indexOf(message.author.id)

                activePlayers.players.splice(index, 1)



                fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                    if (err) throw err;


                })
                return

            })
            //middle horizontal

        } else if (numArrays[3] == "X" && numArrays[4] == "X" && numArrays[5] == "X") {
            ticTacToe.edit(`**GAME ENDED | X WON**\n${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
            collector.stop()
            fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

                if (err) throw err;
                let activePlayers = JSON.parse(data)
                let index = activePlayers.players.indexOf(message.author.id)

                activePlayers.players.splice(index, 1)



                fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                    if (err) throw err;


                })
                return

            })

        } else if (numArrays[3] == "O" && numArrays[4] == "O" && numArrays[5] == "O") {
            ticTacToe.edit(`**GAME ENDED | O WON**\n${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
            collector.stop()
            fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

                if (err) throw err;
                let activePlayers = JSON.parse(data)
                let index = activePlayers.players.indexOf(message.author.id)

                activePlayers.players.splice(index, 1)



                fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                    if (err) throw err;


                })
                return

            })
            //bottom horizontal

        } else if (numArrays[6] == "X" && numArrays[7] == "X" && numArrays[8] == "X") {
            ticTacToe.edit(`**GAME ENDED | X WON**\n${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
            collector.stop()
            fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

                if (err) throw err;
                let activePlayers = JSON.parse(data)
                let index = activePlayers.players.indexOf(message.author.id)

                activePlayers.players.splice(index, 1)



                fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                    if (err) throw err;


                })
                return

            })

            //Right diagonal
        } else if (numArrays[6] == "O" && numArrays[7] == "O" && numArrays[8] == "O") {
            ticTacToe.edit(`**GAME ENDED | O WON**\n${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
            collector.stop()
            fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

                if (err) throw err;
                let activePlayers = JSON.parse(data)
                let index = activePlayers.players.indexOf(message.author.id)

                activePlayers.players.splice(index, 1)



                fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                    if (err) throw err;


                })
                return

            })
        }
        else if (numArrays[0] == "X" && numArrays[4] == "X" & numArrays[8] == "X") {
            ticTacToe.edit(`**GAME ENDED | X WON**\n${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
            collector.stop()
            fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

                if (err) throw err;
                let activePlayers = JSON.parse(data)
                let index = activePlayers.players.indexOf(message.author.id)

                activePlayers.players.splice(index, 1)



                fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                    if (err) throw err;


                })
                return

            })

        } else if (numArrays[0] == "O" && numArrays[4] == "O" & numArrays[8] == "O") {
            ticTacToe.edit(`**GAME ENDED | O WON**\n${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
            collector.stop()
            fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

                if (err) throw err;
                let activePlayers = JSON.parse(data)
                let index = activePlayers.players.indexOf(message.author.id)

                activePlayers.players.splice(index, 1)



                fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                    if (err) throw err;


                })
                return

            })
            //left diagonal
        } else if (numArrays[2] == "X" && numArrays[4] == "X" & numArrays[6] == "X") {
            ticTacToe.edit(`**GAME ENDED | X WON**\n${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
            collector.stop()
            fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

                if (err) throw err;
                let activePlayers = JSON.parse(data)
                let index = activePlayers.players.indexOf(message.author.id)

                activePlayers.players.splice(index, 1)



                fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                    if (err) throw err;


                })
                return

            })
        } else if (numArrays[2] == "O" && numArrays[4] == "O" & numArrays[6] == "O") {
            ticTacToe.edit(`**GAME ENDED | O WON**\n${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
            collector.stop()
            fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

                if (err) throw err;
                let activePlayers = JSON.parse(data)
                let index = activePlayers.players.indexOf(message.author.id)

                activePlayers.players.splice(index, 1)



                fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                    if (err) throw err;


                })
                return

            })
            //left vertical
        } else if (numArrays[0] == "X" && numArrays[3] == "X" & numArrays[6] == "X") {
            ticTacToe.edit(`**GAME ENDED | X WON**\n${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
            collector.stop()
            fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

                if (err) throw err;
                let activePlayers = JSON.parse(data)
                let index = activePlayers.players.indexOf(message.author.id)

                activePlayers.players.splice(index, 1)



                fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                    if (err) throw err;


                })
                return

            })
        } else if (numArrays[0] == "O" && numArrays[3] == "O" & numArrays[6] == "O") {
            ticTacToe.edit(`**GAME ENDED | O WON**\n${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
            collector.stop()
            fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

                if (err) throw err;
                let activePlayers = JSON.parse(data)
                let index = activePlayers.players.indexOf(message.author.id)

                activePlayers.players.splice(index, 1)



                fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                    if (err) throw err;


                })
                return

            })
            //middle vertical
        } else if (numArrays[1] == "X" && numArrays[4] == "X" & numArrays[7] == "X") {
            ticTacToe.edit(`**GAME ENDED | X WON**\n${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
            collector.stop()
            fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

                if (err) throw err;
                let activePlayers = JSON.parse(data)
                let index = activePlayers.players.indexOf(message.author.id)

                activePlayers.players.splice(index, 1)



                fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                    if (err) throw err;


                })
                return

            })



        } else if (numArrays[1] == "O" && numArrays[4] == "O" & numArrays[7] == "O") {
            ticTacToe.edit(`**GAME ENDED | O WON**\n${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
            collector.stop()

            fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

                if (err) throw err;
                let activePlayers = JSON.parse(data)
                let index = activePlayers.players.indexOf(message.author.id)

                activePlayers.players.splice(index, 1)



                fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                    if (err) throw err;


                })
                return

            })
            //right vertical
        } else if (numArrays[2] == "X" && numArrays[5] == "X" & numArrays[8] == "X") {
            ticTacToe.edit(`**GAME ENDED | X WON**\n${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
            collector.stop()
            fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

                if (err) throw err;
                let activePlayers = JSON.parse(data)
                let index = activePlayers.players.indexOf(message.author.id)

                activePlayers.players.splice(index, 1)



                fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                    if (err) throw err;


                })

                return

            })
        } else if (numArrays[2] == "O" && numArrays[5] == "O" & numArrays[8] == "O") {
            ticTacToe.edit(`**GAME ENDED | O WON**\n${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
            collector.stop()
            fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

                if (err) throw err;
                let activePlayers = JSON.parse(data)
                let index = activePlayers.players.indexOf(message.author.id)

                activePlayers.players.splice(index, 1)



                fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                    if (err) throw err;


                })

            })
            return

        } else {
            checkTie()
            AIrespond()
        }



    };


    function checkTie(){
        let nanCount = 0

        for (let i = 0; i < numArrays.length; i++) {
            console.log(nanCount);

            if (numArrays[i] == "O" || numArrays[i] == "X") {
                if (nanCount < 8) {
                    console.log("inc");
                    nanCount = nanCount +1
                }
                if (nanCount == 8) {
                    console.log("tie");
                    tie()
                   
                }

            

                


            }

        }
    }
    function findPosition(num) {
        if (numArrays[parseInt(num - 1)] === "O" || numArrays[parseInt(num - 1)] === "X") {
            return message.channel.send("The number you provided was invalid! Please try another number.")
        } else {
            numArrays[parseInt(num - 1)] = "X"
            ticTacToe.edit(`${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
        }
      

    }

    function tie() {
        ticTacToe.edit(`**GAME ENDED | TIE*\n${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
        collector.stop()
        fs.readFile("activePlayers.json", 'utf8', async function (err, data) {

            if (err) throw err;
            let activePlayers = JSON.parse(data)
            let index = activePlayers.players.indexOf(message.author.id)

            activePlayers.players.splice(index, 1)



            fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                if (err) throw err;


            })

        })
    }
    function AIrespond() {
        function findNum() {
        let ranNum = Math.floor((Math.random() * 8));

            if (numArrays[ranNum] != "X" && numArrays[ranNum] != "O") {
                numArrays[ranNum] = "O";
                ticTacToe.edit(`${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
            } else {
                checkTie()
                findNum()
            }
        }
        findNum()



    }
    // waiting for a 'play' message from any channel
    if (message.content.includes(`${prefix}play`)) {
        if (message.author.bot) return

        fs.readFile("activePlayers.json", 'utf8', async function (err, data) {


            let num = message.content.replace(`${prefix}play`, "")
            if (!num)
                return message.channel.send("Please include a number to play!  ``#play [number] eg. #play 5``");
            if (isNaN(num))
                return message.channel.send("The position has to be a number!");
            if (err) throw err;
            let activePlayers = JSON.parse(data)
            console.log(activePlayers.players);

            console.log(!activePlayers.players.includes(message.author.id));

            if (!activePlayers.players.includes(message.author.id)) {
                activePlayers.players.push(message.author.id)

                fs.writeFile("activePlayers.json", JSON.stringify(activePlayers, null, 2), (err) => {
                    if (err) throw err;


                })









                ticTacToe = await message.channel.send(`${numArrays[0]} | ${numArrays[1]} | ${numArrays[2]}\n${numArrays[3]} | ${numArrays[4]} | ${numArrays[5]}\n${numArrays[6]} | ${numArrays[7]} | ${numArrays[8]}`)
                findPosition(num)
                status = await message.channel.send("AI is playing..")
                AIrespond()
                status.edit("Your turn to play! Respond with ``#respond [number] eg. #respond 5")



                //round 2 and on
                const filter = (m) => m.author.id === message.author.id && !m.author.bot;
                collector = new MessageCollector(message.channel, filter, {
                    time: 1000 * 60, // 60s
                });
                collector.on('collect', async message => {
                    if (message.content.includes(`${prefix}respond`)) {
                        message.delete()
                        let num = message.content.replace(`${prefix}respond`, "")

                        if (!num)
                            return message.channel.send(
                                "Please include a number to play! ``#play [number] eg. #play 5``"

                            );
                        if (isNaN(num))
                            return message.channel.send("The position has to be a number!");

                        findPosition(num)
                        status.edit("AI is playing..")

                        
                        status.edit("Your turn to play! Respond with ``#respond [number] eg. #respond 3``")
                        checkWin()
                    }


                })
            }


        })

    }


})

client.login(token)
