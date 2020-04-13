import React from 'react';
import Footer from './Footer';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
