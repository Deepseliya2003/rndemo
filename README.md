# rndemo

## Description
This project integrates APIs for login and event listing, utilizing Redux to manage user-selected favorite items.
Users can mark events as favorites (indicated by a heart icon), and these items will be displayed on the Favorites screen, following the design outlined in the provided Figma file.

## Features
- **User Authentication**: Login functionality integrated via API.
- **Event Listing**: Fetch and display a list of events from the provided API.
- **Favorites Management**: Users can mark/unmark events as favorites using Redux for state management.
- **Favorites Screen**: Displays all favorite events as per the Figma design.

## Tech Stack
- **React Native**: Frontend framework
- **Redux**: State management
- **Axios**: API calls
- **React Navigation**: Screen navigation

## Setup Instructions
### Prerequisites
- Node.js & npm/yarn installed
- React Native environment setup

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Deepseliya2003/rndemo.git
   cd <project-directory>
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Run the application:
   ```sh
   npx react-native run-android  # for Android
   ```

## API Integration
- **Login API**: Implemented via the provided Postman API link.
- **Event Listing API**: Fetches event data for display.

## Redux Implementation
- **State Management**: Redux is used to store and manage favorite items.
- **Actions & Reducers**: Defined for adding/removing favorites.
- **Favorites Screen**: Retrieves and displays favorited events.

## Screens
- **Login Screen**
- **Event List Screen**
- **Favorites Screen**

## Contributing
Feel free to fork and contribute! Submit a pull request with detailed changes.

## License
This project is licensed under [MIT License].

