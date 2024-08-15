# node-design-patterns

13 of the most popular object-oriented design patterns as applied to Node.js from LinkedIn Learning: https://www.linkedin.com/learning/node-js-design-patterns

## What are design patters?

Reusable, reliable solutions to problems that we face every day in software development.

- Cataloged solutions
- Reuseable
- Well documented
- Language for collaboration
- Improve architecture

## Each Pattern has a...

- Pattern name
- Problem
- Solution
- Consequences

## 23 (original) software design patterns
- **Creational**: class instantiation
- **Structural**: object composition
- **Behavioral**: object interactivity 
## ![23 software design patterns](/images/23-design-patterns.png)

## Anti-Patterns

"Bad practices" such as:
Modifying (changing or extending) the prototype on an instance

        `person.__proto__.address = {}`

Syncing execution after initialization (after app initialization) - JavaScript has only one thread, so we shouldn't block it.

        `listen() = {fs.redFileSync(...)}`

Callback chaos / Callback hell

        `readFile(...,() => {
            parseData(...,() => {
                writeFile(...), () => {
                    logResponse(..., () => {

                    });
                }
            })
        })`