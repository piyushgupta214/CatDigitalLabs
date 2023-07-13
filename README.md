get exercise details at https://yardclub.github.io/mobile-interview/

***
# Initial Thoughts 
## Requirements
***
This PoC can be divided into three pages

* #### Home Screen 
* #### Categories/Sub-Categores Screen
* #### Result Screen

***
## Key Highlights
***
### Application Footer has 4 tabs

* #### Request Equipment 
* #### Active Rentals
* #### Open Requests
* #### My yards
***
### Application Header has title and phone option 
* It seems back button at top left corner should be redundant at Home Page/Parent Page, should be more useful when we are diggin into the nested pages[master - detail pages].

## Must Have
* #### Home Screen 
    * Header 
    * Feature Equipment Section
    * Choose Rental Store Section 
        * Cat Digital Labs Section should be cliable
    * Should have 4 tabs at footer    

* #### Categories/Sub-Categores Scree
    * Header 
    * Display list of Categories/SubCategories.
    * Should have 4 tabs at footer

* #### Result Screen
    * Header 
    * Display Results
    * Should have 4 tabs at footer

## Nice to Have
* Splash Screen
* Login Page to look it more realistic 
* logout option
* Loading Indicator to show whenever  there is latency issue with network.
* Other three tabs clickable 

# Application Architecture
## Keep It simple 

* MVVM design pattern with presentational container to implement this project would be the first and clean architecture apporach.

* html and component file will be our view for the Model-View-ViewModel approach

* Presentational container will be the ViewModel, and this can communnicate with other cross ViewModels or layers.

* For Data and network related operations, ngrx is good choice to go with so we can flow data in one direction.


