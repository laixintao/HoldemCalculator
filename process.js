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
			if(color ==='♥') color = '0' ;
			if(color ==='♠') color = '1' ;
			if(color ==='♣') color = '2' ;
			if(color ==='♦') color = '3' ;
			colors[i] = color;
			i++;
		});
		var RoyalStraightFlush; //1
		var StraightFlush;		//2
		var Four;				//3
		var FullHouse;			//4
		var Flush;				//5
		var Straight;			//6
		var House;				//7
		var TwoPair;			//8
		var Pair;				//9
		var high;				//10


	});

});


function compare(a,b){


}

function creat_player(ahand1,ahand2){
	var player = new Object;
	player.hand1 = ahand1;
	player.hand2 = ahand2;
	player.flop1 = null;
	player.flop2 = null;
	player.flop3 = null;
	player.turn = null;
	player.river = null;

	player.type = null;

	player.Flush = null;
	player.Four = null;

	function is_Flush(){
		var color_num[5];
		color_num[player.hand1.color]++;
		color_num[player.hand2.color]++;
		color_num[player.flop1.color]++;
		color_num[player.flop2.color]++;
		color_num[player.flop3.color]++;
		color_num[player.turn.color]++;
		color_num[player.river.color]++;
		for(i in color_num){
			if(i>=5) player.Flush = true;
		}
		return player.Flush;
	}

	function not_Flush_Straight(){
		var value_num[14];
		var TYPE[5];
		value_num[player.hand1.value]++;
		value_num[player.hand2.value]++;
		value_num[player.flop1.value]++;
		value_num[player.flop2.value]++;
		value_num[player.flop3.value]++;
		value_num[player.turn.value]++;
		value_num[player.river.value]++;
		for(i in value_num){
			TYPE[value_num[i]]++;
		}
		if(TYPE[4]!=null){
			player.type = 3;
			///////////////////////////////////////////////////continue
		}
		return player.Flush;
	}

	function get_type(){
		//RoyalStraightFlush
	}
	return player; 
}

function new_card(acolor,avalue){
	var card = new Object;
	card.color = acolor;
	card.value = avalue;
	return card;
}
