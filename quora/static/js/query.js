window.addEventListener('load', function(){
    
    answer_form = document.getElementById('answer-form');
    answer_form.addEventListener('submit', function(event){
        httpRequest = new XMLHttpRequest(); // ajax object
        console.log(id);
        form_data = new FormData(answer_form);
        
        httpRequest.addEventListener('load', ansResult); // when request complete successfully
        
        httpRequest.addEventListener('error', on_error); // when request terminates with error
        
        httpRequest.open('POST', `/answer/ques=${id}`);
        
        httpRequest.send(form_data);
        document.getElementById('loading').style.display = 'block';
        event.preventDefault();
    });
 
});

let ansResult = function(event){
    document.getElementById('loading').style.display = 'none';

    let response = JSON.parse(event.target.responseText);

    if (response.success){
        alert(response.message);
        location.reload();
    }else{
        alert(response.message);
        location.reload();
    }
};


let on_error = function(){
    alert('Ooops! SomeThing went wrong');
    location.reload();
};

