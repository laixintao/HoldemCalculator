$(function(){
	$("select[class*=color]").change(function(){
		$("option:selected :even").each(function(){
			var color = $(this).text();
			if(color ==='♥') color = 'b' ;
			if(color ==='♠') color = 'a' ;
			if(color ==='♣') color = 'c' ;
			if(color ==='♦') color = 'd' ;
			var src = $(this).parent().parent().prev().attr('src');
			src=src.replace(/[abcd]/,color);
			$(this).parent().parent().prev().replaceWith('<img src="'+src+'" width="60px" hight="32px"/>');
		});
		});

	$("select[class*=value]").change(function(){
		$("option:selected :odd").each(function(){
			var value = $(this).text();
			if(value==='A') value = '1';
			if(value==='J') value = '11';
			if(value==='Q') value = '12';
			if(value==='K') value = '13';
			var src = $(this).parent().parent().prev().prev().attr('src');
			src=src.replace(/[0-9]+/,value);
			$(this).parent().parent().prev().prev().replaceWith('<img src="'+src+'" width="60px" hight="32px"/>');
		});});
	
	$("#result button").click(function(){
		var colors = new Array();
		var values = new Array();
		var i =0;
		$("option:selected :odd").each(function(){
			var value = $(this).text();
			if(value==='A') value = '1';
			if(value==='J') value = '11';
			if(value==='Q') value = '12';
			if(value==='K') value = '13';
			values[i] = value;
			i++;
		});
		i=0;
		$("option:selected :even").each(function(){
			var color = $(this).text();
			if(color ==='♥') color = 'b' ;
			if(color ==='♠') color = 'a' ;
			if(color ==='♣') color = 'c' ;
			if(color ==='♦') color = 'd' ;
			colors[i] = color;
			i++;
		});
		
	});

});
