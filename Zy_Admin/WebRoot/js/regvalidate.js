 

        // 账号验证
        $('#regbtn').on('click',function(event){
            event.preventDefault();
            if($("#selectBox option:checked").text()=="请选择用户类型"){
                layer.tips('请选择用户类型',"#selectBox",{
  tips: [3, 'red']});
                $('#selectBox').focus();
                return;
            }
            if ($('.account').val().trim().length < 1) {
                // alert("请输入用户名");
                layer.tips('请输入用户名',".account",{
  tips: [3, 'red']});
                
                $('.account').focus();
                return;
            }

            if ($('.realaccount').val().trim().length < 1) {
                // alert("请输入用户名");
                layer.tips('请输入真实姓名',".realaccount",{
  tips: [3, 'red']});
                
                $('.realaccount').focus();
                return;
            }
            // 密码

            if ($('.pwd').val().trim().length < 6 || $('.pwd').val().trim().length >12) {
                 
                // alert("请输入密码");
                layer.tips('请输入6~12位密码',".pwd",{
  tips: [3, 'red']});
                $('.pwd').focus();
                return;
            }
             var reg = /^[a-zA-Z]\w{5,11}$/; 
             // /^[\w]{6,12}$/ 
            // var reg2 = /^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
            var input1 = $('.pwd').val();
            // var input1 = $('#account').val();
            if(!reg.test(input1)){
                // alert('正确格式为：以字母开头，长度在6~18之间，只能包含字符、数字和下划线');
                layer.tips('密码正确格式为：以字母开头，长度在6~12之间，只能包含字符、数字和下划线',".pwd",{
  tips: [3, 'red']});
                $('.pwd').focus();
                return;
            }           
                // if($(".add").html().toLowerCase()!=$("#code_input").val().toLowerCase()){
                //     layer.tips('验证码错误',"#code_input",{tips: [3, 'red']});
                //         $('#code_input').focus();
                //         return;
                // }
            

            if ($('.pwd').val() != $('.repwd').val()) {
                 
                // alert("请输入密码");
                layer.tips('两次输入密码不一致',".repwd",{
  tips: [3, 'red']});
                $('.repwd').focus();
                return;
            }
            // 邮箱和手机号验证的正则表达式
            var reg1 = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if(!reg1.test($('#email').val())){
                layer.tips('请输入正确的邮箱!',"#email",{
  tips: [3, 'red']});
                $('#email').focus();
                return;
            }
            var reg2 = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$|^(((0\d2|0\d{2})[- ]?)?\d{8}|((0\d3|0\d{3})[- ]?)?\d{7})(-\d{3})?$/;
            
            if(!reg2.test($('#phone').val())){
                layer.tips('请输入正确的手机号!',"#phone",{
  tips: [3, 'red']});
                $('#phone').focus();
                return;
            }
            
            
             
           
            // 注册
            $.post('url', $('#form_reg').serialize(), function(res) {
                if(res.code == 200){
                    setTimeout(function(){
                        location.reload();
                    },2000);
                    //location.href='logo1.html';
                    layer.msg('注册成功！')
                }else{
                    //$('.error-message').text(res.message);
                    layer.msg(res.message)
                }

            })
        })
