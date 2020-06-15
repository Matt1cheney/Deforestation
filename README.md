# ReforestNation
### [Visit our Live Site!](https://immense-headland-09512.herokuapp.com/ "ReforestNation")

  This application serves as a tool to help organize events for tree planting. The application supports making events in only the United States. When a volunteer enters the site they can travel to the "Get Involved" page to give them a little insight on how and why to join. They can then look at events and volunteer for a certain event by filling out a simple form. That form will then be sent to the coodinator that had organized the event and will reach out to the volunteer. 
  
  Understanding these events will require a lot of action without the use of a computer, we tried to make it as easy as possible to help get people out there and plant!



# Our Site
![Home Page](README_photos/home_page.png "Home Page")


![Dashboard](README_photos/Dashboard_home.png "Dashboard")

Using Mongoose with MongoDB, we created a system that allows events, regions, sites, coordinators, and volunteers to be organized as such.

![](README_photos/Database_Map.png "Database")


### Each Coordinator Has 
- Regions
    * Land owner
    * Site coordinates
    * Status

- Events
  * Site
  * Start and end date
  * Description
  * Coordinator
  * List of volunteers

### Each Source Has
- Region
- Seedlings
- Availability Date
- Target area


# For the Volunteers
![](README_photos/Vision_page.png "Resource Page")

We aim to really capture their interest and get them inspired to reach out and help!

![](README_photos/event_volunteer.png "Event volunteer")

The volunteer can look at the events that are happening and can find one that is near where they reside.

![](README_photos/volunteer_this_event.png "Event")

Here we allow the volunteer to observe the updates of this event and fill out a simple form to reach out to a coordinator to join the cause!

## The Tech That We Used
 
 [![NPM](https://nodei.co/npm/eslint.png?mini=true)](https://nodei.co/npm/eslint/)
 [![NPM](https://nodei.co/npm/pre-commit.png?mini=true)](https://nodei.co/npm/pre-commit/)
 [![NPM](https://nodei.co/npm/axios.png?mini=true)](https://nodei.co/npm/axios/)
 [![NPM](https://nodei.co/npm/bootstrap.png?mini=true)](https://nodei.co/npm/bootstrap/)
 [![NPM](https://nodei.co/npm/concurrently.png?mini=true)](https://nodei.co/npm/concurrently/)
 [![NPM](https://nodei.co/npm/dotenv.png?mini=true)](https://nodei.co/npm/dotenv/)
 [![NPM](https://nodei.co/npm/express.png?mini=true)](https://nodei.co/npm/express)
 [![NPM](https://nodei.co/npm/if-env.png?mini=true)](https://nodei.co/npm/if-env/)
 [![NPM](https://nodei.co/npm/lodash.debounce.png?mini=true)](https://nodei.co/npm/lodash.debounce/)
 [![NPM](https://nodei.co/npm/moment.png?mini=true)](https://nodei.co/npm/moment/)
 [![NPM](https://nodei.co/npm/mongoose.png?mini=true)](https://nodei.co/npm/mongoose/)
 [![NPM](https://nodei.co/npm/multer.png?mini=true)](https://nodei.co/npm/multer/)
 [![NPM](https://nodei.co/npm/nodemailer.png?mini=true)](https://nodei.co/npm/nodemailer/)
 [![NPM](https://nodei.co/npm/nodemon.png?mini=true)](https://nodei.co/npm/nodemon)
 [![NPM](https://nodei.co/npm/react-datepicker.png?mini=true)](https://nodei.co/npm/react-datepicker/)
 [![NPM](https://nodei.co/npm/react-select.png?mini=true)](https://nodei.co/npm/react-select/)
 [![NPM](https://nodei.co/npm/firebase.png?mini=true)](https://nodei.co/npm/firebase/)
 [![NPM](https://nodei.co/npm/react.png?mini=true)](https://nodei.co/npm/react/)
 [![NPM](https://nodei.co/npm/react-bootstrap.png?mini=true)](https://nodei.co/npm/react-bootstrap/)
 [![NPM](https://nodei.co/npm/react-dom.png?mini=true)](https://nodei.co/npm/react-dom/)
 [![NPM](https://nodei.co/npm/react-router.png?mini=true)](https://nodei.co/npm/react-router/)
 [![NPM](https://nodei.co/npm/react-router-dom.png?mini=true)](https://nodei.co/npm/react-router-dom/)
 [![NPM](https://nodei.co/npm/react-scripts.png?mini=true)](https://nodei.co/npm/react-scripts/)

 # Other Tech Services

  We used AWS to help with storing images. Multer we used to help with handling images being uploaded. Nodemailer is meant to send an email to users as a welcome to ReforestNation.

  We used CanvasJS for the map that is shown on our information page to show statistics in why it is so important to really get out there and plant some trees!

  # Collaborators

  [![https://github.com/sldelay](https://avatars0.githubusercontent.com/u/55762265?v=4&s=175 )](https://github.com/sldelay "Sam Delay")
  [![https://github.com/BLipsett](https://avatars3.githubusercontent.com/u/53913632?v=4&s=175)](https://github.com/BLipsett "Brian Lipsett")

  [![https://github.com/Anastasia-Satysheva](https://avatars3.githubusercontent.com/u/57651598?v=4&s=175)](https://github.com/Anastasia-Satysheva "Anastasia Satysheva")
  [![https://github.com/Matt1cheney](https://avatars2.githubusercontent.com/u/57595583?v=4&s=175)](https://github.com/Matt1cheney "Matthew Cheney")