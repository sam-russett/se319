fetch("./data.json")
    .then(response => response.json())
    .then(data => loadTVs(data));

function loadTVs(myTVs){
    let mainContainer = document.getElementById("tvs");
    for (let i = 0; i < myTVs.TV.length; i++) {
        let price = myTVs.TV[i].price;
        let description = myTVs.TV[i].description;
        let url = myTVs.TV[i].url;
        let pic = myTVs.TV[i].pic;

        let div = document.createElement("div");
        div.innerHTML = `
        <div class="col">
        <div class="card shadow-sm">
          <img src="${pic}" height="300px" width="300px">
          <div class="card-body">
            <p class="pricetag">$${price}</p>
            <p class="card-text">${description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary"><a href="${url}">View</a></button>
                
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
        `;
        mainContainer.appendChild(div);
    }
}
