
export  function  formatVND(price) {
    return new Intl.NumberFormat('vi-VN').format(price);
}
export  function  countItems(arr){
    return arr.reduce((acc, item) => {
        const existingItem = acc.find((obj) => obj.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            acc.push({ id:item.id, quantity: 1 });
        }
        return acc;
    }, []);
}