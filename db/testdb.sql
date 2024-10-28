CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100)
);

CREATE TABLE LearningPlan (
    plan_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    tasks VARCHAR(255), 
    due_date DATE, 
    completed BOOLEAN DEFAULT FALSE, 
    FOREIGN KEY (user_id) REFERENCES Users(user_id) 
);

SHOW CREATE TABLE Users;
SHOW CREATE TABLE LearningPlan;

