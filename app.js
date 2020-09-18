let companies =[
    {
        id:"1",
        name :"Quicklodge",
        phone :"+1699900000",
        email : "info@quicklodge.com",
        location : "Nigeria",
    },
    {
        id : "2",
        name : "Apple inc",
        phone : "+1600000044",
        email : "info@quicklodge.com",
        location : "USA",
    },
    {
        id : "3",
        name : "Github",
        phone : "+1699900000",
        email : "info@github.com",
        location : "USA",
    },  
    {
        id : "4",
        name : "Netlify",
        phone : "+1699900000",
        email : "info@netlify.com",
        location : "USA",
    },
    {
        id : "5",
        name : "Heroku",
        phone : "+1699900000",
        email : "info@heroku.com",
        location : "USA",
    }
]
  



request = confirm("Add more data? \n Press cancel to display data");
	requestData();
	function requestData() {
		if(request == true) {
			companies[companies.length] = {
				"id" : companies.length + 1,
				"name" : prompt("Enter a name:"),
				"email" : prompt("Enter a mail:"),
				"phone" : prompt("Enter phone:"),
				"location" : prompt("Enter a Location:")
            }
            request = confirm("Do you want to add more data? \n Press cancel to display data");
			requestData();
        } 
	}


document.getElementById("content").innerHTML = `<table>
<tr>
    <th>SN</th>
    <th>Comapny Name</th>
    <th>Phone</th>
    <th>Email</th>
    <th>Location</td>
</tr>
  <tbody>  
      ${companies.map(
        (companies) => `<tr><td>${companies.id}</td>
      <td>${companies.name}</td>
     <td>${companies.phone}</td>
      <td>${companies.email}</td>
      <td>${companies.location}</td> </tr>`
      )} 
      </tbody>
      </table>`;
     
    //   let data = localStorage.setItem('myData', JSON.stringify(companies))
     

    