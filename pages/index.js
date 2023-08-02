import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [numExercisesInput, setNumExercisesInput] = useState("");
  const [musclesInput, setMusclesInput] = useState("");
  const [heightInput, setHeightInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ numExercises: numExercisesInput, muscles: musclesInput, height: heightInput, weight: weightInput, skill: skillInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);

    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }
    // THIS IS WHERE THE PAGE IS ACTUALLY RENDERED
    return (
            <>
              {/*[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]*/}
              {/*[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]*/}
              {/*[if IE 8]>         <html class="no-js lt-ie9"> <![endif]*/}
              {/*[if gt IE 8]>      <html class="no-js"> <!--<![endif]*/}
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <title>Workout Generator</title>
              <meta name="description" content="Generate a Workout Now!" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="stylesheet" href="styles.css" />
              <link
                href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
                rel="stylesheet"
              />
              <link
                href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
                rel="stylesheet"
              />
              <div className="frosted-glass" />
              <div id="front" className="front-page">
                <div className="welcome-text">Workout Generator</div>
                <div className="enter-box">
                  <button type="button" className="enter-button" id="enter-button">
                    ENTER
                  </button>
                </div>
              </div>
              <div id="inputmenu" className="container">
            <form onSubmit={onSubmit}>
              <input
                type="text"
                name="numExercises"
                placeholder="Number of Exercises"
                value={numExercisesInput}
                onChange={(a) => setNumExercisesInput(a.target.value)}
              />
              <input
                type="text"
                name="muscles"
                placeholder="Enter the Muscles You Want Worked"
                value={musclesInput}
                onChange={(b) => setMusclesInput(b.target.value)}
              />
              <input
                type="text"
                name="height"
                placeholder="Enter height"
                value={heightInput}
                onChange={(c) => setHeightInput(c.target.value)}
              />
              <input
                type="text"
                name="weight"
                placeholder="Enter weight"
                value={weightInput}
                onChange={(d) => setWeightInput(d.target.value)}
              />
              <input
                type="text"
                name="skill"
                placeholder="Enter skill"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
              />

              <input type="submit" value="Generate workout" />
            </form>
                <div className="help-info">
                  <button className="fa-solid fa-circle-question" />
                  <div className="info">
                    <span>
                      This is a service that uses the power of AI to create a tailored
                      workout plan for you! Simply input the info, click submit, and view
                      your workout plan!
                    </span>
                  </div>
                </div>
              </div>
              <table className="resulttable" id="resulttable">
                <thead>
                  <tr>
                    <th>Exercise</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>barbell squat</td>
                    <td>4</td>
                    <td>8</td>
                    <td>160lbs</td>
                  </tr>
                  <tr>
                    <td>leg press</td>
                    <td>3</td>
                    <td>10</td>
                    <td>140lbs</td>
                  </tr>
                  <tr>
                    <td>dumbell lunges</td>
                    <td>3</td>
                    <td>10</td>
                    <td>35lbs</td>
                  </tr>
                  <tr>
                    <td>lying leg curls</td>
                    <td>3</td>
                    <td>10</td>
                    <td>45lbs</td>
                  </tr>
                  <tr>
                    <td>seated calf raise</td>
                    <td>4</td>
                    <td>12</td>
                    <td>70lbs</td>
                  </tr>
                  <tr>
                    <td>dumbell lunges</td>
                    <td>3</td>
                    <td>10</td>
                    <td>35lbs</td>
                  </tr>
                  <tr>
                    <td>dumbell lunges</td>
                    <td>3</td>
                    <td>10</td>
                    <td>35lbs</td>
                  </tr>
                </tbody>
              </table>
              <div className="bottom-banner">
                <div className="about-info">
                  <span id="devmsg">Developed by Kaspar Skatka and Andrew Almasi.</span>{" "}
                  <br />
                  <br /> <br />
                  <br />
                  <a href="https://github.com/ksskatka">https://github.com/ksskatka</a>
                  <span id="email"> | wkasparslothskatka@gmail.com</span>
                  <br />
                  <br />
                  <a href="https://github.com/arrrshia">https://github.com/arrrshia</a>
                  <span id="email"> | andrewalmasi@gmail.com</span>
                </div>
              </div>
            </>
);
    // THIS BELOW IS THE OLD PAGE THAT THEY HAD THAT WAS LINKED TO THEIR OWN CSS FILE AND EVERYTHING THE OLD CSS FILE IS index.module.css BTW
    // THE OLD PAGE WORKS BECAUSE I EDITED IT TO WORK WITH OUR PROMPT SO IF YOU WANT TO SEE THE UI JUST REPLACE THE CODE ABOVE WITH THE OLD PAGE
/*
  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>Workout Generator</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="numExercises"
            placeholder="Number of Exercises"
            value={numExercisesInput}
            onChange={(a) => setNumExercisesInput(a.target.value)}
          />
          <input
            type="text"
            name="muscles"
            placeholder="Enter the Muscles You Want Worked"
            value={musclesInput}
            onChange={(b) => setMusclesInput(b.target.value)}
          />
          <input
            type="text"
            name="height"
            placeholder="Enter height"
            value={heightInput}
            onChange={(c) => setHeightInput(c.target.value)}
          />
          <input
            type="text"
            name="weight"
            placeholder="Enter weight"
            value={weightInput}
            onChange={(d) => setWeightInput(d.target.value)}
          />
          <input
            type="text"
            name="skill"
            placeholder="Enter skill"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
          />

          <input type="submit" value="Generate workout" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );

 */
}
