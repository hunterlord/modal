import './modal.css';

export class Modal {
  modal = null;
  content = null;

  show() {
    this.createModal();
  }

  hide() {
    this.destroyModal();
  }

  createModal() {
    this.modal = document.createElement('div');
    this.modal.classList.add('hl-modal');
    // this.modal.insertAdjacentHTML('beforeend', template);

    this.content = document.createElement('div');
    this.content.classList.add('hl-modal-content');


    const contentBody = document.createElement('div');
    contentBody.classList.add('hl-modal-body');

    contentBody.innerHTML = `
      <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-6">
          <img style="width:100%" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE3MSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTVlMjkxZDQ1ZTggdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNWUyOTFkNDVlOCI+PHJlY3Qgd2lkdGg9IjE3MSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI1OS41NTQ2ODc1IiB5PSI5NC41Ij4xNzF4MTgwPC90ZXh0PjwvZz48L2c+PC9zdmc+" />
        </div>
        <div class="col-md-8 col-sm-8 col-xs-6">
          <h3>Product</h3>
          <p>
            Extend Bootstrap's grid system with the thumbnail component to easily display grids of images, videos, text, and more.

      If you're looking for Pinterest-like presentation of thumbnails of varying heights and/or widths, you'll need to use a third-party plugin such as Masonry, Isotope, or Salvattore.
          </p>
        </div>
      </div> 
    `;

    this.content.appendChild(contentBody);

    this.modal.appendChild(this.content);

    this.modal.onclick = ()=>{
      this.modal.classList.add('fadeout');
      this.content.classList.add('slideout');
      
      setTimeout(()=>{
        this.destroyModal();
      }, 400);
    };

    document.body.appendChild(this.modal);
  }

  destroyModal() {
    document.body.removeChild(this.modal);
  }
}
