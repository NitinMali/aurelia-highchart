export class App {

  //default on load its false
  configMenuVisible = false;

  configureRouter(config, router) {
    config.title = 'Contacts';
    config.map([
      { route: ['', 'home'], moduleId: 'views/line', title: 'Home' },
      { route: 'line', moduleId: 'views/line', name: 'line', nav: true, title: 'Line Graph' },
      { route: 'column', moduleId: 'views/column', name: 'column', nav: true, title: 'Column Graph' },
      { route: 'bar', moduleId: 'views/bar', name: 'bar', nav: true, title: 'Bar Graph' },
      { route: 'pie', moduleId: 'views/pie', name: 'pie', nav: true, title: 'Pie Graph' }
    ]);

    this.router = router;
  }

  toggleNav() {
    if (this.configMenuVisible) {
      document.getElementById('mySidenav').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';

    } else {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
    }

    this.configMenuVisible = !this.configMenuVisible;
  }
}
