# Graphical Counter App #
![Screenshot (35)](https://user-images.githubusercontent.com/96934081/161367582-e2bb38d3-7ea1-452f-a7a7-788f7b0a904c.png)
## Instructions ##

    1. Press '+' to add a count.
    2. Press '-' to subtract a count.
    3. Press 'RESET' to 'zero' the counter.
    
## Tech Featured & Celebrated In This Project ##

I created this app using React. It is styled using pure CSS. I have also made the app responsive, using Media Queries for use on both mobile and desktop devices.

My counter features a large multi-digit seven-segment display, which I both designed and styled from scratch.

I wanted the counter to neither output negative numbers (when pressing '-' button when at 'zero') nor loop round to 'zero' (after reaching the highest number it could reach, i.e. 99999). Therefore, I used logic and maths to prevent both outcomes.

I was proud of my solution of converting count number variables into string variables (via a preliminary conversion into a decimal number) in order to create a string object, from which I could extract the data needed to determine which digit-segments are displayed to the user.

I'm particularly pleased with my seven-segment display design, in terms of innovation, functionality and styling.

## Taking the project forward... ##

A challenge I found in building this app was that of how to reduce the amount of code I wrote in my JSX to determine which styles would be applied to produce the dynamic seven-segment-display output. One of the things that I find exciting about React is its scope for 'reusabilty'. Indeed, I was able to efficiently reuse the CSS classes that outputed the various segments of the multi-digit seven-segment display. However, I believe that, as I deepen my understanding of both Vanilla JavaScript and React, I might be able to streamline the JSX code involved in selecting those styles, through further 'componentisation' involving props and possibly using JavaScript to iteratively loop through my ternary statements and then use the results of the comparisons to access specific CSS classes stored in objects/arrays.









# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
