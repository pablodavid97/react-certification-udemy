import React from 'react';

const TodoItem: React.FC<{ text: string }> = (props) => (
    <li>{props.text}</li>
);

export default TodoItem;
