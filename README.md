### CV-App Front End

This project was built using create react app, for more information on this see here: https://medium.com/@diamondgfx/learning-react-with-create-react-app-part-1-a12e1833fdc

This read me will go over how to build the project from Master Branch, as well as give an overview of the Tech used and how the app works.

Please note: YOU MUST HAVE THE BACKEND APP RUNNING ON A SEPERATE TERMINAL FOR THE APP TO WORK!

## Building from Master Branch

To Build the project, ensure Node is installed globally

To do this, do 

```
$ npm install node -g
```
Then navigate to the project and run the  command

```
$ npm install
```

## Running

To run the app, in the terminal simply do
```
$ npm start
```

This will open up localhost:3000 in your browser, here add /login to get to the login page. To enter use the credentials (at time of writing 'guest' and 'password').


## App Technology overview

The App created using three main technologies, React.JS, Redux and Redux form as well two design patterns. One for React called the container/component pattern. The other using the 'Ducks' pattern for redux. 

### Container/Component pattern

The container/component pattern is whereby a container does data fetching and then renders its corresponding sub-component. For example in this app, the CvViewContainer handles all the data and the CvViewComponent handles all the UI.

Read more here: https://medium.com/@learnreact/container-components-c0e67432e005

### Ducks Pattern 

The rather bizarrely named 'Ducks' pattern, is a way of storing Redux action/action creators, constants and reducers in a file called a 'Module' rather than in seperate files. For example 'Login.js' handling all of the redux focused login behaviour.

Read more here: https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c

### Redux Form

Redux form is a way of connecting HTML 5 forms with Redux. The CV app requires lots of data entry from the user. Crucially redux form has a great 'initialise from state' feature, which allows data to be shown in form fields from an api endpoint, in a rather simplistic way.

Read more about redux form here:

https://medium.com/@jtbennett/using-redux-form-to-handle-user-input-1392826f2c6d

Redux form docs: http://redux-form.com/6.6.2/docs/GettingStarted.md/

### Material UI

The app uses Marerial UI in order to style not only the 'Redux forms' but the forms in general. Material UI is a wrapper for Googles Material Design that allows it to be used easily with react components, by importing them in the standard way.

Read more here: http://www.material-ui.com/#/get-started/required-knowledge


### App Flow Overview


