export const dateHelper = {
  getPrevMonth: (date) => {
    return new Date(date?.getFullYear(), date?.getMonth() - 1, date?.getDate());
  },

  getNextMonth: (date) => {
    return new Date(date?.getFullYear(), date?.getMonth() + 1, date?.getDate());
  },

  getInputDate: (date) => {
    return new Date(date[2], date[1] - 1, date[0]);
  },

  getCalendarDate: (date) => {
    return new Date(date[2], date[1], date[0]);
  },

  getFirstWeekDay: (date) => {
    return (new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1) === -1
      ? 6
      : (new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1)
  },

  getDaysInMonth: (date) => {
    return new Date(date?.getFullYear(), date?.getMonth() + 1, 0)?.getDate();
  },

  checkSelectedDay: (date, headerDate, startDay, endDay, i) => {
    return (date?.getDate() === i + 1 && date?.getMonth() === headerDate?.getMonth() && date?.getFullYear() === headerDate?.getFullYear())
      ||
      (startDay?.getDate() === i + 1 && startDay?.getMonth() === headerDate?.getMonth() && startDay?.getFullYear() === headerDate?.getFullYear()
        || endDay?.getDate() === i + 1 && endDay?.getMonth() === headerDate?.getMonth() && endDay?.getFullYear() === headerDate?.getFullYear());
  },

  checkCurrentDay: (date, i) => {
    return new Date().getDate() === i + 1 && new Date().getMonth() === date.getMonth() && new Date().getFullYear() === date.getFullYear();
  },

  checkInRangeCondition: (date, startDate, endDate) => {
    return (date > startDate && date < endDate) || (date < startDate && date > endDate);
  },

  getCorrectDay: (date) => {
    return date?.getDate() < 10 ? '0' + date?.getDate() : date?.getDate();
  },

  getCorrectMonth: (date) => {
    return date?.getMonth() < 9 ? '0' + (date?.getMonth() + 1) : (date?.getMonth() + 1)
  },

  setCurrentDateFormat: (day, month, date) => {
    return [day, month, date.getFullYear()].join('.');
  }
};


//* singelton example in google

//? Update selected range styles ***
//? - 

//todo add possibility to update both dates on one calendar ***
//todo -

//? add clickoutside hook *
//? +++

//todo add date helper or date service **
//todo +++

//? rewrite conditions to smaller parts with friendly names *
//? +++

//todo add arrows * 
//todo +++

