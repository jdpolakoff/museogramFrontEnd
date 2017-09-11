# Project 3 Evaluation

## Back-end Technology
**3: Excelling**
>Includes many well-structured models, and advanced functionality such as authorization, 3rd-party API integration, or other technology not covered in class

## Front-end Technology
**2: Performing**
>Front-end makes appropriate use of Angular controllers and states with ui-router. Includes 1 custom directive

## Code Quality
**3: Excelling**
>No major code quality issues, makes use of Ruby best practices appropriately, and follows techniques such as separation of concerns, abstraction, and encapsulation

## Deployment and Functionality
**3: Excelling**
>App has advanced functionality that works with minimal errors, and may make use of advanced tools such as APIs, plugins, etc. App may be deployed to a service other than Heroku (e.g. Digital Ocean).

## Planning / Process / Submission
**3: Excelling**
>Submission includes everything in previous category, as well as evidence of proper teamwork, such as feature branching, code review, github issue / user story tracking, and justification of technical decisions.


#### Notes
Nice work team! You've put together a solid web app including some interesting style and layout, a well segmented front end. Also commendable was the fair bit of data manipulation performed to aggregate, sanitize, and ultimately load artwork information onto your back end.

#### Room for improvement
The Museum index page ( https://jdpolakoff.github.io/museogramFrontEnd/#/museums/1 ) seems to take quite a long time to load. The issue, which I imagine you are aware of, is that the json resource, https://museogram-api.herokuapp.com/museums/1 is rather large.

At approximately 390Kb and with upwards of 1200 nested artwork records it holds up the process. If the museum had hundreds of thousands of artwork or maybe millions this approach would fall down hard.

One solution is to incorporate pagination, where instead of fetching `all` of a certain data set, you request it pages at a time. By using the ActiveRecord method `limit` we can build a query that, for instance, allow us to fetch just 25 Artwork records:
```rb
@artworks = Artwork.where(museum_id: museum_id)
  .limit(25)
```

To grab the next 'page' we use the method `offset` to skip the first 25 results:
```rb
@artworks = Artwork.where(museum_id: museum_id)
  .limit(25)
  .offset(25)
```

And so on:
```rb
@artworks = Artwork.where(museum_id: museum_id)
  .limit(25)
  .offset(50)
```

The last step is to read these values from query params instead of static values.
```rb
limit = params[:limit].to_i
offset = params[:offset].to_i
```

To make this request from our Angular controller, we just need to keep track of our 'current page' by storing the offset and results limit. Then we pass those values into our query params:
```js
this.pageOffset = 125
this.pageSize = 25

Artwork.query({
  museum_id: $stateParams.museum_id,
  offset: this.pageOffset,
  limit: this.pageSize
}, (artworks) => {
  // make sure the artworks array exists
  this.artworks = this.artworks || []

  // push all new records onto our array
  this.artworks.push(...artworks)

  this.loading = false
  this.loaded = true
})
```

Please see the code changes both in the front end (primarily in js/museums/controllers/show.controller.js) and the back end (primarily app/controllers/artworks_controller.rb) which have been edited to support this functionality.

Also note, this is an incomplete implementation. Thought will have to be put forth to update the category selections in order to fetch artwork records filtered by category. These category-filtered records will not necessarily be in sequence with the main artworks array and might require their own storage location or one new data structure to handle all fetched records. An object literal with keys as the `artwork_id` might be a good place to start.


##### Re: Team division of labor
I understand that Rami had to leave near the end of the project's completion. That said, his ultimate contributions to the code seems rather light. I only count about 11 commits total of his between all the front and back end repo branches. I do recall that originally Rami was working on a web scraping tool that was ultimately abandoned. If that attempt spent a reasonable amount of time/effort it should be noted to account for the work.