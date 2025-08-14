# 🎬 Movie Search App

A simple React application where users can search for movies by category or keyword, fetch data from the OMDb API, and display results in a clean card layout.  

---

## 📚 What I Learned

### **React Fundamentals**
- How to create functional components and use them for building reusable UI pieces.
- Passing props between components for dynamic content.
- Using state (`useState`) to store and update data based on user interaction.
- Rendering lists dynamically with `.map()`.

### **Event Handling**
- Capturing user input from forms and buttons.
- Handling onClick and onChange events in React.
- Passing event data to functions to trigger state changes.

### **API Integration**
- Fetching data from the **OMDb API** using `fetch()`.
- Handling JSON responses and updating the UI accordingly.
- Managing loading and error states when fetching data.

### **Conditional Rendering**
- Showing different UI depending on whether movies are found or not.
- Displaying fallback messages when search results are empty.

### **Styling**
- Using CSS for layout and design.
- Making a responsive grid layout for movie cards.
- Fixing floating button issues with proper positioning.

---

## 🛠 Tech Stack
- **React** – Frontend library for building UI.
- **JavaScript (ES6+)** – Core language features.
- **CSS3** – Styling the components.
- **OMDb API** – Movie data source.

---

## 🔍 Flowchart

```mermaid
graph TD
    A[User Enters Search Term or Selects Category] --> B[Click Search Button]
    B --> C[Fetch Data from OMDb API]
    C --> D{Movies Found?}
    D -- Yes --> E[Display Movies in MovieCard Component]
    D -- No --> F[Show 'No Movies Found' Message]

