function checkEvenOdd() {
  let num = document.getElementById("numberInput").value;

  if (num % 2 == 0) {
    document.getElementById("result").innerHTML = "Even Number";
  } else {
    document.getElementById("result").innerHTML = "Odd Number";
  }
}
