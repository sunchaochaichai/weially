	$(function(){
		var ticket_num = 0;
		$(".menubox .menu_icon").click(function(){
			$(this).next().slideToggle();
		});
		$(".sharebtn").click(function(){
			$(".sharebox").fadeIn();
			return false;
		});
		$(".sharebox").click(function(){
			$(this).fadeOut();
		});
		var main_m_h = $(window).height() -60;
		$(".main").css({"minHeight":main_m_h});
		$(".creatfrm .frm_op .frmbtn").click(function(){
			var i  = $(this).index();
			$(".frm_opbox").hide().eq(i).show();
		});
		//添加主办方
		$(".frm_opbox .frm_op_btn_zhubanfang").one("click",function(){
			var str = '<div class="creatfrmli"><input type="" class="creat_frmipt" placeholder="主办方" /></div>';
			$(".creatfrm_hdsz_plus").append(str);
		});
		//添加场所
		$(".frm_opbox .frm_op_btn_local").one("click",function(){
			var str = '<div class="creatfrmli"><input type="" class="creat_frmipt" placeholder="场所" /></div>';
			$(".creatfrm_hdsz_plus").append(str);
		});
		//添加人数上限
		$(".frm_opbox .frm_op_btn_rssx").one("click",function(){
			var str = '<div class="creatfrmli"><input type="" class="creat_frmipt" placeholder="人数上限" /></div>';
			$(".creatfrm_hdsz_plus").append(str);
		});
		//添加具体地址
		$(".frm_opbox .frm_op_btn_address").one("click",function(){
			var str = '<div class="creatfrmli"><input type="" class="creat_frmipt" placeholder="具体地址" /></div>';
			$(".creatfrm_hdsz_plus").append(str);
		});
		//添加收款
		$(".frm_opbox .frm_op_btn_sk_add").live("click",function(){
			$(".renzheng_popbox_sk").fadeIn();
		});
		$("..renzheng_popbox .renzheng_btngroup .cancel").one("click",function(){
			$(".renzheng_popbox_sk").fadeOut();
		});
		//添加票种
		$(".frm_opbox .frm_op_btn_ticket_add,.type_addbtn").live("click",function(){
			if(ticket_num==0){
				var str = '<div class="creatfrmli creatfrmli_piaozhong"><div class="type_addbtn"></div><div class="creatfrmli_piaozhongli"><input type="" class="creat_frmipt creat_frmipt_s" placeholder="价格" /><input type="" class="creat_frmipt creat_frmipt_s" placeholder="人数" /></div></div>';
				$(".creatfrm_hdsz_plus").append(str);
			}else{
				if(ticket_num == 1){
					var str = '<div class="creatfrmli_piaozhongli"><input type="" class="creat_frmipt creat_frmipt_s" placeholder="价格" /><input type="" class="creat_frmipt creat_frmipt_s" placeholder="人数" /></div>';
					$(".creatfrmli_piaozhong").append(str);
				}else{
					var str = '<input type="" class="creat_frmipt creat_frmipt_s creat_frmipt_s_w" placeholder="名称" /><input type="" class="creat_frmipt creat_frmipt_s creat_frmipt_s_w" placeholder="价格" /><input type="" class="creat_frmipt creat_frmipt_s creat_frmipt_s_w" placeholder="人数" />';
					$(".creatfrmli_piaozhong .creatfrmli_piaozhongli").html(str);
					var str2 = '<div class="creatfrmli_piaozhongli"><input type="" class="creat_frmipt creat_frmipt_s creat_frmipt_s_w" placeholder="名称" /><input type="" class="creat_frmipt creat_frmipt_s creat_frmipt_s_w" placeholder="价格" /><input type="" class="creat_frmipt creat_frmipt_s creat_frmipt_s_w" placeholder="人数" /></div>';
					$(".creatfrmli_piaozhong").append(str2);
				}
			}
			ticket_num++;
		});
		//添加海报
		$(".frm_opbox .frm_op_btn_haibao").one("click",function(){
			var str = '<div class="creatfrmli creatfrmli_filebox"><div class="creatfrmli_filetxt"></div><div class="creatfrmli_filebtn_hb">上传海报</div><input type="file" class="creatfrmli_fileipt"accept="image.jpg,image.jpg" /></div>';
			$(".creatfrm_hdsz_plus").append(str);
		});
		//上传海报
		$(".creatfrmli_filebtn_hb").live("click",function(){
			$(".creatfrmli_fileipt").trigger("click");
		});
		$(".creatfrmli_fileipt").live("change",function(){
			var str = $(this).val();
			$(".creatfrmli_filetxt").html(str);
		});

		//添加电话
		$(".frm_opbox .frm_op_btn_phone").one("click",function(){
			var str = '<div class="creatfrmli"><input type="" class="creat_frmipt" placeholder="电话" /></div>';
			$(".creatfrm_hdsz_plus").append(str);
		});
//		报名表单填写
		$(".frm_opbox .frm_op_btn_name").one("click",function(){
			var str = '<div class="creatfrmli"><input type="" class="creat_frmipt" placeholder="姓名" /></div>';
			$(".creatfrm_bmbd_plus").append(str);
		});
		$(".frm_opbox .frm_op_btn_phone2").one("click",function(){
			var str = '<div class="creatfrmli"><input type="" class="creat_frmipt" placeholder="电话" /></div>';
			$(".creatfrm_bmbd_plus").append(str);
		});
		$(".frm_opbox .frm_op_btn_company").one("click",function(){
			var str = '<div class="creatfrmli"><input type="" class="creat_frmipt" placeholder="公司" /></div>';
			$(".creatfrm_bmbd_plus").append(str);
		});
		$(".frm_opbox .frm_op_btn_sex").one("click",function(){
			var str = '<div class="creatfrmli creatfrmli_sex"><div class="creatfrmli_sex_span">性别</div> 男 <input type="radio" name="sex" class="creat_frmradio" /> 女 <input type="radio" name="sex" class="creat_frmradio" /></div>';
			$(".creatfrm_bmbd_plus").append(str);
		});
		$(".frm_opbox .frm_op_btn_email").one("click",function(){
			var str = '<div class="creatfrmli"><input type="" class="creat_frmipt" placeholder="邮箱" /></div>';
			$(".creatfrm_bmbd_plus").append(str);
		});
		$(".frm_opbox .frm_op_btn_zidingyi").one("click",function(){
			var str = '<div class="creatfrmli creatfrmli_zdy"><div class="creatfrmli_zdy_tit"><div class="creatfrmli_zdy_add"></div>自定义问题</div><div class="creatfrmli_zdy_list"></div></div>';
			$(".creatfrm_bmbd_plus").append(str);
		});
		$(".creatfrmli_zdy .creatfrmli_zdy_c_tit span").live("click",function(){
			var i = $(this).index();
			$(".creatfrmli_zdy .creatfrmli_zdy_c_tit span").removeClass("active").eq(i).addClass("active");
			$(".creatfrmli_zdy_c_main").removeClass("active").eq(i).addClass("active");
		});
		$(".creatfrmli_zdy_list .creatfrmli_zdy_li .remove").live("click",function(){
			$(this).closest(".creatfrmli_zdy_li").remove();
		});
		//添加自定义问题
		$(".creatfrmli_zdy .creatfrmli_zdy_tit .creatfrmli_zdy_add").live("click",function(){
			var str = '<div class="creatfrmli_zdy_c"><div class="creatfrmli_zdy_c_tit"><span class="active">选择</span><span>问答</span></div><div class="creatfrmli_zdy_c_main active creatfrmli_zdy_c_main_xz"><div class="creatfrmli_zdy_c_li"><div class="creatfrmli_zdy_c_li_span">问题名称</div><div class="creatfrmli_zdy_c_li_c"><input type="" class="creatfrmli_zdy_frmipt creatfrmli_zdy_frmipt_wtmc"></div></div><div class="creatfrmli_zdy_choicelist"><div class="creatfrmli_zdy_c_li"><div class="creatfrmli_zdy_c_li_span">答案选项</div><div class="creatfrmli_zdy_c_li_c"><div class="zdy_c_btn zdy_c_btn_minus"></div><div class="zdy_c_btn zdy_c_btn_add"></div><input type="" class="creatfrmli_zdy_frmipt creatfrmli_zdy_frmipt_s"></div></div><div class="creatfrmli_zdy_c_li"><div class="creatfrmli_zdy_c_li_span">答案选项</div><div class="creatfrmli_zdy_c_li_c"><div class="zdy_c_btn zdy_c_btn_minus"></div><div class="zdy_c_btn zdy_c_btn_add"></div><input type="" class="creatfrmli_zdy_frmipt creatfrmli_zdy_frmipt_s"></div></div></div><div class="creatfrmli_zdy_c_li"><div class="creatfrmli_zdy_c_li_span"></div><div class="creatfrmli_zdy_c_li_c"><div class="zdy_c_btn zdy_c_btn_ok zdy_c_btn_ok_xz">确定</div><input type="checkbox" class="creatfrmli_zdy_check" checked> 必填项 <input type="checkbox" class="creatfrmli_zdy_check"> 多选项</div></div></div><div class="creatfrmli_zdy_c_main creatfrmli_zdy_c_main_wd"><div class="creatfrmli_zdy_c_li"><div class="creatfrmli_zdy_c_li_span">问题名称</div><div class="creatfrmli_zdy_c_li_c"><input type="" class="creatfrmli_zdy_frmipt creatfrmli_wtmc_wd"></div></div><div class="creatfrmli_zdy_c_li"><div class="creatfrmli_zdy_c_li_span"></div><div class="creatfrmli_zdy_c_li_c"><div class="zdy_c_btn zdy_c_btn_ok zdy_c_btn_ok_wd">确定</div></div></div></div></div>';
			$(".creatfrmli_zdy").append(str);
		});
		//自定义添加选择题——确定
		$(".zdy_c_btn_ok_xz").live("click",function(){
			var wd_name = $(".creatfrmli_zdy_c_main_xz").find(".creatfrmli_zdy_frmipt_wtmc").val();
			//把选项赋值到自定义问题列表
			$(".creatfrmli_zdy_list").append('<div class="creatfrmli_zdy_li"><span class="name">'+wd_name+'</span><span class="remove"></span></div>');
			//此处添加选择题传到后台
		});
		//自定义添加问答题——确定
		$(".zdy_c_btn_ok_wd").live("click",function(){
			var hd_name = $(".creatfrmli_zdy_c_main_wd").find(".creatfrmli_wtmc_wd").val();
			//把选项赋值到自定义问题列表
			$(".creatfrmli_zdy_list").append('<div class="creatfrmli_zdy_li"><span class="name">'+hd_name+'</span><span class="remove"></span></div>');
			//此处添加问答题传到后台
		});
		//删除选择题选项
		$(".creatfrmli_zdy_c_li .zdy_c_btn_minus").live("click",function(){
			$(this).closest(".creatfrmli_zdy_c_li").remove();
		});
		//添加选择题选项
		$(".creatfrmli_zdy_c_li .zdy_c_btn_add").live("click",function(){
			$(".creatfrmli_zdy_choicelist").append('<div class="creatfrmli_zdy_c_li"><div class="creatfrmli_zdy_c_li_span">答案选项</div><div class="creatfrmli_zdy_c_li_c"><div class="zdy_c_btn zdy_c_btn_minus"></div><div class="zdy_c_btn zdy_c_btn_add"></div><input type="" class="creatfrmli_zdy_frmipt creatfrmli_zdy_frmipt_s"></div></div>');
		});
	});
