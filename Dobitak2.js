$waiting_8 = setInterval(Wait_8, 500);
  
function Wait_8() {
	console.log($deal);

	if($deal == 9) {

		clearInterval($waiting_8);
		$Five_of_a_kind = 0;
		$Royal_flush = 0;
		$Street_flush = 0;
		$Poker = 0;
		$Full_house = 0;
		$Flush = 0;
		$Street = 0;
		$Three_of_a_kind = 0;
		$Two_pairs = 0;
		$High_pair = 0;
		$win = 0;
		$cards_2 = setInterval(Win_2,200);
	}
}
function Win_2() {

	clearInterval($cards_2);

	console.log($n1);
	console.log($n2);
	console.log($n3);
	console.log($n4);
	console.log($n5);

	// FIVE OF A KIND

	if ($win == 0) {

		if ((($n1==$n2)&&($n2==$n3)&&($n3==$n4)&&($n5==0)) ||
			(($n1==$n2)&&($n2==$n3)&&($n4==0)&&($n3==$n5)) ||
			(($n1==$n2)&&($n3==0)&&($n2==$n4)&&($n4==$n5)) ||
			(($n1==$n3)&&($n2==0)&&($n3==$n4)&&($n4==$n5)) ||
			(($n1==0)&&($n2==$n3)&&($n3==$n4)&&($n4==$n5))) {

			five_of_a_kind();
		}

	}
	
	// ROYAL FLUSH OR STREET

	if ($win == 0) {

		let royal = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {royal ++;}
		if ($n1==10||$n2==10||$n3==10||$n4==10||$n5==10) {royal ++;}
		if ($n1==11||$n2==11||$n3==11||$n4==11||$n5==11) {royal ++;}
		if ($n1==12||$n2==12||$n3==12||$n4==12||$n5==12) {royal ++;}
		if ($n1==13||$n2==13||$n3==13||$n4==13||$n5==13) {royal ++;}
		if ($n1==14||$n2==14||$n3==14||$n4==14||$n5==14) {royal ++;}

		if (royal == 5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				royal_flush();
			}
			else {
				street();
			}
		}
	}

	// STREET FLUSH OR STREET
	// 1-5

	if ($win == 0) {

		let street_1 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {street_1 ++;}
		if ($n1==14||$n2==14||$n3==14||$n4==14||$n5==14) {street_1 ++;}
		if ($n1==2||$n2==2||$n3==2||$n4==2||$n5==2) {street_1 ++;}
		if ($n1==3||$n2==3||$n3==3||$n4==3||$n5==3) {street_1 ++;}
		if ($n1==4||$n2==4||$n3==4||$n4==4||$n5==4) {street_1 ++;}
		if ($n1==5||$n2==5||$n3==5||$n4==5||$n5==5) {street_1 ++;}

		if (street_1 == 5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				street_flush();
			}
			else {
				street();
			}
		}
	}

	// STREET FLUSH OR STREET
	// 2-6

	if ($win == 0) {

		let street_2 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {street_2 ++;}
		if ($n1==2||$n2==2||$n3==2||$n4==2||$n5==2) {street_2 ++;}
		if ($n1==3||$n2==3||$n3==3||$n4==3||$n5==3) {street_2 ++;}
		if ($n1==4||$n2==4||$n3==4||$n4==4||$n5==4) {street_2 ++;}
		if ($n1==5||$n2==5||$n3==5||$n4==5||$n5==5) {street_2 ++;}
		if ($n1==6||$n2==6||$n3==6||$n4==6||$n5==6) {street_2 ++;}

		if (street_2 == 5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				street_flush();
			}
			else {
				street();
			}
		}
	}

	// STREET FLUSH OR STREET
	// 3-7

	if ($win == 0) {

		let street_3 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {street_3 ++;}
		if ($n1==3||$n2==3||$n3==3||$n4==3||$n5==3) {street_3 ++;}
		if ($n1==4||$n2==4||$n3==4||$n4==4||$n5==4) {street_3 ++;}
		if ($n1==5||$n2==5||$n3==5||$n4==5||$n5==5) {street_3 ++;}
		if ($n1==6||$n2==6||$n3==6||$n4==6||$n5==6) {street_3 ++;}
		if ($n1==7||$n2==7||$n3==7||$n4==7||$n5==7) {street_3 ++;}

		if (street_3 == 5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				street_flush();
			}
			else {
				street();
			}
		}
	}

	// STREET FLUSH OR STREET
	// 4-8

	if ($win == 0) {

		let street_4 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {street_4 ++;}
		if ($n1==4||$n2==4||$n3==4||$n4==4||$n5==4) {street_4 ++;}
		if ($n1==5||$n2==5||$n3==5||$n4==5||$n5==5) {street_4 ++;}
		if ($n1==6||$n2==6||$n3==6||$n4==6||$n5==6) {street_4 ++;}
		if ($n1==7||$n2==7||$n3==7||$n4==7||$n5==7) {street_4 ++;}
		if ($n1==8||$n2==8||$n3==8||$n4==8||$n5==8) {street_4 ++;}

		if (street_4 == 5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				street_flush();
			}
			else {
				street();
			}
		}
	}

	// STREET FLUSH OR STREET
	// 5-9

	if ($win == 0) {

		let street_5 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {street_5 ++;}
		if ($n1==5||$n2==5||$n3==5||$n4==5||$n5==5) {street_5 ++;}
		if ($n1==6||$n2==6||$n3==6||$n4==6||$n5==6) {street_5 ++;}
		if ($n1==7||$n2==7||$n3==7||$n4==7||$n5==7) {street_5 ++;}
		if ($n1==8||$n2==8||$n3==8||$n4==8||$n5==8) {street_5 ++;}
		if ($n1==9||$n2==9||$n3==9||$n4==9||$n5==9) {street_5 ++;}

		if (street_5 == 5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				street_flush();
			}
			else {
				street();
			}
		}
	}

	// STREET FLUSH OR STREET
	// 6-10

	if ($win == 0) {

		let street_6 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {street_6 ++;}
		if ($n1==6||$n2==6||$n3==6||$n4==6||$n5==6) {street_6 ++;}
		if ($n1==7||$n2==7||$n3==7||$n4==7||$n5==7) {street_6 ++;}
		if ($n1==8||$n2==8||$n3==8||$n4==8||$n5==8) {street_6 ++;}
		if ($n1==9||$n2==9||$n3==9||$n4==9||$n5==9) {street_6 ++;}
		if ($n1==10||$n2==10||$n3==10||$n4==10||$n5==10) {street_6 ++;}

		if (street_6 == 5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				street_flush();
			}
			else {
				street();
			}
		}
	}

	// STREET FLUSH OR STREET
	// 7-11

	if ($win == 0) {

		let street_7 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {street_7 ++;}
		if ($n1==7||$n2==7||$n3==7||$n4==7||$n5==7) {street_7 ++;}
		if ($n1==8||$n2==8||$n3==8||$n4==8||$n5==8) {street_7 ++;}
		if ($n1==9||$n2==9||$n3==9||$n4==9||$n5==9) {street_7 ++;}
		if ($n1==10||$n2==10||$n3==10||$n4==10||$n5==10) {street_7 ++;}
		if ($n1==11||$n2==11||$n3==11||$n4==11||$n5==11) {street_7 ++;}

		if (street_7 == 5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				street_flush();
			}
			else {
				street();
			}
		}
	}

	// STREET FLUSH OR STREET
	// 8-12

	if ($win == 0) {

		let street_8 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {street_8 ++;}
		if ($n1==8||$n2==8||$n3==8||$n4==8||$n5==8) {street_8 ++;}
		if ($n1==9||$n2==9||$n3==9||$n4==9||$n5==9) {street_8 ++;}
		if ($n1==10||$n2==10||$n3==10||$n4==10||$n5==10) {street_8 ++;}
		if ($n1==11||$n2==11||$n3==11||$n4==11||$n5==11) {street_8 ++;}
		if ($n1==12||$n2==12||$n3==12||$n4==12||$n5==12) {street_8 ++;}

		if (street_8 == 5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				street_flush();
			}
			else {
				street();
			}
		}
	}

	// STREET FLUSH OR STREET
	// 9-13

	if ($win == 0) {

		let street_9 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {street_9 ++;}
		if ($n1==9||$n2==9||$n3==9||$n4==9||$n5==9) {street_9 ++;}
		if ($n1==10||$n2==10||$n3==10||$n4==10||$n5==10) {street_9 ++;}
		if ($n1==11||$n2==11||$n3==11||$n4==11||$n5==11) {street_9 ++;}
		if ($n1==12||$n2==12||$n3==12||$n4==12||$n5==12) {street_9 ++;}
		if ($n1==13||$n2==13||$n3==13||$n4==13||$n5==13) {street_9 ++;}

		if (street_9 == 5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				street_flush();
			}
			else {
				street();
			}
		}
	}

	// POKER

	if ($win == 0) {

		if ((($n1==$n2)&&($n2==$n3)&&($n3==$n4)) ||
				(($n1==$n2)&&($n2==$n3)&&($n4==0)) ||
				(($n1==$n2)&&($n3==0)&&($n2==$n4)) ||
				(($n1==$n3)&&($n2==0)&&($n3==$n4)) ||
				(($n1==0)&&($n2==$n3)&&($n3==$n4))) {

			poker();
		}

		if ((($n1==$n2)&&($n2==$n3)&&($n3==$n5)) ||
				(($n1==$n2)&&($n2==$n3)&&($n5==0)) ||
				(($n1==$n2)&&($n3==0)&&($n2==$n5)) ||
				(($n1==$n3)&&($n2==0)&&($n3==$n5)) ||
				(($n1==0)&&($n2==$n3)&&($n3==$n5))) {
		
			poker();
		}

		if ((($n1==$n2)&&($n2==$n4)&&($n4==$n5)) ||
				(($n1==$n2)&&($n2==$n4)&&($n5==0)) ||
				(($n1==$n2)&&($n4==0)&&($n2==$n5)) ||
				(($n1==$n4)&&($n2==0)&&($n4==$n5)) ||
				(($n1==0)&&($n2==$n4)&&($n4==$n5))) {
			
			poker();
		}

		if ((($n1==$n3)&&($n3==$n4)&&($n4==$n5)) ||
				(($n1==$n3)&&($n3==$n4)&&($n5==0)) ||
				(($n1==$n3)&&($n4==0)&&($n3==$n5)) ||
				(($n1==$n4)&&($n3==0)&&($n4==$n5)) ||
				(($n1==0)&&($n3==$n4)&&($n4==$n5))) {
			
			poker();
		}

		if ((($n2==$n3)&&($n3==$n4)&&($n4==$n5)) ||
				(($n2==$n3)&&($n3==$n4)&&($n5==0)) ||
				(($n2==$n3)&&($n4==0)&&($n3==$n5)) ||
				(($n2==$n4)&&($n3==0)&&($n4==$n5)) ||
				(($n2==0)&&($n3==$n4)&&($n4==$n5))) {
			
			poker();
		}
	}

	//FULL HOUSE

	if ($win == 0) {

		if ((($n1==$n2)&&($n2==$n3)&&($n4==$n5)) ||
				(($n1==$n2)&&($n3==$n4)&&($n4==$n5)) ||
				(($n1==$n3)&&($n2==$n4)&&($n4==$n5)) ||
				(($n1==$n4)&&($n2==$n3)&&($n3==$n5)) ||
				(($n1==$n5)&&($n2==$n3)&&($n3==$n4)) ||
				(($n1==$n2)&&($n2==$n4)&&($n3==$n5)) ||
				(($n1==$n2)&&($n2==$n5)&&($n3==$n4)) ||
				(($n1==$n3)&&($n3==$n4)&&($n2==$n5)) ||
				(($n1==$n3)&&($n3==$n5)&&($n2==$n4)) ||
				(($n1==$n4)&&($n4==$n5)&&($n2==$n3)) ||
				(($n1==$n2)&&($n3==0)&&($n4==$n5)) ||
				(($n1==$n2)&&($n4==0)&&($n3==$n5)) ||
				(($n1==$n2)&&($n5==0)&&($n3==$n4)) ||
				(($n1==$n3)&&($n2==0)&&($n4==$n5)) ||
				(($n1==$n3)&&($n4==0)&&($n2==$n5)) ||
				(($n1==$n3)&&($n5==0)&&($n2==$n4)) ||
				(($n1==$n4)&&($n2==0)&&($n3==$n5)) ||
				(($n1==$n4)&&($n3==0)&&($n2==$n5)) ||
				(($n1==$n4)&&($n5==0)&&($n2==$n3)) ||
				(($n1==$n5)&&($n2==0)&&($n3==$n4)) ||
				(($n1==$n5)&&($n3==0)&&($n2==$n4)) ||
				(($n1==$n5)&&($n4==0)&&($n2==$n3)) ||
				(($n1==0)&&($n2==$n3)&&($n4==$n5)) ||
				(($n1==0)&&($n2==$n4)&&($n3==$n5)) ||
				(($n1==0)&&($n2==$n5)&&($n3==$n4))) {

			full_house();
		}
	}

	//FLUSH

	if ($win == 0) {

		if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
				(($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
				(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
				(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
				(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
				(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5))) {

			flush();
		}
	}

	//THREE OF A KIND

	if ($win == 0) {

		if ((($n1==$n2)&&($n2==$n3))||(($n1==$n2)&&($n3==0))||(($n1==$n3)&&($n2==0))||(($n2==$n3)&&($n1==0))) {
			three_of_a_kind();
		}

		if ((($n1==$n2)&&($n2==$n4))||(($n1==$n2)&&($n4==0))||(($n1==$n4)&&($n2==0))||(($n2==$n4)&&($n1==0))) {
			three_of_a_kind();
		}

		if ((($n1==$n2)&&($n2==$n5))||(($n1==$n2)&&($n5==0))||(($n1==$n5)&&($n2==0))||(($n2==$n5)&&($n1==0))) {
			three_of_a_kind();
		}

		if ((($n1==$n3)&&($n3==$n4))||(($n1==$n3)&&($n4==0))||(($n1==$n4)&&($n3==0))||(($n3==$n4)&&($n1==0))) {
			three_of_a_kind();
		}

		if ((($n1==$n3)&&($n3==$n5))||(($n1==$n3)&&($n5==0))||(($n1==$n5)&&($n3==0))||(($n3==$n5)&&($n1==0))) {
			three_of_a_kind();
		}

		if ((($n1==$n4)&&($n4==$n5))||(($n1==$n4)&&($n5==0))||(($n1==$n5)&&($n4==0))||(($n4==$n5)&&($n1==0))) {
			three_of_a_kind();
		}

		if ((($n2==$n3)&&($n3==$n4))||(($n2==$n3)&&($n4==0))||(($n2==$n4)&&($n3==0))||(($n3==$n4)&&($n2==0))) {
			three_of_a_kind();
		}

		if ((($n2==$n3)&&($n3==$n5))||(($n2==$n3)&&($n5==0))||(($n2==$n5)&&($n3==0))||(($n3==$n5)&&($n2==0))) {
			three_of_a_kind();
		}

		if ((($n2==$n4)&&($n4==$n5))||(($n2==$n4)&&($n5==0))||(($n2==$n5)&&($n4==0))||(($n4==$n5)&&($n2==0))) {
			three_of_a_kind();
		}

		if ((($n3==$n4)&&($n4==$n5))||(($n3==$n4)&&($n5==0))||(($n3==$n5)&&($n4==0))||(($n4==$n5)&&($n3==0))) {
			three_of_a_kind();
		}
	}

	//2 PAIRS

	if ($win == 0) {

		if ((($n1==$n2)&&($n3==$n4))||(($n1==$n3)&&($n2==$n4))||(($n1==$n4)&&($n2==$n3))) {
			two_pairs();
		}

		if ((($n1==$n2)&&($n3==$n5))||(($n1==$n3)&&($n2==$n5))||(($n1==$n5)&&($n2==$n3))) {
			two_pairs();
		}

		if ((($n1==$n2)&&($n4==$n5))||(($n1==$n5)&&($n2==$n4))||(($n1==$n4)&&($n2==$n5))) {
			two_pairs();
		}

		if ((($n1==$n3)&&($n4==$n5))||(($n1==$n5)&&($n3==$n4))||(($n1==$n4)&&($n3==$n5))) {
			two_pairs();
		}

		if ((($n2==$n3)&&($n4==$n5))||(($n3==$n5)&&($n2==$n4))||(($n3==$n4)&&($n2==$n5))) {
			two_pairs();
		}
	}

	//HIGH PAIR

	if ($win == 0) {

		if ($n1 == $n2) {

			if ($n1 > 10) {
				high_pair();
			}
			
		}

		if ($n1 == $n3) {

			if ($n1 > 10) {
				high_pair();
			}
			
		}

		if ($n1 == $n4) {

			if ($n1 > 10) {
				high_pair();
			}
			
		}

		if ($n1 == $n5) {

			if ($n1 > 10) {
				high_pair();
			}
			
		}

		if ($n2 == $n3) {

			if ($n2 > 10) {
				high_pair();
			}
			
		}

		if ($n2 == $n4) {

			if ($n2 > 10) {
				high_pair();
			}
		
		}

		if ($n2 == $n5) {

			if ($n2 > 10) {
				high_pair();
			}
			
		}

		if ($n3 == $n4) {

			if ($n3 > 10) {
				high_pair();
			}
		
		}

		if ($n3 == $n5) {

			if ($n3 > 10) {
				high_pair();
			}
			
		}

		if ($n4 == $n5) {

			if ($n4 > 10) {
				high_pair();
			}
		
		}

	}

	//HIGH PAIR WITH JOKER

	if ($win == 0) {

		if ($n1 == 0) {
			
			if ($n2 > 10) {
				high_pair();
			}

			if ($win == 0) {

				if ($n3 > 10) {
					high_pair();
				}
			}

			if ($win == 0) {

				if ($n4 > 10) {
					high_pair();
				}
			}

			if ($win == 0) {

				if ($n5 > 10) {
					high_pair();
				}
			}
		}
	}

	if ($win == 0) {

		if ($n2 == 0) {
			
			if ($n1 > 10) {
				high_pair();
			}

			if ($win == 0) {

				if ($n3 > 10) {
					high_pair();
				}
			}

			if ($win == 0) {

				if ($n4 > 10) {
					high_pair();
				}
			}

			if ($win == 0) {

				if ($n5 > 10) {
					high_pair();
				}
			}
		}
	}

	if ($win == 0) {

		if ($n3 == 0) {
			
			if ($n1 > 10) {
				high_pair();
			}

			if ($win == 0) {

				if ($n2 > 10) {
					high_pair();
				}
			}

			if ($win == 0) {

				if ($n4 > 10) {
					high_pair();
				}
			}

			if ($win == 0) {

				if ($n5 > 10) {
					high_pair();
				}
			}
		}
	}

	if ($win == 0) {

		if ($n4 == 0) {
			
			if ($n1 > 10) {
				high_pair();
			}

			if ($win == 0) {

				if ($n2 > 10) {
					high_pair();
				}
			}

			if ($win == 0) {

				if ($n3 > 10) {
					high_pair();
				}
			}

			if ($win == 0) {

				if ($n5 > 10) {
					high_pair();
				}
			}
		}
	}

	if ($win == 0) {

		if ($n5 == 0) {
			
			if ($n1 > 10) {
				high_pair();
			}

			if ($win == 0) {

				if ($n2 > 10) {
					high_pair();
				}
			}

			if ($win == 0) {

				if ($n3 > 10) {
					high_pair();
				}
			}

			if ($win == 0) {

				if ($n4 > 10) {
					high_pair();
				}
			}
		}
	}
	function five_of_a_kind() {
		$win ++;
		$Five_of_a_kind = 1;
	}
	function royal_flush() {
		$win ++;
		$Royal_flush = 1;
	}
	function street_flush() {
		$win ++;
		$Street_flush = 1;
	}
	function poker() {
		$win ++;
		$Poker = 1;
	}
	function full_house() {
		$win ++;
		$Full_house = 1;
	}
	function flush() {
		$win ++;
		$Flush = 1;
	}
	function street() {
		$win ++;
		$Street = 1;
	}
	function three_of_a_kind() {
		$win ++;
		$Three_of_a_kind = 1;
	}
	function two_pairs() {
		$win ++;
		$Two_pairs = 1;
	}
	function high_pair() {
		$win ++;
		$High_pair = 1;
	}
	if($win > 0) {
		document.getElementById("win_0").style.visibility = "hidden";
		document.getElementById("win_1").style.visibility = "hidden";
		document.getElementById("win_2").style.visibility = "hidden";
		document.getElementById("win_3").style.visibility = "hidden";
		document.getElementById("win_4").style.visibility = "hidden";
		document.getElementById("win_5").style.visibility = "hidden";
		document.getElementById("win_6").style.visibility = "hidden";
		document.getElementById("win_7").style.visibility = "hidden";
		document.getElementById("win_8").style.visibility = "hidden";
		document.getElementById("win_9").style.visibility = "hidden";
		document.getElementById("value_0").style.visibility = "hidden";
		document.getElementById("value_1").style.visibility = "hidden";
		document.getElementById("value_2").style.visibility = "hidden";
		document.getElementById("value_3").style.visibility = "hidden";
		document.getElementById("value_4").style.visibility = "hidden";
		document.getElementById("value_5").style.visibility = "hidden";
		document.getElementById("value_6").style.visibility = "hidden";
		document.getElementById("value_7").style.visibility = "hidden";
		document.getElementById("value_8").style.visibility = "hidden";
		document.getElementById("value_9").style.visibility = "hidden";
		table.style.visibility = "visible";

		document.getElementById("audio_win").play();
		audio_win.currentTime = 0;
		$was_win = 1;
	}
	$d = 0;

	if($Five_of_a_kind == 1) {
		document.getElementById("win_name").innerHTML = "FIVE OF A KIND";
		document.getElementById("win_name").style.visibility = "visible";
		document.getElementById("win_value").innerHTML = $wining_0;
		document.getElementById("win_value").style.visibility = "visible";
		$d = $wining_0;
	}
	if($Royal_flush == 1) {
		document.getElementById("win_name").innerHTML = "ROYAL FLUSH";
		document.getElementById("win_name").style.visibility = "visible";
		document.getElementById("win_value").innerHTML = $wining_1;
		document.getElementById("win_value").style.visibility = "visible";
		$d = $wining_1;
	}
	if($Street_flush == 1) {
		document.getElementById("win_name").innerHTML = "STREET FLUSH";
		document.getElementById("win_name").style.visibility = "visible";
		document.getElementById("win_value").innerHTML = $wining_2;
		document.getElementById("win_value").style.visibility = "visible";
		$d = $wining_2;
	}
	if($Poker == 1) {
		document.getElementById("win_name").innerHTML = "POKER";
		document.getElementById("win_name").style.visibility = "visible";
		document.getElementById("win_value").innerHTML = $wining_3;
		document.getElementById("win_value").style.visibility = "visible";
		$d = $wining_3;
	}
	if($Full_house == 1) {
		document.getElementById("win_name").innerHTML = "FULL HOUSE";
		document.getElementById("win_name").style.visibility = "visible";
		document.getElementById("win_value").innerHTML = $wining_4;
		document.getElementById("win_value").style.visibility = "visible";
		$d = $wining_4;
	}
	if($Flush == 1) {
		document.getElementById("win_name").innerHTML = "FLUSH";
		document.getElementById("win_name").style.visibility = "visible";
		document.getElementById("win_value").innerHTML = $wining_5;
		document.getElementById("win_value").style.visibility = "visible";
		$d = $wining_5;
	}
	if($Street == 1) {
		document.getElementById("win_name").innerHTML = "STREET";
		document.getElementById("win_name").style.visibility = "visible";
		document.getElementById("win_value").innerHTML = $wining_6;
		document.getElementById("win_value").style.visibility = "visible";
		$d = $wining_6;
	}
	if($Three_of_a_kind == 1) {
		document.getElementById("win_name").innerHTML = "THREE OF A KIND";
		document.getElementById("win_name").style.visibility = "visible";
		document.getElementById("win_value").innerHTML = $wining_7;
		document.getElementById("win_value").style.visibility = "visible";
		$d = $wining_7;
	}
	if($Two_pairs == 1) {
		document.getElementById("win_name").innerHTML = "2 PAIRS";
		document.getElementById("win_name").style.visibility = "visible";
		document.getElementById("win_value").innerHTML = $wining_8;
		document.getElementById("win_value").style.visibility = "visible";
		$d = $wining_8;
	}
	if($High_pair == 1) {
		document.getElementById("win_name").innerHTML = "HIGH PAIR";
		document.getElementById("win_name").style.visibility = "visible";
		document.getElementById("win_value").innerHTML = $wining_9;
		document.getElementById("win_value").style.visibility = "visible";
		$d = $wining_9;
	}
	if($win == 0) {
		clearInterval($waiting_9);
		clearInterval($waiting_10);
		$no_win = setInterval(No_win,500);
	}
	else{
		if($d < 10000) {
			left_choice.style.visibility = "visible"
			right_choice.style.visibility = "hidden"
			choice_1 = setInterval(Choice_right,500);
			choice_2 = setInterval(Choice_left,1000);

			window.addEventListener("keydown", Doubling_Cashing);
		}
		else {
			victory.style.visibility = "visible";
			choice_1 = setInterval(Block,3000);
		}
	}
	function Choice_left() {
		left_choice.style.visibility = "visible";
		right_choice.style.visibility = "hidden";
	}
	function Choice_right() {
		left_choice.style.visibility = "hidden";
		right_choice.style.visibility = "visible";
	}
	function Doubling_Cashing(event) {
		switch(event.keyCode) {
			
			case 13 : 
				window.removeEventListener("keydown", Doubling_Cashing);
				clearInterval(choice_1);
				clearInterval(choice_2);
				left_choice.style.visibility = "hidden";
				right_choice.style.visibility = "hidden";
				audio_win.currentTime = 5;
				$field_1.style.visibility = "hidden";
				$field_2.style.visibility = "hidden";
				$field_3.style.visibility = "hidden";
				$field_4.style.visibility = "hidden";
				$field_5.style.visibility = "hidden";
				$deal = 10;
				console.log($deal);
				break;
				// DOUBLING
			case 32 :
				window.removeEventListener("keydown", Doubling_Cashing);
				clearInterval(choice_1);
				clearInterval(choice_2);
				left_choice.style.visibility = "hidden";
				right_choice.style.visibility = "hidden";
				victory.style.visibility = "visible";
				audio_win.currentTime = 5;
				$deal = 11;
				console.log($deal);
				break;
				// CASHING
			}
		}
	function No_win() {
		$deal = 0;
		$includeJs("Poker.js");
	}
	function Block() {
		clearInterval(choice_1);
		$deal = 11;
		console.log($deal);
	}
}
