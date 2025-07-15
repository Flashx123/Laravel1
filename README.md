This is a ToDo list web App developed from Laravel , React + Typescript , Inertia js and XAMPP server


 ### Setup Instructions

1. Clone or Copy the Project

Copy the full project folder into your XAMPP `htdocs` directory:


C:\xampp\htdocs\task-app


### 2. Start XAMPP Services

* Start **Apache** and **MySQL** in the XAMPP Control Panel

### 3. Create a Database

* Visit: [http://localhost/phpmyadmin](http://localhost/phpmyadmin)
* Create a new database named `task_app`

### 4. Configure the Environment

* Copy `.env.example` to `.env`
* Edit `.env` and update the database section:

```dotenv
DB_DATABASE=task_app   (update ypur database name)
DB_USERNAME=root
DB_PASSWORD=
```

5. Install Dependencies


composer install
npm install


### 6. Generate App Key

in terminal of vs code

php artisan key:generate


### 7. Run Migrations


php artisan migrate


### 8. Serve the App


php artisan serve


Visit: [http://localhost:8000/tasks](http://localhost:8000/tasks)

### 9. Start the Frontend (React)


npm run dev












Run Instructions:




1. Open this folder in Visual Studio Code

2. In new terminal run the below commands


3. type the command "php artisan serve"

4. if npm is installed already , run npm run dev

5. Go to localhost:8000/tasks


The four type of controllers are declared in TaskCotroller.php

Routes are declared in web.php and Api routes are declared in api


The functions are Edit Delete create and Get.





















