//////////////////////////////////////
// イベント処理                      //
//////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('main-btn').addEventListener('click', async function() {
        const res = await fetch("http://localhost:3000/tasks/");
        const users = await res.json();

        for (var i = 0; i < users.length; i++) {
            const names = users[i].name;
            var text = document.createTextNode(names);
            var list = document.getElementById('list');
            list.appendChild(text);
        }   
    }, false);
}, false);


