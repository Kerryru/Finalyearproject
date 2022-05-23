
var login = (function () {

	return {
		init: function () {
			// ��ȡ�ύ��ť
			this.$loginBtn = document.querySelector('.loginBtn');
			// ��ȡ�û��������
			this.$usernameInp = document.querySelector('.user-inp');
			// ��ȡ���������
			this.$passwordInp = document.querySelector('.pwd-inp');
			// ��ȡ��֤��
			this.$_code = document.querySelector('._code');
			// ��ȡ��֤�������
			this.$code = document.querySelector('.code');
			// ��ȡ��ʾ��
			this.$usernameTip = document.querySelector('.username-tip');
			this.$passwordTip = document.querySelector('.password-tip');
			this.$tip = document.querySelector('.tip');

			this.event();
			this.getCode();
		},
		event: function () {
			var _this = this;
			// �ύ��ť
			this.$loginBtn.onclick = function () {
				if (_this.$_code.innerHTML == _this.$code.value.toString()) {
					// ����ajax����֤�û���������
					var params = {
						method: 'post',
						data: {
							username: _this.$usernameInp.value,
							password: _this.$passwordInp.value
						},
						success: function (data) {
							data = JSON.parse(data);
							_this.loginSuccess(data);
						}
					}
					// sendAjax('http://172.16.2.118:8111/login', params);
					$.ajax({
						url:'http://172.16.2.118:8111/login',
						data:params.data,
						type:'post',
						success:function (result,status,xhr){
							if(result.code===-1){
								alert(result.message)
							}else if(result.code === 1){
								// alert("Login successful")
								// data = JSON.parse(result.data);
								console.log(result.data.user_id)
							// _this.loginSuccess(data);
								window.alert("Login successful")
							localStorage.userid = result.data.user_id
							localStorage.username = params.data.username
							setTimeout(()=>{
								window.location.href = 'index.html'
								
							},10)
			
							
							}
						}
					})

				}

				_this.getCode();

			}
			this.$_code.onclick = function () {
				_this.getCode();
			}
			$(".id").click(function () {
				$('.Code').css('color', '#333');
				$(this).css('color', 'red');
				$('.form').css("display", 'block');
				$('.Codepanel').css("display", 'none');
			});
			$(".Code").click(function () {
				$('.id').css('color', '#333');
				$(this).css('color', 'red');
				$('.form').css("display", 'none');
				$('.Codepanel').css("display", 'block');
			});

		},
		loginSuccess: function (data) {
			if (data.code == 200) {
				document.cookie = "use_id=" + data.user_id;
				document.cookie = "token=" + data.data.token;
				localStorage.userImg = "	";
				location.href = 'index.html';
				this.$tip.style.display = "none";
			} else {
				// alert(data.msg);
				this.$tip.style.display = 'block';
				// if(this.$usernameInp.value == '' || this.$passwordInp){
				// 	this.$tip.innerHTML = '';
				// 	this.$tip.innerHTML = '�û��������벻��Ϊ��';
				// }
				if (this.$_code.innerHTML != this.$code.value.toString()) {
					// alert('��֤���������');
					this.getCode();
				}
			}
		},
		getCode() {
			var str = '';
			for (var i = 0; i < 4; i++) {
				str += Math.floor(Math.random() * 10);
			}
			this.$_code.innerHTML = str;
		}
	}

}())