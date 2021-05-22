import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iraqWar';
  data: any = {};
  documents: any = [];
  orderedDocs: any = [];
  constructor(
    private http: HttpClient,
  ) {
    const data: any = this.getData();
    for (let x in data) {
      this.data[x] = this.refineData(data[x]);
    }
    console.log(this.data);
  }

  searchTerm(input: any) {
    const term: string = input.value;

    const rawDocList: any = {};
    for (let x in this.data) {
      console.log(x)
      rawDocList[x] = this.searchSingleTerm(term, x);
    }
    console.log(rawDocList)
    this.orderedDocs = this.organizeDict(rawDocList);
    console.log(this.orderedDocs);
  }

  searchSingleTerm(term: string, dataSetName: any) {
    const termArr: string[] = this.refineData(term);
    const termDict: any = {};
    let hitTerms = 0;
    for (let i = 0; i < termArr.length; i++) {
      termDict[termArr[i].toLowerCase()] = {
        selected: false,
      };
    }
    for (let x = 0; x < this.data[dataSetName].length; x++) {
      if (termDict[this.data[dataSetName][x]] || termDict[this.data[dataSetName][x].toLowerCase()]) {
        if (!termDict[this.data[dataSetName][x].toLowerCase()].selected) {
          termDict[this.data[dataSetName][x].toLowerCase()].selected = true;
          hitTerms++;
        }
      }
    }

    return hitTerms;
  }

  organizeDict(dict: any) {
    const dictKeys = Object.keys(dict);
    dictKeys.sort((a: any, b: any) => {
      return dict[b] - dict[a];
    });
    return dictKeys;
  }

  refineData(dataStr: string) {
    let dataArr: any = [];
    const currArr = dataStr.split(' ');
    for (let i = 0; i < currArr.length; i++) {
      if (
        currArr[i] != ' '
        && currArr[i] != '  '
        && currArr[i] != ''
        && currArr[i].length > 0
      ) {
        dataArr.push(currArr[i]);
      }
    }
    return dataArr;
  }



  getData() {
    const data: any = {};
    data['doc3'] = `blarg blerg blorg`;
    data['doc1'] =  `

Declassified by: MG Michael X. Garrett,
USCENTCOM Chief of Staff
Declassified on: 201505



                        CG Talking Points


   •	Engagements and Reconciliation will be a central tenet of the
     new Campaign Plan
  •	Focus on enabling a bottom-up, decentralized, responsive
     approach
   •	Engage the right leaders at the right levels
   •	Develop guidance to subordinates, providing them left and
     right limits
      -	Encourage engagement initiative
     -	Empower subordinate commanders
  •	Reinforce the Rejection of AQI and| i.4b, i 4d ~~fcs
     common themes
  •	Establish control mechanisms to ensure that we are
     developing grassroots Iraqi capacity, not creating militias and
     warlords


Local Amnesty
Local DeBaath exceptions
Weapons Possession exceptions
Local contracting
Detention Release Program
Spoils of AQI
Reincorporation of former military
Agricultural assistance
Micro-hydroelectric generators

Declassified by: MG Michael X. Garrett,
USCENTCOM Chief of Staff
Declassified on: 201505





          C2 Talking Points


 This conference affords an opportunity and forum to present
    Engagement IRB of each area in order to support MNC-I's
    Engagement and Reconciliation efforts

 Intel supports Engagement and Reconciliation by:
     -	Developing an environmental understanding of the context in
       which engagements take place
     — Assisting in the identification of Reconcilables and
        Irreconcilables
     -	Monitoring the actions and behaviors of Reconcilables and
       Irreconcilables

 Outcome of this conference: Better understanding of how the MNDs¹
   environments are inter-related in order to ensure our Engagement
   and Reconciliation efforts are mutually supporting




Local Amnesty
Local DeBaath exceptions
Weapons Possession exceptions
Local contracting
Detention Release Program
Spoils of AQI
Reincorporation of former military
Agricultural assistance
Micro-hydroelectric generators


2

Declassified by: MG Michael X. Garrett,
USCENTCOM Chief of Staff
Declassified on: 201505


The threat environment in Iraq consists of four interacting conflicts:
•	Terrorism, counter-occupation, insurgency and a communal struggle for power and survival
•	Occurring in the context of failing state
•	Complicated by the external influences of Western, Turkish, Persian and Arab civilizations


3

Declassified by: MG Michael X. Garrett,
USCENTCOM Chief of Staff
Declassified on: 201505


MND-N:
Seat of the Insurgency
Counter-Occupation -most
disenfranchised
Terrorism - AQI’s new focus
-	Mosul, Kirkuk, Diyala
Most complicated Communal
Struggles
-	Nationalist vs Extremist
-	Kurd vs Arab
-	Sunni vs Shia
Arab|[4b l Turkish influence

| Terrorism


Communal
Struggle




          Threat Environment
            2007	i



MND-B:
Communal Struggles
-	Sunni vs Shia
-	Nationalist vs Extremist
-	Intra-Shia
Terrorism
Insurgency
Counter-Occupation
nd Turkish influence



      Failing
      State


MNF-W:
Terrorism
Counter-Occupation
Sunni Arab External Influence

Insurgency

fl Communal Struggle
  -	Sunni vs Shia
  -	Intra-Shia
  -	National vs Extremist
Counter-Occupation
Insurgency

Counter-
Occupation

MND-SE:
Communal Struggle - Intra-Shia I
Counter-Occupation             “1
I____1 4b, 1,4(1 I             ]-

The threat environment in Iraq consists of four interacting conflicts:
•	Terrorism, counter-occupation, insurgency and a communal struggle for power and survival
•	Occurring in the context of failing state
•	Complicated by the external influences of Western, Turkish, Persian and Arab civilizations
croTr/rxL tz w/-.


4

Declassified by: MG Michael X. Garrett,
USCENTCOM Chief of Staff
Declassified on: 201505




5

Declassified by: MG Michael X. Garrett,
USCENTCOM Chief of Staff
Declassified on: 201505







              Period 1:
              Working Groups





ERFC:| (b)(3), (b)(6)	|
  •	Synchronization, deconflict engagement and reconciliation efforts;
    delineate reporting requirements and streamline approval process
  Carrots and Sticks :|~~(b)(3), (b)(6) |
 •	Develop Commanders Full Spectrum Kitbag
PSF/ASF:I b 3, b 6	1
  •	Local ability to hire, arm, train, integrate and control auxiliary
     security forces

•	Impact within 90 days that is sustainable over the long term
•	Attainable and realistic in scope
•	Achievable by MNC-I and MSCs
•	Work with what we have
•	Decentralized, bottom-up and responsive


6

Declassified by: MG Michael X. Garrett,
USCENTCOM Chief of Staff
Declassified on: 201505





               Working Groups




  Engaging the Populace: I (b)(3), (b)(6)	|

 •	Themes, messages and methods
 Engagement ROEj (b)(3), (b)(6) |
  •	Guidance to MSCs: left and right limits by echelon

  Bridging the Provincial - National Gap:I (b)(3), (b)(6) I

 •	Developing Provincial links to operational forces and Gol



•	Impact within 90 days that is sustainable over the long term
•	Attainable and realistic in scope
■ Achievable by MNC-I and MSCs
•	Work with what we have
•	Decentralized, bottom-up and responsive


Local Amnesty
Local DeBaath exceptions
Weapons Possession exceptions
Local contracting
Detention Release Program
Spoils of AQI
Reincorporation of former military
Agricultural assistance
Micro-hydroelectric generators


7

Declassified by: MG Michael X. Garrett,
USCENTCOM Chief of Staff
Declassified on: 201505





               Working Group




                    GOI/ISF/MNF-I








•	Impact within 90 days that is sustainable over the long term
•	Attainable and realistic in scope
•	Achievable by MNC-I and MSCs
•	Work with what we have
•	Decentralized, bottom-up and responsive



Local Amnesty
Local DeBaath exceptions
Weapons Possession exceptions
Local contracting
Detention Release Program
Spoils of AQI
Reincorporation of former military
Agricultural assistance
Micro-hydroelectric generators


8

Declassified by: MG Michael X. Garrett,
USCENTCOM Chief of Staff
Declassified on: 201505


Reconciliation IPB Conference Agenda

__

      07 MAY 07	_______

0900 0910 AdiwnrsUatwe
09100930. Welcome Remarks	A ¹_____
0930 0945 MNC-I Rcax<iliₗitionlPBOu»r/i/f4w^\
0945-1015: MNF I E nqagemnnr and RecotKiSafift'j/ji’Wlls/ Q (fa Mfr
1O15-’O4S. MNC-i EngagementsandReconolia^Hl/^ TyRf ¹
iO45-’23O. MSCEnvironmentalAssessmentBn&spk^JImwSflaiceReprei»enteiive>
               -	MND-C
              -	MNF-W
              MND-N

1230-1330:
1330-1 533.

1530-1545-
1545-1800

1809 1999
'999-2109

2'09 2209:

  -	MND-B
Lunch
MSC Environmental Assessment Briefs (MSC Iniolligance Rcpresentaiivel
 -	MND-CS
   MND-SE
  -	MNtMlE
Working Gree-ps Break Out IC2 Flans)
Workmg Groups Time Peni^C^e,	,,,
   ERFC Working Greu|__
   -	Carrots and Slicks Workijii
-	FSF 'ASF Working G<cm>L	..........
Df*»4«
Working Groups Time Period T,to
    10 OttensrvG Wanting proun;
 • R0E2 Working Gretip_____
 -	Bodging th- Provinual'ij y.tjafiTWBftg'-yoq	fhVRk
Working Grew Back G-icfe (C2/Lftcc1s>

08VAYJ7
0809-0530:
0839-1999

Review previous cays wyk (C2iEf*ects)
Working Grew limo Po-Kid
  • MNF JAGoi/ISF Working Grow
Working Group Back Briefs
Lunch
Develop hack, orief (CZOects)

1039-1099
1209-1300.
1303-1090:
FED- Prc-Brinf to CZ/ECCORD (C2<Fffr<ts|

11’D Pre-BrW to CoS (CZOnch)

09 WAY 07
TBD Back 8-»=f m ‘/INC I CG (CS/Effecle}

..































































9
    `

    data['doc2'] = `
    Declassified by: MG Michael X. Garrett,
             USCENTCOM Chief of Staff
               De이assified on: 201505
-SE6RE呗//REL 모。 USA, AUS’ CAN, GRR//2Q22ni2。


TO AOBR4?|
FROM ODA 1 4a I

DTG-311830CJAN07
SUBJ- OPSUM「扇1 NAJAF 28 - 29 JAN 07

AAA OPSUM FORE죠]NAJAF 28 ・ 29 JAN 07

BBB WHO: ODA 匝 Three Companies (-) Hilla SWAT

CCC WHAT: Movement to Contact, React to Near Ambush, React to Downed Aircraft,
Use CAS to Facilitate Ground Fire & Mane니ver, Use CAS to destroy enemy in trenches

and buildings

DDD WHERE: MGRS 38S MA 38 52

EEE WHEN: 281230CJAN07 一 291500CJAN07

FFF WHY: Support Hilla SWAT in responding to a regional security threat as requested
by the Najaf Provincial Leadership

GGG SUMMARY (All grids are preceded by 38S MA):









14a, (b)(3), (b)(6)









PHASE 1: (PRE-MISSION): 자怜 Hilla SWAT CDR.I (b)(6)   | met with the 18Z at
280800CJAN07 for PT and discussed a gathering of Al Mahdawiyah (Arabic Proper

No니n for which there is no tran이ation) IVO Najaf. I b 6 haid the Najaf Governor
requested him to bring SWAT in for reinforcements. The 18A & 18Z offered USSOF
assistance if necessary, butl b 6 I only requested USSOF be on stand-by. The
18A & 18Z monitored QDAh.4al activity with the AOB CDR and heard they were in
contact with AIF and using CAS to facilitate maneuver. Based on previous enemy
contact IVO Najaf with ODA|_L4gJUSSOF at Fire Base Stack presumed the firefight
would end shortly. I b 6    Ireturned later req니esting QDAI 1.4a Heave immediately
with two companies of Hilla SWAT to go to Najaf at the Najaf Governor's request. 18A
attempted to dissuade I (b)(6) [from reacting hastily, but he was determined to go
with or without USSOF support. 18A agreed to move with Hilla SWAT as a reinforcing


CTK/rfTKE /        EC TTCK K TTC C TV/ / C C C C T OC

   De이assified by: MG Micha이 X. Garrett,
                USCENTCOM Chief of Staff
                  De이assified on: 201505
• SECREP//理工l•里。• USA, AUG, CAN, GBR//20320130一
effort and briefed the AOB CDR on the situation, requesting the AOB to inform ODA| i.4a1
of additional units entering the battlespace.
PHASE 2: (INFIL): At approx. 1130C, ODAI i.4aln one HMMWV and an up-armored 5-
ton left with two companies of Hilla SWAT for Najaf, stopping at a gathering of IA, IP,
and LN provincial leadership at 38S MA 35^표5oS LNs on the ground | b 6 ~1
I b 6 I- in charge of Najaf Province Security, IA Staff]            b 6           「
I b 6 I and various Provincial Council members) provided confusing and inaccurate
reports of the situation, b니t all agreed that the AIF were Al Mahdawiyah. LNs also stated
that the engagement began when AIF fired on an ISF patrol. 18A called ODA h•세on
SAT at approx. 1230C to gain USSOF SA and was told that USSOF returned to Camp
David after an engagement IVO 38S MA 3!顽52C지   b 6   I received reports that AIF
st이e three IA HMMWVs and were using them against ISF. IA| (b)(6)    | denied this,
but was unable to confirm or deny whether any of his vehi시es were still IVO the AIF
area. During this time, USSOF observed SAF and RPG fire at two AH-64 Apaches that
were circling approx. 2 kms to the NE. After approx. 30 minutes on the ground USSOF
and SWAT began a Movement To Contact IVO the area identified by ODAh-4a| with the
understanding that all CF had left the area and the majority of AIF were killed earlier by
USSOF and ISF.
PHASE 3: (EXECUTION):
Movement to Contact: 18Z cross-loaded 12 x SWAT onto the 5-ton before infilling
directly east on the hardball road leading to a set of chicken coups at MGRS 38S MA
38。54좌 Order of March was two SWAT trucks in the lead, the HMMWV, four SWAT
trucks, the 5-ton, then the remaining SWAT trucks. The JTAC established comms with
the Apaches as the ground force left ASR Miami. The ground force approached the
chicken coup from the south and moved the HMMWV to the lead to enter the perimeter
fence. SWAT and the HMMWV drove the inside perimeter to clear the area, giving
visibility of the north side where an approx, six foot high berm 300 meters away ran east-
west and another berm approx. 500 meters away ran north-south, boxing the area in to
the north and east. The area between the chicken coup and the berm was open flat
terrain with no cover. The lead HMMWV led the ground force east towards a break in
the berm attempting to get out of a potential Engagement Area (EA). On approach the
HMMWV gunner saw a suspicious lone HMMWV move so니th to north on a hardball road
approx. 500 meters east, then multiple armed LNs, vehicles, and HMMWVs on the
opposite side of the berm in defensive fighting positions. The break in the berm was
actually a cliff manned by more armed LNs. I 」3 b 6 I realizing the potential to
become quickly overwhelmed but not having enemy PID, fired the .50 cal into the berm
to keep their heads down. The LNs held fire and hurriedly pointed to the north.
Realizing that the gro니nd force was boxed-in if AIF occupied and fired from the opposite
side of the berm, the 18A directed the ground force to occupy the berm on the north and
east of the chicken coup. ((USSOF later learned that the AOB, witnessing this unfold
through an ISR feed, saw approx. 100 AIF on the opposite side of the berm.))
React to Ambush (MGRS 380a Q： Simultaneously, but unbeknownst to the lead
HMMWV, AIF dismounts on the opposite side of the north berm (approx. 100 m to the
north) began to engage the ground force with SAF. The 18Z in the 5-ton yelled for the
ground force to flank west towards the north berm. USSOF in the 5-ton saw the column
of SWAT trucks and HMMWVs oriented west to east, all left turn in unison and move
north online to the berm. I b 3. b 6 Imaneuvered the lead HMMWV northwest, directly

SECRET//REL TO           CAN, GBR//20320上킁6
    Declassified by: MG Micha이 X. Garrett,
                  USCENTCOM Chief of Staff
                    De이assified on: 201505
SEeRET〃REL TO USA, AUS, CAN, GBR//2&32■(母30---


into heavy enemy fire from the berm, to place the HMMWV in a position to C2 the
ground force on the berm. This placed the HMMWV with half of SWAT to the east, and
half of SWAT and the 5-ton to the west. The AIF displaced north from the berm and
occupied hasty fighting positions along the tree line approx. 50 - 75 m north of the berm
and continued to engage the ground force. At this point the ground force effectively
became split in half with the 5-ton and SWAT on the west pinned down by effective fire
and the HMMWV and SWAT less than 100 m to the east under minimal fire and able to
maneuver and return fire from the berm. Every time USSOF or SWAT on the west
raised a head above the berm, incoming rounds sent dirt flying. SWAT received one
WIA during this time and ground evacuated him to an Iraqi hospital. The JTAC
requested the Apaches, who were focused on the gunfire in the village, move to the
ground force location to conduct RW g니n nuns on the AIF fighting positions. The 5-ton
gunner was the only individual on the west flank able to continually provide effective
suppressive fire. The eastern flank identified a white Bongo and a blue Bongo with a
heavy MG mounted in the bed, approx. 200 - 300 meters to the north behind another
berm, to which the AIF were maneuvering. I b 3. b 6 lenaaaed the blue Bongo with
four 81 mm Carl G니stav (Carl G) rounds (2 x HE, 2 x HEDP), killing one and impacting
the blue Bongo, while the HMMWV gunner engaged multiple dismounted targets. The
18A engaged multiple targets before directing SWAT to occupy the eastern berm and
rear security to prevent an AIF flanking mane 니 ver. The 18A and I b 3, b 6 Ithen
examined the eastern flank of the AIF and noticed a north-south running berm that
potentially provided cover for a dismounted force to flank the AIF. At this point, approx,
five minutes into the react to ambush, the JTAC reported that an Apache was shot down
to the NW at MGRS 36|i冨53园(just east of ASR Miami) by ground fire. The second
Apache then focused on the downed Apace. Additional reports came in confirming that
there were, in fact, three IA 니MMWVs IVO a village to the NW that were st이en by the
AIF. Not realizing the severity of the western flank's situation, the 18A directed a break
in contact to move to the downed aircraft. The 18Z informed the 18A that this was not
feasible due to the heavy volume of fire they were receiving, and recommended a
flanking maneuver. The 18A acknowledged and instructed the SWAT CDR to assemble
men for a dismounted assault with the 18A, JTAC, andl b 3 b 6 I The 18Z then
recommended that the flanking element only establish a base of fire as opposed to
assaulting west, do to limited ability to shift SWAT's fires in support of a moving element.
I b 3, b EI wisely recommended the HMMWV with gunner and driver move to support
the western flank, where it assisted the 5-ton gunner in providing continual suppressive
fire for the western flank. The 18A requested additional support from the AOB to secure
the crash site. The 18A, incorrectly understanding from the JTAC that the two remaining
fast-movers could be split between the 18Z and the 18A, req니ested that it happen to
ensure both elements could receive CAS. Only later did it become apparent that the
message was not understood due to multiple aircraft talking in the JTAC's ears at the
time. Meanwhile on the western flank, the 18Z, I              b 3 b 6              I
(曲⑶,(b)(知ade repeated unsuccessful attempts to get SWAT to gain fire superiority from
the berm. These USSOF continually gave commands and led by example, rising above
the berm to engage the enemy and lead SWAT in establishing fire s니periority. Except
for one brief period they were simply unwilling to remain above the berm to return fire.
USSOF noticed that most of the AIF were wearing black tops and bottoms with assault
vests and magazine racks. I b 3 b 6 I provided covering fire while I b 3 b 6 I
attempted to engage two AIF behind a tree at 200 m with the Carl G. I b 3 b 6 Ifirst
attempt failed so he dropped back down behind the berm. I b 3 b 6 Ithen received a
gunshot wound to the head from an enemy round that impacted his MICH. I b 3 b 6 I
assessed and treated the wound before I b 3 b 6 I returned to the fight. Despite
  Declassified by: MG Micha이 X. Garrett,
                USCENTCOM Chief of Staff
                  De이assified on: 201505
SECRE꼬0REL T® USA, AUS-, CAN7-GDR//20320^30-


receiving a gunshot w（기jnd to the head, leaving him significantly dazed, [ b 3 b 6 I
returned to firing from the berm to motivate SWAT to return fire. I b 3 b 6 I not
realizingT b 3 b 6~Iwas no longer covering him, rose back up to fire the Carl G and
received a gunshot wound to the head from an enemy round that impacted his MICH. A
SWAT medic pulled off|（b）（3）,（b）（6）|MICH, assessed the wound and his consciousness,
applied a dressing, and reassured「b 3, b 6 Ithat he was alright. The SWAT medic
conducted follow-on checks with I b 3, b 6 I later in the day. After treating two gunshot
wounds to the head.l b3 b6 I engaged dismounts in the open with the 81 mm Carl
G HE round set for air burst at approx. 200 m. I b 3 b 6~1 realized the impact on SWAT
if a USSOF Soldier was removed from the fight and fought to avoid collapse on several
occasions. His efforts lik이y averted a complete collapse of SWAT's will to fight on the
west flank. On the east Hank.l b6 Icontinuad assembling approx. 50 SWAT for
the dismounted assault. I b 3 b 6 learried an AT-4 he took from the HMMWV before
it joined the base of fire team on the west.

Company Attack: There was now a flanking element consisting of 50 SWAT dismounts
led by I            b 6           lalona with the 18A, JT AC, I b 3, b 6 I and interpreter

I b 6 I and a base of fire element led by the 18Z and remaining USSOF and SWAT
in이tiding two SWAT Company CDRs. The 18乙 with two USSOF injured and hims이f
controlling the base of fire, directedl b 3 b 6 I to focus on the truck FM and SATCOM
to maintain comms with the flanking element and the AOB, ensuring crucial comms
during the maneuver.丨 b 3 b 6 Icontinued providing crew-served fire
support whilel              b 3 b 6              Icontinued motivating SWAT to
return fire. The flanking element moved south around the eastern berm then back north,
passing numerous ISF hunkered down in the low ground and stopped at another east-
west running berm j니st forward of earlier one. At this point the flanking element noticed
a road running east-west just in front of the berm, on which were multiple IP and civilian
SUVs that were riddled with SAF. The road on the east running north-south was across
approx. 50 m of open ground and the intersection had several other destroyed vehicles.
This position provided better visibility of the eastern flank to which the element was
maneuvering. Again,I h 3 h 6 land the 18A assessed the feasibility of moving north.
AIF to the NW, seeing movement through the break in the berm, began firing on the
flanking element, decreasing the rate of fire on the base of fire element. The 18Z was
now able to get the base of fire to provide suppressive fire. By this time a second flight
of Apaches was on station providing gun runs on AIF fighting positions IVO the two
Bongo trucks. Using the base of fire and gun runs to suppress the AIF, the flanking
element crossed the road and moved north along the berm approx. 100 m before being
pinned down by SAF from the north. The JTAC identified the friendly position with a
signal mirror and requested a GBU-12 approx. 100 meters to the north on the two Bongo
trucks. The 18A told the flanking element to assault the enemy position as soon as the
bomb landed. After impact the flanking element assaulted the enemy position, climbing
an approx, eight foot berm to see down into the corner of a 10 foot deep trench line that
ran west as far as the eye could see and north approx. 50 m until another berm blocked
the view. On the opposite side another berm approx. 20 feet high from the bottom of the
trench 이ccked all but the barrel of the Bongo mounted heavy MG. USSOF and SWAT,
still receiving fire, engaged the survivors in the trench. I （b）⑹ Iwhile leading SWAT to
the top of the berm and engaging the enemy, received a gunshot wound to the face
requiring I b 3 b 6 Ito assess and pack the wound with Kerlix. This severely
diss니aded SWAT from continuing to fire from the top of the berm. This was the first
realization by the ground force of the magnitude of AIF defensive preparations. During
this time the JTAC witnessed one AIF blow himself 니p approx. 150 m away in the trench.

SEGREW/REE TO USA/ AUS”                           GAN 7 G曲〃；2。3 2 g 3。
   De이assified by: MG Micha이 X. Garrett,
                USCENTCOM Chief of Staff
                  De이assified on: 201505
•SI코四O USA, AUS, CAN, G公R//29320코30 •
At this time the 18Z began requesting CAS on FM on multiple buildings used by AIF
approx. 700 m to his NW. Realizing that the CAS allocation hadn't worked as planned,
the 18A and JTAC began working to get them a CAS mission. The aircraft, unable to
directly communicate with the 18Z, requested a grid as opposed to a distance and
direction from the VS-17 panel marking the 5-ton at their position. After relaying the
TGT grid, aircraft stated it was the friendly position of the VS-17 panel and requested a
distance and direction from the VS-17 panel then delayed again to confirm that the 18Z
had eyes on the TGT. USSOF confirmed that the original TGT grid was correct, but
numerous grids passed in a short period of time created confusion for the pilots. At this
time the confusion of numerous aircraft requiring air control assistance forced the JTAC
to assume air traffic controller duties to arrange the aircraft. While this new development
set in, HMMWVs approached from the north along the road, firing mini-g니ns and .50 cal
into the berm just north of the flanking element. It was unclear at first whether they were
frien에y or the st이en HMMWVs. B이ieving they were f「ien에y but fearing fratricide, the
18A moved to a position in the open and began waving both arms at the HMMWVs,
which then pulled into position next to the dismounts to coordinate. The 18A identified
himself as the Ground Force CDR (GFC) and coordinated efforts with three separate
individuals (USN Seals and members of| i,4a pFG(A)) who identified themselves as TF
| 14a | with the Iraqi Counter Terrorism Force (ICTF) The18A sketched the L-shaped
configuration the ground force was currently in for TFl 1.4a ISA. TFl 1.4a 1 stated
they were there to secure the crash site, but didn't believe it was along ASR Miami on
their infil from Camp David. The 18A and JTAC confirmed the grid and pointed TF
I 1.4a Ito the west where the smoke from the crash had already dissipated. The ODA
114aland [Fl 1.4a IJTACs coordinated to push RW CAS to TFl 1.4a land FW CAS to
ODA h•시 While coordinating, the combined element continued receiving SAF from the
north, resulting in at least one wounded ICTF. TFl 1.4a ] agreed to exfill (b)(6)!
reiterating that their priority was the crash site. On request fromTFI 1.4a I the JTAC
used Apaches to drop flares to mark the downed aircraft. TF | i.4a I recommended the
flanking element ret니rn to the base of fire element, and then returned north then west on
the hardball road to ASR Miami to find the crash site, firing mini-gun and .50 cal into the
same berm just north of the flanking element. The flanking element, realizing the futility
of further advances in light of the situation, began moving back south to re-link up with
the base of fire and use CAS along with the new understanding of the battlefield to
destroy remaining enemy positions. Meanwhile, the base of fire element began talking
with the ODAFT47I18A on SATCOM at the time of the GBU-12. The 18Z ensured that
the ODAl 1.4a |18A would h이d TF I 1.4a Ifrom their assault until ODA h.4a| cleared their
assault lane. Soon after that, the base of fire element received significant fire from a
mini-gun and .50 cals to the north. TF | 1.4a at this time had turned onto a westward
running road and presumably began firing south to cover their movement. The base of
fire element, believing that TFl i.4a I assault south was underway, called for a cease-
fire on SATCOM and FM to prevent fratricide. The 18Z and 18A coordinated over FM
with their differing accounts of TFl 1.4a ~lolan of action. Going with the worst case
scenario that TF「1 •偽 lhad changed plans and was assaulting south, made believable
by the mini-g니n fire the base of fire element received, the flanking element halted and
moved into position to provide covering fire while the base of fire moved east out of TF
1.4a |way. Still receiving fire from the trench line, the JTAC requested Apache
rockets and a second GBU-12 for the western bend in the trench where numerous AIF
were seen fleeing away. This would 이ea「AIF for TF I 1.4a Iprior to their presumed
assault south, and support the base of fire's move east. Following the second GBU-12,
the flanking element moved into the prone behind cover to provide suppressive fire.
Continued SAF from the NW dissuaded most SWAT from moving into position, leaving

815(2划堡//皿五 TO-USA, AUS, CAN, GBR//20320^3。---
    Declassified by: MG Micha이 X. Garrett,
                  USCENTCOM Chief of Staff
                    De이assified on: 201505
SECRE望//皿，屮G-USA, AUS, CAN, GBR//20320士30---


USSOF and I b 6 I with approx. 5 SWAT to support the base of fire's movement.
By this time the 18Z had tried repeatedly with minimal success to convince SWAT to




displace to the east, and req니ested that the flanking element rejoin him and remain
behind cover during TF| i.4a ~1 presumed assault. |    （b）（6） |on the M240B repelled
over 40 AIF who were cresting a berm to the north in an attempt to outflank the
USSOF/SWAT maneuver element on the east. He later stopped the AIF resupply effort
that was running back and forth from the village to the berm with ammo. I b 6 I
I b 6 ---I use of the .50 cal and M79 prevented repeated AIF attempts to re-man the
Bongo moimted DShK. The JTAC requested a third GBU-12 on the trench system to
facilitate movement south across the road and behind the southernmost berm. While
waiting on the third GBU-12, a lone HMMWV came within 100 m of the flanking element,
moving north on the hardball road and eventually recovering a destroyed civilian SUV
and leaving. With only small arms and one AT-4, the possibility of it being one of the AIF
operated HMMWVs left the flanking element with the choice of bad or worse regarding
which side of the berm to stay on. Following the third GBU-12 the flanking element
moved south across the road, consolidated and accounted for all personnel, and
unsuccessfully attempted an Apache gun run on the treeline 75 m north of the base of
fire element before linking back up with them. Up to this point, |       （b）（6） land
I b 6 Ion the crew-served weapons were crucial in providing suppressive fire in the
absence of SWAT returning fire. Without their effective fire, the base of fire element
would likely have been overrun by AIF up to 75 m to the north. On the final movement to
link back up with the base of fire I（b）（6）I placed himself in the lead to prevent potential
fratricide when the two elements rejoined. His actions during the flanking maneuver
were commendable. As the only interpreter with the element, with only body armor and
a helmet, he remained with the 18A in the lead; ensuring commands were understood by
SWAT. Throughout the OPN he provided valuable recommendations on SWAT's
morale. By 1630C ODA h.4aland SWAT were reconsolidating at the original position
with various ineffective ISF still on the east side of the berm. AIF continued with
sporadic volleys of fire preventing a true static overwatch position from the berm. I b 6 I
|（b）（6）［coordinated for his 4th Company to move in from ASR Miami and conduct link-up
to reinforce. This period allowed USSOF to better examine the ground, and identified six
bomb craters with freshly moved dirt and body parts in an area approx. 150 m wide
stretching south from the 5-ton. USSOF counted two EKIA from the remaining body
parts.
CAS OPNs and Relief in Place: By 1700C OP A11.4a I recognized the superior tactical
position held and used CAS to destroy remaining enemy. The 18Z informed the 18A
that a Stryker BN was en route to conduct relief in place and conducted ammo
redistribution. The HMMWV gunner had already begun conserving ammo after
expending half （500 rnds） of the truck supply. The 5-ton gunner fired half the 5-ton's
approx. 5600 rnd supply by link-up. The 5-ton's rear M24OBs hadn't been used at this
point. The JTAC began coordinating with multiple air assets for fire missions while the
18A 이id I （p）（3）,（b）（6）Attempted to contact T디 3표「to confirm their intent and location
ODA | 1.4a Base offered two A-10s that entered the battlespace. Soon after, TFI 1.4a "I
requested additional CAS to s니pport their position due to heavy incoming fire. The 18A
instructed the JTAC to push the A-10s to TF| 1.4a land keep other FW CAS in support
of ODA「i爲］Aircraft continued to identify targets to the north but lack of SA on TF
I 1.4a llimited ability to 이ear CAS fires. After hearing that T디 1.4a I was recently at
MGRS 37］풔52风 the 18A cleared ro아cets preceding a JDAM on the trench to our north
and a laser-guided bomb on an east-west running canal also to the north. After this,
following lucrative CAS targets were too far west to safely clear fires without having real-

SECRET/-/RES-史。-USA,      C&, GBR//으。긍운。코긍。

     De이assified by: MG Micha이 X. Garrett,
                  USCENTCOM Chief of Staff
                   Declassified on: 201505
SECREE〃REL TO USA, A&3 , CAN,-(汨1<//2。320130---
time comms with TFI 1.4a I This included gatherings of up to 40 AIF east of the village,
around the captured HMMWVs. I b 3 b 6 I mounted the 5-ton's rear M240B to
engage and repel a white pick-up that attempted to flank from the west and a blue bongo
approaching from the south on the chicken coupe road. The detachment attempted
through multiple means to contact TFl 1.4a Iwhile also determining link-up procedures
with the Stryker BN to whom ODALl쇼 was now TACON. After dark the AC-130 came
on station and comms with the Stryker BN (Patriot) provided sufficient SA to begin using
the AC-130 for CAS. After Patriot's link-up with TFl i .4a "land ODA I i .4a|it was
understood that half of TFl 1.4a ]and most of QDAI 1.4a lexfilled to Camp Hot이 with the
rest remaining with Patriot. ODA[L4aJused the AC-130 to engage 100 AIF in the
woodline and 40 AIF in a separate woodline, followed by squirters from each
engagement. Patrio[표then ordered a CAS cease-fire and instructed that as GFC all
clearance of fires would be through him. Additionally, OD沿GMWJshould exfil to allow a
Patriot pure OPN. The 18Z's experience was crucial here in prompting the 18A to
explain the tactical situation from QDAl i .4a"] position, rather than attempting to withdraw
니nde「fire. After the 18A provided Patrio Q ith specific TGTs identified by ISR, a
recommended EA, and ODA□표가ecommendations, Patrio坯 pproved CAS TGTs
east of the 38 easting and south of the 52 northing and agreed to send a unit to relieve
ODA 11.4a I in place. This ens니red that the southeast corner of the AIF's stronghold was
secured, effectively boxing them in from the west and so니th and allowing interdiction of
squirters moving east across the hardball road. ISR identified a HMMWV with
dismounts surrounding it in the prone within the approved EA. The A-10s were reluctant
to engage it so the AC-130 fired first, hallowed by A-10 gun runs. Numerous CAS
missions including F16s, A-10s, and AC-130 followed resulting in the winchester of
Hamme田교 replaced by Hammer[t4al When Hammer]표was close to winchester the
JTAC instructed them to mark TGTs for the A-10 until 니ammerE풔came on station.
With HammerIi43onlv 10 minutes away the JTAC told Hammer远t。winchester. I b 6 I
I b 6 I received a report of an Afghani insurgent in a mosque IVO MGRS 30屜 선교 which
the 18A relayed to Patrio[풔 Concurrently, ODA[고^coordinated the night-time link-up
with Bia아(hors&풔(a company from the 3-2 IN Strykers). After a link-up facilitated by FM
comms and IR flashes, the Strykers found a mounted route into the area several
hundred meters to the southeast and began integrating onto the berm. The 18A and
18Z coordinated with Blackhorse leadership to provide SA (specifically on the prepared
defensive positions) and conduct battle-handover. The JTAC began working alongside
the Blackhorse JTACs to conduct CAS missions. Blackhorse bro니ght in a more than
enough .50 cal and 7.62 link for resupply. Throughout the night the USSOF JTAC with
Blackhors E줘 s GFC winchestered Hammer f i.4a | During this time BlackhorseQ
and the 18A disc니ssed options for securing the OBJ in the morning, assuming there
would still be resistance.
Securing the OBJ: At daylight USSOF and SWAT engaged several more dismounts to
the north. The 18A met with Blackhorsei^nd Patrio & rior to BMNT to discuss the
plan for securing the OBJ. USSOF and SWAT would hold the current position while
Blackhorse cordoned the south and west and began 시earing to the north. USSOF
observed four AIF flee east across the hardball road, then prompted Blackhorse to
expedite securing the road to prevent further squirters. At this point it became clear that
AIF were s니「rendering in large numbers and Blackhorse requested USSOF and SWAT
move along the eastern hardball road and use loudspeakers to encourage surrender.
After moving into position SWAT moved up to the berm to control the surrendering 시F,
then began conducting battlefield recovery IAW TTPs. Due to the need to retain the
scene for thorough SSE, USSOF directed SWAT to leave weapons and m니nitions in

SECREP/-/REE TO USA, AU3 , CAN, GBR//20320,3。---

 Declassified by: MG Micha이 X. Garrett,
               USCENTCOM Chief of Staff
                 De이assified on: 201505
SECIR迎〃REL TO UBA, AU。，CAN, ©8R//20320130--


place. The remainder of the day consisted of securing the area and walkinq the ground
to determine the extent of the positions. The 18A coordinated with Patrio Qo begin
moving the SSE team from Camp David to the OBJ. A vast number of weapons had
Arabic writing on them reading I (b)(6)了 Two PUCs told USSOF interpreters that
they were called two days prior and told to come meet the I (b)(6) I there. ODAs
1.4a     I facilitated an excellent resupply of food, water, f니이, Cl VIII, ammo, tools,
and batteries brought directly to ODAR.4a | OD I 1.4a I acilitated the link-up of the SSE
team with Patriot and assumed responsibility for them, allowing ODA Q포］ and SWAT to
prep for exfiL

PHASE 수 (EXFIL): After reorganizing supplies from ODAs I 14a   ~1 USSOF and
SWAT exfilled on the same infil route back to ASR Miami. ISF along the way
congratulated the ground force. Due to「eportsl b 6 I received of planned
ambushes on the return「o니te, the ground force turned east at Kifl and took a road along
the Eurphrates north, then turned to enter Hilla from the west.

Notes:
1) The recommended EA from ODA 11 4a Ito Path애虫vas the Allowing grids: MGRS
3&좌 2좌3演「扁3 辱 20a 3 £35^3 This was based on known ground tr니th at the
time. OD시 1.4a I believed enemy positions likely extended further west and was
undetermined to the north. With PatriotHdilconstraints, the final EA for CAS was almost
exactly the boundaries of the AIF's stronghold.
2) The following is a close approximation of ammunition expended during the operation.

TOTAL         524        2900        835        20        32     5(3-HE/2HEDP)

3) The estimation of EKIA from direct fire during the operation is 63.
4) The final count as of 311800CJAN07, 아lowing CAS attacks through 290100CJAN07



shows 40 separate CAS atta 아cs conducted by ODA 11.4a I through the ODA JTAC. He
continued controlling AC-130 fires for Blackhorse［죠1 s the GFC after 0100C.
HHH NUMBER OF DETAINEES WITH TAG NUMBERS ACCEPTED INTO U.S. OR ISF
DETENTION FACILITIES AND THE NAME AND LOCATION OF THE DETENTION
FACI니TY: Four detainees turned over to the lA-run Detainee H이ding Area IVO the AIF
village. SWAT conducted tactical questioning prior to turnover. Preliminary SSE TM
reports show 니p to 300 male detainees.
Ill NUMBER OF IZ PERSONNEL KILLED BY USSOF: DF - 62, AC-130 (from reporting
as of 311800CJAN07) - 176, Other FW and RW - UNK, Preliminary SSE TM reports
show up to 250.
JJJ NUMBER OF IZ PERSONNEL WOUNDED BY USSOF: DF - UNK, AC-130 (from
reporting as of 311800CJAN07) - 50, Other FW and RW - UNK, Preliminary SSE TM
reports show 니p to 250.
KKK NUMBER OF WEAPONS CAPTURED / DESTROYED: Preliminary SSE TM
reports show 1000s of AK-47s, 100s of RPGs, 6 x DShKs, and massive amounts of
                Declassified by: MG Micha이 X. Garrett,
                              USCENTCOM Chief of Staff
                                De이assified on: 201505
SECRET//REL TO USA, AUS, CAN,---&日只//2。32。士긍。---

ammunition. AC-130 reports as of 311800CJAN07 show eight vehi이es and five
buildings destroyed.

LLL NUMBER AND TYPE OF OTHER MATERIAL CAPTURED: The flowing
equipment was found on the east side of the EA IVO the trenches: Equivalent in Iraqi
dinar to 110 USD, one x GP340 Moto「이a radio SN: PMUE1440ABE with a strip of 100
mph tape on the bottom and "7 Cobra" written in Arabic, a small memo book with AIF
task organization, two Iraqi ID cards, one ID card with English and Japanese print.
Translations are provided at the below.
















(additional untranslated information)

2nd Iraqi ID Card:
I           b 6           [from: Thee Qarr /Al-Nasaryeah/ AI-BtaHa'a)

(additional untranslated information)
Corporate ID Card:
Back side had the hand written nam텨                   (溯)                   |

MMM DETACHMENT STATUS (MEN, WEAPONS, EQUIPMENT): 100% on Sensitive
Items. NMC Equipment Requiring Replacement: 2 x MICH, 1 x PVS-14 NVG swing-

arm mount for the MICH, 1 x PEQ-2A (SN: 020389A), 3 x H&K 5.56 mm magazines, 2 x
empty 60 mm mortar cans, 1 x Hellfire Power Cable, 1 x Helmet Cam Replacement Hard
Drive, 1 x AV 2055-3 UHF Antenna SN: 0607.
NNN SOURCE OF INTELLIGENCE TRIGGERED THE OPERATION (LE. CJSOTF-AP
OR CF HUMINT, CJSOTF-AP OR CFI 1.4c L CJSOTF-AP INTEL FUSION CELL OR
CF INTEL FUSION CELL, ETC.): USSOfI 1.4^ | previously reported the Al
Mahdawiyah splinter of the MM focused in 시 Kawam (MGRS 39 82). This OPN was
precipitated by ODAI 1.4a I/ TF□圣二]engagements earlier the morning of 28 Jan 07 in
the same area.

OOP COMMANDER COMMENTS:
1) I (b)(6) lied from the front and was situationally aware the니ghout the OPN,
staying in contact with Iraqi leadership who called with updates. However, aside from he
CE CCBE / /CIFT E/、                  AT       / / C C C C C，C C
  Declassified by: MG Micha이 X. Garrett,
                USCENTCOM Chief of Staff
                 Declassified on: 201505
/rCTKE /        EC TTCK K TTC     K/FCT、/ / C C C C C r ~> C
A / / ZVEJXJ       VJ OA , CU
and |(b)(6)|SWAT's performance under fire was sub-standard. Despite live-fire
maneuver training we've conducted with them where the officers trumpeted that they're
mostly former IA and know how fire and maneuver, they were largely ineffective in
returning effective fire. The conceivable fix is tougher, more realistic training to eq니ip
them with the confidence necessary to react 니nder fire. This req니ires significant training
ammunition.
2) GOI reporting is contrary to LN reporting on the ground regarding the 시F. ODAl 14a |
had recently targeted Mahdawiyah in Kawam and I b 6 ~lwas quite aware of their
presence, stating they were a split from the MM. The return of the Mehdi is a belief
limited to Shi'a, not Sunni. The significant prepared defensive preparations combined
with the few detainees questioned who stated the/d just arrived begs a question.
3) ODA |i.4a| performed admirably under fire. The synergy of experience, leadership,
technical competence, and tactical understanding allowed the ODA and majority of
SWAT to hold what turned out to be key terrain on the SE corner of the EA, gain
outstanding SA, and influence the outcome of the battle.
4) The combined SA of 3-2 IN (Patriot) and ODALL4al「es비ted in a near perfect read of
the enemy defensive positions, including their final defensive line in the trench. Patriot国
wisely req니ested specific targets, locations, and descriptions before accepting that ODA
|14alhad accurate SA and was in key terrain that required h이ding.
5) I b 6 一一I seeing the lack of positive post-0PN spin for SWAT, is now taking a
much greater interest in SWAT's c니「rent and long-term IO campaign. Though not yet
specifically addressed, he realizes SWAT's performance under fire was sub-par.
Additionally, post-OPN atmospherics indicate that several SWAT/OD l」4a I M TGTs in
southern Babil are losing their fear-induced popular support as a result of the destruction
of the Mahdawiyah. The next several weeks will prove whether this is fluff or fact.
jb)(3), (bxejSENDS
























O珂6REP//皿E g U3A, AU9, CAN, 0BR//2032O130

    `
    return data;
  }
}
