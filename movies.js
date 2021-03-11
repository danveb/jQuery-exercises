// Movies App (jQuery) 

// function htmlTableData(arg) 
function htmlTableData(movieData) {
    return `
        <tr>
            <td>${movieData.title}</td>
            <td>${movieData.rating}</td>
            <td><button class="btn-del">Delete</button>
        </tr>
    `
}; 

// #movie-form
$('#movie-form').on('submit', function(e) {
    let title = $('#title').val(); 
    let rating = $('#rating').val(); 

    // movieData -> title, rating
    let movieData = { title, rating }
    let htmlData = htmlTableData(movieData); 

    // tbody
    $('tbody').append(htmlData); 

    // reset input behavior 
    $('#title').val(''); 
    $('#rating').val(''); 

    // preventDefault behavior
    e.preventDefault(); 

})

// delete button 
$('tbody').on('click', '.btn-del', function(e) {
    // .closest(tr) method to remove entire tr 
    $(e.target).closest('tr').remove(); 
}); 