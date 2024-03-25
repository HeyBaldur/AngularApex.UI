# AngularApexUI
## Step-by-Step Guide to Run an Angular 15 Project with `ng serve -o`

### 1. Install Node.js and npm:
   - Ensure you have Node.js and npm installed on your machine. You can download them from the official [Node.js website](https://nodejs.org).

### 2. Clone the Angular 15 Project:
   - Open a terminal or command prompt.
   - Navigate to the directory where you want to clone the project.
   - Run the following command to clone the project from the repository:
     ```
     git clone <repository-url>
     ```
   Replace `<repository-url>` with the URL of the Git repository where the Angular 15 project is hosted.

### 3. Navigate to the Project Directory:
   - Use the `cd` command to navigate into the cloned project directory:
     ```
     cd <project-directory>
     ```
   Replace `<project-directory>` with the name of the directory created after cloning the repository.

### 4. Install Angular CLI:
   - Install the Angular CLI globally by running the following command:
     ```
     npm install -g @angular/cli@15
     ```

### 5. Install Project Dependencies:
   - Run the following command to install project dependencies:
     ```
     npm install
     ```

### 6. Serve the Project with `ng serve -o`:
   - Once the installation of dependencies completes, serve the Angular project using the following command:
     ```
     ng serve -o
     ```
   This command compiles the application and opens it in the default web browser. The `-o` flag automatically opens the browser.

