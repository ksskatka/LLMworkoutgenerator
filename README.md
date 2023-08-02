index.module.css is their css file and styles.module.css is ours
In render() theres two render() functions the one below is the premade on ethey had but I edited it to work with ours so go ahead and uncomment and check that out if you want
I already converted the HTML to React DOM and linked the form and button it just outputs the base HTML and outputs the result from ChatGPT into the terminal.
I just don't really know how to link the CSS like they did with their render file

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd openai-quickstart-node
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a copy of the example environment variables file

   On Linux systems: 
   ```bash
   $ cp .env.example .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```
6. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)
