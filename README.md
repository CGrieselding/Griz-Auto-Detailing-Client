# Griz Auto Detailing Web Application

Griz Auto Detailing is a convenient, easily navigable application, where users can create an account, login, read about our automobile detailing services, view pictures of our previous work, send us inquiries, and post their personal reviews.

Griz Auto Detailing is geared towards licensed automobile (or motorcycle) owners that care about their vehicle(s) and want it looking brand new. We are also open to partnering with local car dealerships that want their cars fully detailed before they are displayed on the lot.

Why did I choose Griz Auto Detailing? Growing up, I was always taught to take good care of my belongings no matter what condition they were in. My appreciation for car detailing originated from my father. Some of my most memorable summer days consisted of centering my family’s cars and motorcycle on our driveway, unspooling the garden hose, filling a bucket with warm water and dish soap, and giving the car a thorough wash. My younger brother, Alec, shares a similar passion and has taken it upon himself to continue this hobby to this day. His ongoing auto detailing side hustle is my inspiration for this application.

## Griz Auto Detailing -- Client

The client for the Griz Auto Detailing app was built using [React](https://reactjs.org/) and [Materiul UI](https://mui.com/) for overall styling. The code was written in TypeScript and utlizes a number of components incuding class components, lifecycle methods, props & state management, form validation, [React Router](https://reactrouter.com/web/guides/quick-start), and fetches to the server's 15 REST API endpoints.

## Using The App

Upon loading the web application, regular users will be able to either to create a new account or login with an existing account. After the user has successfully created an account and/or logged in, they will be taken to the home page. A Material UI App Bar is displayed that has the following tabs: Home, Our Work, Reviews, Your Activity, & Logout (button).

### Using The App -- Home

The Home page is where users can view all of the detailing packages and services Griz Auto Detailing provides. At the bottom of this page is an inquiry form that users are able to fill out if they have a question and/or would like more information. The inquiry form consists of a first & last name, email, phone number (optional), car make & model, and a message. This form was constructed using [Formspree](https://formspree.io/).

### Using The App - Our Work

The Our Work page utilizes a Material UI ImageList to display a few pictures of cars Griz Auto Detailing has previously worked on. I am hoping to eventually display "before" and "after" pictures on this page, so users are able to truly see the outstanding work that Griz Auto Detailing does.

### Using The App - Reviews

The Reviews page gives the user the ability to write and post a review. The review form consists of a title, date, image/video link (optional), and the review itself. Just below the review form is a section the displays all of the reviews of Griz Auto Detailing has received. Users are able to scroll through the reviews and read about other customer's experiences.

### Using The App - Your Activity

The Your Activity page allows users to view all of their previously submitted reviews and sent inquiries. But it doesn't stop there! Users also have the option to update/edit and/or completely delete their past reviews and inquiries if they so please.

### Using The App - Logout

The Logout button simply logs the user out of their account and takes them back to the create account/login page.

### *Using The App - Admin Roles*

By implementing role based access control, users that are deemed as admin have an additional tab on their Material UI App Bar titled "Admin Roles". On this page admin users are able to see two Material UI tables. The first table displays all of the registered users on the app. This table includes a feature that allows admin users to delete a users account if needed. The second table displays all of the previously sent inquiries and associated information in the database.

## Learn More

Please feel free to peruse my GitHub files and accompanying code. I am always looking for ways to learn something new and improve my code. Happy coding!