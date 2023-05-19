# Integrating with the frontend client

To use the provided frontend application with your backend:

- Install pnpm using their standalone script [instructions](https://pnpm.io/installation#using-a-standalone-script) if you do not already have Node.js or any other Javascript package manager installed.
  
- Run your backend executable and note the IP address (most likely `localhost`/`127.0.0.1`) and port it's running on.
  
- Fire up a new terminal window (so your server is still running in the background), clone this repository and switch into the `client` directory:
  
  ```sh
  $ git clone https://github.com/dsccovenantuniversity/todo-backend-api.git
  Cloning into '~/Downloads/todo-backend-api'
  ...
  Done

  $ cd todo-backend-api/client

  $ pwd
  ~/Downloads/todo-backend-api/client
  ```

- Install the latest version of Node.js:
  
  ```sh
  $ pnpm env use --global latest
  Fetching Node.js 20.2.0 ...
  Node.js 20.2.0 is activated
  ```

- Install all the project dependencies:

  ```sh
  $ pnpm install
  Packages: +355
  ...
  Done in 6m 56s
  ```

- Make a new `.env` file in `client` with the following contents:

  ```python
  NEXT_PUBLIC_API="//<your-servers-ip:port>/api"
  # e.g. //localhost:1234/api
  ```

- Start the application:

  ```sh
  $ pnpm dev

  > todo-app@0.1.0 dev ~/Downloads/todo-backend-api/client
  > next dev

  ready started server on 0.0.0.0:3000, url: http://localhost:3000
  ```

- Navigate to `localhost:3000` in your browser to view the live site.

For more information about the frontend application (like how it was made and a link to a live deployment so you can check it out in action) check out its [README](client/README.md).
