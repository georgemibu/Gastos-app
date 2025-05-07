import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import './Home.css';

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  // Cargar gastos desde localStorage
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
    summarizeByCategory(storedExpenses);
  }, []);

  // Resumir gastos por categorías
  const summarizeByCategory = (expenses) => {
    const summary = expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = 0;
      }
      acc[expense.category] += expense.amount;
      return acc;
    }, {});

    const data = Object.keys(summary).map((category) => ({
      name: category,
      value: summary[category],
    }));

    setCategoryData(data);

    
  };

  

  // Función para mostrar los gastos
  const renderExpenses = () => {
    return expenses.map((expense, index) => (
      <div key={index} className="expense-item">
        <p><strong>Monto:</strong> ${expense.amount}</p>
        <p><strong>Categoría:</strong> {expense.category}</p>
        <p><strong>Fecha:</strong> {expense.date}</p>
        <p><strong>Descripción:</strong> {expense.description || 'No disponible'}</p>
        <button onClick={() => handleDelete(index)}>Eliminar</button>
      </div>
    ));
  };

  // Definir colores para el gráfico
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

  return (
    <div className="home-container">
      <h2>Gastos Recientes</h2>
      {renderExpenses()}

      <h3>Resumen por Categoría</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={categoryData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {categoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Home;
