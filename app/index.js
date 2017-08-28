import { Modal } from './modal';

const button = document.createElement('button');
button.classList.add('btn');
button.innerHTML = 'hello';
document.body.appendChild(button);
button.onclick = () => {
  const m = new Modal();
  m.show();
};
