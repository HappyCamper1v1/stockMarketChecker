// Getting the current date
// Will allow the aggregatesBar function to get the current closed price for the STOCK
const dayStr = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18',
'19','20','21','22','23','24','25','26','27','28','29','30','31'];
const monthStr = ['01','02','03','04','05','06','07','08','09','10','11','12',];

const d = new Date();
let day = (dayStr[d.getDate()] - 1).toString()
let month = monthStr[d.getMonth()]
let year = d.getFullYear();


module.exports = {
    day,
    month,
    year,
}