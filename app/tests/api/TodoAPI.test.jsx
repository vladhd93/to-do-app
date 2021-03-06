var expect = require('expect');

var TodoAPI = require('TodoAPI');


describe('TodoAPI', ()=>{
    beforeEach(()=>{
        localStorage.removeItem('todos');
    });

    it('should exist', ()=>{
        expect(TodoAPI).toExist();
    });



    describe('set todos',()=>{
        it('should set valid todos array',()=>{
            var todos = [{
                id:23,
                test:'test all files',
                completed:false
            }];

            TodoAPI.setTodos(todos);
            var actualTodos = JSON.parse(localStorage.getItem('todos'));




expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array',()=>{
            var badTodos = {a:'b'};
            TodoAPI.setTodos(badTodos);
            expect(localStorage.getItem('todos')).toBe(null);
        });





    });

    describe('getTodos',()=>{
        it('should return empty array',()=>{
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return todo if valid array in local storage',()=>{
            var todos = [{
                id:23,
                test:'test all files',
                completed:false
            }];

            localStorage.setItem('todos',JSON.stringify(todos));

            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos);

        });

    });

});