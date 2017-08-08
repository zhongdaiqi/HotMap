(function ($) {
    $.fn.extend({
        "hotMap": function (options) {
            //检测用户传进来的参数是否合法
            if (!isValid(options))
                return this;
            var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
			engine(this,opts);
            return this;

        }
    });
	var engine=function(self,opts){
		    self.click(function (e) {
			   var imgNavRate= self.width()/ opts.RefWidth;
               for (var i = 0; i < opts.HotArea.length; i++) {
                   var imgPoint = opts.HotArea[i];
                   //检测用户是否点到指定区域
                   if (e.offsetX > imgPoint.StartPoint.X * imgNavRate && e.offsetX < imgPoint.EndPoint.X * imgNavRate && e.offsetY > imgPoint.StartPoint.Y * imgNavRate  && e.offsetY < imgPoint.EndPoint.Y * imgNavRate) {
                       imgPoint.ClickAction();
                   }    
               }
              
           });
		
	};
    //默认参数 暂无
    var defaluts = {
		RefWidth:640,//参考宽度
		HotArea:[
				{ 
					   StartPoint: { X: 38, Y: 1021 },
					   EndPoint: { X: 280, Y: 1088 },
					   ClickAction: function () {
						  
					   }
				}
		]
    };
    //私有方法，检测参数是否合法
    function isValid(options) {
        return !options || (options && typeof options === "object") ? true : false;
    }
})(window.jQuery);
