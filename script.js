function alert1() {
  alert("The Alert message is started");
}
function pmt(){
  var name=prompt('Enter name of person');
  var s=prompt('positive or negative');
  if(s==='positive'){
    document.getElementById('id1').innerHTML="Person "+name+" is shown Positive";
    alert("Be careful");
  }
else{
  document.getElementById('id1').innerHTML="Person "+name+" is shown Negative";
}

}
