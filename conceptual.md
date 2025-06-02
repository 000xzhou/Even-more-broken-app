### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  used in web authentication

- What is the signature portion of the JWT? What does it do?
  The signature ensures that the token hasn't been altered.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  yes

- How can you implement authentication with a JWT? Describe how it works at a high level.
  The server verifies these credentials and if it's correct it gives a token that is signed with a secret key. Then the server validates the token's signature and, if valid, grants access.

- Compare and contrast unit, integration and end-to-end tests.
  unit test : Verify the correctness of individual units of code
  integration test : Ensure that different parts of the application work together correctly
  end-to-end test : Validate the system’s behavior and flow from end to end as a user would experience it

- What is a mock? What are some things you would mock?
  A simulated object that mimics the behavior of real objects by using isolate test environments. [database connections, network services, or external APIs]

- What is continuous integration?
  It's a quick test run after every new piece is added to make sure the whole thing doesn't fall apart.

- What is an environment variable and what are they used for?
  They are used to configure software conditions like file paths, system configurations, and operational choices without hard-coding information into the program.

- What is TDD? What are some benefits and drawbacks?
  Writing tests before the actual code.
  Benefits include higher code quality and fewer bugs.
  Drawbacks include potential increases in development time and difficulty adapting to complex scenarios.

- What is the value of using JSONSchema for validation?
  Ensures data conforms to a predefined format, improving reliability and reducing errors.

- What are some ways to decide which code to test?
  Prioritize critical paths that impact user functionality, areas with high complexity or frequent changes, and components that handle data processing or have significant dependencies.

- What does `RETURNING` do in SQL? When would you use it?
  The RETURNING clause in SQL returns data from rows.
  Use it for retrieving values from modified rows

- What are some differences between Web Sockets and HTTP?
  WebSockets allows for real-time communication between client and server.
  HTTP is a request-response protocol that typically establishes a new connection for each request

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  Any. They all feels the same.
