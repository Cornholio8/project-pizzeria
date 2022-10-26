import {templates} from '../settings.js';

class Home{
  constructor(element){
    const thisHome = this;
    thisHome.render(element);
    thisHome.initWidget();
  }

  render(element){
    const thisHome = this;
    const generatedHTML = templates.homeWidget();
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }

  initWidget(){
    const elem = document.querySelector('.main-carousel');

    //eslint-disable-next-line no-undef
    new Flickity (elem, {
      cellAlign: 'left',
      contain: true,
      autoPlay: true,
      prevNextButtons: false,
      wrapAround: true,
      imagesLoaded: true,
    });
  }
}

export default Home;