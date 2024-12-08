const tableInput = document.getElementById("tableInput");

const url = `https://jsonplaceholder.typicode.com/users`;

async function FetchData() {
  const response = await fetch(url);
  const responseData = await response.json();

  //   console.log(responseData);

  return responseData;
}

async function DisplayData() {
  let apiData = await FetchData();

  if (!apiData || apiData === null) {
    const tr = document.createElement("tr");
    tr.innerText = "No Records Found";
    tr.style.textAlign = "center";
    tableInput.appendChild(tr);
  } else {
    apiData.forEach((user) => {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      td1.innerText = user.id;
      const td2 = document.createElement("td");
      td2.innerText = user.username;
      const td3 = document.createElement("td");
      td3.innerText = user.email;
      const td4 = document.createElement("td");
      td4.innerText = user.phone;
      const td5 = document.createElement("td");
      td5.innerText = user.address.city;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tableInput.appendChild(tr);
    });
  }
}

window.onload = () => {
  DisplayData();
};
