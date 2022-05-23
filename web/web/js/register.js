// this.$usernameInp.oninput = function(){
//     var reg = /^\w{6,13}$/;
//     if(reg.test(_this.$usernameInp.value)){
//         console.log(111);
//     }
// }
// this.$passwordInp.oninput = function(){
//     var reg = /^\w{6,13}$/;
//     if(reg.test(_this.$passwordInp.value)){
//         console.log(111);
//     }
// }

var register = (function () {

	return {
		init: function () {
			// ��ȡע�ᰴť
			this.$registerBtn = document.querySelector('.registerBtn');
			// ��ȡ������
			this.$country_box = document.querySelector('.country_box');
			this.$country = document.querySelector('.country');
			this.$country_add = document.querySelector('.country_add');
			// ��ȡ�ֻ����ſ�
			this.$list_panel_box = document.querySelector('.list_panel_box');
			this.$list_panel = document.querySelector('.list_panel');
			this.$country_tel = document.querySelector('.country_tel');
			this.$country_add_tel = document.querySelector('.country_add_tel');
			this.$code = document.querySelector('.code');
			// ��ȡ��������
			this.$countryAll = document.getElementsByClassName('address');

			// ��ȡcountry_box�����p��ǩ
			// this.$country_box_p = this.$country_box.querySelector('div');

			// ��ȡ�ֻ������
			this.$tel_inp = document.querySelector('.tel_inp');
			// ��ȡ�����
			this.$pwd_inp = document.querySelector('.pwd_inp');
			// ��ȡ��ʾ��
			this.$tip = document.querySelector('.tip');
			// ��ȡͬ�ⰴť
			this.$agree = document.querySelector('.agree');
			// ��ȡ������
			this.$search_inp1 = document.querySelector('.search_inp1');
			this.$search_inp2 = document.querySelector('.search_inp2');
			this.event();
		},
		event: function () {
			var _this = this;
			var count_add = 0;
			var count_tel = 0;
			var count = 0;

			// ����ֻ�����
			var reg = /^1[35789]\d{9}$/;
			this.$tel_inp.oninput = function () {
				if (_this.$tel_inp.value.trim() != '' && reg.test(_this.$tel_inp.value.trim())) {
					_this.$tel_inp.style.border = '1px solid #e0e0e0';
					_this.$tip.style.display = 'none';
				} else {
					_this.$tel_inp.style.border = '1px solid red';
					_this.$tip.style.display = 'block';
					_this.$tip.innerHTML = 'Please enter the correct mobile phone number';
				}
			}
			this.$tel_inp.onblur = function () {
				if (_this.$tel_inp != '') {
					_this.$tel_inp.style.border = '1px solid #e0e0e0';
				} else {
					_this.$tip.style.display = 'block';
					_this.$tip.innerHTML = 'Please enter the correct mobile phone number';

				}
			}

			// this.$country_box.onclick = function () {
			// 	if (count_add % 2 == 0) {
			// 		_this.$country_add.style.display = 'block';
			// 	} else {
			// 		_this.$country_add.style.display = 'none';
			// 	}
			// 	count_add++;
			// 	if (count_add > 3) {
			// 		count_add = 0;
			// 	}
			// }
			// this.$country_add.onclick = function (e) {
			// 	e = e || window.event;
			// 	var target = e.target || e.srcElement;
			// 	if (target.nodeName === 'LI') {
			// 		_this.$country_box_p.innerHTML = target.innerText;
			// 		_this.$country_add.style.display = 'none';
			// 		if (count_add % 2 == 0) {
			// 			_this.$country_add.style.display = 'block';
			// 		} else {
			// 			_this.$country_add.style.display = 'none';
			// 		}
			// 		count_add++;
			// 		if (count_add > 3) {
			// 			count_add = 0;
			// 		}
			// 	}
			// }
			this.$list_panel_box.onclick = function () {
				if (count_tel % 2 == 0) {
					_this.$country_tel.style.display = 'block';
				} else {
					_this.$country_tel.style.display = 'none';
				}
				count_tel++;
				if (count_tel > 3) {
					count_tel = 0;
				}
			}
			this.$country_add_tel.onclick = function (e) {
				var str = '';
				var start;
				e = e || window.event;
				var target = e.target || e.srcElement;
				if (target.nodeName === 'LI') {
					str = target.innerText;
					start = str.indexOf('+');
					str = str.slice(start);
					_this.$code.innerHTML = str;
					_this.$country_tel.style.display = 'none';
					if (count_tel % 2 == 0) {
						_this.$country_tel.style.display = 'block';
					} else {
						_this.$country_tel.style.display = 'none';
					}
					count_tel++;
					if (count_tel > 3) {
						count_tel = 0;
					}
				}
			}


			// �����ѡ
			this.$agree.onclick = function () {
				if (count % 2 == 0) {
					_this.$agree.innerHTML = '';
				} else {
					_this.$agree.innerHTML = '<img src="img/dui.png" alt="">';
				}
				count++;
				if (count > 3) {
					count = 0;
				}

			}

			// �ύ��ť
			this.$registerBtn.onclick = function () {
				if (_this.$tel_inp.value.trim() !== '' && _this.$pwd_inp.value.trim() !== '') {

					// ����ajax����֤�û���������
					var params = {
						method: 'post',
						data: {
							username: _this.$tel_inp.value,
							userphone: document.querySelectorAll('.wriper .tel_inp')[1].value,
							password: _this.$pwd_inp.value
						},
						success: function (data) {
							data = JSON.parse(data);
							_this.registerSuccess(data);
						}
					}
					// sendAjax('php/register.php', params);
					console.log(params)
					$.ajax({
						url: 'http://172.16.2.118:8111/register',
						data: params.data,
						type: 'post',
						success: function (result, status, xhr) {
							if (result.code === -1) {
								alert(result.message)
								window.location.href = 'login.html'
							} else if (result.code === 1) {


								// _this.loginSuccess(data);
								window.alert("Register successful")
								setTimeout(() => {
									window.location.href = 'login.html'

								}, 10)


							}
						}
					})
					// this.$tel_inp.onchange = function () {
					// 	var params = {
					// 		data: {
					// 			username: _this.$tel_inp.value
					// 		},
					// 		success: function (data) {
					// 			data = JSON.parse(data);
					// 			_this.checkName(data);
					// 		}
					// 	}
					// 	sendAjax('php/check_username.php', params);
					// }
				}
				else {
					alert('Please enter your mobile phone number and password');
				}
			}

		},
		checkName: function (data) {
			if (data.code == 200) {
				// �û����Ʋ�����
			} else {
				// �û����ƴ���
				alert(data.msg);
			}
		},
		registerSuccess: function (data) {
			if (data.code == 200) {
				location.href = 'login.html';
			} else {
				alert(data.msg);
			}
		}
	}

}())