Marshmallow Test

# e2e tests
To run the e2e tests you will first need to run the application and then run cypress:

1.`npm run install`

2.`npm run start`

3.`npm run cypress:open`

# What has been your approach to the test?
* **Packages Used and Reasoning behind them**
    * **Prettier** - to auto-format my code so its easier to maintain and read
    * **Eslint** - although the project had eslint enabled I have a couple of plugins that I like to use in most of my projects to pick up certain issues I care about
    * **Cypress** -  I figured due to time constraints it was best to go for the best bang for my buck from a testing perspective getting as much coverage as I could with a simple setup and management
    * **React Router** -  Wanted to leverage the use of react-router so that a user can navigate to the launches specific page via the id and get back
    * **Material UI** - Due to time constraints and wanting to get as many of the user requirements fulfilled as possible I went down the component library path. With Material UI I get pre-made components that are fully tested from a functionality and accessibility perspective for free. With the caveat of me not being able to show off my css skills :(

* **Notes**
    * Used QuickType to get types for all the APIs I called: https://app.quicktype.io/. Although this solution has a couple of holes in it. It served what I needed for this small project and allowed me to safely type and use values from the SpaceX API endpoints
    * All tests are in cypress due to time constrains
    * A requirement was to get the launch's nationality. I did this by taking the launchpad id and calling the launchpad API to get the launchpad's location. Sadly looking at the data I only had the region which was the best I could do with the data given
    * Added loading states to the API calls so that I could safely access the response from the API on the client without running into undefined when trying to access this response data. And for a better user experience informing the user, the application is trying to do something
    * Mocked the API requests in the cypress tests with mocked data so that we don’t hit the live APIs. As this can cause issues when asserting on live data that could change at any moment. Thus breaking my tests.
    * LaunchDetails page could be a lot better in the logic when it decides to fetch the launch details. Right now it makes a request anytime the user hits the page. We already have the data in the redux store and could filter it from that but we have issues if the user refreshes the page and resets the state or directly navigates to the page if we did that. I would add some logic to see if the data is in the store if not make the API request. Making it more efficient with less data going down the wire.

# What would you have done if you had more time?

* Would have made my own designs with styled-components instead of using material-ui.
* Made loading style better, big fan of skeleton loads to avoid layout shifts
* Added error states. Unhappy paths are a core feature of production apps. Sadly they have not been catered for in this tech test
* Added better navigation after selecting a launch, UX is lacking here with this
* Would have added better nation lookup using the launch pads location and then finding that region's nation. Under its current implementation, I am fairly confident Florida is not counted as a nation.
* Would have used the query endpoints provided by the SpaceX API to get the data. As it has some nice functions I could have used such as caching, filtering, pagination. Making all my requests more performant and taking the heavy load off the frontend client and pushing it to the server.
* Would have used RTK (https://redux-toolkit.js.org/rtk-query/overview) for better data fetching and caching on the client. I did originally try RTK but I had never used it before and wasted some time trying to get my head around what was going on before parking it and moving on. I usually use React Query (https://react-query.tanstack.com/)
* Added some more granular unit tests/integration react testing library tests for more coverage and taking the weight off long e2e tests
