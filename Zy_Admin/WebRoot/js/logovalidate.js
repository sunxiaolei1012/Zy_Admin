/*生成验证码*/
        (function create_code(){
            function shuffle(){
                var arr=['1','r','Q','4','S','6','w','u','D','I','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
                        'q','2','s','t','8','v','7','x','y','z','A','B','C','9','E','F','G','H','0','J','K','L','M','N','O','P','3','R',
                        '5','T','U','V','W','X','Y','Z'];
                return arr.sort(function(){
                    return (Math.random()-.5);
                });
            };
            shuffle();      
            function show_code(){
                var ar1='';
                var code=shuffle();
                for(var i=0;i<4;i++){
                    ar1+=code[i];
                };
                //var ar=ar1.join('');
                $(".logo-box .phoKey").text(ar1);
            };
            show_code();
            $(".logo-box .phoKey").click(function(){
                show_code();
            }); 
        })();
        // var verifyCode = new GVerify("v_container");
       
        // document.getElementById("btnLogin").onclick = function(){
        //     var res = verifyCode.validate(document.getElementById("code_input").value);
        //     if(res){
        //         alert("验证正确");
        //     }else{
        //         alert("验证码错误");
        //     }
        // }
        
        // 记住密码设置
        function setCookie(){ //设置cookie    
             var loginCode = $(".account").val(); //获取用户名信息    
             var pwd = $(".pwd").val(); //获取登陆密码信息    
             var checked = $("input[name='remember']:checked");//获取“是否记住密码”复选框  
      
             if(checked){ //判断是否选中了“记住密码”复选框    
                $.cookie("account",loginCode);//调用jquery.cookie.js中的方法设置cookie中的用户名    
                $.cookie("pwd",$.base64.encode(pwd));//调用jquery.cookie.js中的方法设置cookie中的登陆密码，并使用base64（jquery.base64.js）进行加密    
             }else{     
                $.cookie("pwd", null);     
             }      
        }     
        function getCookie(){ //获取cookie    
             var loginCode = $.cookie("account"); //获取cookie中的用户名    
             var pwd =  $.cookie("pwd"); //获取cookie中的登陆密码    
             if(pwd){//密码存在的话把“记住用户名和密码”复选框勾选住    
                $("input[name='remember']").attr("checked","true");    
             }    
             if(loginCode){//用户名存在的话把用户名填充到用户名文本框    
                $(".account").val(loginCode);    
             }    
             if(pwd){//密码存在的话把密码填充到密码文本框    
                $(".pwd").val($.base64.decode(pwd));   
             }    
        }     

        // 账号验证
        $('#btnLogin').on('click',function(event){
            event.preventDefault();
            if ($('.account').val().trim().length < 1) {
                // alert("请输入用户名");
                layer.tips('请输入用户名',".account",{
  tips: [3, 'red']});
                
                $('.account').focus();
                return;
            }
            // 邮箱和手机号验证的正则表达式
            // var reg = /^1[34578]\\d{9}$/;
            // var reg2 = /^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
            // var input2 = $('#account').val();
            // var input1 = $('#account').val();
            // if(!reg.test(input1)&&!reg2.test(input2)){
            //     layer.msg('请输入正确的邮箱或者手机格式！')
            // }
            // 密码验证
            if ($('.pwd').val().trim().length < 6 || $('.pwd').val().trim().length >18) {
                 
                // alert("请输入密码");
                layer.tips('请输入6~18位密码',".pwd",{
  tips: [3, 'red']});
                $('.pwd').focus();
                return;
            }
             
            var reg = /^[a-zA-Z]\w{5,17}$/;
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
                if($(".add").html().toLowerCase()!=$("#code_input").val().toLowerCase()){
                    layer.tips('验证码错误',"#code_input",{tips: [3, 'red']});
                        $('#code_input').focus();
                        return;
                }

                //判断是否选中复选框，如果选中，添加cookie  
                // if($("input[name='remember']").is(":checked")){    
                //     //添加cookie    
                //     setCookie();    
                //     alert("记住密码!"); 
                //     //window.location = "test.html";     
                        
                // }else{    
                //     alert("不记住密码!");        
                // }    
                
                layer.open({
                  content: '是否记住密码？'
                  ,btn: ['确定','取消']
                  ,yes: function(index, layero){
                    
                     $("input[name='remember']").attr("checked","true");    
                     setCookie();
                     layer.close(index);
                  }
                  ,btn2: function(index, layero){                  
                    //return false;开启该代码可禁止点击该按钮关闭
                  }
                  
                  ,cancel: function(){ 
                    //右上角关闭回调
                    
                    //return false 开启该代码可禁止点击该按钮关闭
                  }
                });

            // 登录
            $.post('url', $('#form_login').serialize(), function(res) {

                if(res.code == 200){
                    setTimeout(function(){
                        location.href = '/index';
                    },2000);
                    layer.msg('登录成功，正在跳转')
                }else{
                    //$('.error-message').text(res.message);
                    layer.msg(res.message);
                }
                // 测试
                /*if(res.code == 200){
                    // 判断用户类型
                    var categry = $("input[name='categray']:checked").val();
                    if(categry == "管理员"){
                        setTimeout(function(){
                            // 管理员界面
                            location.href = '/index';
                        },2000);
                        layer.msg('登录成功，正在跳转');
                    }
                    if(categry == "教师"){
                        setTimeout(function(){
                            // 教师界面
                            location.href = '/index';
                        },2000);
                        layer.msg('登录成功，正在跳转');
                    }
                    if(categry == "后保部"){
                        setTimeout(function(){
                            // 后保部界面
                            location.href = '/index';
                        },2000);
                        layer.msg('登录成功，正在跳转');
                    }
                    if(categry == "招待所"){
                        setTimeout(function(){
                            // 招待所界面
                            location.href = '/index';
                        },2000);
                        layer.msg('登录成功，正在跳转');
                    }
                    if(categry == "食堂"){
                        setTimeout(function(){
                            // 食堂界面
                            location.href = '/index';
                        },2000);
                        layer.msg('登录成功，正在跳转');
                    }
                }else{
                    //$('.error-message').text(res.message);
                    layer.msg(res.message)
                }*/

            })

        })
