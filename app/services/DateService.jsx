
let DateService = {

	date : new Date(),

	MonthMap : [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	],

	getMonthAsString(oDate){
		return this.MonthMap[oDate.getMonth()];
	},

	getAbbrMonthAsString(oDate){
		return this.MonthMap[oDate.getMonth()].slice(0,3);
	},

	formatDate(oDate, format){
		let d = new Date(oDate);

		// date formats
		// m, d, y, M, D, Y, mm, MM, dd, DD, yy, YY, YYYY

		// time formats
		// h, m, s

	}



};

export {
	DateService
}
