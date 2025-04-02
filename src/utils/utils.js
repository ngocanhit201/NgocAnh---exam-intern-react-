/*
* input number
* output vietnamese currency format
* */
export  function  formatVND(price) {
    return new Intl.NumberFormat('vi-VN').format(price);
}