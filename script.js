$('#ta1').mouseup(
//$('.keyboard6').change(

	(e)=>{

		var x=window.getSelection().toString()
		//var x=$('.keyboard6').val()

		var z=''

		for(y of lines1){
			if(y.indexOf(x) !== -1){
				z+=y+'\n\n'
			}
			//console.log(y)
		}


		$('#ta2').val(
			z
		)
	}
);

lines1=[
	'for1',
	'for2',

  ":forward_ :backward_ :upward_ :downward_ :(not_a_symbol) :continuation_ :(not_a_symbol) :through_ :(not_a_symbol) :PART_OF_exchange_ :? :(not_a_symbol) :competition_ :(not_a_symbol) :? :? :? :back_and_forth_ :(not_a_symbol) :upward_and_forward_ :downward_and_forward_ :upward_and_backward_ :downward_and_backward_ :PART_OF_reflection_ :(not_a_symbol) :PART_OF_rotation_ :(not_a_symbol) :PART_OF_turn_ :(not_a_symbol) :jump_ :feeling_ :rest_ :? :? :? :? :PART_OF_? :(not_a_symbol) :",
]
