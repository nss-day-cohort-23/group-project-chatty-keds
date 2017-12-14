# Chatty Group Project

## Requirements

Check out the [simple wireframe](https://app.moqups.com/chortlehoort/uGBbLbK46Y/view/page/a3bd0c733) for this application on Moqups.com. You can make your final interface as fancy as you like, but keep the general layout similar to the wireframe.

### :white_check_mark: Navigation bar

1. [x] Create an element to serve as the navigation bar for your application.
1. [x] Create an element to hold the logo for your application. It can be as simple as text, but if you want to find an image, that's fine.
1. [x] Create a input field for a user to enter in a message.
1. [x] Add an event listener for "keypress" and detect when then return key has been pressed in the message field.
1. [x] When return key is detected, you'll create a new message (*see details below*).
1. [x] Create a button to clear all messages.
1. [x] When the user clicks the clear messages button, all current chat messages should be removed from the application.
1. [x] If there are no messages, then the clear messages button should be disabled (*see example above*).
1. [x] The navigation bar should remain at the top of the screen, even if the contents of the page start to scroll.

### :white_check_mark: Options

1. [x] Create two checkboxes below the message input field. One labeled "Dark theme" and the other labeled "Large text".
   - [x] Not dropdowns.
1. [x] When the user clicks on the dark theme checkbox, change the background color of your application to a dark gray, and the font color for messages should be white(ish)... you pick.
1. [x] If the user unchecks the box, the background color should change back to white with black text for messages.

### :white_check_mark: Messages

1. [x] When the page is first loaded, you must load 5 messages from a local JSON file and pre-fill a message area `<div>` below the input field that will also hold all new messages as they get created.
1. [x] When the user presses the return key in the message field, the new message should be inserted into the message area.
1. [x] The message should have a button displayed after it with the text "Delete" inside of it.
   - [x] Not an `X` icon.
   - [x] When the delete button next to a message is clicked, only that message should be removed from the DOM.

### :white_check_mark: Modular Code

Create multiple modules that perform the following functions. The name of your global variable that gets augmented by the modules should be `Chatty`.

1. [x] `fetch.js`
   - [x] Should load the JSON file and return the array of objects.
1. [x] `add.js`
   - [x] `addMessage(id, string)` Should contain a function that accepts an element `id`, and the user message, and then add the user's message to the specified parent element.
     - [x] Should also add the delete button.
   - [x] Each message should be stored in a private array in this module called `Chatty`.
   - [x] `getMessages()` Should also expose a function to read all messages.
   - [x] `deleteMessage(id)` Should expose a function to delete a single message.
- [x] `delete.js`
   - [x] `deleteMessage(id)`: Should accept a message element `id` and then remove the correct element from the DOM.
   - [x] Should also remove the corresponding message from the private array that was created in the previous module.

## Bonus criteria

For you overachievers, once you've completed the basic criteria, take a stab at these.

### Multiple JSON files

Instead of having one JSON file with five messages in it, break each message into its own JSON file. How do you handle loading them in succession?

### Editing

1. Let users edit an existing message. Add an edit button next to the delete button that, when clicked, will take the message and put it back in the message input at the top.
1. Once user edits the message and presses the return key again, the message text in the list should be updated.

### Custom themes

1. Add a button/link to the UI labeled "Change Theme".
1. Remove the existing elements for changing the theme.
1. When user click on Change Theme element, show a Bootstrap modal dialog box.
1. Inside the modal, show two color picker fields - one for background color and one for font color.
1. Add a *Save* and *Cancel* button to modal.
1. When user clicks *Save* apply the chosen colors.

### :white_check_mark: Multiple users

- [x] Create an object in your JavaScript that holds an array of names (*see example below*).
- [x] Next to the message input box, there should be a radio button group for each name in the list.
- [x] When a user enters a message, it should be prepended with the chosen user's name, in bold text.
- [x] Keep in mind that this will likely change the structure of your JSON file since the pre-loaded messages have to have this information on them.

```js
// User object
var users = {
  names: ["Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"];
};
```

### Message limit

1. Only show the last 20 messages.

### :white_check_mark: Timestamp

1. [x] Put a timestamp on each message.
1. [x] Again, this will change the structure of your JSON file.