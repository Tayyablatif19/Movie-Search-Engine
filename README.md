# 🎬 Movie Land

A simple React application to search for movies using the [OMDb API](http://www.omdbapi.com/).  
This project allows users to type in a search term, fetch results from the API, and display them in a clean UI.

---

### **1. React Basics**
- How to create and use **functional components**.
- Using **JSX** to structure UI elements.

### **2. React Hooks**
- **useState** → For managing component state (e.g., movie list, search term).
- **useEffect** → For running functions automatically on component load.

### **3. API Integration**
- Using **fetch** to get data from an external API.
- Handling **async/await** for asynchronous operations.
- Parsing **JSON** responses and updating state.

### **4. Conditional Rendering**
- Displaying different UI components depending on whether movies exist or not.

### **5. Props in Components**
- Passing movie data as **props** to the `MovieCard` component for reusable UI.

### **6. Event Handling**
- Capturing user input with `onChange`.
- Triggering API calls with button clicks (`onClick`).

---

## 📊 App Flow

```mermaid
flowchart TD
    A[User enters movie title in search bar] --> B[Click 'Search' button or press Enter]
    B --> C[Call fetchMovies() function]
    C --> D[Send GET request to OMDb API with search term]
    D --> E[Receive API response in JSON format]
    E --> F[Check if movies exist]
    F -->|Yes| G[Update state with movie data]
    F -->|No| H[Display 'No movies found' message]
    G --> I[Map through movie list]
    I --> J[Render each movie as a MovieCard component]
