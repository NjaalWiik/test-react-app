const data = fetch('/listing/:listing_id/info');
const shippingResults = data.results;

let approved = false;
let usSpecified = false;

shippingResults.forEach(element => {
  if(element.destination_country_name === "United States") {
    usSpecified = true;
    if (element.primary_cost === "0.00") {
      approved = true;
    }
  }
});

if(!usSpecified) {
  shippingResults.forEach(element => {
    if(element.destination_country_name === "Everywhere else") {
      if (element.primary_cost === "0.00") {
        approved = true;
      }
    }
  });
}