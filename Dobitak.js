let dobitak = 0;
let dveiste = 0;
let cetiriboje = 0;

        // FIVE OF A KIND

        if ((($n1==$n2)&&($n2==$n3)&&($n3==$n4)&&($n5==0)) ||
				(($n1==$n2)&&($n2==$n3)&&($n4==0)&&($n3==$n5)) ||
				(($n1==$n2)&&($n3==0)&&($n2==$n4)&&($n4==$n5)) ||
				(($n1==$n3)&&($n2==0)&&($n3==$n4)&&($n4==$n5)) ||
				(($n1==0)&&($n2==$n3)&&($n3==$n4)&&($n4==$n5))) {

			$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
			dobitak++;
			new Fiveofakind();
		}

		// ROYAL FLUSH OR STREET


		if (dobitak==0) {

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

					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Royalflush();
				}
				else {
					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Street();
				}
			}
		}
		// STREET FLUSH OR STREET
		// 1-5

		if (dobitak==0) {

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

					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Streetflush();
				}
				else {
					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Street();
				}
			}
		}

		// STREET FLUSH OR STREET
		// 2-6

		if (dobitak==0) {

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

					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Streetflush();
				}
				else {
					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Street();
				}
			}
		}

		// STREET FLUSH OR STREET
		// 3-7

		if (dobitak==0) {

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

					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Streetflush();
				}
				else {
					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Street();
				}
			}
		}

		// STREET FLUSH OR STREET
		// 4-8

		if (dobitak==0) {

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

					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Streetflush();
				}
				else {
					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Street();
				}
			}
		}

		// STREET FLUSH OR STREET
		// 5-9

		if (dobitak==0) {

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

					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Streetflush();
				}
				else {
					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Street();
				}
			}
		}

		// STREET FLUSH OR STREET
		// 6-10

		if (dobitak==0) {

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

					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Streetflush();
				}
				else {
					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Street();
				}
			}
		}

		// STREET FLUSH OR STREET
		// 7-11

		if (dobitak==0) {

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

					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Streetflush();
				}
				else {
					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Street();
				}
			}
		}

		// STREET FLUSH OR STREET
		// 8-12

		if (dobitak==0) {

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

					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Streetflush();
				}
				else {

					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Street();
				}
			}
		}

		// STREET FLUSH OR STREET
		// 9-13

		if (dobitak==0) {

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

					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Streetflush();
				}
				else {

					$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
					dobitak++;
					new Street();
				}
			}
		}

		// POKER

		if (dobitak==0) {

			if ((($n1==$n2)&&($n2==$n3)&&($n3==$n4)) ||
					(($n1==$n2)&&($n2==$n3)&&($n4==0)) ||
					(($n1==$n2)&&($n3==0)&&($n2==$n4)) ||
					(($n1==$n3)&&($n2==0)&&($n3==$n4)) ||
					(($n1==0)&&($n2==$n3)&&($n3==$n4))) {
				$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=0;
				dobitak++;
				new Poker();
			}

			if ((($n1==$n2)&&($n2==$n3)&&($n3==$n5)) ||
					(($n1==$n2)&&($n2==$n3)&&($n5==0)) ||
					(($n1==$n2)&&($n3==0)&&($n2==$n5)) ||
					(($n1==$n3)&&($n2==0)&&($n3==$n5)) ||
					(($n1==0)&&($n2==$n3)&&($n3==$n5))) {
				$hold1=1;$hold2=1;$hold3=1;$hold4=0;$hold5=1;
				dobitak++;
				new Poker();
			}

			if ((($n1==$n2)&&($n2==$n4)&&($n4==$n5)) ||
					(($n1==$n2)&&($n2==$n4)&&($n5==0)) ||
					(($n1==$n2)&&($n4==0)&&($n2==$n5)) ||
					(($n1==$n4)&&($n2==0)&&($n4==$n5)) ||
					(($n1==0)&&($n2==$n4)&&($n4==$n5))) {
				$hold1=1;$hold2=1;$hold3=0;$hold4=1;$hold5=1;
				dobitak++;
				new Poker();
			}

			if ((($n1==$n3)&&($n3==$n4)&&($n4==$n5)) ||
					(($n1==$n3)&&($n3==$n4)&&($n5==0)) ||
					(($n1==$n3)&&($n4==0)&&($n3==$n5)) ||
					(($n1==$n4)&&($n3==0)&&($n4==$n5)) ||
					(($n1==0)&&($n3==$n4)&&($n4==$n5))) {
				$hold1=1;$hold2=0;$hold3=1;$hold4=1;$hold5=1;
				dobitak++;
				new Poker();
			}

			if ((($n2==$n3)&&($n3==$n4)&&($n4==$n5)) ||
					(($n2==$n3)&&($n3==$n4)&&($n5==0)) ||
					(($n2==$n3)&&($n4==0)&&($n3==$n5)) ||
					(($n2==$n4)&&($n3==0)&&($n4==$n5)) ||
					(($n2==0)&&($n3==$n4)&&($n4==$n5))) {
				$hold1=0;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
				dobitak++;
				new Poker();
			}
		}

		//FULL HOUSE

		if (dobitak==0) {

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
				dobitak++;
				new Fullhouse();
			}
		}

		//FLUSH

		if (dobitak==0) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					(($b1==$b2)&&($b2==$b3)&&($b3==$b4)&&($n5==0)) ||
					(($b1==$b2)&&($b2==$b3)&&($n4==0)&&($b3==$b5)) ||
					(($b1==$b2)&&($n3==0)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($n2==0)&&($b3==$b4)&&($b4==$b5)) ||
					(($n1==0)&&($b2==$b3)&&($b3==$b4)&&($b4==$b5))) {

				$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
				dobitak++;
				new Flush();
			}
		}

		//THREE OF A KIND

		if (dobitak==0) {

			if ((($n1==$n2)&&($n2==$n3))||(($n1==$n2)&&($n3==0))||(($n1==$n3)&&($n2==0))||(($n2==$n3)&&($n1==0))) {
				$hold1=1;$hold2=1;$hold3=1;$hold4=0;$hold5=0;
				dobitak++;
				new Threeofakind();
			}

			if ((($n1==$n2)&&($n2==$n4))||(($n1==$n2)&&($n4==0))||(($n1==$n4)&&($n2==0))||(($n2==$n4)&&($n1==0))) {
				$hold1=1;$hold2=1;$hold3=0;$hold4=1;$hold5=0;
				dobitak++;
				new Threeofakind();
			}

			if ((($n1==$n2)&&($n2==$n5))||(($n1==$n2)&&($n5==0))||(($n1==$n5)&&($n2==0))||(($n2==$n5)&&($n1==0))) {
				$hold1=1;$hold2=1;$hold3=0;$hold4=0;$hold5=1;
				dobitak++;
				new Threeofakind();
			}

			if ((($n1==$n3)&&($n3==$n4))||(($n1==$n3)&&($n4==0))||(($n1==$n4)&&($n3==0))||(($n3==$n4)&&($n1==0))) {
				$hold1=1;$hold2=0;$hold3=1;$hold4=1;$hold5=0;
				dobitak++;
				new Threeofakind();
			}

			if ((($n1==$n3)&&($n3==$n5))||(($n1==$n3)&&($n5==0))||(($n1==$n5)&&($n3==0))||(($n3==$n5)&&($n1==0))) {
				$hold1=1;$hold2=0;$hold3=1;$hold4=0;$hold5=1;
				dobitak++;
				new Threeofakind();
			}

			if ((($n1==$n4)&&($n4==$n5))||(($n1==$n4)&&($n5==0))||(($n1==$n5)&&($n4==0))||(($n4==$n5)&&($n1==0))) {
				$hold1=1;$hold2=0;$hold3=0;$hold4=1;$hold5=1;
				dobitak++;
				new Threeofakind();
			}

			if ((($n2==$n3)&&($n3==$n4))||(($n2==$n3)&&($n4==0))||(($n2==$n4)&&($n3==0))||(($n3==$n4)&&($n2==0))) {
				$hold1=0;$hold2=1;$hold3=1;$hold4=1;$hold5=0;
				dobitak++;
				new Threeofakind();
			}

			if ((($n2==$n3)&&($n3==$n5))||(($n2==$n3)&&($n5==0))||(($n2==$n5)&&($n3==0))||(($n3==$n5)&&($n2==0))) {
				$hold1=0;$hold2=1;$hold3=1;$hold4=0;$hold5=1;
				dobitak++;
				new Threeofakind();
			}

			if ((($n2==$n4)&&($n4==$n5))||(($n2==$n4)&&($n5==0))||(($n2==$n5)&&($n4==0))||(($n4==$n5)&&($n2==0))) {
				$hold1=0;$hold2=1;$hold3=0;$hold4=1;$hold5=1;
				dobitak++;
				new Threeofakind();
			}

			if ((($n3==$n4)&&($n4==$n5))||(($n3==$n4)&&($n5==0))||(($n3==$n5)&&($n4==0))||(($n4==$n5)&&($n3==0))) {
				$hold1=0;$hold2=0;$hold3=1;$hold4=1;$hold5=1;
				dobitak++;
				new Threeofakind();
			}
		}

		//2 PAIRS

		if (dobitak==0) {

			if ((($n1==$n2)&&($n3==$n4))||(($n1==$n3)&&($n2==$n4))||(($n1==$n4)&&($n2==$n3))) {
				$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=0;
				dobitak++;
				new Twopairs();
			}

			if ((($n1==$n2)&&($n3==$n5))||(($n1==$n3)&&($n2==$n5))||(($n1==$n5)&&($n2==$n3))) {
				$hold1=1;$hold2=1;$hold3=1;$hold4=0;$hold5=1;
				dobitak++;
				new Twopairs();
			}

			if ((($n1==$n2)&&($n4==$n5))||(($n1==$n5)&&($n2==$n4))||(($n1==$n4)&&($n2==$n5))) {
				$hold1=1;$hold2=1;$hold3=0;$hold4=1;$hold5=1;
				dobitak++;
				new Twopairs();
			}

			if ((($n1==$n3)&&($n4==$n5))||(($n1==$n5)&&($n3==$n4))||(($n1==$n4)&&($n3==$n5))) {
				$hold1=1;$hold2=0;$hold3=1;$hold4=1;$hold5=1;
				dobitak++;
				new Twopairs();
			}

			if ((($n2==$n3)&&($n4==$n5))||(($n3==$n5)&&($n2==$n4))||(($n3==$n4)&&($n2==$n5))) {
				$hold1=0;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
				dobitak++;
				new Twopairs();
			}
		}

		//HIGH PAIR

		if (dobitak==0) {

			if ($n1==$n2) {
				$hold1=1;$hold2=1;$hold3=0;$hold4=0;$hold5=0;

				if ($n1>10) {
					dobitak++;
					new Highpair();
				}
				else {
					dveiste=1;
					new Hold();
				}
			}

			if ($n1==$n3) {
				$hold1=1;$hold2=0;$hold3=1;$hold4=0;$hold5=0;

				if ($n1>10) {
					dobitak++;
					new Highpair();
				}
				else {
					dveiste=1;
					new Hold();
				}
			}

			if ($n1==$n4) {
				$hold1=1;$hold2=0;$hold3=0;$hold4=1;$hold5=0;

				if ($n1>10) {
					dobitak++;
					new Highpair();
				}
				else {
					dveiste=1;
					new Hold();
				}
			}

			if ($n1==$n5) {
				$hold1=1;$hold2=0;$hold3=0;$hold4=0;$hold5=1;

				if ($n1>10) {
					dobitak++;
					new Highpair();
				}
				else {
					dveiste=1;
					new Hold();
				}
			}

			if ($n2==$n3) {
				$hold1=0;$hold2=1;$hold3=1;$hold4=0;$hold5=0;

				if ($n2>10) {
					dobitak++;
					new Highpair();
				}
				else {
					dveiste=1;
					new Hold();
				}
			}

			if ($n2==$n4) {
				$hold1=0;$hold2=1;$hold3=0;$hold4=1;$hold5=0;

				if ($n2>10) {
					dobitak++;
					new Highpair();
				}
				else {
					dveiste=1;
					new Hold();
				}
			}

			if ($n2==$n5) {
				$hold1=0;$hold2=1;$hold3=0;$hold4=0;$hold5=1;

				if ($n2>10) {
					dobitak++;
					new Highpair();
				}
				else {
					dveiste=1;
					new Hold();
				}
			}

			if ($n3==$n4) {
				$hold1=0;$hold2=0;$hold3=1;$hold4=1;$hold5=0;

				if ($n3>10) {
					dobitak++;
					new Highpair();
				}
				else {
					dveiste=1;
					new Hold();
				}
			}

			if ($n3==$n5) {
				$hold1=0;$hold2=0;$hold3=1;$hold4=0;$hold5=1;

				if ($n3>10) {
					dobitak++;
					new Highpair();
				}
				else {
					dveiste=1;
					new Hold();
				}
			}

			if ($n4==$n5) {
				$hold1=0;$hold2=0;$hold3=0;$hold4=1;$hold5=1;

				if ($n4>10) {
					dobitak++;
					new Highpair();
				}
				else {
					dveiste=1;
					new Hold();
				}
			}

		}

		//HIGH PAIR WITH JOKER

		if (dobitak==0) {

			if ($n1==0) {
				$hold1=1;
				if ($n2>10) {
					$hold2=1;$hold3=0;$hold4=0;$hold5=0;
					dobitak++;
					new Highpair();
				}

				if (dobitak==0) {

					if ($n3>10) {
						$hold2=0;$hold3=1;$hold4=0;$hold5=0;
						dobitak++;
						new Highpair();
					}
				}

				if (dobitak==0) {

					if ($n4>10) {
						$hold2=0;$hold3=0;$hold4=1;$hold5=0;
						dobitak++;
						new Highpair();
					}
				}

				if (dobitak==0) {

					if ($n5>10) {
						$hold2=0;$hold3=0;$hold4=0;$hold5=1;
						dobitak++;
						new Highpair();
					}
				}
			}
		}

		if (dobitak==0) {

			if ($n2==0) {
				$hold2=1;
				if ($n1>10) {
					$hold1=1;$hold3=0;$hold4=0;$hold5=0;
					dobitak++;
					new Highpair();
				}

				if (dobitak==0) {

					if ($n3>10) {
						$hold1=0;$hold3=1;$hold4=0;$hold5=0;
						dobitak++;
						new Highpair();
					}
				}

				if (dobitak==0) {

					if ($n4>10) {
						$hold1=0;$hold3=0;$hold4=1;$hold5=0;
						dobitak++;
						new Highpair();
					}
				}

				if (dobitak==0) {

					if ($n5>10) {
						$hold1=0;$hold3=0;$hold4=0;$hold5=1;
						dobitak++;
						new Highpair();
					}
				}
			}
		}

		if (dobitak==0) {

			if ($n3==0) {
				$hold3=1;
				if ($n1>10) {
					$hold1=1;$hold2=0;$hold4=0;$hold5=0;
					dobitak++;
					new Highpair();
				}

				if (dobitak==0) {

					if ($n2>10) {
						$hold1=0;$hold2=1;$hold4=0;$hold5=0;
						dobitak++;
						new Highpair();
					}
				}

				if (dobitak==0) {

					if ($n4>10) {
						$hold1=0;$hold2=0;$hold4=1;$hold5=0;
						dobitak++;
						new Highpair();
					}
				}

				if (dobitak==0) {

					if ($n5>10) {
						$hold2=1;$hold2=0;$hold4=0;$hold5=1;
						dobitak++;
						new Highpair();
					}
				}
			}
		}

		if (dobitak==0) {

			if ($n4==0) {
				$hold4=1;
				if ($n1>10) {
					$hold1=1;$hold2=0;$hold3=0;$hold5=0;
					dobitak++;
					new Highpair();
				}

				if (dobitak==0) {

					if ($n2>10) {
						$hold1=0;$hold2=1;$hold3=0;$hold5=0;
						dobitak++;
						new Highpair();
					}
				}

				if (dobitak==0) {

					if ($n3>10) {
						$hold1=0;$hold2=0;$hold3=1;$hold5=0;
						dobitak++;
						new Highpair();
					}
				}

				if (dobitak==0) {

					if ($n5>10) {
						$hold1=0;$hold2=0;$hold3=0;$hold5=1;
						dobitak++;
						new Highpair();
					}
				}
			}
		}

		if (dobitak==0) {

			if ($n5==0) {
				$hold5=1;
				if ($n1>10) {
					$hold1=1;$hold2=0;$hold3=0;$hold4=0;
					dobitak++;
					new Highpair();
				}

				if (dobitak==0) {

					if ($n2>10) {
						$hold1=0;$hold2=1;$hold3=0;$hold4=0;
						dobitak++;
						new Highpair();
					}
				}

				if (dobitak==0) {

					if ($n3>10) {
						$hold1=0;$hold2=0;$hold3=1;$hold4=0;
						dobitak++;
						new Highpair();
					}
				}

				if (dobitak==0) {

					if ($n4>10) {
						$hold1=0;$hold2=0;$hold3=0;$hold4=1;
						dobitak++;
						new Highpair();
					}
				}
			}

		}

		// 4 BOJE

		if (dobitak==0&&dveiste==0) {

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b4)) ||
					(($b1==$b2)&&($b2==$b3)&&($b4==0)) ||
					(($b1==$b2)&&($b3==0)&&($b2==$b4)) ||
					(($b1==$b3)&&($b2==0)&&($b3==$b4)) ||
					(($b1==0)&&($b2==$b3)&&($b3==$b4))) {
				$hold1=1;$hold2=1;$hold3=1;$hold4=1;$hold5=0;
				cetiriboje++;
				new Hold();

			}

			if ((($b1==$b2)&&($b2==$b3)&&($b3==$b5)) ||
					(($b1==$b2)&&($b2==$b3)&&($b5==0)) ||
					(($b1==$b2)&&($b3==0)&&($b2==$b5)) ||
					(($b1==$b3)&&($b2==0)&&($b3==$b5)) ||
					(($b1==0)&&($b2==$b3)&&($b3==$b5))) {
				$hold1=1;$hold2=1;$hold3=1;$hold4=0;$hold5=1;
				cetiriboje++;
				new Hold();

			}

			if ((($b1==$b2)&&($b2==$b4)&&($b4==$b5)) ||
					(($b1==$b2)&&($b2==$b4)&&($b5==0)) ||
					(($b1==$b2)&&($b4==0)&&($b2==$b5)) ||
					(($b1==$b4)&&($b2==0)&&($b4==$b5)) ||
					(($b1==0)&&($b2==$b4)&&($b4==$b5))) {
				$hold1=1;$hold2=1;$hold3=0;$hold4=1;$hold5=1;
				cetiriboje++;
				new Hold();

			}

			if ((($b1==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					(($b1==$b3)&&($b3==$b4)&&($b5==0)) ||
					(($b1==$b3)&&($b4==0)&&($b3==$b5)) ||
					(($b1==$b4)&&($b3==0)&&($b4==$b5)) ||
					(($b1==0)&&($b3==$b4)&&($b4==$b5))) {
				$hold1=1;$hold2=0;$hold3=1;$hold4=1;$hold5=1;
				cetiriboje++;
				new Hold();

			}

			if ((($b2==$b3)&&($b3==$b4)&&($b4==$b5)) ||
					(($b2==$b3)&&($b3==$b4)&&($b5==0)) ||
					(($b2==$b3)&&($b4==0)&&($b3==$b5)) ||
					(($b2==$b4)&&($b3==0)&&($b4==$b5)) ||
					(($b2==0)&&($b3==$b4)&&($b4==$b5))) {
				$hold1=0;$hold2=1;$hold3=1;$hold4=1;$hold5=1;
				cetiriboje++;
				new Hold();

			}

			//JOKER

			if (cetiriboje==0&&$n1==0) {
				$hold1=1;$hold2=0;$hold3=0;$hold4=0;$hold5=0;
				new Hold();
			}
			if (cetiriboje==0&&$n2==0) {
				$hold1=0;$hold2=1;$hold3=0;$hold4=0;$hold5=0;
				new Hold();
			}
			if (cetiriboje==0&&$n3==0) {
				$hold1=0;$hold2=0;$hold3=1;$hold4=0;$hold5=0;
				new Hold();
			}
			if (cetiriboje==0&&$n4==0) {
				$hold1=0;$hold2=0;$hold3=0;$hold4=1;$hold5=0;
				new Hold();
			}
			if (cetiriboje==0&&$n5==0) {
				$hold1=0;$hold2=0;$hold3=0;$hold4=0;$hold5=1;
				new Hold();
			}
		}