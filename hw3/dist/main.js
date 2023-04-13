$(document).ready(function () {

  //List function
  $('#list button[type="submit"]').click((event) => {
    event.preventDefault()

    $.ajax({
      type: 'POST',
      url: './list',
      success: (data) => {
        $('#list-output').html(data);
      },
    });
  });//end of list

  //Search function
  $('#search button[type="submit"]').click((event) => {
    event.preventDefault()
    const input = {
      id_search: $('#search input[name=id_search]').val(),
    }

    $.ajax({
      type: 'POST',
      url: './search',
      data: JSON.stringify(input),
      contentType: 'application/json',
      success: (data) => {
        $('#search-output').text(data);
      },
    });
  });//end of search

  //Add function
  $('#add button[type="submit"]').click((event) => {
    event.preventDefault()
    const input = {
      id_add: $('#add input[name=id_add]').val(),
      name_add: $('#add input[name=name_add]').val(),
    }

    $.ajax({
      type: 'POST',
      url: './add',
      data: JSON.stringify(input),
      contentType: 'application/json',
      success: (data) => {
        $('#add-output').text(data);
      },
    });
  });//end of add

  //Delete function
  $('#delete button[type="submit"]').click((event) => {
    event.preventDefault()
    const input = {
      id_delete: $('#delete input[name=id_delete]').val(),
    }

    $.ajax({
      type: 'DELETE',
      url: './delete',
      data: JSON.stringify(input),
      contentType: 'application/json',
      success: (data) => {
        $('#delete-output').text(data);
      },
    });
  });//end of delete

});
