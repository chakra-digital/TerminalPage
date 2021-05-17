// we have li id of about & contact, as well as content divs...
// want to bring those 4 things in

const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('.about-content');
const contactContent = document.querySelector('.contact-content');

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    width: '400px',
    height: '400px',
    top: 40,
    right: 40,
    bottom: 40,
    left: 40,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00');
    },
    onblur: function () {
      this.setBackground('#777');
    },
  });
});

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Holler',
    width: '400px',
    height: '400px',
    top: 140,
    right: 40,
    bottom: 40,
    left: 240,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00');
    },
    onblur: function () {
      this.setBackground('#777');
    },
  });
});
