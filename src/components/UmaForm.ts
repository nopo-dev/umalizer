import { AppState } from '../app/state';
import type { Uma, Spark } from '../app/types';
import { renderUmaTable } from './UmaTable';

export function createUmaForm(container: HTMLElement) {
  const form = document.createElement('form');
  form.innerHTML = `
    <input type="text" name="name" placeholder="Uma Name" required />
    <textarea name="sparks" placeholder="Enter sparks as 'name,type,level' one per line" required></textarea>
    <button type="submit">Add Uma</button>
  `;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const sparksText = formData.get('sparks') as string;

    const sparks: Spark[] = sparksText
      .split('\n')
      .map(line => {
        const [sparkName, type, levelStr] = line.split(',').map(s => s.trim());
        return { name: sparkName, type: type as Spark['type'], level: Number(levelStr) as Spark['level'] };
      });

    const uma: Uma = {
      id: crypto.randomUUID(),
      name,
      sparks
    };

    AppState.addUma(uma);
    form.reset();
    renderUmaTable(); // re-render table after adding
  });

  container.appendChild(form);
}