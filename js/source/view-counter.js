(async function () {
  const span = document.getElementById("view-counter");
  if (!span) {
    return; // abort if no view-counter element is found
  }

  const response = await fetch(
    "https://us-central1-ut-dts-agrc-gis-utah-gov-prod.cloudfunctions.net/viewcounter",
    {
      method: "POST",
      body: location.href,
    }
  );
  if (response.status !== 200) {
    console.warn("error with view counter response", response);

    return; // don't do anything on request error
  }

  const responseJson = await response.json();

  if (responseJson.hasOwnProperty("skip") && responseJson.skip) {
    return;
  }

  span.innerHTML = `This page has been viewed ${responseJson.count.toLocaleString()} times`;
})();
