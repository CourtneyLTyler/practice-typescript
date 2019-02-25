# Learning TypeScript
I began learning about TypeScript today due to a suggestion from a colleague, as well as out of sheer curiousity.  


## What problems does it solve/why use it?
* TypeScript provides static type checking to identify certain issues by catching errors and bugs at build time, before your code is run.
* TypeScript makes JavaScript scalable - this is a phrase I saw throughout my research today.  This means that TypeScript allows JavaScript code to be used on small or extremely large databases.  
* Another way in which TypeScript makes JavaScript scalable is that it is useful for small or large projects with many developers, as it assists with catching errors early (as you're typing them), and provides static type information.
For these reasons, TypeScript would be a good choice for a large or growing project.


## Alternatives
There are many alternatives to TypeScript, such as Flow, ReasonML, BuckleScript, etc. that also provide type-checking


## History
TypeScript was created by Microsoft in 2012 to solve the scalability issues of JavaScript for both Microsoft and their customers.  Microsoft continues to maintain TypeScript as an open-source programming language.


## Opinion 
Based on my brief intro today it appears that this would be a language that those familiar with JavaScript could pick up fairly easily.  I can see the advanatages of using this on large projects with many developers and large amounts of data and I like that it finds certain errors immediately.


## My Conceptual Hurdles
* I had a difficult time understanding what the point of TypeScript is - in the sense that, since it is not executable in the browser, how does it affect the program. This became clearer as I went through a tutorial and saw the differences between the compiled JavaScript files and the TypeScript files, and saw how the .ts files were providing the program with needed information.  Additionally, it became clear as I purposefully added the wrong Type in a .ts file, and received an error message while compiling the .js file.
* The TypeScript files show errors in my text editor (VSCode) after creating the JavaScript files, due to duplicate code.  I'm still seeking information on this.


## Resources for New Learners
I found that the tutorial in the [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) was not very useful for beginners.  Instead I found the following to be helpful:
* https://blog.sourcerer.io/a-crash-course-on-typescript-with-node-js-2c376285afe1
* https://code.tutsplus.com/tutorials/getting-started-with-typescript--net-28890
* https://medium.freecodecamp.org/when-should-i-use-typescript-311cb5fe801b
* https://reactjs.org/docs/static-type-checking.html


## Instructions to run this example
* Run `$ npm install -g typescript` in your CLI to install TypeScript globally on your machine