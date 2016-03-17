$('.foreign-language-ask input[type=radio]').on('change', function () {
    if ($('.foreign-language-ask input[type=radio]').is(":checked")){
            if($('.foreign-language-ask input:radio:checked').val() == '1')
            {
                $('.send-now').collapse('show');
            } else {
                 $('.send-now').collapse('hide');
            }
}});
$(document).ready(function(){
    var next = 1;
    $(".add-more").click(function(e){
        e.preventDefault();
        var addto = "#level-field" + next;
        var addRemove = "#level-field" + (next);
        next = next + 1;
        var newIn = '<input autocomplete="off" class="form-control small steward-language-field" placeholder="Название языка" id="field' + next + '" name="PersonSteward[foreign_languages][steward_language-' + next + ']" type="text"><select class="form-control small steward-language-field" id="level-field' + next + '" name="PersonSteward[foreign_languages_level][steward_language-' + next + '_level]"><option value="0">Читаю со словарем</option><option value="1">Читаю свободно</option><option value="2">Читаю и могу объясниться словами</option><option value="3">Читаю, пишу, говорю свободно</option></select>';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove#' + (next - 1) + '" class="btn btn-danger remove-me" >Удалить</button></div><div id="field">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#foreign_language_count").val(next);  
        
            $('.remove-me').click(function(e){
                e.preventDefault();
                var fieldNum = this.id.split('#')[1];  // charAt(this.id.length-1);
                var fieldID = "#field" + fieldNum;
                var fieldLevelID = "#level-field" + fieldNum;
                $(this).remove();
                $(fieldID).remove();
                $(fieldLevelID).remove();
            });
    });
    

    
});