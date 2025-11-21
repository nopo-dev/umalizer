
import { AppState } from '../app/state';

export function renderUmaTable() {
  const container = document.getElementById('uma-table')!;
  container.innerHTML = ''; // clear previous

  const table = document.createElement('table');
  table.innerHTML = `
    <thead>
      <tr>
        <th>Name</th>
        <th>Sparks</th>
      </tr>
    </thead>
    <tbody>
      ${AppState.umas.map(uma => `
        <tr>
          <td>${uma.name}</td>
          <td>${uma.sparks.map(s => `${s.name} (${s.type} ⭐${s.level})`).join(', ')}</td>
        </tr>
      `).join('')}
    </tbody>
  `;

  container.appendChild(table);
}