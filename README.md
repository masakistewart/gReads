## Summary

experienced some major setbacks during this test and could only complete a working crud model without an authentication part. I wasted time on trying to learn a many to many with knex when I should have just used a workaround. I will not let this happen again.

## deployed site

https://immense-everglades-1643.herokuapp.com/
pivotal:
https://www.pivotaltracker.com/n/projects/1517513
## datamodel

<table>
	<thead>
		<legend>Books</legend>
		<th>Title</th>
		<th>Genre</th>
		<th>Description</th>
		<th>Pic</th>
	</thead>
</table>

<table>
	<thead>
		<legend>Authors</legend>
		<th>First Name</th>
		<th>Last Name</th>
		<th>Bio</th>
		<th>Pic</th>
	</thead>
</table>

 this part was abandoned after a couple tries
<hr>
<table>
	<thead>
		<legend>books_authors</legend>
		<th>Title</th>
		<th>Genre</th>
		<th>Description</th>
	</thead>
</table>
