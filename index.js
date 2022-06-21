const { Configuration, OpenAIApi } = require("openai");
var prompt = require('prompt-sync')();

const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

async function complete(string) {
    let response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: string,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    console.log(string + response.data.choices[0].text);
}

async function mainLoop() {
    while (true) {
        console.log('Ready for new prompt: ');
        await complete(prompt(''));
    }
}

mainLoop();