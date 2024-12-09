# Project Documentation

1. create a folder "Grabon"

---

FRONTEND:

2. Open integrated terminal to create the react project, run "npm create vite@latest" here give the
   project name : frontend
   -> select react
   -> select javascript

3. To install dependency navigate to frontend folder by running "cd frontend"

4. Once in frontend folder run
   "npm install" to install all the dependencies
   Now we can view node_modules created in frontend folder.

5. Now install react package:
   "npm install react-router-dom"

6. Also run, "npm install axios"
   "npm install prop-types"

7. To run the project use "npm run dev"

Project will start running on the local server. click on the link to check if our project is successfully running in the web browser.

---

BACKEND:

1. Create a new folder in the root("GRABON") folder and name it as "backend"

2. To create backend, Open integrated terminal and run "npm init"
   -> Package name: backend
   ->entry point: server.js

3. Package.json will be craeted in backend folder

4. Install dependencies:
   Run:
   "npm install express mongoose jsonwebtoken bcrypt cors dotenv body-parser multer stripe validator nodemon"

5. node_modules will be craeted in backend folder

6. In package.json folder let's add script
   -> remove the existing and add the below
   "scripts": {
   "server": "nodemon server.js"
   }

7. Setup MongoDB Atlas for Database.
   -> Create an organization, Project, Database and cluster in MOngoBD Atlas website.

8. Once deployed copy the MongoDB url and add it in backend/config/db.js file

---

ADMIN:

1. Create a new folder in the root("GRABON") folder and name it as "admin"

2. Open integrated terminal to create the react project, run "npm create vite@latest ." here
   -> select react
   -> select javascript

3. Once in admin folder run
   "npm install" to install all the dependencies
   Now we can view node_modules created in admin folder.

4. Now install react package:
   "npm install react-router-dom"
   "npm install react-toastify"

5. Also run, "npm install axios"

6. To run the project use "npm run dev"

Project will start running on the local server. click on the link to check if the project is successfully running in the web browser.

---

P.S:
LOCAL SERVER :

To run frontend:
npm run dev

URL : http://localhost:5173/

To run backend :
npm run server

URL : http://localhost:4000

To run admin:
npm run dev

URL : http://localhost:5174/

---

GITHUB LINK:

https://github.com/Deeksha960/GrabOn.git

---

DEPLOY LINK:

Backned: https://grabon-backend.onrender.com

Frontend: https://grabon-frontend.onrender.com

Admin: https://grabon-admin.onrender.com
