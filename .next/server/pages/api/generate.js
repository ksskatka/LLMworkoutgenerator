"use strict";
(() => {
var exports = {};
exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ generate)
});

;// CONCATENATED MODULE: external "openai"
const external_openai_namespaceObject = require("openai");
;// CONCATENATED MODULE: ./pages/api/generate.js

const configuration = new external_openai_namespaceObject.Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new external_openai_namespaceObject.OpenAIApi(configuration);
/* harmony default export */ async function generate(req, res) {
    if (!configuration.apiKey) {
        res.status(500).json({
            error: {
                message: "OpenAI API key not configured, please follow instructions in README.md"
            }
        });
        return;
    }
    const numExercises = req.body.numExercises || "";
    const muscles = req.body.muscles || "";
    const height = req.body.height || "";
    const weight = req.body.weight || "";
    const skill = req.body.skill || "";
    if (numExercises.length === 0 || muscles.length === 0 || weight.length === 0 || height.length === 0 || skill.length === 0) {
        console.log(numExercises);
        res.status(400).json({
            error: {
                message: "Please enter a valid value"
            }
        });
        return;
    }
    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: generatePrompt(numExercises, muscles, height, weight, skill),
            temperature: 0.6,
            max_tokens: 3800
        });
        res.status(200).json({
            result: completion.data.choices[0].text
        });
        console.log(completion.data.choices[0].text);
    } catch (error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
            console.error(error.response.status, error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            res.status(500).json({
                error: {
                    message: "An error occurred during your request."
                }
            });
        }
    }
}
function generatePrompt(numExercises, muscles, height, weight, skill) {
    return `I want you to generate a strength training workout for me. 
  The number of exercises I want is ${numExercises}. 
  I want to work on ${muscles}. 
  My bench max is 160 lbs and squat max is 200 lbs. 
  My height is ${height}. 
  My weight is ${weight}. 
  I am an ${skill} in the gym.
  Use this format. { "muscles_worked":"chest, triceps", "height": "5'1", "weight": "114", "exercise_maxes": [ {"exercise":"bench press", "weight": "170"} ], "skill_level": "Beginner", "exercises": [ {"exercise": "bench press", "sets": "4", "repetitions":"8","weight":"135"} ], }`;
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(961));
module.exports = __webpack_exports__;

})();