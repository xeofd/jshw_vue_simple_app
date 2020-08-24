// Import Vue
import Vue from 'vue';

// DOM Loaded listener
document.addEventListener('DOMContentLoaded', ()=>{
    // Log DOM and script loaded
    console.log('DOM Loaded:', true);
    console.log('(app.js) - Script Loaded:', true);

    // Create new Vue instance
    new Vue({
        el: '#__app_main',
        data: {
            items: [
                {item:'go shopping', priority: false}, 
                {item:'wash dog', priority: false}, 
                {item:'feed cats', priority: true}
            ],
            todoItem: ''
        },
        methods:{
            saveItem: function(event){
                let inputPrio;

                if (event.target.todo_priority.value === 'high'){
                    inputPrio = true;
                } else{
                    inputPrio = false;
                }

                this.items.push({
                    item: this.todoItem,
                    priority: inputPrio
                });

                event.target.reset();
            }
        }
    });
});