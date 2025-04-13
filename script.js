function checkPincode() {
  const fast = ["400064", "400067", "400092"];
  const medium = ["400056", "400059"];
  const pincode = document.getElementById("pincode").value;
  const result = document.getElementById("delivery-result");

  if (fast.includes(pincode)) {
    result.textContent = "We deliver to your area in 30 minutes!";
  } else if (medium.includes(pincode)) {
    result.textContent = "Delivery will take around 2 hours.";
  } else {
    result.textContent = "We deliver within a day to this pincode.";
  }
}
