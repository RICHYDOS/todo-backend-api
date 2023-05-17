# Baby's first backend

This is a simple project meant to introduce you to the world of backend development, where you (yes *you*, with the help of the internet) make a little server to function as a to-do list.

## buh what's an API really?

Well for starters, it stands for "Application Programming Interface".

Real-life apps are very complicated, with a lot of interweaving components that somehow have to talk to and cooperate with each other.

Take our hypothetical to-do app for example...we're going to need the frontend (which is how the end user interacts with the app, e.g., with a CLI or GUI), the datastore (which would store all the information, in this case, to-do items), and the backend, which is where the datastore is located and exposed for the interface to interact with it.

But we need something to be able to bridge those two (our user interface can't just go touching the database directly now, can it? *It cannot*). And that's where the API comes in.

The API provides a consistent communication protocol, so that various parts of the system (in this case the front- and back- ends) can interface with each other and perform any needed functions.

## okay, i'm ready, gimme a tldr

- Your goal is to implement a simple backend application that can handle a set of APIs which allow it to store and process items, just like a traditional to-do application.

- Your API is utilising already existing HTTP [request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) (because those are understood by most network-connected computers in existence and are the foundation of the modern Web)

- You can use any language/database/connector you're comfy with, some great starters if you're unsure are:
  
  **Databases**: Any relational database like [SQLite](https://sqlite.org/index.html), [MySQL](https://www.mysql.com/) or [PostgresSQL](https://www.postgresql.org/) will be a good fit for most projects.

  | Language | [C#](https://learn.microsoft.com/en-us/dotnet/csharp/) | [Go](https://go.dev/) | [Rust](https://www.rust-lang.org/) | [Python](https://www.python.org/) | [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |  
  |:---:|:---:|:---:|:---:|:---:|:---:|
  | **Web framework** | [ASP.NET Core](https://dotnet.microsoft.com/en-us/apps/aspnet) | [Fibre](https://gofiber.io/) | [Axum](https://github.com/tokio-rs/axum) | [Flask](https://flask.palletsprojects.com/en/2.3.x/) | [Express](https://expressjs.com/) |
  | **Database connector** | [EF Core](https://learn.microsoft.com/en-us/ef/core/) | [GORM](https://gorm.io/) | [Diesel](http://diesel.rs/) | [Peewee](http://docs.peewee-orm.com/en/latest/) | [Sequelize](https://sequelize.org/v3/) |

- Your API should implement these endpoints:

  | Route | Method | Action | Response Code |
  |:---:|:---:|:---:|:---:|
  | `/api/todos` | GET | Returns all the to-do items already stored | 200 `OK` |
  | `/api/todos/{id}` | GET | Returns a to-do item with key `id` | 200 `OK` or 404 `Not Found` |
  | `/api/todos` | POST | Create a to-do item | 201 `Created` |
  | `/api/todos/{id}` | PATCH | Edit the title or description of a to-do item with key `id` | 204 `No Content` or 404 `Not Found` |
  | `/api/todos/{id}/status` | PUT | Modify the `completed` status of a to-do item with key `id` | 204 `No Content` or 404 `Not Found` |
  | `/api/todos/{id}` | DELETE | Delete a to-do item with key `id` | 200 `OK` or 404 `Not Found` |

  You can find more information for the HTTP [verbs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) and possible [response codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) at the [MDN HTTP docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/).

- You are not required to build the frontend to test your application, there's one already provided and you can follow [these instructions](Adding%20Frontend.md) to help link it to your own backend.

- You can also upload your binary to a service like [Render](https://render.com/docs/web-services#deploy-your-own-code) to make it available on the public web if you wish to do so.

## sorry i'm a bit new to this whole...thing, what exactly am i doing

Let's break down what you ~~need to~~ should probably do into a few steps:

- Pick a programming language (and other tools) you're going to work with.
  
  If you've used one of the ones from the table above before and are comfortable in it, then just go along with it...building a backend involves breaking down the problem into various tiny steps - and those skills are applicable no matter what tools you are using and are easily transferable.
  
  If you're want to try something new or different, then here are some reasons for you to pick:

  - [C#](https://learn.microsoft.com/en-us/dotnet/csharp/): It's very popular and adopted by a lot of players in the industry, and Microsoft owns it, so it's not going away anytime soon.
  - [Go](https://go.dev/): It's pretty fast and has built-in support for concurrency (doing a lot of things at the same time). Plus, literally Google made it.
  - [Rust](https://www.rust-lang.org/): It enforces correctness in your code and helps discover any possible errors early in the development process while also offering quite good performance.
  - [Python](https://www.python.org/): Its syntax is very readable and easy to get used to which helps to reduce the time taken for development.
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): It has a great ecosystem and community with tools for basically everything you might need (or want, even).

  > If you're a little confused after reading that, it's fine...
  >
  > All these languages are good, what matters most is the knowledge you gain from *actually* building the server. Pick Go if you're still torn between them and start!!!

  If you don't have any programming experience, then you'll want to get a basic refresher in whichever language you pick, some good ones are:

  - [Microsoft's Introduction to C#](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/tutorials/) which guides you into learning the syntax by allowing you to run interactive snippets of code right in your browser. Also check out the [ASP.NET tutorial](https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api) which has a high-level overview of making a web API with the tool.
  - [For the love of Go](https://bitfieldconsulting.com/books/love), a nice intro to programming in general and the Go language. There's also an official tutorial on building a very tiny non-persistent (as in, no database) API [here](https://go.dev/doc/tutorial/web-service-gin).
  - [The Rust Book](https://rust-book.cs.brown.edu/title-page.html) is a rally good book that covers the ins and outs of the language. At the end you even make a very, very rudimentary web server (nothing like the scale of this one though). [Zero To Production in Rust](https://www.zero2prod.com/index.html) also goes deeply into this subject (backends) and expands on it greatly, covering everything from testing to error handling to authentication.
  - [Python Crash Course](https://nostarch.com/python-crash-course-3rd-edition) introduces the language by having you build numerous projects, exposing you to a lot of popular packages and programming fundamentals.
  - [Eloquent JavaScript](https://eloquentjavascript.net/) and [Microsoft's Introduction to Node.js](https://learn.microsoft.com/en-us/training/paths/build-javascript-applications-nodejs/) introduce you to the language itself and Node.js (which is the most popular way of running it outside a browser) respectively.

- Figure out how data is going to be stored in the database.

  Most likely, you'll be required to model the objects you're storing. In this case, it's a simple todo item. Using C#, you would have something roughly like this:

  ```csharp
  class TodoItem 
  {
      int ID;
      string title;
      string description;
      bool completed;
      DateTime createdAt;
      DateTime lastUpdatedAt;
  }
  ```

  Then you'll have to connect this model to your database and instruct it to set itself up so you can put it in. The instructions are going to differ, depending on which connector you use, so the documentation is going to be the best place to start.

- Set up your app to perform actions based on requests sent to it.
  
  Using your web framework, you can monitor HTTP requests to specific URLs (using routes) and take certain actions based on which ones are sent (using handlers). You then have to assign these requests to interact with the database in some way, using the models you've made, like looking for the existence of a to-do item and returning it, or an error if it isn't found.

  Using [Axum](https://github.com/tokio-rs/axum), can look (somewhat) like this:
  
  ```rust
  async fn main() {
      let app = Router::new()
          // `GET /api/todos` goes to `getTodos`
          .route("/api/todos", get(getTodos))
          // `POST /api/todos` goes to `makeTodo`
          .route("/api/todos", post(makeTodo));
  }

  // Handlers
  async fn getTodos() -> StatusCode {
      // checks for the existence of a to-do item in the database
      // returns a status code like 200 OK
  }

  async fn makeTodo(Json(payload): Json<TodoItem>) -> StatusCode {
      // takes encoded information passed in the request body
      // make a new to-do item
      // then return a status code
  }
  ```

- Test your endpoints.
  
  Manually making sure everything works as intended is a Herculean task, which is why integration tests are key in a project like this. Ideally you should:

  - Pick a nice testing framework, the one that comes inbuilt with your language might be okay but look around to see if there's any more suited to API endpoint testing (or just looks nicer) such as [xUnit](https://github.com/xunit/xunit), [Nextest](https://github.com/nextest-rs/), [gotestsum](https://github.com/gotestyourself/gotestsum), [pytest](https://docs.pytest.org/en/7.3.x/), and [Jest](https://jestjs.io/).

  - Make your (integration) tests resemble the real-life application as much as possible, in this case, a browser. Unit tests are fine and all, but integration tests treat your application as a [black box](https://en.wikipedia.org/wiki/Black_box). You'll probably want a simple HTTP client package/library in your language of choice:
  
    - ASP.NET's [testing package](https://www.nuget.org/packages/Microsoft.AspNetCore.Mvc.Testing) handles spinning up a [TestServer](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.testhost.testserver?view=aspnetcore-7.0) for you.
    - Go has a [great one](https://pkg.go.dev/net/http) that comes included with the standard library.
    - [reqwest](https://github.com/seanmonstar/reqwest) is one of the more popular Rust options.
    - [Requests](https://github.com/psf/requests) is one of the most downloaded Python packages, that alone should speak for itself.
    - [Supertest](https://github.com/ladjs/supertest) is a nice option for JavaScript users.

  - Write atomic tests that only check a little bit of functionality separately because rolling a bunch of tests into one can cause headaches when just one fails and messes everything else up. Imagine this:

    ```text
    tests:
        - ensure GET /api/todo/{id} returns 404 with invalid id...failed BAD
        - ensure GET /api/todo/{id} returns 200 with valid id...passed OK
        - ensure POST /api/todo fails with empty description...passed OK

    passed 2/3 - 67%, failed 1/3 - 33%, skipped 0/3 - 0%
    ```

    As opposed to:

    ```text
    tests:
        - test all the things...failed BAD

    passed 0/1 - 0%, failed 1/1 - 100%, skipped 0/3 - 0%
    ```

    This is an extreme example...but you can see the first one provides so much more info on what works and what doesn't. Break down your tests as much as possible, it'll serve you better in the long run.

  - Try, as much as reasonably possible, to make tests isolated from each other and idempotent (they should be able to run repeatedly without affecting the results of other tests). For a project like this, where a database is being modified, features like transactions (docs for [MySQL](https://dev.mysql.com/doc/refman/8.0/en/commit.html), [PostgresSQL](https://www.postgresql.org/docs/current/tutorial-transactions.html), [SQLite](https://www.sqlite.org/lang_transaction.html)) can allow you to make a change to the database, test a certain aspect, and then revert the change so that other tests aren't affected by lingering "effects" and can therefore be more accurate.

    You can also consider the use of a container using engines like [Docker](https://www.docker.com/products/docker-desktop/) or [Podman](https://podman-desktop.io/), to spin up for a test, put in any needed data, and then get disposed of afterwards.

- Couple the frontend application with your backend.

  If you'd like to see a functioning version of what the final application could look like, follow the instructions in the [Adding Frontend](Adding%20Frontend.md) document to get started with that.

## Next steps

We hope you had fun for this ride. It was pretty unsupervised but that's the joy of it -- doing this by yourself will be hard at the beginning, but it gets you used to looking up information and finding ways to solve problems, as opposed to just being spoon-fed information.

If you've completed this project, do add it to the [showcase repo](https://github.com/dsccovenantuniversity/backendprojects), we'd love to see what tools you used and how you chose to overcome these problems.
