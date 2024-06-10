# Todo List Application

Welcome to my first React project on GitHub! This project is a simple yet fully functional Todo List application. It serves as a demonstration of my skills in front-end development using React and related technologies.

## Features

- **Add, Edit, and Delete Todos**: Manage your tasks efficiently with easy-to-use functionalities.
- **Persistent Data**: Uses `json-server` to simulate a backend, ensuring your tasks are saved between sessions.
- **Responsive Design**: Built with CSS to provide a clean and responsive user interface.
- **Component-Based Architecture**: Key UI elements are modularized into separate JSX files and imported as needed.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS**: For styling the application.
- **JavaScript (JS)**: Core language for application logic.
- **Vite**: Next-generation frontend tooling for faster and cleaner development.
- **React Hooks**:
  - **useState**: For state management within functional components.
  - **useEffect**: For handling side effects such as data fetching and DOM manipulation.
  - **useRef**: For accessing and interacting with DOM elements directly.

## Project Structure

- **App.jsx**: Main component that orchestrates the application.
- **TodoList.jsx**: Component responsible for rendering the list of todos.
- **TodoItem.jsx**: Component for individual todo items.
- **AddTodoForm.jsx**: Form component for adding new todos.

## Setup and Installation

1. **Clone the repository**:
   ```cmd
   git clone https://github.com/your-username/todo-list-react.git
   ```
2. **Navigate to the project directory**:
   Change your directory to the project folder using:

```cmd
cd todo-list-react
```

3. **Install dependencies**:
   Install the necessary dependencies using npm:

```cmd
npm install
```

4.  **Start the JSON server**:
    Start the json-server to simulate a backend by running:

```cmd
npx json-server --watch db.json --port 8001
```

5. **Run the application**:
   Run the development server using Vite:

```cmd
npm run dev
```

6. **Open the application in your browser**:
   Once the server is running, open your browser and go to your port:

```cmd
http://localhost:<Port number>
```

## How to Use

1. **Add a Todo**: Use the input field and submit button to add a new task.
2. **Edit a Todo**: Click on the edit button next to a task to modify it.
3. **Delete a Todo**:Click on the delete button next to a task to remove it from the list.

**Thank you** for checking out my project! If you have any questions or feedback, please open an issue or contact me directly.
