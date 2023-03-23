document.getElementById("each").style.display = "none";
document.getElementById("totalTip").style.display = "none";

function tinhTien() {
    var tienBill = document.getElementById("billamt").value;
    var mucDoHaiLong = document.querySelector("#serviceQual").value;
    var soNguoi = document.getElementById("peopleamt").value;

    var tongBill = document.getElementById("tip");
    var moiNguoi = document.getElementById("each");


    // validation
    if (tienBill === "" || mucDoHaiLong == 0) {   // không được bỏ trống mục tổng bill và chọn mức độ hài lòng
        alert("Vui lòng chọn lại");
        return;
    }
    if (soNguoi === "" || soNguoi <= 1) {
        soNguoi = 1;
    }
    else {
        moiNguoi.style.display = "block";
    }

    //? Tính toán
    tongTienTip = (tienBill * mucDoHaiLong) / soNguoi;

    //? Làm tròn 2 chữ số thập phân 
    tongTienTip = Math.round(tongTienTip*100)/100;
    //? Tạo xuất hiện 2 chữ số thập phân, nghĩa là bthg là 6.8, sau khi hiển thị 2 số sẽ là 6.80
    tongTienTip = tongTienTip.toFixed(2);

    //? Hiển thị
    tongBill.innerHTML = tongTienTip;
    document.getElementById("totalTip").style.display = "block";
}

document.getElementById("calculate").onclick = function () {
    tinhTien();
}