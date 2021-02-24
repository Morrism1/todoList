import { save, clearList } from '../localStorage';

test('If setItem is called if save is invoked', () => {
  jest.spyOn(Storage.prototype, 'setItem');

  Storage.prototype.setItem = jest.fn();

  save();
  expect(localStorage.setItem).toHaveBeenCalled();
});

test('if it clears the lists', () => {
  document.body.innerHTML = `<ul class="lists">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
    </ul>`;

  const list = document.querySelector('.lists');
  clearList(list);

  expect(list.innerHTML).toBe('');
});
