$(".bubbler textarea").keyup(function(){
    var text = $(this).val();
  
    var list = text.split(/[^a-zA-Z']/);
    var bubbles = "";
    
    $.each(list, function (i, word) {
        var len = word.length;
        if (len) {
            var bubble = '<div data-word="' + word +
                '" data-size="' + len + '"></div>';
            bubbles += bubble;
        }
    });
  
    $(this).closest(".bubbler")
           .find(".output")
           .html(bubbles);
  
}).keyup();