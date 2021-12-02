function sendAjax(url, data)
{
    $.ajax({
        type: 'GET',
        url: '/'+url,
        data: data,
        success: function(response) {
            document.getElementById("mainDiv").innerHTML = response; 
        },
        error: function(xhr, status, err) {
          console.log(xhr.responseText);//LOG OK
        }
    });
}

/////////////////////////////////////FONCTIONNEMENT A MODIFIER////////////////////////////////////////////////////////////
function addManga()
{
    sendAjax('addManga',
    {
        'name': document.getElementById("NewManga").value
    })
}

function changeLastBuy(id, value)
{
    sendAjax('changeLastBuy',
    {
        'id': id,
        'value':value
    })
}


