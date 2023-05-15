# Baby's first backend

This is a simple project, meant to introduce you to the world of backend development, where you (yes, *you*) make a little server to function as a to-do list.

## buh what's an API really?

Well for starters, it stands for "Application Programming Interface".

Real-life apps are very complicated, with a lot of interweaving components that somehow have to talk to, and cooperate with each other.

Take our hypothetical to-do app for example...we're going to need the frontend (which is how the end user interacts with the app, e.g. with a CLI or GUI), the datastore (which would store all the information, in this case, to-do items), and the backend, which is where the datastore is located and exposed for the interface to interact with it.

But we need something to be able to bridge those two (our user interface can't just go touching the database directly now, can it? *It cannot*). And that's where the API comes in.

> TODO: fix or remove

```text
|               |                                          |                |
|               |       Gimme all the todosss pls          |     Backend    |
|               |  ---------------------------------->     |   
|               |                                          |  ┌----------┐
|               |                                          |  |   Data   |
|               |  <----------------------------------     |
                              Here ya go! 
```

The API provides a consistent communication protocol, so that various parts of the system (in this case the front- and back- ends) can interface with each other and perform any needed functions.

## okay, i'm ready, gimme a tldr

- Your goal is to implement a simple backend application that can handle a set of APIs which allow it to store and process items, just like a traditional todo application.

- Your API is utilising already existing HTTP [request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) (because those are understood by most things in existence)

- You can use any language/database/connector you're comfy with, some great starters if you're unsure are:

  |||||||
  |:---:|:---:|:---:|:---:|:---:|:---:|
  | Databases | | | Language independent - [SQLite](https://sqlite.org/index.html), [MySQL](https://www.mysql.com/), [PostgresSQL](https://www.postgresql.org/) | | |
  | Language | [C#](https://learn.microsoft.com/en-us/dotnet/csharp/) | [Go](https://go.dev/) | [Rust](https://www.rust-lang.org/) | [Python](https://www.python.org/) | [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
  | Web framework | [ASP.NET Core](https://dotnet.microsoft.com/en-us/apps/aspnet) | [Fibre](https://gofiber.io/) | [Axum](https://github.com/tokio-rs/axum) | [Flask](https://flask.palletsprojects.com/en/2.3.x/) | [Express](https://expressjs.com/) |
  | Database connector | [EF Core](https://learn.microsoft.com/en-us/ef/core/) | [GORM](https://gorm.io/) | [Diesel](http://diesel.rs/) | [Peewee](http://docs.peewee-orm.com/en/latest/) | [Sequelize](https://sequelize.org/v3/) |

- Your API should implement these endpoints:

  | Route | Method | Action | Response Code |
  |:---:|:---:|:---:|:---:|
  | `/api/todos` | GET | Returns all the items already stored, with a 200 status | 200 OK |
  | `/api/todos/{id}` | GET | Returns a todo item with key `id` | 200 OK or 404 Not Found |
  | `/api/todos` | POST | Create a todo item | 201 Created |
  | `/api/todos/{id}` | PATCH | Edit the title or description of a todo item with key `id` | 204 No Content or 404 Not Found |
  | `/api/todos/{id}/status` | PUT | Modify the `completed` status of a todo item with key `id` | 204 No Content or 404 Not Found |
  | `/api/todos/{id}` | DELETE | Delete a todo item with key `id` | 200 OK or 404 Not Found |

- You are not required to build the frontend to test your application, one is already provided and you can follow [these instructions](Adding%20Frontend.md) on linking it to your backend.

- You can also upload your binary to Render and test all the endpoints [like this](Using%20Render.md).

## sorry i'm new to this whole thing

Lets break down what you ~~need to~~ should probably do into a few steps:

> TODO: add reasons for picking languages

- Pick a programming language (and other tools) you're going to work with...maybe try one of the above ones that you've used before and enjoyed.
  
  If you don't have any programming experience, then you'll want to get a basic refresher in whatever language you pick, some really good ones are:

  - [For the love of Go](https://bitfieldconsulting.com/books/love), a nice intro to programming in general and the Go language. There's also an official tutorial on building a very tiny non-persistent (as in, no database) API [here](https://go.dev/doc/tutorial/web-service-gin).
  - [Microsoft's Introduction to C#](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/tutorials/) which guides you into learning the syntax by allowing you to run interactive snippets of code right in your browser. Also check out the [ASP.NET tutorial](https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api) which has a high-level overview of making a web API with the tool.
  - [The Rust Book](https://rust-book.cs.brown.edu/title-page.html) is a rally good book that covers the ins and outs of the language. At the end you even make a very, very rudimentary web server (nothing like the scale of this one though). [Zero To Production in Rust](https://www.zero2prod.com/index.html) also goes deeply into the subject and expands on it, covering everything from testing to error handling to authentication.
  - Python thing
  - JS thing

  If you still can't pick one, then here are some reasons for you to pick:

  - Go: fast, used everywhere
  - C#: iono .NET?
  - Rust: fast, kinda used everywhere
  - Python: familiarity
  - JS: it's literally javascript

- Figure out how data is going to be stored in the database.

  Most likely, you'll be required to model the objects you're storing. In this case, it's a simple todo item. Using C#, you would have something roughly like this:

  ```csharp
  class TodoItem {
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
  
  Using your web framework, you can monitor HTTP requests to specific URLs (using routes) and take certain actions based on which ones are sent (using handlers). You then have to assign these requests to interact with the database in some way, like looking for the existence of a todo item and returning it, or an error if it isn't found.

  Using [Axum](https://github.com/tokio-rs/axum), can look like this:
  
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
    // checks for the existence of a todo item in the database
    // returns a status code like 200 OK
  }

  async fn makeTodo() -> StatusCode {}
  ```

> TODO: justify testing

- Test your endpoints. Manually making sure everything works as intended is a Herculean task, which is why integration tests are key in a project like this.
