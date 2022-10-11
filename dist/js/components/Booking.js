import {templates, select} from '../settings.js';
import AmountWidget from './AmountWidget.js';

class Booking{
  constructor(element) {
    const thisBooking = this;
    thisBooking.render(element);
    thisBooking.initWidgets();
  }

  render(element) {
    const thisBooking = this;

    /* generate HTML */

    const generatedHTML = templates.bookingWidget();

    /* generate empty array */

    thisBooking.dom = {};

    /* add wrapper attribute */

    thisBooking.dom.wrapper = element;

    /* swap wrapper content with generated HTML */

    thisBooking.dom.wrapper.innerHTML = generatedHTML;

    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
  }

  initWidgets(){
    const thisBooking = this;
    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.dom.wrapper.addEventListener('updated', function(){
    });
  }
}
export default Booking;