var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
var TodoAPI = require('TodoAPI');
var TodoApp = React.createClass({

    getInitialState: function () {

        return {
            showCompleted:false,
            searchText:'',
            todos: TodoAPI.getTodos()
        };
    },

    handleToggle:function(id){
        var updatedTodos = this.state.todos.map((todo)=>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({todos:updatedTodos});
    },
    componentDidUpdate:function(){
        TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodo:function(text){
    this.setState({
        todos:[
            ...this.state.todos,
            {
                text:text,
                id:uuid()
            }
        ]
    });
    },

    handleSearch:function(showCompleted,searchText){
        this.setState({
            showCompleted:showCompleted,
            searchText:searchText.toLowerCase()
        });
    },

    render: function () {
        var {todos} = this.state;

        return (
            <div>
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={todos} onToggle={this.handleToggle}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;
