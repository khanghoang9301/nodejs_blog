var fs = require('fs');

var content = 'Nội dung này tôi muốn ghi vào file writer.html';
//sử dụng phương thức writeFile để ghi nội dung vào file
fs.writeFile('writer.html', content, 'utf8', function (err) {
    //Kiểm tra nếu có lỗi thì xuất ra lỗi
    if (err)
        throw err;
    else //nếu không thì hiển thị nội dung ghi file thành công
        console.log('Ghi file thanh cong!');
});