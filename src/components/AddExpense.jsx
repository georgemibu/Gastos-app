import { useState } from 'react';
import './AddExpense.css';

const AddExpense = () => {
  // Estado para cada campo
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('alimentacion');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Fecha actual
  const [description, setDescription] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un objeto de gasto
    const newExpense = {
      amount: parseFloat(amount),
      category,
      date,
      description,
    };

    // Recuperar los gastos del localStorage (si ya existen)
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Agregar el nuevo gasto al array
    expenses.push(newExpense);

    // Guardar los nuevos gastos en localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));

    // Limpiar el formulario
    setAmount('');
    setDescription('');
  };

  return (
    <div className="add-expense-container">
      <h2>Agregar Gasto</h2>
      <form onSubmit={handleSubmit} className="add-expense-form">
        <label>
          Monto:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        
        <label>
          Categoría:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="alimentacion">Alimentación</option>
            <option value="transporte">Transporte</option>
            <option value="ocio">Ocio</option>
            <option value="hogar">Hogar</option>
            <option value="salud">Salud</option>
          </select>
        </label>

        <label>
          Fecha:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label>
          Descripción (opcional):
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <button type="submit">Guardar Gasto</button>
      </form>
    </div>
  );
};

export default AddExpense;
