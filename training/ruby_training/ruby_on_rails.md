# Ruby on Rails
* Ruby on Rails is an open source web development framework designed to get cleanly coded applications up and running with the minimum of time.
* Is a model-view-contoller(MVC) framework.

## MVC
* Design pattern to arrange code so that dependency between code can be reduced.
### Controller
  - Receives the http request and perform actions accordingly.
  - Interacts with controller and view when necessary.
  - To create a new controller run controller generator
```
rails g controller Controller_name action/view[optional]
```
  - Actions:-
    - *New*:- To create new item of a resource.
    - *Index*:- To display the entire items.
    - *Show*:- To display a single item.
    - *Create*:- Save a new item into database.
    - *Destroy*:- Delete a resource
    - *Update*:- Update an existing resource
### Model
  - Processes the data according to the instructions of controller.
  - The model is responsible for getting data from a database, packaging it in data objects that can be understood by other components, and delivering those objects.  
  **Creating models**
```
rails g model model_name parameters(field1:type field2:type)
```
  **Migrations**
   - Used to alter database schema.
```
rails generate migration AddColumn_nameToTable_name
```
   - Create a migration file
```
class AddColumn_nameToTable_name << ActiveRecord::Migration[5.0]
 def change
 end
end
```

### View
  - Place where the data provided by the model is presented to the user in a human-readable format provided by controller.
  - Extension is ../html/erb:-
    - html-> format of the template
    - erb-> handler used to render the template(embedded ruby)

## Running rails
* Have many scripts called generators to create contollers, models etc.
### Creating new application
* Move to directory where we need to create application.
* Create new application
```
rails new application_name
```
* Move to the folder(application)
```
cd application_name
```
* Check rails status by running the server
```
rails server
```
* To check whether rails running in browser(default port is 3000).
```
http://localhost:3000
```

* To set routes go to routes.rb and set routes
```
get/post Controller/action

root Controller#action - to set home page
```
**Resource**
  - Resource is the term used for a collection of similar objects. eg:- articles, people or animals.
  - Able to perform CRUD(create, read, update, delete) operations in a resource.
  - While creating resource 5 routes are automatically created.(new, index, show, edit, delete)
```
resources :resource_name
``` 

**Associations**
  - Connection between two Active Record models
  - Types of association
		- belongs\_to -> sets up a one-to-one connection with another model, such that each instance of the declaring model "belongs to" one instance of the other model.  
		- has\_one -> one-to-one only, association indicates that each instance of a model contains or possesses one instance of another model
		- has\_many -> one-to-many, indicates that each instance of the model has zero or more instances of another model.  
		- has\_many :through -> many-to-many, indicates that the declaring model can be matched with zero or more instances of another model by proceeding through a third model.  
		- has\_one :through -> one-to-one,  indicates that the declaring model can be matched with one instance of another model by proceeding through a third model.  
		- has\_and\_belongs\_to\_many -> creates a direct many-to-many connection with another model, with no intervening model.  


