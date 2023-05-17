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

  $ cd client

  $ pwd
  ~/Downloads/todo-backend-api/client
  ```

- Install all the project dependencies:

  ```sh
  $ pnpm install
  ```

- Make a new `.env` file in `client` with the following contents:

  ```python
  NEXT_PUBLIC_API=<your-servers-ip:port> 
  # e.g. localhost:1234
  ```

- Start the application:

  ```sh
  $ pnpm dev
  ```

For more information about the frontend application (like how it was made or a live deployment) check out its [README](client/README.md).
