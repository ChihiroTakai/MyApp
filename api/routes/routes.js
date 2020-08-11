/* route情報 */


// taskコレクション
module.exports = function(app) {
    var taskList = require('../controllers/taskController');

    app.route("/tasks")
        .get(taskList.all_tasks)
        .post(taskList.create_task);

    app.route('/tasks/:taskId')
        .get(taskList.load_task)
        .put(taskList.update_task)
        .delete(taskList.delete_task);
}
/*
module.exports = function(app) {
    var userList = require('../controllers/userController');

    app.route("/users")
        .get(userList.all_users)
        .post(userList.create_user);

    app.route("/users/:userId")
        .get(userList.load_user)
        .put(userList.update_user)
        .delete(userList.delete_user);
}
*/