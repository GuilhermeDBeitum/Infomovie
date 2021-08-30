const request = require("request");

var subscriptionKey = "3c325659892d4b9b9e0aeddc50a6ab25";

var endpoint = "https://api.cognitive.microsofttranslator.com/";

var region = "brazilsouth";

function translateText() {
  let options = {
    method: "POST",
    baseUrl: endpoint,
    url: "translate",
    qs: {
      "api-version": "3.0",
      to: [
        "de",
        "it",
        "es",
        "fr",
        "fi",
        "ar",
        "ko",
        "en",
        "pt",
        "ru",
        "th",
        "ro",
        "sv",
      ],
    },
    headers: {
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "Ocp-Apim-Subscription-Region": region,
      "Content-type": "application/json",
    },
    body: [
      {
        text: "Hello World!",
      },
    ],
    json: true,
  };

  request(options, function(err, res, body) {
    console.log(JSON.stringify(body, null, 4));
  });
}

translateText();
