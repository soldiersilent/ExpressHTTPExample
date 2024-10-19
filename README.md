# Express HTTP Demo Project

## Purpose
This project is designed to teach the basics of using HTTP with **Express.js**, focusing on the four main HTTP methods: **GET**, **POST**, **PUT**, and **DELETE**. It demonstrates how to handle server requests and responses, create dynamic routes, and serve data to the client based on user input. Additionally, it includes an exploration of **query parameters** with OR logic to help students understand filtering of data.

### Key Learning Objectives:
- Understanding how **Express.js** handles different HTTP methods.
- Learning about **CRUD** (Create, Read, Update, Delete) operations.
- Using **AJAX** requests to dynamically update the page without refreshing.
- Demonstrating how to build routes, handle data, and serve dynamic content.
- Understanding how **query parameters** can be used to filter data with **OR logic**.

---

## How to Run the Server

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-repo/express-http-demo.git
    ```
2. Navigate to the project folder:
    ```bash
    cd express-http-demo
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the server:
    ```bash
    npm start
    ```
5. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

---

## The 4 CRUD Routes

This project demonstrates the four main HTTP methods and how they are used in a typical web application. Each route interacts with an in-memory array called `submissions` that holds user-submitted data.

1. **GET (Read)**:
    - **`GET /basicCRUD/submissions`**: Retrieves all the current submissions and returns them in JSON format.
    - **Example**: This route is automatically called when the page loads to display the current list of submissions in a table.
   
2. **POST (Create)**:
    - **`POST /basicCRUD/submit`**: Creates a new submission by sending data from a form on the client side. The new submission is added to the in-memory array and displayed in the table dynamically.
    - **Example**: Fill out the form on the page and click **Submit** to create a new entry.

3. **PUT (Update)**:
    - **`PUT /basicCRUD/edit/:index`**: Updates a specific submission by index. The user can click an **Edit** button next to any entry in the table, make changes, and save the updates.
    - **Example**: After clicking **Edit**, you can modify the data for that row, and it will be updated in the table and on the server.

4. **DELETE (Delete)**:
    - **`DELETE /basicCRUD/delete/:index`**: Deletes a specific submission by index. The user can click the **Delete** button next to any entry in the table to remove it.
    - **Example**: Clicking **Delete** next to any submission will remove that entry from the table and from the server's data.

---

## Query Parameters with OR Logic

In addition to the CRUD operations, this project includes a demonstration of how to use **query parameters** to filter data based on one or more conditions with **OR logic**. This means that you can filter data by multiple fields, and the filter will return results that match any of the specified conditions.

1. **GET /queryParameters/filter**:
   - This route accepts query parameters for `name`, `age`, and `height` and returns results that match **any** of the conditions (OR logic).
   - **Example**: 
     - `?name=Alice&age=28` will return both **Alice** (who matches the name) and **Charlie** (who matches the age).
     - `?age=33&height=1.80` will return **Alice** (matching age) and **Charlie** (matching height).
   
   The full dataset is displayed above the query form, allowing students to experiment with different queries and see how filtering works.

---

## Plans for Additional Teaching Opportunities

The project will be expanded to cover more advanced HTTP and web development concepts. Here’s what’s planned:

1. **Custom Response Codes and Messages**:
   - Teach the importance of proper response status codes (`201 Created`, `400 Bad Request`, `500 Internal Server Error`) and how they are used in error handling.

2. **HTTP Headers and Authentication**:
   - Introduce the concept of securing routes using headers (e.g., API keys) to demonstrate simple authentication methods.

3. **Handling File Uploads**:
   - Show how to handle file uploads (e.g., profile pictures) using a library like `multer` to demonstrate how HTTP handles binary data.

4. **CORS (Cross-Origin Resource Sharing)**:
   - Teach students about CORS, how to set up HTTP headers, and why it is important in APIs that are accessed from different domains.

5. **Error Pages (404, 500)**:
   - Demonstrate how to handle common error pages like 404 Not Found or 500 Internal Server Error to provide better user experiences.

6. **Async Await and Promises**:
   - Dive deeper into handling asynchronous HTTP requests using `async/await` and how to handle errors in asynchronous code.

---

## Conclusion

This project is a great starting point for anyone learning how HTTP works with Express.js. It focuses on the core HTTP methods while allowing for dynamic interaction between the client and server. As additional features are added, students will gain a deeper understanding of how web servers and APIs work.
