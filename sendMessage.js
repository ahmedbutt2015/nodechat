(function init(){
    $(".user #name").on('keypress', function(e){
        if(e.which === 13){
            var name = $(this).val().trim();
            var $chatform = $('.chatform');
            if(name.length){
                $('#myname').val(name);
                $chatform.fadeIn();
                $('.user').fadeOut();
                initChat();
            }else{
                alert("Please enter name for chat");
            }
        }
    });
})();

function initChat(){
    var socket = io();
    var chat = $('#chat');
    var msg = $('#msg');

    $(msg).on('keypress', function(e){
        if(e.which === 13) {
            socket.emit('sms', $('#myname').val() + ' Says:' + msg.val());
            msg.val('');
        }
    });
    socket.on('msg',function (data) {
        $(chat).append( data + '<br>');
    });
}