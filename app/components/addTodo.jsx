var React = require('react');

var addTodo = React.createClass({
    handleSubmit:function(e){
        e.preventDefault();
        var todoText = this.refs.todoText.value;
        if(todoText.length > 0){
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        } else{
            this.refs.todoText.focus();
        }

    },
    render:function(){
        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <input type="text" placeholder="enter Todo....." ref="todoText"/>
                    </p>
                    <p>
                        <button className="button expanded">
                            Add Todo
                        </button>
                    </p>
                </form>
            </div>
        );
    }
});

module.exports = addTodo;