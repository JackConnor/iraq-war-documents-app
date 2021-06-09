(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jack/Documents/iraq-war/iraqWar/src/main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HomeComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No Documents Present ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function HomeComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doc_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, "/document/" + doc_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", doc_r5.title, " ");
} }
function HomeComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_20_div_1_Template, 3, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.orderedDocs);
} }
function HomeComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_22_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const key_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.selectTag(key_r6.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", key_r6.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", key_r6.key);
} }
class HomeComponent {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.title = 'iraqWar';
        this.data = {};
        this.documents = [];
        this.orderedDocs = [];
        this.tags = {};
    }
    ngOnInit() {
        this.setupDocuments();
    }
    setupDocuments() {
        const data = this.getData();
        console.log(data);
        for (let x in data) {
            if (!this.data[x]) {
                this.data[x] = {};
            }
            this.data[x] = {
                ocrString: this.removeWhiteSpaces(data[x]['ocrString']),
                title: data[x]['title'],
                id: data[x]['id'],
                tags: data[x]['tags'],
            };
            this.meshTagsIntoList(data[x]['tags']);
        }
        console.log(this.data);
        this.searchTerm({ value: '' });
    }
    meshTagsIntoList(tags) {
        for (let i = 0; i < tags.length; i++) {
            if (!this.tags[tags[i]]) {
                this.tags[tags[i]] = {
                    selected: false,
                };
            }
        }
    }
    searchTerm(input) {
        const term = input.value;
        const rawDocList = {};
        for (let x in this.data) {
            console.log(x);
            rawDocList[x] = this.searchSingleTerm(term, x);
        }
        this.orderedDocs = this.organizeDict(rawDocList);
    }
    searchSingleTerm(term, dataSetName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { docs } = yield this.http.post('http://localhost:5555/api/clinics/get-iraq-documents', { searchQuery: term }).toPromise();
            console.log(docs);
            this.orderedDocs = docs;
            // const termArr: string[] = this.removeWhiteSpaces(term);
            // const termDict: any = {};
            // let hitTerms = 0;
            // for (let i = 0; i < termArr.length; i++) {
            //   termDict[termArr[i].toLowerCase()] = {
            //     selected: false,
            //   };
            // }
            // for (let x = 0; x < this.data[dataSetName]['ocrString'].length; x++) {
            //   if (termDict[this.data[dataSetName]['ocrString'][x]] || termDict[this.data[dataSetName]['ocrString'][x].toLowerCase()]) {
            //     if (!termDict[this.data[dataSetName]['ocrString'][x].toLowerCase()].selected) {
            //       termDict[this.data[dataSetName]['ocrString'][x].toLowerCase()].selected = true;
            //       hitTerms++;
            //     }
            //   }
            // }
            // console.log(hitTerms);
            // return hitTerms;
        });
    }
    organizeDict(dict) {
        const dictKeys = Object.keys(dict);
        dictKeys.sort((a, b) => {
            return dict[b] - dict[a];
        });
        const fullArr = [];
        for (let i = 0; i < dictKeys.length; i++) {
            fullArr[i] = this.data[dictKeys[i]];
        }
        return fullArr;
    }
    removeWhiteSpaces(dataStr) {
        let dataArr = [];
        const currArr = dataStr.split(' ');
        for (let i = 0; i < currArr.length; i++) {
            if (currArr[i] != ' '
                && currArr[i] != '  '
                && currArr[i] != ''
                && currArr[i].length > 0) {
                dataArr.push(currArr[i]);
            }
        }
        return dataArr;
    }
    selectTag(tag) {
        this.tags[tag].selected = !this.tags[tag].selected;
        this.filterByTags();
    }
    filterByTags() {
        const newList = [];
        for (let tag in this.tags) {
            if (this.tags[tag].selected) {
                for (let i = 0; i < this.orderedDocs.length; i++) {
                    let docHasTag = false;
                    for (let x = 0; x < this.orderedDocs[i].tags.length; x++) {
                        if (tag === this.orderedDocs[i].tags[x]) {
                            docHasTag = true;
                        }
                    }
                    if (docHasTag) {
                        newList.push(this.orderedDocs[i]);
                    }
                }
            }
        }
        console.log(newList);
        this.setupDocuments();
        this.searchTerm({ value: '' });
        if (newList.length > 0) {
            setTimeout(() => {
                console.log(newList);
                // this.orderedDocs = newList;
            }, 1000);
        }
    }
    getData() {
        const data = [
            {
                id: 1,
                title: 'USCENTCOM Chief of Staff CG Talking Points',
                tags: ['abc', 'xyz', 'boom', 'doc1'],
                ocrString: `doc1 1Declassified by: MG Michael X. Garrett, 1USCENTCOM Chief of Staff 1Declassified on: 201505 1 CG Talking Points 1 • Engagements and Reconciliation will be a central tenet of the 1 new Campaign Plan doc1 1 • Focus on enabling a bottom-up, decentralized, responsive 1 approach 1 • Engage the right leaders at the right levels 1 • Develop guidance to subordinates, providing them left and 1 right limits 1 - Encourage engagement initiative 1 - Empower subordinate commanders 1 • Reinforce the Rejection of AQI and| i.4b, i 4d ~~fcs 1 common themes 1 • Establish control mechanisms to ensure that we are 1 developing grassroots Iraqi capacity, not creating militias and 1 warlords 1Local Amnesty 1Local DeBaath exceptions 1Weapons Possession exceptions 1Local contracting 1Detention Release Program 1Spoils of AQI 1Reincorporation of former military 1Agricultural assistance 1Micro-hydroelectric generators 1Declassified by: MG Michael X. Garrett, 1USCENTCOM Chief of Staff 1Declassified on: 201505 1 C2 Talking Points 1 This conference affords an opportunity and forum to present 1 Engagement IRB of each area in order to support MNC-I's 1 Engagement and Reconciliation efforts 1 Intel supports Engagement and Reconciliation by: 1 - Developing an environmental understanding of the context in 1 which engagements take place 1 — Assisting in the identification of Reconcilables and 1 Irreconcilables 1 - Monitoring the actions and behaviors of Reconcilables and 1 Irreconcilables 1 Outcome of this conference: Better understanding of how the MNDs¹ 1 environments are inter-related in order to ensure our Engagement 1 and Reconciliation efforts are mutually supporting 1Local Amnesty 1Local DeBaath exceptions 1Weapons Possession exceptions 1Local contracting 1Detention Release Program 1Spoils of AQI 1Reincorporation of former military 1Agricultural assistance 1Micro-hydroelectric generators 12 1Declassified by: MG Michael X. Garrett, 1USCENTCOM Chief of Staff 1Declassified on: 201505 1The threat environment in Iraq consists of four interacting conflicts: 1• Terrorism, counter-occupation, insurgency and a communal struggle for power and survival 1• Occurring in the context of failing state 1• Complicated by the external influences of Western, Turkish, Persian and Arab civilizations 13 1Declassified by: MG Michael X. Garrett, 1USCENTCOM Chief of Staff 1Declassified on: 201505 1MND-N: 1Seat of the Insurgency 1Counter-Occupation -most 1disenfranchised 1Terrorism - AQI’s new focus 1- Mosul, Kirkuk, Diyala 1Most complicated Communal 1Struggles 1- Nationalist vs Extremist 1- Kurd vs Arab 1- Sunni vs Shia 1Arab|[4b l Turkish influence 1| Terrorism 1Communal 1Struggle 1 Threat Environment 1 2007 i 1MND-B: 1Communal Struggles 1- Sunni vs Shia 1- Nationalist vs Extremist 1- Intra-Shia 1Terrorism 1Insurgency 1Counter-Occupation 1nd Turkish influence 1 Failing 1 State 1MNF-W: 1Terrorism 1Counter-Occupation 1Sunni Arab External Influence 1Insurgency 1fl Communal Struggle 1 - Sunni vs Shia 1 - Intra-Shia 1 - National vs Extremist 1Counter-Occupation 1Insurgency 1Counter- 1Occupation 1MND-SE: 1Communal Struggle - Intra-Shia I 1Counter-Occupation “1 1I____1 4b, 1,4(1 I ]- 1The threat environment in Iraq consists of four interacting conflicts: 1• Terrorism, counter-occupation, insurgency and a communal struggle for power and survival 1• Occurring in the context of failing state 1• Complicated by the external influences of Western, Turkish, Persian and Arab civilizations 1croTr/rxL tz w/-. 14 1Declassified by: MG Michael X. Garrett, 1USCENTCOM Chief of Staff 1Declassified on: 201505 15 1Declassified by: MG Michael X. Garrett, 1USCENTCOM Chief of Staff 1Declassified on: 201505 1 Period 1: 1 Working Groups 1ERFC:| (b)(3), (b)(6) | 1 • Synchronization, deconflict engagement and reconciliation efforts; 1 delineate reporting requirements and streamline approval process 1 Carrots and Sticks :|~~(b)(3), (b)(6) | 1 • Develop Commanders Full Spectrum Kitbag 1PSF/ASF:I b 3, b 6 1 1 • Local ability to hire, arm, train, integrate and control auxiliary 1 security forces 1• Impact within 90 days that is sustainable over the long term 1• Attainable and realistic in scope 1• Achievable by MNC-I and MSCs 1• Work with what we have 1• Decentralized, bottom-up and responsive 16 1Declassified by: MG Michael X. Garrett, 1USCENTCOM Chief of Staff 1Declassified on: 201505 1 Working Groups 1 Engaging the Populace: I (b)(3), (b)(6) | 1 • Themes, messages and methods 1 Engagement ROEj (b)(3), (b)(6) | 1 • Guidance to MSCs: left and right limits by echelon 1 Bridging the Provincial - National Gap:I (b)(3), (b)(6) I 1 • Developing Provincial links to operational forces and Gol 1• Impact within 90 days that is sustainable over the long term 1• Attainable and realistic in scope 1■ Achievable by MNC-I and MSCs 1• Work with what we have 1• Decentralized, bottom-up and responsive 1Local Amnesty 1Local DeBaath exceptions 1Weapons Possession exceptions 1Local contracting 1Detention Release Program 1Spoils of AQI 1Reincorporation of former military 1Agricultural assistance 1Micro-hydroelectric generators 17 1Declassified by: MG Michael X. Garrett, 1USCENTCOM Chief of Staff 1Declassified on: 201505 1 Working Group 1 GOI/ISF/MNF-I 1• Impact within 90 days that is sustainable over the long term 1• Attainable and realistic in scope 1• Achievable by MNC-I and MSCs 1• Work with what we have 1• Decentralized, bottom-up and responsive 1Local Amnesty 1Local DeBaath exceptions 1Weapons Possession exceptions 1Local contracting 1Detention Release Program 1Spoils of AQI 1Reincorporation of former military 1Agricultural assistance 1Micro-hydroelectric generators 18 1Declassified by: MG Michael X. Garrett, 1USCENTCOM Chief of Staff 1Declassified on: 201505 1Reconciliation IPB Conference Agenda 1__ 1 07 MAY 07 _______ 10900 0910 AdiwnrsUatwe 109100930. Welcome Remarks A ¹_____ 10930 0945 MNC-I Rcax<iliₗitionlPBOu»r/i/f4w^\ 10945-1015: MNF I E nqagemnnr and RecotKiSafift'j/ji’Wlls/ Q (fa Mfr 11O15-’O4S. MNC-i EngagementsandReconolia^Hl/^ TyRf ¹ 1iO45-’23O. MSCEnvironmentalAssessmentBn&spk^JImwSflaiceReprei»enteiive> 1 - MND-C 1 - MNF-W 1 MND-N 11230-1330: 11330-1 533. 11530-1545- 11545-1800 11809 1999 1'999-2109 12'09 2209: 1 - MND-B 1Lunch 1MSC Environmental Assessment Briefs (MSC Iniolligance Rcpresentaiivel 1 - MND-CS 1 MND-SE 1 - MNtMlE 1Working Gree-ps Break Out IC2 Flans) 1Workmg Groups Time Peni^C^e, ,,, 1 ERFC Working Greu|__ 1 - Carrots and Slicks Workijii 1- FSF 'ASF Working G<cm>L .......... 1Df*»4« 1Working Groups Time Period T,to 1 10 OttensrvG Wanting proun; 1 • R0E2 Working Gretip_____ 1 - Bodging th- Provinual'ij y.tjafiTWBftg'-yoq fhVRk 1Working Grew Back G-icfe (C2/Lftcc1s> 108VAYJ7 10809-0530: 10839-1999 1Review previous cays wyk (C2iEf*ects) 1Working Grew limo Po-Kid 1 • MNF JAGoi/ISF Working Grow 1Working Group Back Briefs 1Lunch 1Develop hack, orief (CZOects) 11039-1099 11209-1300. 11303-1090: 1FED- Prc-Brinf to CZ/ECCORD (C2<Fffr<ts| 111’D Pre-BrW to CoS (CZOnch) 109 WAY 07 1TBD Back 8-»=f m ‘/INC I CG (CS/Effecle}`,
            },
            {
                id: 3,
                title: 'Testing Document',
                tags: ['abc', 'mnopqrs', 'boom', 'doc3', '123'],
                ocrString: `blarg blerg blorg`,
            },
            {
                id: 2,
                title: 'OPSUM Three Companies (-) Hilla SWAT',
                tags: ['abc', 'xyz', '123', 'boom', 'doc3'],
                ocrString: `Declassified by: MG Michael X. Garrett, 1 USCENTCOM Chief of Staff 1 De이assified on: 201505 1-SE6RE呗//REL 모。 USA, AUS’ CAN, GRR//2Q22ni2。 1TO AOBR4?| 1FROM ODA 1 4a I doc2 1DTG-311830CJAN07 1SUBJ- OPSUM「扇1 NAJAF 28 - 29 JAN 07 1AAA OPSUM FORE죠]NAJAF 28 ・ 29 JAN 07 1BBB WHO: ODA 匝 Three Companies (-) Hilla SWAT 1CCC WHAT: Movement to Contact, React to Near Ambush, React to Downed Aircraft, 1Use CAS to Facilitate Ground Fire & Mane니ver, Use CAS to destroy enemy in trenches 1and buildings 1DDD WHERE: MGRS 38S MA 38 52 1EEE WHEN: 281230CJAN07 一 291500CJAN07 1FFF WHY: Support Hilla SWAT in responding to a regional security threat as requested 1by the Najaf Provincial Leadership 1GGG SUMMARY (All grids are preceded by 38S MA): 114a, (b)(3), (b)(6) 1PHASE 1: (PRE-MISSION): 자怜 Hilla SWAT CDR.I (b)(6) | met with the 18Z at 1280800CJAN07 for PT and discussed a gathering of Al Mahdawiyah (Arabic Proper 1No니n for which there is no tran이ation) IVO Najaf. I b 6 haid the Najaf Governor 1requested him to bring SWAT in for reinforcements. The 18A & 18Z offered USSOF 1assistance if necessary, butl b 6 I only requested USSOF be on stand-by. The 118A & 18Z monitored QDAh.4al activity with the AOB CDR and heard they were in 1contact with AIF and using CAS to facilitate maneuver. Based on previous enemy 1contact IVO Najaf with ODA|_L4gJUSSOF at Fire Base Stack presumed the firefight 1would end shortly. I b 6 Ireturned later req니esting QDAI 1.4a Heave immediately 1with two companies of Hilla SWAT to go to Najaf at the Najaf Governor's request. 18A 1attempted to dissuade I (b)(6) [from reacting hastily, but he was determined to go 1with or without USSOF support. 18A agreed to move with Hilla SWAT as a reinforcing 1CTK/rfTKE / EC TTCK K TTC C TV/ / C C C C T OC 1 De이assified by: MG Micha이 X. Garrett, 1 USCENTCOM Chief of Staff 1 De이assified on: 201505 1• SECREP//理工l•里。• USA, AUG, CAN, GBR//20320130一 1effort and briefed the AOB CDR on the situation, requesting the AOB to inform ODA| i.4a1 1of additional units entering the battlespace. 1PHASE 2: (INFIL): At approx. 1130C, ODAI i.4aln one HMMWV and an up-armored 5- 1ton left with two companies of Hilla SWAT for Najaf, stopping at a gathering of IA, IP, 1and LN provincial leadership at 38S MA 35^표5oS LNs on the ground | b 6 ~1 1I b 6 I- in charge of Najaf Province Security, IA Staff] b 6 「 1I b 6 I and various Provincial Council members) provided confusing and inaccurate 1reports of the situation, b니t all agreed that the AIF were Al Mahdawiyah. LNs also stated 1that the engagement began when AIF fired on an ISF patrol. 18A called ODA h•세on 1SAT at approx. 1230C to gain USSOF SA and was told that USSOF returned to Camp 1David after an engagement IVO 38S MA 3!顽52C지 b 6 I received reports that AIF 1st이e three IA HMMWVs and were using them against ISF. IA| (b)(6) | denied this, 1but was unable to confirm or deny whether any of his vehi시es were still IVO the AIF 1area. During this time, USSOF observed SAF and RPG fire at two AH-64 Apaches that 1were circling approx. 2 kms to the NE. After approx. 30 minutes on the ground USSOF 1and SWAT began a Movement To Contact IVO the area identified by ODAh-4a| with the 1understanding that all CF had left the area and the majority of AIF were killed earlier by 1USSOF and ISF. 1PHASE 3: (EXECUTION): 1Movement to Contact: 18Z cross-loaded 12 x SWAT onto the 5-ton before infilling 1directly east on the hardball road leading to a set of chicken coups at MGRS 38S MA 138。54좌 Order of March was two SWAT trucks in the lead, the HMMWV, four SWAT 1trucks, the 5-ton, then the remaining SWAT trucks. The JTAC established comms with 1the Apaches as the ground force left ASR Miami. The ground force approached the 1chicken coup from the south and moved the HMMWV to the lead to enter the perimeter 1fence. SWAT and the HMMWV drove the inside perimeter to clear the area, giving 1visibility of the north side where an approx, six foot high berm 300 meters away ran east- 1west and another berm approx. 500 meters away ran north-south, boxing the area in to 1the north and east. The area between the chicken coup and the berm was open flat 1terrain with no cover. The lead HMMWV led the ground force east towards a break in 1the berm attempting to get out of a potential Engagement Area (EA). On approach the 1HMMWV gunner saw a suspicious lone HMMWV move so니th to north on a hardball road 1approx. 500 meters east, then multiple armed LNs, vehicles, and HMMWVs on the 1opposite side of the berm in defensive fighting positions. The break in the berm was 1actually a cliff manned by more armed LNs. I 」3 b 6 I realizing the potential to 1become quickly overwhelmed but not having enemy PID, fired the .50 cal into the berm 1to keep their heads down. The LNs held fire and hurriedly pointed to the north. 1Realizing that the gro니nd force was boxed-in if AIF occupied and fired from the opposite 1side of the berm, the 18A directed the ground force to occupy the berm on the north and 1east of the chicken coup. ((USSOF later learned that the AOB, witnessing this unfold 1through an ISR feed, saw approx. 100 AIF on the opposite side of the berm.)) 1React to Ambush (MGRS 380a Q： Simultaneously, but unbeknownst to the lead 1HMMWV, AIF dismounts on the opposite side of the north berm (approx. 100 m to the 1north) began to engage the ground force with SAF. The 18Z in the 5-ton yelled for the 1ground force to flank west towards the north berm. USSOF in the 5-ton saw the column 1of SWAT trucks and HMMWVs oriented west to east, all left turn in unison and move 1north online to the berm. I b 3. b 6 Imaneuvered the lead HMMWV northwest, directly 1SECRET//REL TO CAN, GBR//20320上킁6 1 Declassified by: MG Micha이 X. Garrett, 1 USCENTCOM Chief of Staff 1 De이assified on: 201505 1SEeRET〃REL TO USA, AUS, CAN, GBR//2&32■(母30--- 1into heavy enemy fire from the berm, to place the HMMWV in a position to C2 the 1ground force on the berm. This placed the HMMWV with half of SWAT to the east, and 1half of SWAT and the 5-ton to the west. The AIF displaced north from the berm and 1occupied hasty fighting positions along the tree line approx. 50 - 75 m north of the berm 1and continued to engage the ground force. At this point the ground force effectively 1became split in half with the 5-ton and SWAT on the west pinned down by effective fire 1and the HMMWV and SWAT less than 100 m to the east under minimal fire and able to 1maneuver and return fire from the berm. Every time USSOF or SWAT on the west 1raised a head above the berm, incoming rounds sent dirt flying. SWAT received one 1WIA during this time and ground evacuated him to an Iraqi hospital. The JTAC 1requested the Apaches, who were focused on the gunfire in the village, move to the 1ground force location to conduct RW g니n nuns on the AIF fighting positions. The 5-ton 1gunner was the only individual on the west flank able to continually provide effective 1suppressive fire. The eastern flank identified a white Bongo and a blue Bongo with a 1heavy MG mounted in the bed, approx. 200 - 300 meters to the north behind another 1berm, to which the AIF were maneuvering. I b 3. b 6 lenaaaed the blue Bongo with 1four 81 mm Carl G니stav (Carl G) rounds (2 x HE, 2 x HEDP), killing one and impacting 1the blue Bongo, while the HMMWV gunner engaged multiple dismounted targets. The 118A engaged multiple targets before directing SWAT to occupy the eastern berm and 1rear security to prevent an AIF flanking mane 니 ver. The 18A and I b 3, b 6 Ithen 1examined the eastern flank of the AIF and noticed a north-south running berm that 1potentially provided cover for a dismounted force to flank the AIF. At this point, approx, 1five minutes into the react to ambush, the JTAC reported that an Apache was shot down 1to the NW at MGRS 36|i冨53园(just east of ASR Miami) by ground fire. The second 1Apache then focused on the downed Apace. Additional reports came in confirming that 1there were, in fact, three IA 니MMWVs IVO a village to the NW that were st이en by the 1AIF. Not realizing the severity of the western flank's situation, the 18A directed a break 1in contact to move to the downed aircraft. The 18Z informed the 18A that this was not 1feasible due to the heavy volume of fire they were receiving, and recommended a 1flanking maneuver. The 18A acknowledged and instructed the SWAT CDR to assemble 1men for a dismounted assault with the 18A, JTAC, andl b 3 b 6 I The 18Z then 1recommended that the flanking element only establish a base of fire as opposed to 1assaulting west, do to limited ability to shift SWAT's fires in support of a moving element. 1I b 3, b EI wisely recommended the HMMWV with gunner and driver move to support 1the western flank, where it assisted the 5-ton gunner in providing continual suppressive 1fire for the western flank. The 18A requested additional support from the AOB to secure 1the crash site. The 18A, incorrectly understanding from the JTAC that the two remaining 1fast-movers could be split between the 18Z and the 18A, req니ested that it happen to 1ensure both elements could receive CAS. Only later did it become apparent that the 1message was not understood due to multiple aircraft talking in the JTAC's ears at the 1time. Meanwhile on the western flank, the 18Z, I b 3 b 6 I 1(曲⑶,(b)(知ade repeated unsuccessful attempts to get SWAT to gain fire superiority from 1the berm. These USSOF continually gave commands and led by example, rising above 1the berm to engage the enemy and lead SWAT in establishing fire s니periority. Except 1for one brief period they were simply unwilling to remain above the berm to return fire. 1USSOF noticed that most of the AIF were wearing black tops and bottoms with assault 1vests and magazine racks. I b 3 b 6 I provided covering fire while I b 3 b 6 I 1attempted to engage two AIF behind a tree at 200 m with the Carl G. I b 3 b 6 Ifirst 1attempt failed so he dropped back down behind the berm. I b 3 b 6 Ithen received a 1gunshot wound to the head from an enemy round that impacted his MICH. I b 3 b 6 I 1assessed and treated the wound before I b 3 b 6 I returned to the fight. Despite 1 Declassified by: MG Micha이 X. Garrett, 1 USCENTCOM Chief of Staff 1 De이assified on: 201505 1SECRE꼬0REL T® USA, AUS-, CAN7-GDR//20320^30- 1receiving a gunshot w（기jnd to the head, leaving him significantly dazed, [ b 3 b 6 I 1returned to firing from the berm to motivate SWAT to return fire. I b 3 b 6 I not 1realizingT b 3 b 6~Iwas no longer covering him, rose back up to fire the Carl G and 1received a gunshot wound to the head from an enemy round that impacted his MICH. A 1SWAT medic pulled off|（b）（3）,（b）（6）|MICH, assessed the wound and his consciousness, 1applied a dressing, and reassured「b 3, b 6 Ithat he was alright. The SWAT medic 1conducted follow-on checks with I b 3, b 6 I later in the day. After treating two gunshot 1wounds to the head.l b3 b6 I engaged dismounts in the open with the 81 mm Carl 1G HE round set for air burst at approx. 200 m. I b 3 b 6~1 realized the impact on SWAT 1if a USSOF Soldier was removed from the fight and fought to avoid collapse on several 1occasions. His efforts lik이y averted a complete collapse of SWAT's will to fight on the 1west flank. On the east Hank.l b6 Icontinuad assembling approx. 50 SWAT for 1the dismounted assault. I b 3 b 6 learried an AT-4 he took from the HMMWV before 1it joined the base of fire team on the west. 1Company Attack: There was now a flanking element consisting of 50 SWAT dismounts 1led by I b 6 lalona with the 18A, JT AC, I b 3, b 6 I and interpreter 1I b 6 I and a base of fire element led by the 18Z and remaining USSOF and SWAT 1in이tiding two SWAT Company CDRs. The 18乙 with two USSOF injured and hims이f 1controlling the base of fire, directedl b 3 b 6 I to focus on the truck FM and SATCOM 1to maintain comms with the flanking element and the AOB, ensuring crucial comms 1during the maneuver.丨 b 3 b 6 Icontinued providing crew-served fire 1support whilel b 3 b 6 Icontinued motivating SWAT to 1return fire. The flanking element moved south around the eastern berm then back north, 1passing numerous ISF hunkered down in the low ground and stopped at another east- 1west running berm j니st forward of earlier one. At this point the flanking element noticed 1a road running east-west just in front of the berm, on which were multiple IP and civilian 1SUVs that were riddled with SAF. The road on the east running north-south was across 1approx. 50 m of open ground and the intersection had several other destroyed vehicles. 1This position provided better visibility of the eastern flank to which the element was 1maneuvering. Again,I h 3 h 6 land the 18A assessed the feasibility of moving north. 1AIF to the NW, seeing movement through the break in the berm, began firing on the 1flanking element, decreasing the rate of fire on the base of fire element. The 18Z was 1now able to get the base of fire to provide suppressive fire. By this time a second flight 1of Apaches was on station providing gun runs on AIF fighting positions IVO the two 1Bongo trucks. Using the base of fire and gun runs to suppress the AIF, the flanking 1element crossed the road and moved north along the berm approx. 100 m before being 1pinned down by SAF from the north. The JTAC identified the friendly position with a 1signal mirror and requested a GBU-12 approx. 100 meters to the north on the two Bongo 1trucks. The 18A told the flanking element to assault the enemy position as soon as the 1bomb landed. After impact the flanking element assaulted the enemy position, climbing 1an approx, eight foot berm to see down into the corner of a 10 foot deep trench line that 1ran west as far as the eye could see and north approx. 50 m until another berm blocked 1the view. On the opposite side another berm approx. 20 feet high from the bottom of the 1trench 이ccked all but the barrel of the Bongo mounted heavy MG. USSOF and SWAT, 1still receiving fire, engaged the survivors in the trench. I （b）⑹ Iwhile leading SWAT to 1the top of the berm and engaging the enemy, received a gunshot wound to the face 1requiring I b 3 b 6 Ito assess and pack the wound with Kerlix. This severely 1diss니aded SWAT from continuing to fire from the top of the berm. This was the first 1realization by the ground force of the magnitude of AIF defensive preparations. During 1this time the JTAC witnessed one AIF blow himself 니p approx. 150 m away in the trench. 1SEGREW/REE TO USA/ AUS” GAN 7 G曲〃；2。3 2 g 3。 1 De이assified by: MG Micha이 X. Garrett, 1 USCENTCOM Chief of Staff 1 De이assified on: 201505 1•SI코四O USA, AUS, CAN, G公R//29320코30 • 1At this time the 18Z began requesting CAS on FM on multiple buildings used by AIF 1approx. 700 m to his NW. Realizing that the CAS allocation hadn't worked as planned, 1the 18A and JTAC began working to get them a CAS mission. The aircraft, unable to 1directly communicate with the 18Z, requested a grid as opposed to a distance and 1direction from the VS-17 panel marking the 5-ton at their position. After relaying the 1TGT grid, aircraft stated it was the friendly position of the VS-17 panel and requested a 1distance and direction from the VS-17 panel then delayed again to confirm that the 18Z 1had eyes on the TGT. USSOF confirmed that the original TGT grid was correct, but 1numerous grids passed in a short period of time created confusion for the pilots. At this 1time the confusion of numerous aircraft requiring air control assistance forced the JTAC 1to assume air traffic controller duties to arrange the aircraft. While this new development 1set in, HMMWVs approached from the north along the road, firing mini-g니ns and .50 cal 1into the berm just north of the flanking element. It was unclear at first whether they were 1frien에y or the st이en HMMWVs. B이ieving they were f「ien에y but fearing fratricide, the 118A moved to a position in the open and began waving both arms at the HMMWVs, 1which then pulled into position next to the dismounts to coordinate. The 18A identified 1himself as the Ground Force CDR (GFC) and coordinated efforts with three separate 1individuals (USN Seals and members of| i,4a pFG(A)) who identified themselves as TF 1| 14a | with the Iraqi Counter Terrorism Force (ICTF) The18A sketched the L-shaped 1configuration the ground force was currently in for TFl 1.4a ISA. TFl 1.4a 1 stated 1they were there to secure the crash site, but didn't believe it was along ASR Miami on 1their infil from Camp David. The 18A and JTAC confirmed the grid and pointed TF 1I 1.4a Ito the west where the smoke from the crash had already dissipated. The ODA 1114aland [Fl 1.4a IJTACs coordinated to push RW CAS to TFl 1.4a land FW CAS to 1ODA h•시 While coordinating, the combined element continued receiving SAF from the 1north, resulting in at least one wounded ICTF. TFl 1.4a ] agreed to exfill (b)(6)! 1reiterating that their priority was the crash site. On request fromTFI 1.4a I the JTAC 1used Apaches to drop flares to mark the downed aircraft. TF | i.4a I recommended the 1flanking element ret니rn to the base of fire element, and then returned north then west on 1the hardball road to ASR Miami to find the crash site, firing mini-gun and .50 cal into the 1same berm just north of the flanking element. The flanking element, realizing the futility 1of further advances in light of the situation, began moving back south to re-link up with 1the base of fire and use CAS along with the new understanding of the battlefield to 1destroy remaining enemy positions. Meanwhile, the base of fire element began talking 1with the ODAFT47I18A on SATCOM at the time of the GBU-12. The 18Z ensured that 1the ODAl 1.4a |18A would h이d TF I 1.4a Ifrom their assault until ODA h.4a| cleared their 1assault lane. Soon after that, the base of fire element received significant fire from a 1mini-gun and .50 cals to the north. TF | 1.4a at this time had turned onto a westward 1running road and presumably began firing south to cover their movement. The base of 1fire element, believing that TFl i.4a I assault south was underway, called for a cease- 1fire on SATCOM and FM to prevent fratricide. The 18Z and 18A coordinated over FM 1with their differing accounts of TFl 1.4a ~lolan of action. Going with the worst case 1scenario that TF「1 •偽 lhad changed plans and was assaulting south, made believable 1by the mini-g니n fire the base of fire element received, the flanking element halted and 1moved into position to provide covering fire while the base of fire moved east out of TF 11.4a |way. Still receiving fire from the trench line, the JTAC requested Apache 1rockets and a second GBU-12 for the western bend in the trench where numerous AIF 1were seen fleeing away. This would 이ea「AIF for TF I 1.4a Iprior to their presumed 1assault south, and support the base of fire's move east. Following the second GBU-12, 1the flanking element moved into the prone behind cover to provide suppressive fire. 1Continued SAF from the NW dissuaded most SWAT from moving into position, leaving 1815(2划堡//皿五 TO-USA, AUS, CAN, GBR//20320^3。--- 1 Declassified by: MG Micha이 X. Garrett, 1 USCENTCOM Chief of Staff 1 De이assified on: 201505 1SECRE望//皿，屮G-USA, AUS, CAN, GBR//20320士30--- 1USSOF and I b 6 I with approx. 5 SWAT to support the base of fire's movement. 1By this time the 18Z had tried repeatedly with minimal success to convince SWAT to 1displace to the east, and req니ested that the flanking element rejoin him and remain 1behind cover during TF| i.4a ~1 presumed assault. | （b）（6） |on the M240B repelled 1over 40 AIF who were cresting a berm to the north in an attempt to outflank the 1USSOF/SWAT maneuver element on the east. He later stopped the AIF resupply effort 1that was running back and forth from the village to the berm with ammo. I b 6 I 1I b 6 ---I use of the .50 cal and M79 prevented repeated AIF attempts to re-man the 1Bongo moimted DShK. The JTAC requested a third GBU-12 on the trench system to 1facilitate movement south across the road and behind the southernmost berm. While 1waiting on the third GBU-12, a lone HMMWV came within 100 m of the flanking element, 1moving north on the hardball road and eventually recovering a destroyed civilian SUV 1and leaving. With only small arms and one AT-4, the possibility of it being one of the AIF 1operated HMMWVs left the flanking element with the choice of bad or worse regarding 1which side of the berm to stay on. Following the third GBU-12 the flanking element 1moved south across the road, consolidated and accounted for all personnel, and 1unsuccessfully attempted an Apache gun run on the treeline 75 m north of the base of 1fire element before linking back up with them. Up to this point, | （b）（6） land 1I b 6 Ion the crew-served weapons were crucial in providing suppressive fire in the 1absence of SWAT returning fire. Without their effective fire, the base of fire element 1would likely have been overrun by AIF up to 75 m to the north. On the final movement to 1link back up with the base of fire I（b）（6）I placed himself in the lead to prevent potential 1fratricide when the two elements rejoined. His actions during the flanking maneuver 1were commendable. As the only interpreter with the element, with only body armor and 1a helmet, he remained with the 18A in the lead; ensuring commands were understood by 1SWAT. Throughout the OPN he provided valuable recommendations on SWAT's 1morale. By 1630C ODA h.4aland SWAT were reconsolidating at the original position 1with various ineffective ISF still on the east side of the berm. AIF continued with 1sporadic volleys of fire preventing a true static overwatch position from the berm. I b 6 I 1|（b）（6）［coordinated for his 4th Company to move in from ASR Miami and conduct link-up 1to reinforce. This period allowed USSOF to better examine the ground, and identified six 1bomb craters with freshly moved dirt and body parts in an area approx. 150 m wide 1stretching south from the 5-ton. USSOF counted two EKIA from the remaining body 1parts. 1CAS OPNs and Relief in Place: By 1700C OP A11.4a I recognized the superior tactical 1position held and used CAS to destroy remaining enemy. The 18Z informed the 18A 1that a Stryker BN was en route to conduct relief in place and conducted ammo 1redistribution. The HMMWV gunner had already begun conserving ammo after 1expending half （500 rnds） of the truck supply. The 5-ton gunner fired half the 5-ton's 1approx. 5600 rnd supply by link-up. The 5-ton's rear M24OBs hadn't been used at this 1point. The JTAC began coordinating with multiple air assets for fire missions while the 118A 이id I （p）（3）,（b）（6）Attempted to contact T디 3표「to confirm their intent and location 1ODA | 1.4a Base offered two A-10s that entered the battlespace. Soon after, TFI 1.4a "I 1requested additional CAS to s니pport their position due to heavy incoming fire. The 18A 1instructed the JTAC to push the A-10s to TF| 1.4a land keep other FW CAS in support 1of ODA「i爲］Aircraft continued to identify targets to the north but lack of SA on TF 1I 1.4a llimited ability to 이ear CAS fires. After hearing that T디 1.4a I was recently at 1MGRS 37］풔52风 the 18A cleared ro아cets preceding a JDAM on the trench to our north 1and a laser-guided bomb on an east-west running canal also to the north. After this, 1following lucrative CAS targets were too far west to safely clear fires without having real- 1SECRET/-/RES-史。-USA, C&, GBR//으。긍운。코긍。 1 De이assified by: MG Micha이 X. Garrett, 1 USCENTCOM Chief of Staff 1 Declassified on: 201505 1SECREE〃REL TO USA, A&3 , CAN,-(汨1<//2。320130--- 1time comms with TFI 1.4a I This included gatherings of up to 40 AIF east of the village, 1around the captured HMMWVs. I b 3 b 6 I mounted the 5-ton's rear M240B to 1engage and repel a white pick-up that attempted to flank from the west and a blue bongo 1approaching from the south on the chicken coupe road. The detachment attempted 1through multiple means to contact TFl 1.4a Iwhile also determining link-up procedures 1with the Stryker BN to whom ODALl쇼 was now TACON. After dark the AC-130 came 1on station and comms with the Stryker BN (Patriot) provided sufficient SA to begin using 1the AC-130 for CAS. After Patriot's link-up with TFl i .4a "land ODA I i .4a|it was 1understood that half of TFl 1.4a ]and most of QDAI 1.4a lexfilled to Camp Hot이 with the 1rest remaining with Patriot. ODA[L4aJused the AC-130 to engage 100 AIF in the 1woodline and 40 AIF in a separate woodline, followed by squirters from each 1engagement. Patrio[표then ordered a CAS cease-fire and instructed that as GFC all 1clearance of fires would be through him. Additionally, OD沿GMWJshould exfil to allow a 1Patriot pure OPN. The 18Z's experience was crucial here in prompting the 18A to 1explain the tactical situation from QDAl i .4a"] position, rather than attempting to withdraw 1니nde「fire. After the 18A provided Patrio Q ith specific TGTs identified by ISR, a 1recommended EA, and ODA□표가ecommendations, Patrio坯 pproved CAS TGTs 1east of the 38 easting and south of the 52 northing and agreed to send a unit to relieve 1ODA 11.4a I in place. This ens니red that the southeast corner of the AIF's stronghold was 1secured, effectively boxing them in from the west and so니th and allowing interdiction of 1squirters moving east across the hardball road. ISR identified a HMMWV with 1dismounts surrounding it in the prone within the approved EA. The A-10s were reluctant 1to engage it so the AC-130 fired first, hallowed by A-10 gun runs. Numerous CAS 1missions including F16s, A-10s, and AC-130 followed resulting in the winchester of 1Hamme田교 replaced by Hammer[t4al When Hammer]표was close to winchester the 1JTAC instructed them to mark TGTs for the A-10 until 니ammerE풔came on station. 1With HammerIi43onlv 10 minutes away the JTAC told Hammer远t。winchester. I b 6 I 1I b 6 I received a report of an Afghani insurgent in a mosque IVO MGRS 30屜 선교 which 1the 18A relayed to Patrio[풔 Concurrently, ODA[고^coordinated the night-time link-up 1with Bia아(hors&풔(a company from the 3-2 IN Strykers). After a link-up facilitated by FM 1comms and IR flashes, the Strykers found a mounted route into the area several 1hundred meters to the southeast and began integrating onto the berm. The 18A and 118Z coordinated with Blackhorse leadership to provide SA (specifically on the prepared 1defensive positions) and conduct battle-handover. The JTAC began working alongside 1the Blackhorse JTACs to conduct CAS missions. Blackhorse bro니ght in a more than 1enough .50 cal and 7.62 link for resupply. Throughout the night the USSOF JTAC with 1Blackhors E줘 s GFC winchestered Hammer f i.4a | During this time BlackhorseQ 1and the 18A disc니ssed options for securing the OBJ in the morning, assuming there 1would still be resistance. 1Securing the OBJ: At daylight USSOF and SWAT engaged several more dismounts to 1the north. The 18A met with Blackhorsei^nd Patrio & rior to BMNT to discuss the 1plan for securing the OBJ. USSOF and SWAT would hold the current position while 1Blackhorse cordoned the south and west and began 시earing to the north. USSOF 1observed four AIF flee east across the hardball road, then prompted Blackhorse to 1expedite securing the road to prevent further squirters. At this point it became clear that 1AIF were s니「rendering in large numbers and Blackhorse requested USSOF and SWAT 1move along the eastern hardball road and use loudspeakers to encourage surrender. 1After moving into position SWAT moved up to the berm to control the surrendering 시F, 1then began conducting battlefield recovery IAW TTPs. Due to the need to retain the 1scene for thorough SSE, USSOF directed SWAT to leave weapons and m니nitions in 1SECREP/-/REE TO USA, AU3 , CAN, GBR//20320,3。--- 1 Declassified by: MG Micha이 X. Garrett, 1 USCENTCOM Chief of Staff 1 De이assified on: 201505 1SECIR迎〃REL TO UBA, AU。，CAN, ©8R//20320130-- 1place. The remainder of the day consisted of securing the area and walkinq the ground 1to determine the extent of the positions. The 18A coordinated with Patrio Qo begin 1moving the SSE team from Camp David to the OBJ. A vast number of weapons had 1Arabic writing on them reading I (b)(6)了 Two PUCs told USSOF interpreters that 1they were called two days prior and told to come meet the I (b)(6) I there. ODAs 11.4a I facilitated an excellent resupply of food, water, f니이, Cl VIII, ammo, tools, 1and batteries brought directly to ODAR.4a | OD I 1.4a I acilitated the link-up of the SSE 1team with Patriot and assumed responsibility for them, allowing ODA Q포］ and SWAT to 1prep for exfiL 1PHASE 수 (EXFIL): After reorganizing supplies from ODAs I 14a ~1 USSOF and 1SWAT exfilled on the same infil route back to ASR Miami. ISF along the way 1congratulated the ground force. Due to「eportsl b 6 I received of planned 1ambushes on the return「o니te, the ground force turned east at Kifl and took a road along 1the Eurphrates north, then turned to enter Hilla from the west. 1Notes: 11) The recommended EA from ODA 11 4a Ito Path애虫vas the Allowing grids: MGRS 13&좌 2좌3演「扁3 辱 20a 3 £35^3 This was based on known ground tr니th at the 1time. OD시 1.4a I believed enemy positions likely extended further west and was 1undetermined to the north. With PatriotHdilconstraints, the final EA for CAS was almost 1exactly the boundaries of the AIF's stronghold. 12) The following is a close approximation of ammunition expended during the operation. 1TOTAL 524 2900 835 20 32 5(3-HE/2HEDP) 13) The estimation of EKIA from direct fire during the operation is 63. 14) The final count as of 311800CJAN07, 아lowing CAS attacks through 290100CJAN07 1shows 40 separate CAS atta 아cs conducted by ODA 11.4a I through the ODA JTAC. He 1continued controlling AC-130 fires for Blackhorse［죠1 s the GFC after 0100C. 1HHH NUMBER OF DETAINEES WITH TAG NUMBERS ACCEPTED INTO U.S. OR ISF 1DETENTION FACILITIES AND THE NAME AND LOCATION OF THE DETENTION 1FACI니TY: Four detainees turned over to the lA-run Detainee H이ding Area IVO the AIF 1village. SWAT conducted tactical questioning prior to turnover. Preliminary SSE TM 1reports show 니p to 300 male detainees. 1Ill NUMBER OF IZ PERSONNEL KILLED BY USSOF: DF - 62, AC-130 (from reporting 1as of 311800CJAN07) - 176, Other FW and RW - UNK, Preliminary SSE TM reports 1show up to 250. 1JJJ NUMBER OF IZ PERSONNEL WOUNDED BY USSOF: DF - UNK, AC-130 (from 1reporting as of 311800CJAN07) - 50, Other FW and RW - UNK, Preliminary SSE TM 1reports show 니p to 250. 1KKK NUMBER OF WEAPONS CAPTURED / DESTROYED: Preliminary SSE TM 1reports show 1000s of AK-47s, 100s of RPGs, 6 x DShKs, and massive amounts of 1 Declassified by: MG Micha이 X. Garrett, 1 USCENTCOM Chief of Staff 1 De이assified on: 201505 1SECRET//REL TO USA, AUS, CAN,---&日只//2。32。士긍。--- 1ammunition. AC-130 reports as of 311800CJAN07 show eight vehi이es and five 1buildings destroyed. 1LLL NUMBER AND TYPE OF OTHER MATERIAL CAPTURED: The flowing 1equipment was found on the east side of the EA IVO the trenches: Equivalent in Iraqi 1dinar to 110 USD, one x GP340 Moto「이a radio SN: PMUE1440ABE with a strip of 100 1mph tape on the bottom and "7 Cobra" written in Arabic, a small memo book with AIF 1task organization, two Iraqi ID cards, one ID card with English and Japanese print. 1Translations are provided at the below. 1(additional untranslated information) 12nd Iraqi ID Card: 1I b 6 [from: Thee Qarr /Al-Nasaryeah/ AI-BtaHa'a) 1(additional untranslated information) 1Corporate ID Card: 1Back side had the hand written nam텨 (溯) | 1MMM DETACHMENT STATUS (MEN, WEAPONS, EQUIPMENT): 100% on Sensitive 1Items. NMC Equipment Requiring Replacement: 2 x MICH, 1 x PVS-14 NVG swing- 1arm mount for the MICH, 1 x PEQ-2A (SN: 020389A), 3 x H&K 5.56 mm magazines, 2 x 1empty 60 mm mortar cans, 1 x Hellfire Power Cable, 1 x Helmet Cam Replacement Hard 1Drive, 1 x AV 2055-3 UHF Antenna SN: 0607. 1NNN SOURCE OF INTELLIGENCE TRIGGERED THE OPERATION (LE. CJSOTF-AP 1OR CF HUMINT, CJSOTF-AP OR CFI 1.4c L CJSOTF-AP INTEL FUSION CELL OR 1CF INTEL FUSION CELL, ETC.): USSOfI 1.4^ | previously reported the Al 1Mahdawiyah splinter of the MM focused in 시 Kawam (MGRS 39 82). This OPN was 1precipitated by ODAI 1.4a I/ TF□圣二]engagements earlier the morning of 28 Jan 07 in 1the same area. 1OOP COMMANDER COMMENTS: 11) I (b)(6) lied from the front and was situationally aware the니ghout the OPN, 1staying in contact with Iraqi leadership who called with updates. However, aside from he 1CE CCBE / /CIFT E/、 AT / / C C C C C，C C 1 Declassified by: MG Micha이 X. Garrett, 1 USCENTCOM Chief of Staff 1 Declassified on: 201505 1/rCTKE / EC TTCK K TTC K/FCT、/ / C C C C C r ~> C 1A / / ZVEJXJ VJ OA , CU 1and |(b)(6)|SWAT's performance under fire was sub-standard. Despite live-fire 1maneuver training we've conducted with them where the officers trumpeted that they're 1mostly former IA and know how fire and maneuver, they were largely ineffective in 1returning effective fire. The conceivable fix is tougher, more realistic training to eq니ip 1them with the confidence necessary to react 니nder fire. This req니ires significant training 1ammunition. 12) GOI reporting is contrary to LN reporting on the ground regarding the 시F. ODAl 14a | 1had recently targeted Mahdawiyah in Kawam and I b 6 ~lwas quite aware of their 1presence, stating they were a split from the MM. The return of the Mehdi is a belief 1limited to Shi'a, not Sunni. The significant prepared defensive preparations combined 1with the few detainees questioned who stated the/d just arrived begs a question. 13) ODA |i.4a| performed admirably under fire. The synergy of experience, leadership, 1technical competence, and tactical understanding allowed the ODA and majority of 1SWAT to hold what turned out to be key terrain on the SE corner of the EA, gain 1outstanding SA, and influence the outcome of the battle. 14) The combined SA of 3-2 IN (Patriot) and ODALL4al「es비ted in a near perfect read of 1the enemy defensive positions, including their final defensive line in the trench. Patriot国 1wisely req니ested specific targets, locations, and descriptions before accepting that ODA 1|14alhad accurate SA and was in key terrain that required h이ding. 15) I b 6 一一I seeing the lack of positive post-0PN spin for SWAT, is now taking a 1much greater interest in SWAT's c니「rent and long-term IO campaign. Though not yet 1specifically addressed, he realizes SWAT's performance under fire was sub-par. 1Additionally, post-OPN atmospherics indicate that several SWAT/OD l」4a I M TGTs in 1southern Babil are losing their fear-induced popular support as a result of the destruction 1of the Mahdawiyah. The next several weeks will prove whether this is fluff or fact. 1jb)(3), (bxejSENDS 1O珂6REP//皿E g U3A, AU9, CAN, 0BR//2032O130`,
            },
        ];
        return data;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 24, vars: 5, consts: [[1, "page-holder"], [1, "map-holder"], [1, "map-image-holder"], ["src", "https://usarmyiraqwar.com/wp-content/uploads/2021/02/Picture1.png", "alt", ""], [1, "map-filter"], [1, "map-content"], [1, "map-title-1"], [1, "map-title-2"], [1, "map-subtitle"], [1, "search-holder"], [1, "search-box"], ["type", "text", "placeholder", "Search Term", 3, "keyup.enter"], ["searchEl", ""], [1, "search-button", 3, "click"], [1, "results-holder"], ["class", "no-results-present", 4, "ngIf"], [4, "ngIf"], [1, "tags-holder"], ["class", "single-tag-holder", 4, "ngFor", "ngForOf"], [1, "no-results-present"], ["class", "single-result", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "single-result", 3, "routerLink"], [1, "doc-title"], [1, "single-tag-holder"], [1, "single-tag-holder-title"], ["type", "checkbox", 3, "id", "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " The U.S. Army in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " iraq war ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " The Official History and Declassified Archives By the Authors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function HomeComponent_Template_input_keyup_enter_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return ctx.searchTerm(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return ctx.searchTerm(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HomeComponent_div_19_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HomeComponent_div_20_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HomeComponent_div_22_Template, 4, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.orderedDocs || ctx.orderedDocs.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orderedDocs && ctx.orderedDocs.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 3, ctx.tags));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]], styles: [".page-holder[_ngcontent-%COMP%] {\n  padding-bottom: 150px;\n}\n\n.map-image-holder[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  max-height: 700px;\n  box-sizing: border-box;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.map-image-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n\n.map-image-holder[_ngcontent-%COMP%]   .map-filter[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0.3;\n}\n\n.map-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 50px 100px;\n  text-align: center;\n  box-sizing: border-box;\n  color: white;\n  text-transform: uppercase;\n}\n\n@media screen and (max-width: 768px) {\n  .map-content[_ngcontent-%COMP%] {\n    padding: 50px;\n  }\n}\n\n@media screen and (max-width: 414px) {\n  .map-content[_ngcontent-%COMP%] {\n    padding: 50px 25px;\n  }\n}\n\n.map-title-1[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  font-size: 64px;\n}\n\n@media screen and (max-width: 768px) {\n  .map-title-1[_ngcontent-%COMP%] {\n    font-size: 46px;\n  }\n}\n\n.map-title-2[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 96px;\n}\n\n@media screen and (max-width: 768px) {\n  .map-title-2[_ngcontent-%COMP%] {\n    font-size: 64px;\n  }\n}\n\n.map-subtitle[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  font-size: 36px;\n}\n\n@media screen and (max-width: 768px) {\n  .map-subtitle[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n\n.search-holder[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100vw;\n  padding: 25px 0;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  width: 800px;\n  margin: 0 auto;\n}\n\n@media screen and (max-width: 768px) {\n  .search-box[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 60px;\n  padding-left: 15px;\n  border-radius: 4px;\n  font-size: 22px;\n  background-color: #f9f9f9;\n  box-sizing: border-box;\n}\n\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #c6c6c6;\n  font-style: italic;\n}\n\n.search-box[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 50px;\n  line-height: 50px;\n  margin-top: 10px;\n  border-radius: 4px;\n  font-size: 22px;\n  text-align: center;\n  background-color: #d3d3d3;\n  cursor: default;\n}\n\n.results-holder[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  padding: 50px 25px;\n  width: 80vw;\n  max-width: 800px;\n  margin: 15px auto 0 auto;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #f9f9f9;\n}\n\n.tags-holder[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  width: 20%;\n  border: 2px solid blue;\n  box-sizing: border-box;\n}\n\n.no-results-present[_ngcontent-%COMP%] {\n  color: #d3d3d3;\n  font-size: 36px;\n  height: 250px;\n  font-style: italic;\n}\n\n.single-result[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n  border-radius: 4px;\n  padding: 35px 15px;\n  background-color: white;\n  box-sizing: border-box;\n  cursor: default;\n  transition: background-color 0.2s ease-in-out;\n}\n\n.single-result[_ngcontent-%COMP%]:hover {\n  background-color: #e0f2fb;\n}\n\n.single-result[_ngcontent-%COMP%]   .doc-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n\n.single-tag-holder[_ngcontent-%COMP%] {\n  padding: 15px 10px;\n}\n\n.single-tag-holder-title[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 60px;\n  outline: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQURGOztBQUVFO0VBVkY7SUFXSSxhQUFBO0VBQ0Y7QUFDRjs7QUFBRTtFQWJGO0lBY0ksa0JBQUE7RUFHRjtBQUNGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBRkU7RUFIRjtJQUlJLGVBQUE7RUFLRjtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBRUY7O0FBREU7RUFIRjtJQUlJLGVBQUE7RUFJRjtBQUNGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBSUY7O0FBSEU7RUFIRjtJQUlJLGVBQUE7RUFNRjtBQUNGOztBQUhBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUhBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUxFO0VBSkY7SUFLSSxZQUFBO0VBUUY7QUFDRjs7QUFQRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBU0o7O0FBUEU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFTSjs7QUFQRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBU0o7O0FBSkE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQU9GOztBQUpBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBT0Y7O0FBSkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQU9GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7QUFPRjs7QUFORTtFQUNFLHlCQUFBO0FBUUo7O0FBTkU7RUFDRSxlQUFBO0FBUUo7O0FBSkE7RUFDRSxrQkFBQTtBQU9GOztBQU5FO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFRSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5wYWdlLWhvbGRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxNTBweDtcbn1cblxuLm1hcC1pbWFnZS1ob2xkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogNzAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tYXAtZmlsdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxufVxuXG4ubWFwLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDUwcHggMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgICBwYWRkaW5nOiA1MHB4IDI1cHg7XG4gIH1cbn1cblxuLm1hcC10aXRsZS0xIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgfVxuICAvLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAvLyAgIGZvbnQtc2l6ZTogMzhweDtcbiAgLy8gfVxufVxuXG4ubWFwLXRpdGxlLTIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDk2cHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICB9XG59XG5cbi5tYXAtc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG59XG5cbi5zZWFyY2gtaG9sZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwdnc7XG4gIHBhZGRpbmc6IDI1cHggMDtcbn1cblxuLnNlYXJjaC1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG4gIGlucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYzZjNmM2O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuICAuc2VhcmNoLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gIH1cbn1cblxuLnJlc3VsdHMtaG9sZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nOiA1MHB4IDI1cHg7XG4gIHdpZHRoOiA4MHZ3O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDE1cHggYXV0byAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cblxuLnRhZ3MtaG9sZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogMjAlO1xuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubm8tcmVzdWx0cy1wcmVzZW50IHtcbiAgY29sb3I6ICNkM2QzZDM7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uc2luZ2xlLXJlc3VsdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDM1cHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1pbi1vdXQ7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGYyZmI7XG4gIH1cbiAgLmRvYy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG59XG5cbi5zaW5nbGUtdGFnLWhvbGRlciB7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgJi10aXRsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "PduK":
/*!************************************************!*\
  !*** ./src/app/document/document.component.ts ***!
  \************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DocumentComponent {
    constructor() { }
    ngOnInit() {
    }
}
DocumentComponent.ɵfac = function DocumentComponent_Factory(t) { return new (t || DocumentComponent)(); };
DocumentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentComponent, selectors: [["app-document"]], decls: 2, vars: 0, template: function DocumentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "document works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.title = 'iraqWar';
        this.data = {};
        this.documents = [];
        this.orderedDocs = [];
        const data = this.getData();
        for (let x in data) {
            if (!this.data[x]) {
                this.data[x] = {};
            }
            this.data[x]['ocrString'] = this.refineData(data[x]['ocrString']);
            this.data[x]['title'] = data[x]['title'];
        }
        console.log(this.data);
    }
    searchTerm(input) {
        const term = input.value;
        const rawDocList = {};
        for (let x in this.data) {
            rawDocList[x] = this.searchSingleTerm(term, x);
        }
        this.orderedDocs = this.organizeDict(rawDocList);
        console.log(this.orderedDocs);
    }
    searchSingleTerm(term, dataSetName) {
        const termArr = this.refineData(term);
        const termDict = {};
        let hitTerms = 0;
        for (let i = 0; i < termArr.length; i++) {
            termDict[termArr[i].toLowerCase()] = {
                selected: false,
            };
        }
        for (let x = 0; x < this.data[dataSetName]['ocrString'].length; x++) {
            if (termDict[this.data[dataSetName]['ocrString'][x]] || termDict[this.data[dataSetName]['ocrString'][x].toLowerCase()]) {
                if (!termDict[this.data[dataSetName]['ocrString'][x].toLowerCase()].selected) {
                    termDict[this.data[dataSetName]['ocrString'][x].toLowerCase()].selected = true;
                    hitTerms++;
                }
            }
        }
        return hitTerms;
    }
    organizeDict(dict) {
        const dictKeys = Object.keys(dict);
        dictKeys.sort((a, b) => {
            return dict[b] - dict[a];
        });
        const fullArr = [];
        for (let i = 0; i < dictKeys.length; i++) {
            fullArr[i] = this.data[dictKeys[i]];
        }
        // return dictKeys;
        return fullArr;
    }
    refineData(dataStr) {
        let dataArr = [];
        const currArr = dataStr.split(' ');
        for (let i = 0; i < currArr.length; i++) {
            if (currArr[i] != ' '
                && currArr[i] != '  '
                && currArr[i] != ''
                && currArr[i].length > 0) {
                dataArr.push(currArr[i]);
            }
        }
        return dataArr;
    }
    getData() {
        const data = {};
        data['doc3'] = {
            id: 3,
            title: 'Document 1 for Testing',
            ocrString: `blarg blerg blorg`,
        };
        data['doc1'] = {};
        data['doc1']['id'] = 1;
        data['doc1']['title'] = 'USCENTCOM Chief of Staff CG Talking Points';
        data['doc1']['ocrString'] = `

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
    `;
        data['doc2'] = {};
        data['doc2']['id'] = 2;
        data['doc2']['title'] = 'OPSUM Three Companies (-) Hilla SWAT';
        data['doc2']['ocrString'] = `
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

    `;
        return data;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function AdminComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No Documents Present ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function AdminComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doc_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, "/document/" + doc_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", doc_r8.title, " ");
} }
function AdminComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminComponent_div_18_div_1_Template, 3, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.docs);
} }
class AdminComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const docs = yield this.getIraqDocs();
            this.docs = docs.reverse();
            console.log(this.docs);
        });
    }
    submitNewDocument(title, date, categories, pdfLink, ocrText) {
        let req = {
            title: title.value,
            date: date.value,
            dateCreated: Date.now(),
            categories: categories.value.replace(/\s+/g, '').split(','),
            pdfLink: pdfLink.value,
            ocrText: ocrText.value,
        };
        if (!this.file) {
            alert('Must select a pdf');
            return;
        }
        this.http.post('http://localhost:5555/api/clinics/post-iraq-document', req).subscribe((data) => {
            console.log(data);
            this.docs = data['docs'].reverse();
            this.uploadPdf(data);
            window.location.reload();
        }, (err) => {
            console.log(err);
        });
    }
    getIraqDocs() {
        return new Promise((res, rej) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const docs = yield this.http.post('http://localhost:5555/api/clinics/get-iraq-documents', {}).toPromise();
            try {
                res(docs.docs);
            }
            catch (err) {
                console.log(err);
                rej(err);
            }
        }));
    }
    uploadPdf(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { url } = yield this.http.post('http://localhost:5555/api/exams/get-signed-url-to-upload', {
                fileName: this.file.name,
                fileType: 'pdf',
            }).toPromise();
            return new Promise((res, rej) => {
                const xhr = new XMLHttpRequest();
                xhr.open("PUT", url, true);
                xhr.addEventListener('load', (data) => {
                    const status = xhr.status;
                    if (status === 200) {
                        const newUrl = xhr.responseURL.split('?')[0];
                        res(`https://storage.googleapis.com/iraq-war-document-pdfs/${this.file.name}`);
                    }
                });
                xhr.addEventListener('err', (err) => {
                    console.log(err);
                    alert("Something went wrong");
                });
                xhr.setRequestHeader('Content-Type', 'application/pdf');
                xhr.send(this.file);
            });
        });
    }
    openPdf(evt) {
        const nameArray = evt.target.files[0].name.split('.');
        if (nameArray[nameArray.length - 1] !== 'pdf') {
            alert('File must be a PDF, for now.');
            return;
        }
        else {
            this.file = evt.target.files[0];
        }
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 19, vars: 2, consts: [[1, "admin-holder"], [1, "new-document-holder"], [1, "new-document-title"], ["type", "text", "placeholder", "Title"], ["title", ""], ["type", "text", "placeholder", "Date"], ["date", ""], ["type", "text", "placeholder", "Categories (comma seperated)"], ["categories", ""], ["type", "file", "placeholder", "PDF Link", 3, "change"], ["pdfLink", ""], ["type", "text", "placeholder", "OCR Text"], ["ocrText", ""], [1, "submit-document-button", 3, "click"], [1, "results-holder"], ["class", "no-results-present", 4, "ngIf"], [4, "ngIf"], [1, "no-results-present"], ["class", "single-result", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "single-result", 3, "routerLink"], [1, "doc-title"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Make New Document ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminComponent_Template_input_change_10_listener($event) { return ctx.openPdf($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "textarea", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); return ctx.submitNewDocument(_r0, _r1, _r2, _r3, _r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Submit New Document ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AdminComponent_div_17_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AdminComponent_div_18_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.docs || ctx.docs.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.docs && ctx.docs.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".new-document-holder[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 25px;\n  box-sizing: border-box;\n}\n.new-document-holder[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .new-document-holder[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 15px;\n  width: 400px;\n  padding: 20px 15px;\n  padding-left: 15px;\n  border-radius: 5px;\n  box-sizing: border-box;\n  background-color: #eefbfb;\n}\n.new-document-title[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  font-size: 28px;\n}\n.submit-document-button[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 70px;\n  margin-top: 25px;\n  line-height: 70px;\n  text-align: center;\n  font-size: 24px;\n  border-radius: 5px;\n  background-color: #70e1e1;\n  color: white;\n  cursor: default;\n  transition: opacity 0.2s ease-in-out;\n}\n.submit-document-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n}\n.results-holder[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  padding: 50px 25px;\n  width: 100vw;\n  max-width: 800px;\n  margin: 15px auto 0 auto;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #f9f9f9;\n}\n.no-results-present[_ngcontent-%COMP%] {\n  color: #d3d3d3;\n  font-size: 28px;\n  height: 250px;\n  font-style: italic;\n}\n.single-result[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n  border-radius: 4px;\n  padding: 35px 15px;\n  background-color: white;\n  box-sizing: border-box;\n  cursor: default;\n  transition: background-color 0.2s ease-in-out;\n}\n.single-result[_ngcontent-%COMP%]:hover {\n  background-color: #e0f2fb;\n}\n.single-result[_ngcontent-%COMP%]   .doc-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUVJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFBTjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBREo7QUFLQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FBRkY7QUFHRTtFQUNFLFlBQUE7QUFESjtBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFIRjtBQU1BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFIRjtBQU1BO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7QUFIRjtBQUlFO0VBQ0UseUJBQUE7QUFGSjtBQUlFO0VBQ0UsZUFBQTtBQUZKIiwiZmlsZSI6ImFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubmV3LWRvY3VtZW50IHtcbiAgJi1ob2xkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaW5wdXQsIHRleHRhcmVhIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmYmZiO1xuICAgIH1cbiAgfVxuICAmLXRpdGxlIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG59XG5cbi5zdWJtaXQtZG9jdW1lbnQtYnV0dG9uIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBlMWUxO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZS1pbi1vdXQ7XG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxufVxuXG5cbi5yZXN1bHRzLWhvbGRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogNTBweCAyNXB4O1xuICB3aWR0aDogMTAwdnc7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMTVweCBhdXRvIDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuXG4ubm8tcmVzdWx0cy1wcmVzZW50IHtcbiAgY29sb3I6ICNkM2QzZDM7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uc2luZ2xlLXJlc3VsdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDM1cHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1pbi1vdXQ7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGYyZmI7XG4gIH1cbiAgLmRvYy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _document_document_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./document/document.component */ "PduK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _document_document_component__WEBPACK_IMPORTED_MODULE_4__["DocumentComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _document_document_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document/document.component */ "PduK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: 'document/:id', component: _document_document_component__WEBPACK_IMPORTED_MODULE_2__["DocumentComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map