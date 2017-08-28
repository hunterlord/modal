import './modal.css';

export class Modal {
  mask = null;
  modal = null;

  show() {
    // this.createModal();
    this.createMask();
  }

  hide() {}

  createModal() {
    const template = `
    `;
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('beforeend', template);
    document.body.appendChild(wrapper);
    setTimeout(() => {
      document.body.removeChild(wrapper);
    }, 3000);
  }

  createMask() {
    const box = document.createElement('div');
    console.log(box.__proto__);
    box.classList = ['hunterlord-mask'];
    box.onclick = this.onMaskClick.bind(this);
    document.body.appendChild(box);
  }

  onMaskClick() {}

  destroyModal() {}
}
