const inputValue = document.querySelector('.input_inner');
var check = inputValue.value;
document.querySelector(".btn").addEventListener("click", function(){
  if(!Number(check) && inputValue.value != ""){
    alert('Ban phai nhap so chu ko duoc nhap chu');
  }else{
    if((inputValue.value == "")){
      alert("vui long nhap so tuoi cua ban");
      inputValue.value == ""
    }else
    if((inputValue.value >= 30)){
      alert("ban da gia");
    }
    else {
      alert("ban tre");
    }
  }
});

