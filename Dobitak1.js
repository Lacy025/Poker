$waiting_6 = setInterval(Cekanje6, 100);
  
function Cekanje6() {
	console.log($deal);

	if($deal == 7) {
		clearInterval($waiting_6);
		$win_1 = setInterval($Dobitak1,100);
	}
}
function $Dobitak1() {

	clearInterval($win_1);

	$win = 0;
	$two_of_a_kind = 0;
	$four_colors = 0;

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

	$hold1 = 0;
	$hold2 = 0;
	$hold3 = 0;
	$hold4 = 0;
	$hold5 = 0;

	console.log($n1);
	console.log($n2);
	console.log($n3);
	console.log($n4);
	console.log($n5);

	function ProveraBoje1() {

		$win ++;
		$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;

		if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
			(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
			(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
			(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
			(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
			($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				$Royal_flush = 1;
		}
		else {
			$Street = 1;
		}
	}
	function ProveraBoje2() {

		$win ++;
		$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;

		if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
			(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
			(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
			(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
			(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
			($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) {

				$Street_flush = 1;
		}
		else {
			$Street = 1;
		}
	}
	function DveIste() {

		if($n5==$n4||$n5==$n3||$n5==$n2||$n5==$n1) {$hold5=0}
		if($n4==$n3||$n4==$n2||$n4==$n1) {$hold4=0};
		if($n3==$n2||$n3==$n1) {$hold3=0}
		if($n2==$n1) {$hold2=0}

		HALFSTREET = 1;
	}

	// FIVE OF A KIND

	if($win == 0) {

		if ((($n1==$n2)&&($n2==$n3)&&($n3==$n4)&&($n5==0)) ||
			(($n1==$n2)&&($n2==$n3)&&($n4==0)&&($n3==$n5)) ||
			(($n1==$n2)&&($n3==0)&&($n2==$n4)&&($n4==$n5)) ||
			(($n1==$n3)&&($n2==0)&&($n3==$n4)&&($n4==$n5)) ||
			(($n1==0)&&($n2==$n3)&&($n3==$n4)&&($n4==$n5))) {

			$win ++;
			$Five_of_a_kind = 1;
		}

	}
	let HALFSTREET = 0;
	let ROYAL = 0;
	let STRFL1 = 0;
	let STRFL2 = 0;
	let STRFL3 = 0;
	let STRFL4 = 0;
	let STRFL5 = 0;
	let STRFL6 = 0;
	let STRFL7 = 0;
	let STRFL8 = 0;
	let STRFL9 = 0;

	// ROYAL FLUSH OR STREET

	if($win == 0) {

		if($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {ROYAL++;}
		if($n1==10||$n2==10||$n3==10||$n4==10||$n5==10) {ROYAL++;}
		if($n1==11||$n2==11||$n3==11||$n4==11||$n5==11) {ROYAL++;}
		if($n1==12||$n2==12||$n3==12||$n4==12||$n5==12) {ROYAL++;}
		if($n1==13||$n2==13||$n3==13||$n4==13||$n5==13) {ROYAL++;}
		if($n1==14||$n2==14||$n3==14||$n4==14||$n5==14) {ROYAL++;}

		if(ROYAL==5) {
			ProveraBoje1();
		}
		if(ROYAL==4) {

			if($n1==0||$n1==10||$n1==11||$n1==12||$n1==13||$n1==14) {$hold1=1}
			if($n2==0||$n2==10||$n2==11||$n2==12||$n2==13||$n2==14) {$hold2=1}
			if($n3==0||$n3==10||$n3==11||$n3==12||$n3==13||$n3==14) {$hold3=1}
			if($n4==0||$n4==10||$n4==11||$n4==12||$n4==13||$n4==14) {$hold4=1}
			if($n5==0||$n5==10||$n5==11||$n5==12||$n5==13||$n5==14) {$hold5=1}

			DveIste();
		}
	}

	// STREET FLUSH OR STREET
	// 9-13

	if($win == 0) {

		if($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL9++;}
		if($n1==9||$n2==9||$n3==9||$n4==9||$n5==9) {STRFL9++;}
		if($n1==10||$n2==10||$n3==10||$n4==10||$n5==10) {STRFL9++;}
		if($n1==11||$n2==11||$n3==11||$n4==11||$n5==11) {STRFL9++;}
		if($n1==12||$n2==12||$n3==12||$n4==12||$n5==12) {STRFL9++;}
		if($n1==13||$n2==13||$n3==13||$n4==13||$n5==13) {STRFL9++;}

		if(STRFL9==5) {
			ProveraBoje2();
		}
		if(STRFL9==4&&ROYAL<4) {

			if($n1==0||$n1==9||$n1==10||$n1==11||$n1==12||$n1==13) {$hold1=1}
			if($n2==0||$n2==9||$n2==10||$n2==11||$n2==12||$n2==13) {$hold2=1}
			if($n3==0||$n3==9||$n3==10||$n3==11||$n3==12||$n3==13) {$hold3=1}
			if($n4==0||$n4==9||$n4==10||$n4==11||$n4==12||$n4==13) {$hold4=1}
			if($n5==0||$n5==9||$n5==10||$n5==11||$n5==12||$n5==13) {$hold5=1}

			DveIste();
		}
	}

	// STREET FLUSH OR STREET
	// 8-12

	if($win == 0) {

		if($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL8++;}
		if($n1==8||$n2==8||$n3==8||$n4==8||$n5==8) {STRFL8++;}
		if($n1==9||$n2==9||$n3==9||$n4==9||$n5==9) {STRFL8++;}
		if($n1==10||$n2==10||$n3==10||$n4==10||$n5==10) {STRFL8++;}
		if($n1==11||$n2==11||$n3==11||$n4==11||$n5==11) {STRFL8++;}
		if($n1==12||$n2==12||$n3==12||$n4==12||$n5==12) {STRFL8++;}

		if(STRFL8==5) {
			ProveraBoje2();
		}
		if(STRFL8==4&&STRFL9<4&&ROYAL<4) {

			if($n1==0||$n1==8||$n1==9||$n1==10||$n1==11||$n1==12) {$hold1=1}
			if($n2==0||$n2==8||$n2==9||$n2==10||$n2==11||$n2==12) {$hold2=1}
			if($n3==0||$n3==8||$n3==9||$n3==10||$n3==11||$n3==12) {$hold3=1}
			if($n4==0||$n4==8||$n4==9||$n4==10||$n4==11||$n4==12) {$hold4=1}
			if($n5==0||$n5==8||$n5==9||$n5==10||$n5==11||$n5==12) {$hold5=1}

			DveIste();
		}
	}

	// STREET FLUSH OR STREET
	// 7-11

	if($win == 0) {

		if($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL7++;}
		if($n1==7||$n2==7||$n3==7||$n4==7||$n5==7) {STRFL7++;}
		if($n1==8||$n2==8||$n3==8||$n4==8||$n5==8) {STRFL7++;}
		if($n1==9||$n2==9||$n3==9||$n4==9||$n5==9) {STRFL7++;}
		if($n1==10||$n2==10||$n3==10||$n4==10||$n5==10) {STRFL7++;}
		if($n1==11||$n2==11||$n3==11||$n4==11||$n5==11) {STRFL7++;}

		if(STRFL7==5) {
			ProveraBoje2();
		}
		if(STRFL7==4&&STRFL8<4&&STRFL9<4&&ROYAL<4) {

			if($n1==0||$n1==7||$n1==8||$n1==9||$n1==10||$n1==11) {$hold1=1}
			if($n2==0||$n2==7||$n2==8||$n2==9||$n2==10||$n2==11) {$hold2=1}
			if($n3==0||$n3==7||$n3==8||$n3==9||$n3==10||$n3==11) {$hold3=1}
			if($n4==0||$n4==7||$n4==8||$n4==9||$n4==10||$n4==11) {$hold4=1}
			if($n5==0||$n5==7||$n5==8||$n5==9||$n5==10||$n5==11) {$hold5=1}

			DveIste();
		}
	}

	// STREET FLUSH OR STREET
	// 6-10

	if($win == 0) {

		if($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL6++;}
		if($n1==6||$n2==6||$n3==6||$n4==6||$n5==6) {STRFL6++;}
		if($n1==7||$n2==7||$n3==7||$n4==7||$n5==7) {STRFL6++;}
		if($n1==8||$n2==8||$n3==8||$n4==8||$n5==8) {STRFL6++;}
		if($n1==9||$n2==9||$n3==9||$n4==9||$n5==9) {STRFL6++;}
		if($n1==10||$n2==10||$n3==10||$n4==10||$n5==10) {STRFL6++;}

		if(STRFL6==5) {
			ProveraBoje2();
		}
		if(STRFL6==4&&STRFL7<4&&STRFL8<4&&STRFL9<4) {

			if($n1==0||$n1==6||$n1==7||$n1==8||$n1==9||$n1==10) {$hold1=1}
			if($n2==0||$n2==6||$n2==7||$n2==8||$n2==9||$n2==10) {$hold2=1}
			if($n3==0||$n3==6||$n3==7||$n3==8||$n3==9||$n3==10) {$hold3=1}
			if($n4==0||$n4==6||$n4==7||$n4==8||$n4==9||$n4==10) {$hold4=1}
			if($n5==0||$n5==6||$n5==7||$n5==8||$n5==9||$n5==10) {$hold5=1}

			DveIste();
		}
	}

	// STREET FLUSH OR STREET
	// 5-9

	if($win == 0) {

		if($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL5++;}
		if($n1==5||$n2==5||$n3==5||$n4==5||$n5==5) {STRFL5++;}
		if($n1==6||$n2==6||$n3==6||$n4==6||$n5==6) {STRFL5++;}
		if($n1==7||$n2==7||$n3==7||$n4==7||$n5==7) {STRFL5++;}
		if($n1==8||$n2==8||$n3==8||$n4==8||$n5==8) {STRFL5++;}
		if($n1==9||$n2==9||$n3==9||$n4==9||$n5==9) {STRFL5++;}

		if(STRFL5==5) {
			ProveraBoje2();
		}
		if(STRFL5==4&&STRFL6<4&&STRFL7<4&&STRFL8<4) {

			if($n1==0||$n1==5||$n1==6||$n1==7||$n1==8||$n1==9) {$hold1=1}
			if($n2==0||$n2==5||$n2==6||$n2==7||$n2==8||$n2==9) {$hold2=1}
			if($n3==0||$n3==5||$n3==6||$n3==7||$n3==8||$n3==9) {$hold3=1}
			if($n4==0||$n4==5||$n4==6||$n4==7||$n4==8||$n4==9) {$hold4=1}
			if($n5==0||$n5==5||$n5==6||$n5==7||$n5==8||$n5==9) {$hold5=1}

			DveIste();
		}
	}

	// STREET FLUSH OR STREET
	// 4-8

	if($win == 0) {

		if($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL4++;}
		if($n1==4||$n2==4||$n3==4||$n4==4||$n5==4) {STRFL4++;}
		if($n1==5||$n2==5||$n3==5||$n4==5||$n5==5) {STRFL4++;}
		if($n1==6||$n2==6||$n3==6||$n4==6||$n5==6) {STRFL4++;}
		if($n1==7||$n2==7||$n3==7||$n4==7||$n5==7) {STRFL4++;}
		if($n1==8||$n2==8||$n3==8||$n4==8||$n5==8) {STRFL4++;}

		if(STRFL4==5) {
			ProveraBoje2();
		}
		if(STRFL4==4&&STRFL5<4&&STRFL6<4&&STRFL7<4) {

			if($n1==0||$n1==4||$n1==5||$n1==6||$n1==7||$n1==8) {$hold1=1}
			if($n2==0||$n2==4||$n2==5||$n2==6||$n2==7||$n2==8) {$hold2=1}
			if($n3==0||$n3==4||$n3==5||$n3==6||$n3==7||$n3==8) {$hold3=1}
			if($n4==0||$n4==4||$n4==5||$n4==6||$n4==7||$n4==8) {$hold4=1}
			if($n5==0||$n5==4||$n5==5||$n5==6||$n5==7||$n5==8) {$hold5=1}

			DveIste();
		}
	}

	// STREET FLUSH OR STREET
	// 3-7

	if($win == 0) {

		if($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL3++;}
		if($n1==3||$n2==3||$n3==3||$n4==3||$n5==3) {STRFL3++;}
		if($n1==4||$n2==4||$n3==4||$n4==4||$n5==4) {STRFL3++;}
		if($n1==5||$n2==5||$n3==5||$n4==5||$n5==5) {STRFL3++;}
		if($n1==6||$n2==6||$n3==6||$n4==6||$n5==6) {STRFL3++;}
		if($n1==7||$n2==7||$n3==7||$n4==7||$n5==7) {STRFL3++;}

		if(STRFL3==5) {
			ProveraBoje2();
		}
		if(STRFL3==4&&STRFL4<4&&STRFL5<4&&STRFL6<4) {

			if($n1==0||$n1==3||$n1==4||$n1==5||$n1==6||$n1==7) {$hold1=1}
			if($n2==0||$n2==3||$n2==4||$n2==5||$n2==6||$n2==7) {$hold2=1}
			if($n3==0||$n3==3||$n3==4||$n3==5||$n3==6||$n3==7) {$hold3=1}
			if($n4==0||$n4==3||$n4==4||$n4==5||$n4==6||$n4==7) {$hold4=1}
			if($n5==0||$n5==3||$n5==4||$n5==5||$n5==6||$n5==7) {$hold5=1}

			DveIste();
		}
	}

	// STREET FLUSH OR STREET
	// 2-6

	if($win == 0) {

		if($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL2++;}
		if($n1==2||$n2==2||$n3==2||$n4==2||$n5==2) {STRFL2++;}
		if($n1==3||$n2==3||$n3==3||$n4==3||$n5==3) {STRFL2++;}
		if($n1==4||$n2==4||$n3==4||$n4==4||$n5==4) {STRFL2++;}
		if($n1==5||$n2==5||$n3==5||$n4==5||$n5==5) {STRFL2++;}
		if($n1==6||$n2==6||$n3==6||$n4==6||$n5==6) {STRFL2++;}

		if(STRFL2==5) {
			ProveraBoje2();
		}
		if(STRFL2==4&&STRFL3<4&&STRFL4<4&&STRFL5<4) {

			if($n1==0||$n1==2||$n1==3||$n1==4||$n1==5||$n1==6) {$hold1=1}
			if($n2==0||$n2==2||$n2==3||$n2==4||$n2==5||$n2==6) {$hold2=1}
			if($n3==0||$n3==2||$n3==3||$n3==4||$n3==5||$n3==6) {$hold3=1}
			if($n4==0||$n4==2||$n4==3||$n4==4||$n4==5||$n4==6) {$hold4=1}
			if($n5==0||$n5==2||$n5==3||$n5==4||$n5==5||$n5==6) {$hold5=1}
			
			DveIste();
		}
	}

	// STREET FLUSH OR STREET
	// 1-5

	if ($win == 0) {

		if($n1==0||$n2==0||$n3==0||$n4==0||$n5==0) {STRFL1++;}
		if($n1==14||$n2==14||$n3==14||$n4==14||$n5==14) {STRFL1++;}
		if($n1==2||$n2==2||$n3==2||$n4==2||$n5==2) {STRFL1++;}
		if($n1==3||$n2==3||$n3==3||$n4==3||$n5==3) {STRFL1++;}
		if($n1==4||$n2==4||$n3==4||$n4==4||$n5==4) {STRFL1++;}
		if($n1==5||$n2==5||$n3==5||$n4==5||$n5==5) {STRFL1++;}

		if(STRFL1==5) {
			ProveraBoje2();
		}
		if(STRFL1==4&&STRFL2<4&&STRFL3<4&&STRFL4<4) {

			if($n1==0||$n1==14||$n1==2||$n1==3||$n1==4||$n1==5) {$hold1=1}
			if($n2==0||$n2==14||$n2==2||$n2==3||$n2==4||$n2==5) {$hold2=1}
			if($n3==0||$n3==14||$n3==2||$n3==3||$n3==4||$n3==5) {$hold3=1}
			if($n4==0||$n4==14||$n4==2||$n4==3||$n4==4||$n4==5) {$hold4=1}
			if($n5==0||$n5==14||$n5==2||$n5==3||$n5==4||$n5==5) {$hold5=1}

			DveIste();
		}
	}

	// POKER

	if($win == 0) {

		if ((($n1==$n2)&&($n2==$n3)&&($n3==$n4)) ||
				(($n1==$n2)&&($n2==$n3)&&($n4==0)) ||
				(($n1==$n2)&&($n3==0)&&($n2==$n4)) ||
				(($n1==$n3)&&($n2==0)&&($n3==$n4)) ||
				(($n1==0)&&($n2==$n3)&&($n3==$n4))) {
			$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=0;
			$win ++;
			$Poker = 1;
		}

		if ((($n1==$n2)&&($n2==$n3)&&($n3==$n5)) ||
				(($n1==$n2)&&($n2==$n3)&&($n5==0)) ||
				(($n1==$n2)&&($n3==0)&&($n2==$n5)) ||
				(($n1==$n3)&&($n2==0)&&($n3==$n5)) ||
				(($n1==0)&&($n2==$n3)&&($n3==$n5))) {
			$hold1=1;$hold2=1;$hold3=1;$hold4=0;$hold5=1;
			$win ++;
			$Poker = 1;
		}

		if ((($n1==$n2)&&($n2==$n4)&&($n4==$n5)) ||
				(($n1==$n2)&&($n2==$n4)&&($n5==0)) ||
				(($n1==$n2)&&($n4==0)&&($n2==$n5)) ||
				(($n1==$n4)&&($n2==0)&&($n4==$n5)) ||
				(($n1==0)&&($n2==$n4)&&($n4==$n5))) {
			$hold1=1;$hold2=1;$hold3=0;$hold4=1;$hold5=1;
			$win ++;
			$Poker = 1;
		}

		if ((($n1==$n3)&&($n3==$n4)&&($n4==$n5)) ||
				(($n1==$n3)&&($n3==$n4)&&($n5==0)) ||
				(($n1==$n3)&&($n4==0)&&($n3==$n5)) ||
				(($n1==$n4)&&($n3==0)&&($n4==$n5)) ||
				(($n1==0)&&($n3==$n4)&&($n4==$n5))) {
			$hold1=1;$hold2=0;$hold3=1;$hold4=1;$hold5=1;
			$win ++;
			$Poker = 1;
		}

		if ((($n2==$n3)&&($n3==$n4)&&($n4==$n5)) ||
				(($n2==$n3)&&($n3==$n4)&&($n5==0)) ||
				(($n2==$n3)&&($n4==0)&&($n3==$n5)) ||
				(($n2==$n4)&&($n3==0)&&($n4==$n5)) ||
				(($n2==0)&&($n3==$n4)&&($n4==$n5))) {
			$hold1=0;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
			$win ++;
			$Poker = 1;
		}
	}

	//FULL HOUSE

	if($win == 0) {

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

			$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
			$win ++;
			$Full_house = 1;
		}
	}

	//FLUSH

	if($win == 0) {

		if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
				(($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
				(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
				(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
				(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
				(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5))) {

			$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
			$win ++;
			$Flush = 1;
		}
	}

	//THREE OF A KIND

	if($win == 0) {

		if((($n1==$n2)&&($n2==$n3))||(($n1==$n2)&&($n3==0))||(($n1==$n3)&&($n2==0))||(($n2==$n3)&&($n1==0))) {
			$hold1=1;$hold2=1;$hold3=1;$hold4=0;$hold5=0;
			$win ++;
			$Three_of_a_kind = 1;
		}

		if((($n1==$n2)&&($n2==$n4))||(($n1==$n2)&&($n4==0))||(($n1==$n4)&&($n2==0))||(($n2==$n4)&&($n1==0))) {
			$hold1=1;$hold2=1;$hold3=0;$hold4=1;$hold5=0;
			$win ++;
			$Three_of_a_kind = 1;
		}

		if((($n1==$n2)&&($n2==$n5))||(($n1==$n2)&&($n5==0))||(($n1==$n5)&&($n2==0))||(($n2==$n5)&&($n1==0))) {
			$hold1=1;$hold2=1;$hold3=0;$hold4=0;$hold5=1;
			$win ++;
			$Three_of_a_kind = 1;
		}

		if((($n1==$n3)&&($n3==$n4))||(($n1==$n3)&&($n4==0))||(($n1==$n4)&&($n3==0))||(($n3==$n4)&&($n1==0))) {
			$hold1=1;$hold2=0;$hold3=1;$hold4=1;$hold5=0;
			$win ++;
			$Three_of_a_kind = 1;
		}

		if((($n1==$n3)&&($n3==$n5))||(($n1==$n3)&&($n5==0))||(($n1==$n5)&&($n3==0))||(($n3==$n5)&&($n1==0))) {
			$hold1=1;$hold2=0;$hold3=1;$hold4=0;$hold5=1;
			$win ++;
			$Three_of_a_kind = 1;
		}

		if((($n1==$n4)&&($n4==$n5))||(($n1==$n4)&&($n5==0))||(($n1==$n5)&&($n4==0))||(($n4==$n5)&&($n1==0))) {
			$hold1=1;$hold2=0;$hold3=0;$hold4=1;$hold5=1;
			$win ++;
			$Three_of_a_kind = 1;
		}

		if((($n2==$n3)&&($n3==$n4))||(($n2==$n3)&&($n4==0))||(($n2==$n4)&&($n3==0))||(($n3==$n4)&&($n2==0))) {
			$hold1=0;$hold2=1;$hold3=1;$hold4=1;$hold5=0;
			$win ++;
			$Three_of_a_kind = 1;
		}

		if((($n2==$n3)&&($n3==$n5))||(($n2==$n3)&&($n5==0))||(($n2==$n5)&&($n3==0))||(($n3==$n5)&&($n2==0))) {
			$hold1=0;$hold2=1;$hold3=1;$hold4=0;$hold5=1;
			$win ++;
			$Three_of_a_kind = 1;
		}

		if((($n2==$n4)&&($n4==$n5))||(($n2==$n4)&&($n5==0))||(($n2==$n5)&&($n4==0))||(($n4==$n5)&&($n2==0))) {
			$hold1=0;$hold2=1;$hold3=0;$hold4=1;$hold5=1;
			$win ++;
			$Three_of_a_kind = 1;
		}

		if((($n3==$n4)&&($n4==$n5))||(($n3==$n4)&&($n5==0))||(($n3==$n5)&&($n4==0))||(($n4==$n5)&&($n3==0))) {
			$hold1=0;$hold2=0;$hold3=1;$hold4=1;$hold5=1;
			$win ++;
			$Three_of_a_kind = 1;
		}
	}

	//2 PAIRS

	if($win == 0) {

		if((($n1==$n2)&&($n3==$n4))||(($n1==$n3)&&($n2==$n4))||(($n1==$n4)&&($n2==$n3))) {
			$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=0;
			$win ++;
			$Two_pairs = 1;
		}

		if((($n1==$n2)&&($n3==$n5))||(($n1==$n3)&&($n2==$n5))||(($n1==$n5)&&($n2==$n3))) {
			$hold1=1;$hold2=1;$hold3=1;$hold4=0;$hold5=1;
			$win ++;
			$Two_pairs = 1;
		}

		if((($n1==$n2)&&($n4==$n5))||(($n1==$n5)&&($n2==$n4))||(($n1==$n4)&&($n2==$n5))) {
			$hold1=1;$hold2=1;$hold3=0;$hold4=1;$hold5=1;
			$win ++;
			$Two_pairs = 1;
		}

		if((($n1==$n3)&&($n4==$n5))||(($n1==$n5)&&($n3==$n4))||(($n1==$n4)&&($n3==$n5))) {
			$hold1=1;$hold2=0;$hold3=1;$hold4=1;$hold5=1;
			$win ++;
			$Two_pairs = 1;
		}

		if((($n2==$n3)&&($n4==$n5))||(($n3==$n5)&&($n2==$n4))||(($n3==$n4)&&($n2==$n5))) {
			$hold1=0;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
			$win ++;
			$Two_pairs = 1;
		}
	}
	
	//HIGH PAIR

	if($win == 0) {

		if($n1==$n2) {
			if(HALFSTREET==0) {
				$hold1=1;$hold2=1;$hold3=0;$hold4=0;$hold5=0;
			}
			if ($n1>10) {
				$win ++;
				$High_pair = 1;
			}
			if($n1<11) {
				$two_of_a_kind = 1;
			}
		}
		if($n1==$n3) {
			if(HALFSTREET==0) {
				$hold1=1;$hold2=0;$hold3=1;$hold4=0;$hold5=0;
			}
			if ($n1>10) {
				$win ++;
				$High_pair = 1;
			}
			if($n1<11) {
				$two_of_a_kind = 1;
			}
		}
		if($n1==$n4) {
			if(HALFSTREET==0) {
				$hold1=1;$hold2=0;$hold3=0;$hold4=1;$hold5=0;
			}
			if ($n1>10) {
				$win ++;
				$High_pair = 1;
			}
			if($n1<11) {
				$two_of_a_kind =1 ;
			}
		}
		if($n1==$n5) {
			if(HALFSTREET==0) {
				$hold1=1;$hold2=0;$hold3=0;$hold4=0;$hold5=1;
			}
			if ($n1>10) {
				$win ++;
				$High_pair = 1;
			}
			if($n1<11) {
				$two_of_a_kind = 1;
			}
		}
		if($n2==$n3) {
			if(HALFSTREET==0) {
				$hold1=0;$hold2=1;$hold3=1;$hold4=0;$hold5=0;
			}
			if ($n2>10) {
				$win ++;
				$High_pair = 1;
			}
			if($n2<11) {
				$two_of_a_kind = 1;
			}
		}
		if($n2==$n4) {
			if(HALFSTREET==0) {
				$hold1=0;$hold2=1;$hold3=0;$hold4=1;$hold5=0;
			}
			if ($n2>10) {
				$win ++;
				$High_pair = 1;
			}
			if($n2<11) {
				$two_of_a_kind = 1;
			}
		}
		if($n2==$n5) {
			if(HALFSTREET==0) {
				$hold1=0;$hold2=1;$hold3=0;$hold4=0;$hold5=1;
			}
			if ($n2>10) {
				$win ++;
				$High_pair = 1;
			}
			if($n2<11) {
				$two_of_a_kind = 1;
			}
		}
		if($n3==$n4) {
			if(HALFSTREET==0) {
				$hold1=0;$hold2=0;$hold3=1;$hold4=1;$hold5=0;
			}
			if ($n3>10) {
				$win ++;
				$High_pair = 1;
			}
			if($n3<11) {
				$two_of_a_kind = 1;
			}
		}
		if($n3==$n5) {
			if(HALFSTREET==0) {
				$hold1=0;$hold2=0;$hold3=1;$hold4=0;$hold5=1;
			}
			if ($n3>10) {
				$win ++;
				$High_pair = 1;
			}
			if($n3<11) {
				$two_of_a_kind = 1;
			}
		}
		if($n4==$n5) {
			if(HALFSTREET==0) {
				$hold1=0;$hold2=0;$hold3=0;$hold4=1;$hold5=1;
			}
			if ($n4>10) {
				$win ++;
				$High_pair = 1;
			}
			if($n4<11) {
				$two_of_a_kind = 1;
			}
		}

	}

	//HIGH PAIR WITH JOKER
	
	if($win == 0) {

		if(HALFSTREET==1) {

			if($n1==0) {
				if($n2>10||$n3>10||$n4>10||$n5>10) {
					$win ++;
					$High_pair = 1;
				}
			}
			if($n2==0) {
				if($n1>10||$n3>10||$n4>10||$n5>10) {
					$win ++;
					$High_pair = 1;
				}
			}
			if($n3==0) {
				if($n1>10||$n2>10||$n4>10||$n5>10) {
					$win ++;
					$High_pair = 1;
				}
			}
			if($n4==0) {
				if($n1>10||$n2>10||$n3>10||$n5>10) {
					$win ++;
					$High_pair = 1;
				}
			}
			if($n5==0) {
				if($n1>10||$n2>10||$n3>10||$n4>10) {
					$win ++;
					$High_pair = 1;
				}
			}
		}
		else {

			if($n1==0) {
				$hold1=1;
				if($n2>10) {
					$win ++;
					$High_pair = 1;
					$hold2=1;
				}
				if($win == 0) {
	
					if($n3>10) {
						$win ++;
						$High_pair = 1;
						$hold3=1;
					}
				}
				if($win == 0) {
	
					if($n4>10) {
						$win ++;
						$High_pair = 1;
						$hold4=1;
					}
				}
				if($win == 0) {
	
					if($n5>10) {
						$win ++;
						$High_pair = 1;
						$hold5=1;
					}
				}
			}
			if($win == 0) {
	
				if($n2==0) {
					$hold2=1;
					if($n1>10) {
						$win ++;
						$High_pair = 1;
						$hold1=1;
					}
					if($win == 0) {
		
						if($n3>10) {
							$win ++;
							$High_pair = 1;
							$hold3=1;
						}
					}
					if($win == 0) {
		
						if($n4>10) {
							$win ++;
							$High_pair = 1;
							$hold4=1;
						}
					}
					if($win == 0) {
		
						if($n5>10) {
							$win ++;
							$High_pair = 1;
							$hold5=1;
						}
					}
				}
			}
			if($win == 0) {
	
				if($n3==0) {
					$hold3=1;
					if($n1>10) {
						$win ++;
						$High_pair = 1;
						$hold1=1;
					}
					if($win == 0) {
		
						if($n2>10) {
							$win ++;
							$High_pair = 1;
							$hold2=1;
						}
					}
					if($win == 0) {
		
						if($n4>10) {
							$win ++;
							$High_pair = 1;
							$hold4=1;
						}
					}
					if($win == 0) {
		
						if($n5>10) {
							$win ++;
							$High_pair = 1;
							$hold5=1;
						}
					}
				}
			}
			if($win == 0) {
	
				if($n4==0) {
					$hold4=1;
					if($n1>10) {
						$win ++;
						$High_pair = 1;
						$hold1=1;
					}
					if($win == 0) {
		
						if($n2>10) {
							$win ++;
							$High_pair = 1;
							$hold2=1;
						}
					}
					if($win == 0) {
		
						if($n3>10) {
							$win ++;
							$High_pair = 1;
							$hold3=1;
						}
					}
					if($win == 0) {
		
						if($n5>10) {
							$win ++;
							$High_pair = 1;
							$hold5=1;
						}
					}
				}
			}
			if($win == 0) {
	
				if($n5==0) {
					$hold5=1;
					if($n1>10) {
						$win ++;
						$High_pair = 1;
						$hold1=1;
					}
					if($win == 0) {
		
						if($n2>10) {
							$win ++;
							$High_pair = 1;
							$hold2=1;
						}
					}
					if($win == 0) {
		
						if($n3>10) {
							$win ++;
							$High_pair = 1;
							$hold3=1;
						}
					}
					if($win == 0) {
		
						if($n4>10) {
							$win ++;
							$High_pair = 1;
							$hold4=1;
						}
					}
				}
			}
		}
	}
	
	// 4 BOJE

	if(($win == 0 && $High_pair == 0) || ($win == 1 && $High_pair == 1)) {

		if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)) ||
				(($b1==$b2)&&($b2==$b3)&&($b4==0)) ||
				(($b1==$b2)&&($b3==0)&&($b2==$b4)) ||
				(($b1==$b3)&&($b2==0)&&($b3==$b4)) ||
				(($b1==0)&&($b2==$b3)&&($b3==$b4))) {
			$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=0;
			$four_colors ++;
		}

		if ((($b1==$b2)&&($b2==$b3)&&($b3==$b5)) ||
				(($b1==$b2)&&($b2==$b3)&&($b5==0)) ||
				(($b1==$b2)&&($b3==0)&&($b2==$b5)) ||
				(($b1==$b3)&&($b2==0)&&($b3==$b5)) ||
				(($b1==0)&&($b2==$b3)&&($b3==$b5))) {
			$hold1=1;$hold2=1;$hold3=1;$hold4=0;$hold5=1;
			$four_colors ++;
		}

		if ((($b1==$b2)&&($b2==$b4)&&($b4==$b5)) ||
				(($b1==$b2)&&($b2==$b4)&&($b5==0)) ||
				(($b1==$b2)&&($b4==0)&&($b2==$b5)) ||
				(($b1==$b4)&&($b2==0)&&($b4==$b5)) ||
				(($b1==0)&&($b2==$b4)&&($b4==$b5))) {
			$hold1=1;$hold2=1;$hold3=0;$hold4=1;$hold5=1;
			$four_colors ++;
		}

		if ((($b1==$b3)&&($b3==$b4)&&($b4==$b5)) ||
				(($b1==$b3)&&($b3==$b4)&&($b5==0)) ||
				(($b1==$b3)&&($b4==0)&&($b3==$b5)) ||
				(($b1==$b4)&&($b3==0)&&($b4==$b5)) ||
				(($b1==0)&&($b3==$b4)&&($b4==$b5))) {
			$hold1=1;$hold2=0;$hold3=1;$hold4=1;$hold5=1;
			$four_colors ++;
		}

		if ((($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
				(($b2==$b3)&&($b3==$b4)&&($b5==0)) ||
				(($b2==$b3)&&($b4==0)&&($b3==$b5)) ||
				(($b2==$b4)&&($b3==0)&&($b4==$b5)) ||
				(($b2==0)&&($b3==$b4)&&($b4==$b5))) {
			$hold1=0;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
			$four_colors ++;
		}
		
		//JOKER
		
		if(HALFSTREET == 0 && $four_colors == 0 && $n1 == 0) {
			$hold1=1;
		}
		if(HALFSTREET == 0 && $four_colors == 0 && $n2 == 0) {
			$hold2=1;
		}
		if(HALFSTREET == 0 && $four_colors == 0 && $n3 == 0) {
			$hold3=1;
		}
		if(HALFSTREET == 0 && $four_colors == 0 && $n4 == 0) {
			$hold4=1;
		}
		if(HALFSTREET == 0 && $four_colors == 0 && $n5 == 0) {
			$hold5=1;
		}
	}
	
	if($Five_of_a_kind == 1) {
		$rucno.style.top = "5px";
		$rucno.style.visibility = "visible";
		$Five_of_a_kind = 0;
	}
	if($Royal_flush == 1) {
		$rucno.style.top = "34px";
		$rucno.style.visibility = "visible";
		$Royal_flush = 0;
	}
	if($Street_flush == 1) {
		$rucno.style.top = "63px";
		$rucno.style.visibility = "visible";
		$Street_flush = 0;
	}
	if($Poker == 1) {
		$rucno.style.top = "93px";
		$rucno.style.visibility = "visible";
		$Poker = 0;
	}
	if($Full_house == 1) {
		$rucno.style.top = "121px";
		$rucno.style.visibility = "visible";
		$Full_house = 0;
	}
	if($Flush == 1) {
		$rucno.style.top = "149px";
		$rucno.style.visibility = "visible";
		$Flush = 0;
	}
	if($Street == 1) {
		$rucno.style.top = "178px";
		$rucno.style.visibility = "visible";
		$Street = 0;
	}
	if($Three_of_a_kind == 1) {
		$rucno.style.top = "209px";
		$rucno.style.visibility = "visible";
		$Three_of_a_kind = 0;
	}
	if($Two_pairs == 1) {
		$rucno.style.top = "237px";
		$rucno.style.visibility = "visible";
		$Two_pairs = 0;
	}
	if($High_pair == 1) {
		$rucno.style.top = "267px";
		$rucno.style.visibility = "visible";
		$High_pair = 0;
	}
	$deal = 8;
}