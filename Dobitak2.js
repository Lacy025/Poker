$waiting_8 = setInterval(Cekanje8, 500);
  
function Cekanje8() {
	console.log($deal);

	if($deal==9) {

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
		$win_2 = setInterval(Dobitak2,200);
	}
}
function Dobitak2() {

	clearInterval($win_2);

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

			$win ++;
			$Five_of_a_kind = 1;
		}

	}
	
	// ROYAL FLUSH OR STREET

	if ($win == 0) {

		let ROYAL = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {ROYAL++;}
		if ($n1==10||$n2==10||$n3==10||$n4==10||$n5==10) {ROYAL++;}
		if ($n1==11||$n2==11||$n3==11||$n4==11||$n5==11) {ROYAL++;}
		if ($n1==12||$n2==12||$n3==12||$n4==12||$n5==12) {ROYAL++;}
		if ($n1==13||$n2==13||$n3==13||$n4==13||$n5==13) {ROYAL++;}
		if ($n1==14||$n2==14||$n3==14||$n4==14||$n5==14) {ROYAL++;}

		if (ROYAL==5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				$win ++;
				$Royal_flush = 1;
			}
			else {
				$win ++;
				$Street = 1;
			}
		}
	}

	// STREET FLUSH OR STREET
	// 1-5

	if ($win == 0) {

		let STRFL1 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL1++;}
		if ($n1==14||$n2==14||$n3==14||$n4==14||$n5==14) {STRFL1++;}
		if ($n1==2||$n2==2||$n3==2||$n4==2||$n5==2) {STRFL1++;}
		if ($n1==3||$n2==3||$n3==3||$n4==3||$n5==3) {STRFL1++;}
		if ($n1==4||$n2==4||$n3==4||$n4==4||$n5==4) {STRFL1++;}
		if ($n1==5||$n2==5||$n3==5||$n4==5||$n5==5) {STRFL1++;}

		if (STRFL1==5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				$win ++;
				$Street_flush = 1;
			}
			else {
				$win ++;
				$Street = 1;
			}
		}
	}

	// STREET FLUSH OR STREET
	// 2-6

	if ($win == 0) {

		let STRFL2 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL2++;}
		if ($n1==2||$n2==2||$n3==2||$n4==2||$n5==2) {STRFL2++;}
		if ($n1==3||$n2==3||$n3==3||$n4==3||$n5==3) {STRFL2++;}
		if ($n1==4||$n2==4||$n3==4||$n4==4||$n5==4) {STRFL2++;}
		if ($n1==5||$n2==5||$n3==5||$n4==5||$n5==5) {STRFL2++;}
		if ($n1==6||$n2==6||$n3==6||$n4==6||$n5==6) {STRFL2++;}

		if (STRFL2==5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				$win ++;
				$Street_flush = 1;
			}
			else {
				$win ++;
				$Street = 1;
			}
		}
	}

	// STREET FLUSH OR STREET
	// 3-7

	if ($win == 0) {

		let STRFL3 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL3++;}
		if ($n1==3||$n2==3||$n3==3||$n4==3||$n5==3) {STRFL3++;}
		if ($n1==4||$n2==4||$n3==4||$n4==4||$n5==4) {STRFL3++;}
		if ($n1==5||$n2==5||$n3==5||$n4==5||$n5==5) {STRFL3++;}
		if ($n1==6||$n2==6||$n3==6||$n4==6||$n5==6) {STRFL3++;}
		if ($n1==7||$n2==7||$n3==7||$n4==7||$n5==7) {STRFL3++;}

		if (STRFL3==5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				$win ++;
				$Street_flush = 1;
			}
			else {
				$win ++;
				$Street = 1;
			}
		}
	}

	// STREET FLUSH OR STREET
	// 4-8

	if ($win == 0) {

		let STRFL4 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL4++;}
		if ($n1==4||$n2==4||$n3==4||$n4==4||$n5==4) {STRFL4++;}
		if ($n1==5||$n2==5||$n3==5||$n4==5||$n5==5) {STRFL4++;}
		if ($n1==6||$n2==6||$n3==6||$n4==6||$n5==6) {STRFL4++;}
		if ($n1==7||$n2==7||$n3==7||$n4==7||$n5==7) {STRFL4++;}
		if ($n1==8||$n2==8||$n3==8||$n4==8||$n5==8) {STRFL4++;}

		if (STRFL4==5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				$win ++;
				$Street_flush = 1;
			}
			else {
				$win ++;
				$Street = 1;
			}
		}
	}

	// STREET FLUSH OR STREET
	// 5-9

	if ($win == 0) {

		let STRFL5 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL5++;}
		if ($n1==5||$n2==5||$n3==5||$n4==5||$n5==5) {STRFL5++;}
		if ($n1==6||$n2==6||$n3==6||$n4==6||$n5==6) {STRFL5++;}
		if ($n1==7||$n2==7||$n3==7||$n4==7||$n5==7) {STRFL5++;}
		if ($n1==8||$n2==8||$n3==8||$n4==8||$n5==8) {STRFL5++;}
		if ($n1==9||$n2==9||$n3==9||$n4==9||$n5==9) {STRFL5++;}

		if (STRFL5==5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				$win ++;
				$Street_flush = 1;
			}
			else {
				$win ++;
				$Street = 1;
			}
		}
	}

	// STREET FLUSH OR STREET
	// 6-10

	if ($win == 0) {

		let STRFL6 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL6++;}
		if ($n1==6||$n2==6||$n3==6||$n4==6||$n5==6) {STRFL6++;}
		if ($n1==7||$n2==7||$n3==7||$n4==7||$n5==7) {STRFL6++;}
		if ($n1==8||$n2==8||$n3==8||$n4==8||$n5==8) {STRFL6++;}
		if ($n1==9||$n2==9||$n3==9||$n4==9||$n5==9) {STRFL6++;}
		if ($n1==10||$n2==10||$n3==10||$n4==10||$n5==10) {STRFL6++;}

		if (STRFL6==5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				$win ++;
				$Street_flush = 1;
			}
			else {
				$win ++;
				$Street = 1;
			}
		}
	}

	// STREET FLUSH OR STREET
	// 7-11

	if ($win == 0) {

		let STRFL7 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL7++;}
		if ($n1==7||$n2==7||$n3==7||$n4==7||$n5==7) {STRFL7++;}
		if ($n1==8||$n2==8||$n3==8||$n4==8||$n5==8) {STRFL7++;}
		if ($n1==9||$n2==9||$n3==9||$n4==9||$n5==9) {STRFL7++;}
		if ($n1==10||$n2==10||$n3==10||$n4==10||$n5==10) {STRFL7++;}
		if ($n1==11||$n2==11||$n3==11||$n4==11||$n5==11) {STRFL7++;}

		if (STRFL7==5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				$win ++;
				$Street_flush = 1;
			}
			else {
				$win ++;
				$Street = 1;
			}
		}
	}

	// STREET FLUSH OR STREET
	// 8-12

	if ($win == 0) {

		let STRFL8 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL8++;}
		if ($n1==8||$n2==8||$n3==8||$n4==8||$n5==8) {STRFL8++;}
		if ($n1==9||$n2==9||$n3==9||$n4==9||$n5==9) {STRFL8++;}
		if ($n1==10||$n2==10||$n3==10||$n4==10||$n5==10) {STRFL8++;}
		if ($n1==11||$n2==11||$n3==11||$n4==11||$n5==11) {STRFL8++;}
		if ($n1==12||$n2==12||$n3==12||$n4==12||$n5==12) {STRFL8++;}

		if (STRFL8==5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				$win ++;
				$Street_flush = 1;
			}
			else {
				$win ++;
				$Street = 1;
			}
		}
	}

	// STREET FLUSH OR STREET
	// 9-13

	if ($win == 0) {

		let STRFL9 = 0;

		if ($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL9++;}
		if ($n1==9||$n2==9||$n3==9||$n4==9||$n5==9) {STRFL9++;}
		if ($n1==10||$n2==10||$n3==10||$n4==10||$n5==10) {STRFL9++;}
		if ($n1==11||$n2==11||$n3==11||$n4==11||$n5==11) {STRFL9++;}
		if ($n1==12||$n2==12||$n3==12||$n4==12||$n5==12) {STRFL9++;}
		if ($n1==13||$n2==13||$n3==13||$n4==13||$n5==13) {STRFL9++;}

		if (STRFL9==5) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				$win ++;
				$Street_flush = 1;
			}
			else {
				$win ++;
				$Street = 1;
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

			$win ++;
			$Poker = 1;
		}

		if ((($n1==$n2)&&($n2==$n3)&&($n3==$n5)) ||
				(($n1==$n2)&&($n2==$n3)&&($n5==0)) ||
				(($n1==$n2)&&($n3==0)&&($n2==$n5)) ||
				(($n1==$n3)&&($n2==0)&&($n3==$n5)) ||
				(($n1==0)&&($n2==$n3)&&($n3==$n5))) {
		
			$win ++;
			$Poker = 1;
		}

		if ((($n1==$n2)&&($n2==$n4)&&($n4==$n5)) ||
				(($n1==$n2)&&($n2==$n4)&&($n5==0)) ||
				(($n1==$n2)&&($n4==0)&&($n2==$n5)) ||
				(($n1==$n4)&&($n2==0)&&($n4==$n5)) ||
				(($n1==0)&&($n2==$n4)&&($n4==$n5))) {
			
			$win ++;
			$Poker = 1;
		}

		if ((($n1==$n3)&&($n3==$n4)&&($n4==$n5)) ||
				(($n1==$n3)&&($n3==$n4)&&($n5==0)) ||
				(($n1==$n3)&&($n4==0)&&($n3==$n5)) ||
				(($n1==$n4)&&($n3==0)&&($n4==$n5)) ||
				(($n1==0)&&($n3==$n4)&&($n4==$n5))) {
			
			$win ++;
			$Poker = 1;
		}

		if ((($n2==$n3)&&($n3==$n4)&&($n4==$n5)) ||
				(($n2==$n3)&&($n3==$n4)&&($n5==0)) ||
				(($n2==$n3)&&($n4==0)&&($n3==$n5)) ||
				(($n2==$n4)&&($n3==0)&&($n4==$n5)) ||
				(($n2==0)&&($n3==$n4)&&($n4==$n5))) {
			
			$win ++;
			$Poker = 1;
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

			$win ++;
			$Full_house = 1;
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

			$win ++;
			$Flush = 1;
		}
	}

	//THREE OF A KIND

	if ($win == 0) {

		if ((($n1==$n2)&&($n2==$n3))||(($n1==$n2)&&($n3==0))||(($n1==$n3)&&($n2==0))||(($n2==$n3)&&($n1==0))) {
			$win ++;
			$Three_of_a_kind = 1;
		}

		if ((($n1==$n2)&&($n2==$n4))||(($n1==$n2)&&($n4==0))||(($n1==$n4)&&($n2==0))||(($n2==$n4)&&($n1==0))) {
			$win ++;
			$Three_of_a_kind = 1;
		}

		if ((($n1==$n2)&&($n2==$n5))||(($n1==$n2)&&($n5==0))||(($n1==$n5)&&($n2==0))||(($n2==$n5)&&($n1==0))) {
			$win ++;
			$Three_of_a_kind = 1;
		}

		if ((($n1==$n3)&&($n3==$n4))||(($n1==$n3)&&($n4==0))||(($n1==$n4)&&($n3==0))||(($n3==$n4)&&($n1==0))) {
			$win ++;
			$Three_of_a_kind = 1;
		}

		if ((($n1==$n3)&&($n3==$n5))||(($n1==$n3)&&($n5==0))||(($n1==$n5)&&($n3==0))||(($n3==$n5)&&($n1==0))) {
			$win ++;
			$Three_of_a_kind = 1;
		}

		if ((($n1==$n4)&&($n4==$n5))||(($n1==$n4)&&($n5==0))||(($n1==$n5)&&($n4==0))||(($n4==$n5)&&($n1==0))) {
			$win ++;
			$Three_of_a_kind = 1;
		}

		if ((($n2==$n3)&&($n3==$n4))||(($n2==$n3)&&($n4==0))||(($n2==$n4)&&($n3==0))||(($n3==$n4)&&($n2==0))) {
			$win ++;
			$Three_of_a_kind = 1;
		}

		if ((($n2==$n3)&&($n3==$n5))||(($n2==$n3)&&($n5==0))||(($n2==$n5)&&($n3==0))||(($n3==$n5)&&($n2==0))) {
			$win ++;
			$Three_of_a_kind = 1;
		}

		if ((($n2==$n4)&&($n4==$n5))||(($n2==$n4)&&($n5==0))||(($n2==$n5)&&($n4==0))||(($n4==$n5)&&($n2==0))) {
			$win ++;
			$Three_of_a_kind = 1;
		}

		if ((($n3==$n4)&&($n4==$n5))||(($n3==$n4)&&($n5==0))||(($n3==$n5)&&($n4==0))||(($n4==$n5)&&($n3==0))) {
			$win ++;
			$Three_of_a_kind = 1;
		}
	}

	//2 PAIRS

	if ($win == 0) {

		if ((($n1==$n2)&&($n3==$n4))||(($n1==$n3)&&($n2==$n4))||(($n1==$n4)&&($n2==$n3))) {
			$win ++;
			$Two_pairs = 1;
		}

		if ((($n1==$n2)&&($n3==$n5))||(($n1==$n3)&&($n2==$n5))||(($n1==$n5)&&($n2==$n3))) {
			$win ++;
			$Two_pairs = 1;
		}

		if ((($n1==$n2)&&($n4==$n5))||(($n1==$n5)&&($n2==$n4))||(($n1==$n4)&&($n2==$n5))) {
			$win ++;
			$Two_pairs = 1;
		}

		if ((($n1==$n3)&&($n4==$n5))||(($n1==$n5)&&($n3==$n4))||(($n1==$n4)&&($n3==$n5))) {
			$win ++;
			$Two_pairs = 1;
		}

		if ((($n2==$n3)&&($n4==$n5))||(($n3==$n5)&&($n2==$n4))||(($n3==$n4)&&($n2==$n5))) {
			$win ++;
			$Two_pairs = 1;
		}
	}

	//HIGH PAIR

	if ($win == 0) {

		if ($n1==$n2) {

			if ($n1>10) {
				$win ++;
				$High_pair = 1;
			}
			
		}

		if ($n1==$n3) {

			if ($n1>10) {
				$win ++;
				$High_pair = 1;
			}
			
		}

		if ($n1==$n4) {

			if ($n1>10) {
				$win ++;
				$High_pair = 1;
			}
			
		}

		if ($n1==$n5) {

			if ($n1>10) {
				$win ++;
				$High_pair = 1;
			}
			
		}

		if ($n2==$n3) {

			if ($n2>10) {
				$win ++;
				$High_pair = 1;
			}
			
		}

		if ($n2==$n4) {

			if ($n2>10) {
				$win ++;
				$High_pair = 1;
			}
		
		}

		if ($n2==$n5) {

			if ($n2>10) {
				$win ++;
				$High_pair = 1;
			}
			
		}

		if ($n3==$n4) {

			if ($n3>10) {
				$win ++;
				$High_pair = 1;
			}
		
		}

		if ($n3==$n5) {

			if ($n3>10) {
				$win ++;
				$High_pair = 1;
			}
			
		}

		if ($n4==$n5) {

			if ($n4>10) {
				$win ++;
				$High_pair = 1;
			}
		
		}

	}

	//HIGH PAIR WITH JOKER

	if ($win == 0) {

		if ($n1==0) {
			
			if ($n2>10) {
				
				$win ++;
				$High_pair = 1;
			}

			if ($win == 0) {

				if ($n3>10) {
					
					$win ++;
					$High_pair = 1;
				}
			}

			if ($win == 0) {

				if ($n4>10) {
					
					$win ++;
					$High_pair = 1;
				}
			}

			if ($win == 0) {

				if ($n5>10) {
					
					$win ++;
					$High_pair = 1;
				}
			}
		}
	}

	if ($win == 0) {

		if ($n2==0) {
			
			if ($n1>10) {
				
				$win ++;
				$High_pair = 1;
			}

			if ($win == 0) {

				if ($n3>10) {
					
					$win ++;
					$High_pair = 1;
				}
			}

			if ($win == 0) {

				if ($n4>10) {
					
					$win ++;
					$High_pair = 1;
				}
			}

			if ($win == 0) {

				if ($n5>10) {
					
					$win ++;
					$High_pair = 1;
				}
			}
		}
	}

	if ($win == 0) {

		if ($n3==0) {
			
			if ($n1>10) {
				
				$win ++;
				$High_pair = 1;
			}

			if ($win == 0) {

				if ($n2>10) {
					
					$win ++;
					$High_pair = 1;
				}
			}

			if ($win == 0) {

				if ($n4>10) {
					
					$win ++;
					$High_pair = 1;
				}
			}

			if ($win == 0) {

				if ($n5>10) {
					
					$win ++;
					$High_pair = 1;
				}
			}
		}
	}

	if ($win == 0) {

		if ($n4==0) {
			
			if ($n1>10) {
				
				$win ++;
				$High_pair = 1;
			}

			if ($win == 0) {

				if ($n2>10) {
					
					$win ++;
					$High_pair = 1;
				}
			}

			if ($win == 0) {

				if ($n3>10) {
					
					$win ++;
					$High_pair = 1;
				}
			}

			if ($win == 0) {

				if ($n5>10) {
					
					$win ++;
					$High_pair = 1;
				}
			}
		}
	}

	if ($win == 0) {

		if ($n5==0) {
			
			if ($n1>10) {
				
				$win ++;
				$High_pair = 1;
			}

			if ($win == 0) {

				if ($n2>10) {
					
					$win ++;
					$High_pair = 1;
				}
			}

			if ($win == 0) {

				if ($n3>10) {
					
					$win ++;
					$High_pair = 1;
				}
			}

			if ($win == 0) {

				if ($n4>10) {
					
					$win ++;
					$High_pair = 1;
				}
			}
		}
	}
	if($win > 0) {
		document.getElementById("dobitak0").style.visibility = "hidden";
		document.getElementById("dobitak1").style.visibility = "hidden";
		document.getElementById("dobitak2").style.visibility = "hidden";
		document.getElementById("dobitak3").style.visibility = "hidden";
		document.getElementById("dobitak4").style.visibility = "hidden";
		document.getElementById("dobitak5").style.visibility = "hidden";
		document.getElementById("dobitak6").style.visibility = "hidden";
		document.getElementById("dobitak7").style.visibility = "hidden";
		document.getElementById("dobitak8").style.visibility = "hidden";
		document.getElementById("dobitak9").style.visibility = "hidden";
		document.getElementById("dobit0").style.visibility = "hidden";
		document.getElementById("dobit1").style.visibility = "hidden";
		document.getElementById("dobit2").style.visibility = "hidden";
		document.getElementById("dobit3").style.visibility = "hidden";
		document.getElementById("dobit4").style.visibility = "hidden";
		document.getElementById("dobit5").style.visibility = "hidden";
		document.getElementById("dobit6").style.visibility = "hidden";
		document.getElementById("dobit7").style.visibility = "hidden";
		document.getElementById("dobit8").style.visibility = "hidden";
		document.getElementById("dobit9").style.visibility = "hidden";
		tabela.style.visibility = "visible";

		document.getElementById("audioDobitak").play();
		audioDobitak.currentTime = 0;
		$was_win = 1;
	}
	$d = 0;

	if($Five_of_a_kind == 1) {
		document.getElementById("nazivdobitka").innerHTML = "FIVE OF A KIND";
		document.getElementById("nazivdobitka").style.visibility = "visible";
		document.getElementById("vrednostdobitka").innerHTML = $d0;
		document.getElementById("vrednostdobitka").style.visibility = "visible";
		$d = $d0;
	}
	if($Royal_flush == 1) {
		document.getElementById("nazivdobitka").innerHTML = "ROYAL FLUSH";
		document.getElementById("nazivdobitka").style.visibility = "visible";
		document.getElementById("vrednostdobitka").innerHTML = $d1;
		document.getElementById("vrednostdobitka").style.visibility = "visible";
		$d = $d1;
	}
	if($Street_flush == 1) {
		document.getElementById("nazivdobitka").innerHTML = "STREET FLUSH";
		document.getElementById("nazivdobitka").style.visibility = "visible";
		document.getElementById("vrednostdobitka").innerHTML = $d2;
		document.getElementById("vrednostdobitka").style.visibility = "visible";
		$d = $d2;
	}
	if($Poker == 1) {
		document.getElementById("nazivdobitka").innerHTML = "POKER";
		document.getElementById("nazivdobitka").style.visibility = "visible";
		document.getElementById("vrednostdobitka").innerHTML = $d3;
		document.getElementById("vrednostdobitka").style.visibility = "visible";
		$d = $d3;
	}
	if($Full_house == 1) {
		document.getElementById("nazivdobitka").innerHTML = "FULL HOUSE";
		document.getElementById("nazivdobitka").style.visibility = "visible";
		document.getElementById("vrednostdobitka").innerHTML = $d4;
		document.getElementById("vrednostdobitka").style.visibility = "visible";
		$d = $d4;
	}
	if($Flush == 1) {
		document.getElementById("nazivdobitka").innerHTML = "FLUSH";
		document.getElementById("nazivdobitka").style.visibility = "visible";
		document.getElementById("vrednostdobitka").innerHTML = $d5;
		document.getElementById("vrednostdobitka").style.visibility = "visible";
		$d = $d5;
	}
	if($Street == 1) {
		document.getElementById("nazivdobitka").innerHTML = "STREET";
		document.getElementById("nazivdobitka").style.visibility = "visible";
		document.getElementById("vrednostdobitka").innerHTML = $d6;
		document.getElementById("vrednostdobitka").style.visibility = "visible";
		$d = $d6;
	}
	if($Three_of_a_kind == 1) {
		document.getElementById("nazivdobitka").innerHTML = "THREE OF A KIND";
		document.getElementById("nazivdobitka").style.visibility = "visible";
		document.getElementById("vrednostdobitka").innerHTML = $d7;
		document.getElementById("vrednostdobitka").style.visibility = "visible";
		$d = $d7;
	}
	if($Two_pairs == 1) {
		document.getElementById("nazivdobitka").innerHTML = "2 PAIRS";
		document.getElementById("nazivdobitka").style.visibility = "visible";
		document.getElementById("vrednostdobitka").innerHTML = $d8;
		document.getElementById("vrednostdobitka").style.visibility = "visible";
		$d = $d8;
	}
	if($High_pair == 1) {
		document.getElementById("nazivdobitka").innerHTML = "HIGH PAIR";
		document.getElementById("nazivdobitka").style.visibility = "visible";
		document.getElementById("vrednostdobitka").innerHTML = $d9;
		document.getElementById("vrednostdobitka").style.visibility = "visible";
		$d = $d9;
	}
	if($win == 0) {
		clearInterval($waiting_9);
		clearInterval($waiting_10);
		$timerNemadobitka = setInterval(Nemadobitka,500);
	}
	else{
		if($d<10000) {
			izborlevo.style.visibility = "visible"
			izbordesno.style.visibility = "hidden"
			choice_1 = setInterval(Izbordesno,500);
			choice_2 = setInterval(Izborlevo,1000);

			window.addEventListener("keydown", DupliranjeKasiranje);
		}
		else {
			victory.style.visibility = "visible";
			choice_1 = setInterval(Blokada,3000);
		}
	}
	function Izborlevo() {
		izborlevo.style.visibility = "visible";
		izbordesno.style.visibility = "hidden";
	}
	function Izbordesno() {
		izborlevo.style.visibility = "hidden";
		izbordesno.style.visibility = "visible";
	}
	function DupliranjeKasiranje(event) {
		switch(event.keyCode) {
			
			case 13 : 
				window.removeEventListener("keydown", DupliranjeKasiranje);
				clearInterval(choice_1);
				clearInterval(choice_2);
				izborlevo.style.visibility = "hidden";
				izbordesno.style.visibility = "hidden";
				audioDobitak.currentTime = 5;
				$polje1.style.visibility = "hidden";
				$polje2.style.visibility = "hidden";
				$polje3.style.visibility = "hidden";
				$polje4.style.visibility = "hidden";
				$polje5.style.visibility = "hidden";
				$deal = 10;
				console.log($deal);
				break;
				// DUPLIRANJE
			case 32 :
				window.removeEventListener("keydown", DupliranjeKasiranje);
				clearInterval(choice_1);
				clearInterval(choice_2);
				izborlevo.style.visibility = "hidden";
				izbordesno.style.visibility = "hidden";
				victory.style.visibility = "visible";
				audioDobitak.currentTime = 5;
				$deal = 11;
				console.log($deal);
				break;
				// KASIRANJE
			}
		}
	function Nemadobitka() {
		$deal = 0;
		$includeJs("Poker.js");
	}
	function Blokada() {
		clearInterval(choice_1);
		$deal = 11;
		console.log($deal);
	}
}
