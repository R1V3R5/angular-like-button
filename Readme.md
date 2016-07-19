## Learning Objectives

### After completing this assignment, you should...

Understand how AngularJS $scope works within controllers and your HTML.
Know how to use directives and binding to react to user interactions.

## Description

Using an AngularJS module, controller and some built in directives, build a like button. The button should keep track of how many times it has been clicked and update its count each time it is clicked again.

## Normal Mode

* Replicate the following behavior using AngularJS.
* The count on the button should increase upon click
* The text on the like button should correctly pluralize its self.
  * For example: `0 Likes`, `1 Like`, `2 Likes` ...

![likes.gif](https://tiy-learn-content.s3.amazonaws.com/8dbfc646-likes.gif)

## Hard Mode

Using AngularJS's built in $http method, use the class server to store the count of the button and when the page refreshes, have it display the last counted number and then increase from that point as the user continues to click it.

## Deliverables

* A link to your repo
* A link to your app deployed on surge.sh