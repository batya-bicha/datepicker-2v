export const dateHelper = {
  getCurrentDate : ()=>{
    return Date().now();
  }

  isCurrentDate: (date)=>{
    return this.getCurrentDate() === date;
  }
}



dateHelper.isCurrentDate();


class DateService {
  static getCurrentDate : ()=>{
    return Date().now();
  }
  
  static isCurrentDate(date)=>{
    return DateService.getCurrentDate() === date;
  }


}

DateService.isCurrentDate()

//singelton example in google

//? Update selected range styles ***
//todo add posibility to update both datesw on one calendar ***
//? add clickoutside hook *
//todo add date helper or date service **
//? rewrite conditions to smaller parts with friendly names *
//todo add arrows *

