import './App.css';
const NewTodoForm = ({ value, updateText, handleAction }) => {
    return (
      <label>
        <input  className='InputChange' 
          placeholer='new todo'
          value={value}
          onChange={(e) => updateText(e.target.value)}
        />
        <button className='ButtonChange' onClick={handleAction}>Add todo</button>
      </label>
    );
  };
  
  export default NewTodoForm;