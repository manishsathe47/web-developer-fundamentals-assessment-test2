const API_URL = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users";

function displayUsers(users) {
	$("#userTable tbody").empty();
	for (let i = 0; i < users.length; i++) {
		const user = users[i];
		const row = `<tr class="tablerows">
			<td>${user.id}</td>
			<td><img src="${user.profilePic}" width="50" height="50"></td>
			<td>${user.fullName}</td>
			<td>${user.dob}</td>
			<td>${user.gender}</td>
			<td>${user.currentCity},${user.currentCountry}</td>
		</tr>`;
		$("#userTable tbody").append(row);
	}
}

function searchUsers() {
	const searchValue = $("#search").val().trim();
	if (searchValue.length < 2) {
		alert("Please enter at least 2 characters");
		return;
	}
	$.ajax({
		url: API_URL + "?search=" + searchValue,
		method: "GET",
		success: function(users) {
			displayUsers(users);
		}
	});
}

function resetSearch() {
	$("#search").val("");
	$.ajax({
		url: API_URL,
		method: "GET",
		success: function(users) {
			displayUsers(users);
		}
	});
}

$(document).ready(function() {
	$.ajax({
		url: API_URL,
		method: "GET",
		success: function(users) {
			displayUsers(users);
		}
	});
});


