var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');
var Todo = require('Todo');

var TodoApp = require('TodoApp');

describe('TodoApp',()=>{
    it('should exist',()=>{
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo',()=>{
        var todoText = 'test text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
            todos:[]
        });
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    });

    it('should toggle completed value when handletoggle called',()=>{
        var todoData = {
            id:11,
            text:'test features',
            completed:false
        };

        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({
            todos:[todoData]
        });

        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);
    });


    it('should call ontoggle prop with id on click',()=>{
        var todoData = {
            id:199,
            text:'write tod test',
            completed:true
        };

        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todo));
        TestUtils.Simulate.click($el[0]);
        expect(spy).toHaveBeenCalledWith(199);
    });

});