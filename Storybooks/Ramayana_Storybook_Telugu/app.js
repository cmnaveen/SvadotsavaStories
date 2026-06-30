/* ============================================================
   రామాయణం పిల్లల కథల పుస్తకం — ఇంటరాక్టివ్ ఇంజిన్
   ============================================================ */

// ---- పేజీ డేటా (42 పేజీలు + కవర్) ----
const PAGES = [
  {
    title: "రామాయణం",
    subtitle: "బాలకాండ — యువరాజు కథ",
    text: "ప్రియమైన పాఠకుడా, రాకుమారుడు రాముడి అద్భుతమైన కథకు స్వాగతం — ధైర్యం, ప్రేమ మరియు జ్ఞానంతో నిండిన ఈ కథ వేలాది సంవత్సరాలుగా చెప్పబడుతోంది. మీ సాహసయాత్రను ప్రారంభించడానికి పేజీ తిప్పండి!",
    image: "../Ramayana_Storybook/cover.png",
    isCover: true,
    ornamentIcon: "🕉️"
  },
  {
    title: "వాల్మీకి మరియు నారదుడు",
    text: "చాలా కాలం క్రితం, వాల్మీకి అనే జ్ఞాని ఈ ప్రపంచంలో పూర్తిగా మంచి, ధైర్యశాలి మరియు దయగల వ్యక్తి ఉన్నాడా అని తెలుసుకోవాలనుకున్నాడు. దేవదూత నారద ముని చిరునవ్వుతో రాముడు అనే అద్భుతమైన రాకుమారుడి గురించి చెప్పాడు. రాముడు సింహం అంత ధైర్యశాలి, చంద్రుడంత సౌమ్యుడు.",
    image: "../Ramayana_Storybook/page_01.png",
    ornamentIcon: "🙏"
  },
  {
    title: "పక్షుల గీతం",
    text: "ఒక రోజు, మెరిసే నది ఒడ్డున నడుస్తున్నప్పుడు, వాల్మీకి చెట్టులో ఆనందంగా నాట్యం చేస్తున్న రెండు అందమైన పక్షులను చూశాడు. అకస్మాత్తుగా, ఒక వేటగాడు ఒక పక్షిని బాణంతో కొట్టాడు, వాల్మీకి హృదయం దుఃఖంతో నిండిపోయింది. ఆ బాధలో, అతని నోటి నుండి అందమైన, లయబద్ధమైన పదాలు వచ్చాయి — అవే ప్రపంచంలో మొట్టమొదటి కవిత అయ్యాయి!",
    image: "../Ramayana_Storybook/page_02.png",
    ornamentIcon: "🐦"
  },
  {
    title: "అయోధ్య రాజ్యం",
    text: "ఈ కథ అయోధ్య అనే అద్భుతమైన నగరంలో మొదలైంది, అది బంగారు రాజభవనాలు మరియు అందమైన ఉద్యానవనాలతో నిండి ఉండేది. ఆ నగరాన్ని దశరథుడు అనే దయగల, గొప్ప రాజు పాలించేవాడు. అతను తన ప్రజలను తన కుటుంబంలా చూసుకునేవాడు, అందరూ శాంతిగా, సంతోషంగా ఉండేవారు.",
    image: "../Ramayana_Storybook/page_05.png",
    ornamentIcon: "🏰"
  },
  {
    title: "దశరథ మహారాజు కోరిక",
    text: "దశరథ మహారాజు చాలా సంపన్నుడు మరియు జ్ఞాని, కానీ అతని హృదయంలో ఒక పెద్ద బాధ ఉండేది. తన తర్వాత రాజ్యాన్ని చూసుకోవడానికి అతనికి కొడుకులు లేరు. అతను తన బంగారు సింహాసనంపై కూర్చుని, దేవుడిని బిడ్డ కోసం వేడుకోవడం ఎలాగా అని ఆలోచిస్తూ ఉండేవాడు.",
    image: "../Ramayana_Storybook/page_06.png",
    ornamentIcon: "👑"
  },
  {
    title: "ఋష్యశృంగ ముని ప్రయాణం",
    text: "రాజు ఋష్యశృంగ అనే చాలా పవిత్రమైన యువ మునిని ప్రత్యేక యజ్ఞాన్ని నిర్వహించమని ఆహ్వానించాడు. ఋష్యశృంగ తన జీవితమంతా ప్రశాంతమైన అడవిలో నివసించాడు మరియు అతను వెళ్ళిన చోటల్లా దివ్యమైన శాంతిని తీసుకొచ్చేవాడు. అతను అయోధ్యకు వచ్చినప్పుడు, వర్షాలు కురిసాయి, పూలు ఆనందంతో వికసించాయి.",
    image: "../Ramayana_Storybook/page_07.png",
    ornamentIcon: "🌧️"
  },
  {
    title: "పవిత్ర అగ్ని యజ్ఞం",
    text: "ఋషులు ఒక గొప్ప యజ్ఞ వేదికను నిర్మించి, ప్రకాశవంతమైన పవిత్ర అగ్నిని వెలిగించారు. వారు తీయని మంత్రాలను జపించారు, పొగ మేఘాల వరకు ఎగసింది. మంటల నుండి ఒక ప్రకాశవంతమైన దూత బంగారు పాత్రలో తీయని పాయసంతో బయటకు వచ్చాడు, రాజు కోరికలు నెరవేరతాయని వాగ్దానం చేశాడు.",
    image: "../Ramayana_Storybook/page_08.png",
    ornamentIcon: "🔥"
  },
  {
    title: "దేవతల ప్రార్థన — విష్ణు భగవానుడు",
    text: "స్వర్గంలో, దేవతలు రావణుడు అనే పది తలల రాక్షసుడి గురించి ఆందోళన చెందుతున్నారు, అతను ప్రతిచోటా అల్లర్లు సృష్టిస్తున్నాడు. విశ్వ రక్షకుడు విష్ణు భగవానుడు వారి ప్రార్థనలను విన్నాడు. భూమిపై మానవ రాకుమారుడిగా జన్మించి, ఆ రాక్షసుడిని ఓడించి శాంతిని పునరుద్ధరిస్తానని వాగ్దానం చేశాడు.",
    image: "../Ramayana_Storybook/page_09.png",
    ornamentIcon: "🙏"
  },
  {
    title: "విష్ణు భగవానుడి వాగ్దానం",
    text: "విష్ణు భగవానుడు దయతో చిరునవ్వు నవ్వి ఒక గొప్ప వాగ్దానం చేశాడు: 'నేను భూమిపై మానవ రాకుమారుడిగా జన్మించి, అంతా సరిదిద్దుతాను.' దేవతలు ఆనందించారు, ఎందుకంటే త్వరలోనే భూమిపై మంచితనం నడవబోతోందని వారు తెలుసుకున్నారు.",
    image: "../Ramayana_Storybook/page_08_new.png",
    ornamentIcon: "✨"
  },
  {
    title: "జీవన పాయసం",
    text: "దశరథ మహారాజు ఆ దివ్యమైన పాయసాన్ని తన ముగ్గురు దయగల రాణులకు ఆనందంగా ఇచ్చాడు: కౌసల్య, కైకేయి మరియు సుమిత్ర. రాణులు ఆ తీయని పాయసాన్ని ప్రేమతో, కృతజ్ఞతతో తిన్నారు, దేవతలు తమను ఆశీర్వదించారని తెలుసుకుని.",
    image: "../Ramayana_Storybook/page_10.png",
    ornamentIcon: "🍯"
  },
  {
    title: "రాకుమారుల జననం",
    text: "త్వరలో, రాజభవనం శిశువుల తీయని నవ్వుల ధ్వనులతో నిండిపోయింది! నలుగురు అందమైన రాకుమారులు జన్మించారు: రాముడు, భరతుడు, మరియు కవలలు లక్ష్మణుడు మరియు శత్రుఘ్నుడు. మొత్తం రాజ్యం సంగీతం, నాట్యం మరియు రంగురంగుల దీపాలతో వేడుక చేసుకుంది.",
    image: "../Ramayana_Storybook/page_11.png",
    ornamentIcon: "👶"
  },
  {
    title: "నలుగురు సోదరులు",
    text: "నలుగురు రాకుమారులు బలవంతులుగా, జ్ఞానులుగా మరియు చాలా ప్రేమగల వారిగా పెరిగారు. పెద్దవాడైన రాముడు తన సోదరుడు లక్ష్మణుడికి చాలా సన్నిహితుడు, వారు ఎల్లప్పుడూ కలిసి వెళ్ళేవారు. వారు శాస్త్రాలు చదివారు, విలువిద్య నేర్చుకున్నారు, ఎల్లప్పుడూ అవసరమైన వారికి సహాయం చేసేవారు.",
    image: "../Ramayana_Storybook/page_12.png",
    ornamentIcon: "🏹"
  },
  {
    title: "విశ్వామిత్ర మహర్షి రాక",
    text: "ఒక ఎండా రోజున, ప్రసిద్ధ మరియు శక్తిమంతుడైన విశ్వామిత్ర మహర్షి రాజభవనానికి వచ్చాడు. దశరథ మహారాజు అతనిని మహా గౌరవంతో ఆహ్వానించాడు, నేల వరకు వంగి నమస్కారం చేశాడు. తన అడవి ఆశ్రమాన్ని భయంకరమైన రాక్షసుల నుండి రక్షించడానికి సహాయం కావాలని మునివర్యుడు వివరించాడు.",
    image: "../Ramayana_Storybook/page_13.png",
    ornamentIcon: "🧙"
  },
  {
    title: "ధైర్యమైన అభ్యర్థన",
    text: "విశ్వామిత్ర మహర్షి రాజును యువ రాకుమారుడు రాముడిని తనతో అడవికి పంపమని అడిగాడు. రాముడు ఇంకా చాలా చిన్నవాడు కాబట్టి రాజు భయపడ్డాడు, తన ప్రియ కుమారుడిని రక్షించుకోవాలనుకున్నాడు. కానీ మునివర్యుడు రాముడు గొప్ప కార్యాలు చేయడానికి పుట్టాడని వాగ్దానం చేశాడు.",
    image: "../Ramayana_Storybook/page_14.png",
    ornamentIcon: "⚔️"
  },
  {
    title: "ప్రయాణం ప్రారంభం",
    text: "రాకుమారుడు రాముడు మరియు అతని పక్కన లక్ష్మణుడు విశ్వామిత్ర మహర్షి వెంట తమ సాహస యాత్రకు బయలుదేరారు. వారు పొలాల గుండా నడిచారు, కొండలు ఎక్కారు, తమ విల్లు బాణాలను మోసుకుంటూ. మహా మునివర్యుడి నుండి నేర్చుకుంటూ, అడవులను రక్షించాలనే ఉత్సాహంతో సోదరులు నడిచారు.",
    image: "../Ramayana_Storybook/page_16.png",
    ornamentIcon: "🚶"
  },
  {
    title: "తాటక చీకటి అడవి",
    text: "వారు త్వరలో ఒక చీకటి, భయంకరమైన అడవిలోకి ప్రవేశించారు, అక్కడ గాలి అరుస్తూ ఉంది, చెట్లు తిరిగిన చేతులులా కనిపిస్తున్నాయి. ఇది తాటక అనే భయంకరమైన రాక్షసి నివాస స్థలం, ఆమె అన్ని జంతువులను మరియు ఋషులను భయపెట్టి పారేసింది. రాముడు మరియు లక్ష్మణుడు భయం లేకుండా ముందుకు నడిచారు.",
    image: "../Ramayana_Storybook/page_15_new.png",
    ornamentIcon: "🌲"
  },
  {
    title: "తాటక వధ",
    text: "గొప్ప గర్జనతో, రాక్షసి తాటక నీడల నుండి బయటకు దూకింది, వారిపై రాళ్ళు విసిరింది! రాముడు వేగంగా ఒక బంగారు బాణం తీసుకుని, తన విల్లు యొక్క తాడును వెనక్కి లాగి, విడిచాడు. బాణం లక్ష్యాన్ని ఛేదించింది, భయంకరమైన అడవి ఒక్కసారిగా ప్రకాశవంతంగా, ప్రశాంతంగా మారిపోయింది.",
    image: "../Ramayana_Storybook/page_16_new.png",
    ornamentIcon: "🏹"
  },
  {
    title: "దివ్యమైన కాంతి ఆయుధాలు",
    text: "రాముడి ధైర్యానికి బహుమతిగా, విశ్వామిత్ర మహర్షి అతనికి అనేక దివ్యమైన, ఖగోళ ఆయుధాలను ఇచ్చాడు. ఈ ఆయుధాలు అగ్ని, గాలి మరియు నీటి బాణాలుగా మారగలవు, అవి మంచిని రక్షించడానికి ఎల్లప్పుడూ రాముడి ఆదేశాలను పాటిస్తాయి.",
    image: "../Ramayana_Storybook/page_17_new.png",
    ornamentIcon: "⚡"
  },
  {
    title: "సిద్ధాశ్రమ రక్షణ",
    text: "వారు మునివర్యుడి ప్రశాంతమైన అడవి ఆశ్రమం సిద్ధాశ్రమనికి చేరుకున్నారు. ఋషులు తమ ప్రార్థనలు ప్రారంభించారు, రాముడు మరియు లక్ష్మణుడు పవిత్ర యజ్ఞ వేదికను కాపలా కాయడానికి ఆరు రోజులు ఆరు రాత్రులు మేల్కొని ఉన్నారు. వారు ఎల్లప్పుడూ తమ గురువులను రక్షించడానికి సిద్ధంగా ఉన్నారు.",
    image: "../Ramayana_Storybook/page_18_new.png",
    ornamentIcon: "🛕"
  },
  {
    title: "సుబాహు వధ మరియు మారీచ పరాజయం",
    text: "అకస్మాత్తుగా, మారీచ మరియు సుబాహు అనే ఇద్దరు పెద్ద రాక్షసులు యజ్ఞాన్ని నాశనం చేయడానికి ఆకాశం నుండి దిగారు, ఆకాశం చీకటిగా మారింది! రాముడు ఒక వాయు బాణాన్ని ప్రయోగించి మారీచుడిని సముద్రం అవతలకు ఎగరేసాడు, మరియు ఒక అగ్ని బాణంతో సుబాహుడిని ఓడించి, అడవిని కాపాడాడు.",
    image: "../Ramayana_Storybook/page_19_new.png",
    ornamentIcon: "💨"
  },
  {
    title: "మిథిల వైపు ప్రయాణం",
    text: "అడవి సురక్షితమైన తరువాత, విశ్వామిత్ర మహర్షి రాకుమారులను అందమైన మిథిల రాజ్యానికి తీసుకెళ్ళాలని నిర్ణయించుకున్నాడు. మిథిల రాజు జనకుడి వద్ద శివ భగవానుడికి చెందిన ఒక దివ్యమైన పెద్ద విల్లు ఉంది. ఈ అద్భుతాన్ని రాముడు చూడాలని మునివర్యుడు కోరుకున్నాడు.",
    image: "../Ramayana_Storybook/page_20_new.png",
    ornamentIcon: "🛤️"
  },
  {
    title: "సాగర మహారాజు మరియు పవిత్ర అశ్వం",
    text: "చాలా కాలం క్రితం, సాగర మహారాజు ఒక అందమైన పవిత్రమైన గుర్రంతో ఒక గొప్ప యజ్ఞాన్ని నిర్వహించాడు అని మునివర్యుడు చెప్పాడు. కానీ అకస్మాత్తుగా ఆ గుర్రం జాడ లేకుండా మాయమైపోయింది! రాజు యొక్క అరవై వేల మంది కుమారులు ఆ గుర్రాన్ని వెతకడానికి ప్రపంచమంతటా బయలుదేరారు.",
    image: "../Ramayana_Storybook/page_21_new.png",
    ornamentIcon: "🐎"
  },
  {
    title: "పొరపాటు మరియు గుణపాఠం",
    text: "భూమిని లోతుగా తవ్వి, చివరకు ఆ కుమారులు ప్రశాంతంగా ధ్యానం చేస్తున్న కపిల మహర్షి పక్కన ఆ గుర్రాన్ని కనుగొన్నారు. ఏమీ అడగకుండానే, వారు అతనిపై కోపంగా అరిచారు — వెంటనే ఒక కాంతి వేడిలో వారు బూడిదగా మారిపోయారు. ఇది ఒక విచారకరమైన గుణపాఠం: జ్ఞానుల పట్ల, దయగల వారి పట్ల ఎప్పుడూ కఠినంగా ప్రవర్తించకూడదు.",
    image: "../Ramayana_Storybook/page_22_new.png",
    ornamentIcon: "🪨"
  },
  {
    title: "భగీరథుడి గొప్ప తపస్సు",
    text: "కొన్ని సంవత్సరాల తరువాత, భగీరథుడు అనే ధైర్యశాలి రాజు తన పూర్వీకులకు సహాయం చేయడానికి గంగను భూమికి తీసుకురావాలని చాలా సంవత్సరాలు తపస్సు చేశాడు. అతను ఒక కాలిపై నిలబడి తన హృదయమంతా ప్రార్థించాడు. అతని ప్రేమ మరియు సంకల్పం అంత బలంగా ఉన్నాయి, స్వర్గం అతనికి సహాయం చేయాలని నిర్ణయించింది.",
    image: "../Ramayana_Storybook/page_23_new.png",
    ornamentIcon: "🙏"
  },
  {
    title: "గంగ భూమికి రావడం",
    text: "కానీ గంగ ప్రవాహం అంత శక్తివంతమైనది కాబట్టి అది భూమిని కొట్టుకుపోతుంది! అందుకే, శక్తివంతుడైన శివ భగవానుడు ఉరుకుతున్న నదిని తన దట్టమైన, ఉంగరాల జటాజూటంలో పట్టుకున్నాడు. అతను నీటిని మెల్లగా బయటకు రానిచ్చాడు, నేడు మనం చూసే ప్రశాంతమైన నదులను సృష్టించాడు.",
    image: "../Ramayana_Storybook/page_24_new.png",
    ornamentIcon: "🌊"
  },
  {
    title: "సముద్ర మథనం",
    text: "తరువాత మునివర్యుడు దేవతలు మరియు రాక్షసులు కలిసి పాల సముద్రాన్ని ఎలా మథించారో ఆ కథ చెప్పాడు. వారు ఒక పర్వతాన్ని కవ్వంగా మరియు ఒక పెద్ద సర్పాన్ని తాడుగా ఉపయోగించి, అమృతం అనే దీర్ఘ జీవన రహస్యాన్ని కనుగొనడానికి ప్రయత్నించారు.",
    image: "../Ramayana_Storybook/page_25_new.png",
    ornamentIcon: "🐍"
  },
  {
    title: "గౌతమ ముని ఆశ్రమం",
    text: "మిథిల సమీపంలో, వారు ఒక ప్రశాంతమైన, ఆశ్రమాన్ని కనుగొన్నారు, అక్కడ ప్రతిదీ నిశ్చలంగా ఉంది. పక్షులు పాడలేదు, గాలి వీచలేదు. అహల్య అనే స్త్రీ చాలా కాలం క్రితం ఒక దుఃఖకరమైన తప్పు వల్ల రాయిగా మారిపోయిందని విశ్వామిత్రుడు రాముడికి చెప్పాడు.",
    image: "../Ramayana_Storybook/page_26_new.png",
    ornamentIcon: "🪨"
  },
  {
    title: "రాయి ప్రాణం పోసుకుంది",
    text: "రాముడి పాదం మెల్లగా రాయిని తాకగానే, ఒక దివ్యమైన కాంతి దానిపై వ్యాపించింది! గట్టిగా ఉన్న బూడిద రంగు రాయి కరిగిపోయింది, అందమైన అహల్య అక్కడ నిలబడింది. ఆమె కృతజ్ఞతతో రాముడికి నమస్కరించింది, అడవి వెంటనే జీవం పోసుకుంది.",
    image: "../Ramayana_Storybook/page_27_new.png",
    ornamentIcon: "🦋"
  },
  {
    title: "మిథిలలో స్వాగతం",
    text: "చివరకు, వారు మిథిల ద్వారాలకు చేరుకున్నారు. జనక మహారాజు యువ రాకుమారులను చూసి చాలా సంతోషించాడు! అతను వారిని తన గొప్ప రాజభవనానికి ఆహ్వానించాడు, అది పెద్ద ఉత్సవం కోసం ప్రకాశవంతమైన జెండాలు మరియు తీయని సువాసనల పూలతో అలంకరించబడి ఉంది.",
    image: "../Ramayana_Storybook/page_28_new.png",
    ornamentIcon: "🌸"
  },
  {
    title: "భూమి పుత్రిక మరియు శివ ధనుస్సు",
    text: "జనక మహారాజు ఒక అద్భుతమైన కథను చెప్పాడు: 'నా కుమార్తె సీత భూమిని దున్నుతున్నప్పుడు లభించింది, ఆమె భూదేవి ఇచ్చిన వరం.' తరువాత అతను శివ భగవానుడి యొక్క భారీ, పురాతన ధనుస్సును వారికి చూపించాడు, ఏ రాజు కూడా దానిని ఎత్తలేడు. 'ఎవరైతే ఈ ధనుస్సును వంచుతారో, వారు నా ధైర్యశాలి సీతను వివాహం చేసుకుంటారు' అని అతను చెప్పాడు.",
    image: "../Ramayana_Storybook/page_29_new.png",
    ornamentIcon: "🏹"
  },
  {
    title: "శివ ధనుస్సును విరవడం",
    text: "రాముడు ప్రశాంతంగా ఆ భారీ ధనుస్సు వైపు నడిచాడు. అందరూ ఆశ్చర్యపోయేలా, అతను దానిని ఒక పువ్వులా చాలా సులంగా ఎత్తాడు — మరియు అతను దానికి నారిని కట్టడానికి వంచినప్పుడు, ఆ గొప్ప ధనుస్సు ఉరుము లాంటి శబ్దంతో విరిగిపోయింది! సభలోని వారందరూ ఆశ్చర్యపోయారు, తరువాత ఆనందంతో కేకలు వేశారు.",
    image: "../Ramayana_Storybook/page_30_new.png",
    ornamentIcon: "⚡"
  },
  {
    title: "సీతారాముల వివాహ నిశ్చయం",
    text: "సౌమ్యురాలైన సీత ముందుకు వచ్చి రాముడి మెడలో అందమైన పూలదండను వేసి, అతనిని తన భర్తగా ఎంచుకుంది. మిథిలా ప్రజలు ఆనందంతో కేకలు వేశారు, మరియు వేగవంతమైన దూతలు ఈ అద్భుతమైన వార్తను పంచుకోవడానికి అయోధ్యకు పరుగెత్తారు. ప్రేమ మరియు మంచితనం ఒకదానికొకటి కనుగొన్నాయి.",
    image: "../Ramayana_Storybook/page_31_new.png",
    ornamentIcon: "💌"
  },
  {
    title: "జనక మహారాజు ఆనందం",
    text: "ఈ సంతోషకరమైన వార్త అయోధ్యకు చేరినప్పుడు, దశరథ మహారాజు అమితానందం పొందాడు! అతను తన మిగతా కుమారులు, మంత్రులు మరియు గొప్ప రాజ ఊరేగింపుతో మిథిలకు బయలుదేరాడు. వీధులు ఏనుగులు, సంగీతం మరియు వేడుకల ధ్వనులతో నిండిపోయాయి.",
    image: "../Ramayana_Storybook/page_32_new.png",
    ornamentIcon: "🐘"
  },
  {
    title: "నలుగురు సోదరులు, నలుగురు వధువులు",
    text: "జనక మహారాజు తన కుటుంబంలో నలుగురు అద్భుతమైన రాకుమార్తెలు ఉన్నారని ఆనందంగా చెప్పాడు. అలా నలుగురు సోదరులకు ఒకేసారి వివాహం జరిపించడానికి నిశ్చయించారు! రాముడు సీతను, లక్ష్మణుడు ఊర్మిళను, భరతుడు మాండవిని, శత్రుఘ్నుడు శ్రుతకీర్తిని వివాహం చేసుకోబోతున్నారు.",
    image: "../Ramayana_Storybook/page_33_new.png",
    ornamentIcon: "👸"
  },
  {
    title: "గొప్ప వివాహం",
    text: "రాముడు తామర పువ్వంత సౌమ్యంగా, దయగా ఉన్న సీతా రాకుమారిని పెళ్ళి చేసుకున్నాడు. ముగ్గురు సోదరులు కూడా మిథిల తీయని రాకుమార్తెలను పెళ్ళి చేసుకున్నారు. జంటలు పవిత్ర అగ్ని చుట్టూ నడిచారు, అందరూ రంగురంగుల పూల రేకులతో వారిపై వర్షించారు.",
    image: "../Ramayana_Storybook/page_34_new.png",
    ornamentIcon: "💒"
  },
  {
    title: "అగ్నిసాక్షిగా ప్రమాణాలు",
    text: "చేతులు పట్టుకుని, ప్రతి జంట పవిత్ర అగ్ని చుట్టూ నడిచి, ఒకరినొకరు ఎల్లప్పుడూ ప్రేమించుకుంటామని మరియు రక్షించుకుంటామని ప్రమాణం చేశారు. ఋషులు ఆశీర్వచన మంత్రాలు చదివారు, మరియు దేవతలు పైనుండి పూలవాన కురిపించారు. అది స్వచ్ఛమైన ఆనందం మరియు నమ్మకం యొక్క క్షణం.",
    image: "../Ramayana_Storybook/page_35_new.png",
    ornamentIcon: "🔥"
  },
  {
    title: "మార్గంలో ఎదురైన తుఫాను",
    text: "సంతోషకరమైన కుటుంబాలు అయోధ్యకు తిరిగి ప్రయాణిస్తున్నప్పుడు, ఆకాశం అకస్మాత్తుగా చీకటిగా మారింది మరియు గాలి బలంగా వీచింది. చేతిలో పెద్ద గండ్రగొడ్డలి, మండుతున్న కళ్లతో భయంకరమైన యోధ-ముని పరశురాముడు ముందుకు వచ్చాడు. అందరూ భయపడి నిశ్చేష్టులయ్యారు — కానీ రాముడు పూర్తిగా ప్రశాంతంగా ఉన్నాడు.",
    image: "../Ramayana_Storybook/page_36_new.png",
    ornamentIcon: "🌩️"
  },
  {
    title: "యోధుడి సవాలు",
    text: "నువ్వే శివ ధనుస్సును విరిచావా? అని పరశురాముడు గర్జించాడు. నా వద్ద ఉన్న ఈ మహా విష్ణు ధనుస్సుకు నువ్వు నారిని సంధించగలవేమో చూద్దాం! తన బలానికి ఎవరూ సాటి రాలేరని అతను నమ్మాడు. కానీ రాముడు మెల్లగా నవ్వి ఆ సవాలును స్వీకరించాడు.",
    image: "../Ramayana_Storybook/page_37_new.png",
    ornamentIcon: "🏹"
  },
  {
    title: "శాంతమైన శక్తి విజయం",
    text: "అద్భుతమైన సులువుతో, రాముడు ఆ గొప్ప ధనుస్సును ఎత్తి వంచి, క్షణంలో సిద్ధం చేశాడు. ఆ క్షణంలో, రాముడు సాక్షాత్తు దైవమని పరశురాముడు గ్రహించాడు, మరియు అతని అహంకారం అంతా కరిగిపోయింది. నిజమైన బలం అనేది ప్రశాంతంగా మరియు వినయంగా ఉంటుంది — ఎప్పుడూ గర్వంగా ఉండదు అని అతను తెలుసుకున్నాడు.",
    image: "../Ramayana_Storybook/page_38_new.png",
    ornamentIcon: "✨"
  },
  {
    title: "చివరకు ప్రశాంతత",
    text: "పరశురాముడు రాముడికి గౌరవంగా నమస్కరించి, ప్రశాంతమైన హృదయంతో తపస్సు చేసుకోవడానికి ప్రశాంతమైన పర్వతాల వైపు వెళ్ళిపోయాడు. తుఫాను మాయమై ఆకాశం మళ్లీ నీలంగా, ప్రకాశవంతంగా మారింది. ఎవరికీ ఎలాంటి హాని కలగకుండా, మంచి చాలా సౌమ్యంగా, దయతో విజయం సాధించింది.",
    image: "../Ramayana_Storybook/page_39_new.png",
    ornamentIcon: "☮️"
  },
  {
    title: "అయోధ్యకు విజయవంతమైన తిరుగు ప్రయాణం",
    text: "చివరకు కుటుంబం అయోధ్యకు చేరుకుంది, మొత్తం నగరం సంబరాల్లో మునిగిపోయింది! వీధుల్లో నీళ్లు చల్లి, పూలతో అలంకరించారు, ప్రతి కిటికీలోనూ దీపాలు వెలిగాయి, ప్రజలు తమ పూర్తి శక్తితో జయజయధ్వనాలు చేశారు. వారి ప్రియమైన రాకుమారులు తమ వధువులతో కలిసి ఇంటికి తిరిగి వచ్చారు.",
    image: "../Ramayana_Storybook/page_40_new.png",
    ornamentIcon: "🪔"
  },
  {
    title: "వధువులకు సాదర స్వాగతం",
    text: "ముగ్గురు ప్రేమగల రాణి-తల్లులు సీతను మరియు ఇతర రాకుమార్తెలను చేతులు చాచి, సంతోష బాష్పాలతో రాజభవనంలోకి ఆహ్వానించారు. వారు మంగళహారతులు ఇచ్చి, మిఠాయిలు తినిపించి, ప్రతి కోడలిని ఆశీర్వదించారు. రాజకుటుంబం ఇప్పుడు మరింత పెద్దదిగా, మరింత ఆనందంగా మారింది.",
    image: "../Ramayana_Storybook/page_41_new.png",
    ornamentIcon: "🌸"
  },
  {
    title: "సంతోషకరమైన ప్రారంభం",
    text: "అలా రాముడు, సీత తమ సంతోషకరమైన జీవితాన్ని కలిసి ప్రారంభించారు, వారి దయ, ధైర్యం మరియు సత్యనిష్ఠకు అందరిచేత ప్రేమింపబడ్డారు. ఇది వారి గొప్ప సాహసయాత్రకు ప్రారంభం మాత్రమే. ఎందుకంటే ఎక్కడైతే ధైర్యం, భక్తి మరియు మంచి హృదయం ఉంటాయో, అక్కడ ఎల్లప్పుడూ ఒక అద్భుతమైన కథ వికసించడానికి సిద్ధంగా ఉంటుంది.",
    image: "../Ramayana_Storybook/page_42_new.png",
    ornamentIcon: "🌅"
  }
];

// ---- DOM Refs ----
const $ = id => document.getElementById(id);
const book           = $('book');
const pageLeft       = $('page-left');
const pageImageWrap  = $('page-image-wrap');
const pageImage      = $('page-image');
const pageRight      = $('page-right');
const chapterTitle   = $('chapter-title');
const storyText      = $('story-text');
const moralBox       = $('moral-box');
const prevBtn        = $('prev-btn');
const nextBtn        = $('next-btn');
const pageCounter    = $('page-counter');
const progressBar    = $('progress-bar');
const tocList        = $('toc-list');
const sidebar        = $('sidebar');
const tocToggleBtn   = $('toc-toggle-btn');
const readBtn        = $('read-btn');
const autoplayBtn    = $('autoplay-btn');
const speakingInd    = $('speaking-indicator');
const loadingOverlay = $('loading-overlay');

// ---- State ----
let currentPage  = 0;
let isAutoPlay   = false;
let autoPlayTimer = null;
let isSpeaking   = false;

// ---- Build TOC ----
function buildTOC() {
  PAGES.forEach((p, i) => {
    const li = document.createElement('li');
    li.className = 'toc-item';
    li.innerHTML = `<span class="toc-num">${i === 0 ? '✦' : i}</span> ${p.title}`;
    li.addEventListener('click', () => goToPage(i));
    tocList.appendChild(li);
  });
}

// ---- Render Page ----
function renderPage(direction) {
  const p = PAGES[currentPage];
  const isCover = p.isCover;

  // Transition animation
  book.classList.remove('page-turning', 'page-turning-back');
  void book.offsetWidth; // force reflow
  book.classList.add(direction === 'back' ? 'page-turning-back' : 'page-turning');

  // Cover mode
  book.classList.toggle('cover-mode', !!isCover);

  // Text
  if (isCover) {
    chapterTitle.textContent = p.title;
    storyText.innerHTML = `<em style="font-family:'Noto Serif Telugu','Cinzel',serif;font-size:1rem;color:var(--gold-dim);display:block;margin-bottom:.8rem;">${p.subtitle || ''}</em>${p.text}`;
  } else {
    chapterTitle.textContent = p.title;
    storyText.textContent = p.text;
  }

  // Moral
  moralBox.textContent = p.moral || '';

  // Page number
  pageRight.setAttribute('data-page', currentPage === 0 ? '' : currentPage);

  // Image
  if (p.image) {
    pageImage.style.display = 'block';
    pageImage.classList.add('fade-out');
    // Remove any ornament frame
    const existingFrame = pageImageWrap.querySelector('.ornament-frame');
    if (existingFrame) existingFrame.remove();

    const img = new Image();
    img.onload = () => {
      pageImage.src = p.image;
      requestAnimationFrame(() => pageImage.classList.remove('fade-out'));
    };
    img.onerror = () => {
      // If image fails to load, show ornament frame
      showOrnamentFrame(p);
    };
    img.src = p.image;
  } else {
    showOrnamentFrame(p);
  }

  // Navigation
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === PAGES.length - 1;

  // Counter
  pageCounter.textContent = `${currentPage + 1} / ${PAGES.length}`;

  // Progress
  progressBar.style.width = `${((currentPage + 1) / PAGES.length) * 100}%`;

  // TOC active
  document.querySelectorAll('.toc-item').forEach((el, i) => {
    el.classList.toggle('active', i === currentPage);
  });

  // Scroll TOC into view
  const activeItem = tocList.querySelector('.toc-item.active');
  if (activeItem) activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

function showOrnamentFrame(p) {
  pageImage.style.display = 'none';
  // Remove existing frames
  const existingFrame = pageImageWrap.querySelector('.ornament-frame');
  if (existingFrame) existingFrame.remove();

  const frame = document.createElement('div');
  frame.className = 'ornament-frame';
  frame.innerHTML = `
    <div class="ornament-icon">${p.ornamentIcon || '❧'}</div>
    <div class="ornament-text">${p.title}</div>
  `;
  pageImageWrap.appendChild(frame);
}

// ---- Navigation ----
function goToPage(idx, direction) {
  if (idx < 0 || idx >= PAGES.length) return;
  stopSpeaking();
  const dir = direction || (idx > currentPage ? 'forward' : 'back');
  currentPage = idx;
  renderPage(dir);
}

// ---- Next / Prev ----
function nextPage() { goToPage(currentPage + 1, 'forward'); }
function prevPage() { goToPage(currentPage - 1, 'back'); }

// ---- Text-to-Speech ----
function speak() {
  if (!('speechSynthesis' in window)) {
    alert('ఈ బ్రౌజర్‌లో టెక్స్ట్-టు-స్పీచ్ అందుబాటులో లేదు.');
    return;
  }

  if (isSpeaking) {
    stopSpeaking();
    return;
  }

  const p = PAGES[currentPage];
  const utterance = new SpeechSynthesisUtterance(p.text);
  utterance.lang = 'te-IN';
  utterance.rate = 0.85;
  utterance.pitch = 1.05;

  // Try to use a Telugu voice
  const voices = speechSynthesis.getVoices();
  const preferred = voices.find(v =>
    v.lang.includes('te') || v.lang.includes('Telugu')
  ) || voices.find(v => v.lang.includes('hi')) || voices.find(v => v.lang.includes('en'));
  if (preferred) utterance.voice = preferred;

  utterance.onstart = () => {
    isSpeaking = true;
    readBtn.classList.add('active');
    speakingInd.classList.add('active');
  };
  utterance.onend = () => {
    isSpeaking = false;
    readBtn.classList.remove('active');
    speakingInd.classList.remove('active');

    // If autoplay, go to next page after reading
    if (isAutoPlay && currentPage < PAGES.length - 1) {
      autoPlayTimer = setTimeout(() => {
        nextPage();
        if (isAutoPlay) speak();
      }, 1500);
    }
  };
  utterance.onerror = () => {
    isSpeaking = false;
    readBtn.classList.remove('active');
    speakingInd.classList.remove('active');
  };

  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

// ---- Stop Speaking ----
function stopSpeaking() {
  speechSynthesis.cancel();
  isSpeaking = false;
  readBtn.classList.remove('active');
  speakingInd.classList.remove('active');
  if (autoPlayTimer) clearTimeout(autoPlayTimer);
}

// ---- Auto-Play ----
function toggleAutoPlay() {
  isAutoPlay = !isAutoPlay;
  autoplayBtn.classList.toggle('active', isAutoPlay);
  autoplayBtn.querySelector('.icon').textContent = isAutoPlay ? '⏸' : '▶';

  if (isAutoPlay) {
    speak();
  } else {
    stopSpeaking();
  }
}

// ---- Sidebar Toggle ----
function toggleSidebar() {
  sidebar.classList.toggle('collapsed');
}

// ---- Keyboard Navigation ----
document.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      e.preventDefault();
      nextPage();
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      e.preventDefault();
      prevPage();
      break;
    case ' ':
      e.preventDefault();
      speak();
      break;
    case 'Escape':
      stopSpeaking();
      if (isAutoPlay) toggleAutoPlay();
      break;
  }
});

// ---- Touch/Swipe Support ----
let touchStartX = 0;
let touchStartY = 0;
document.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].screenX - touchStartX;
  const dy = e.changedTouches[0].screenY - touchStartY;
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 60) {
    if (dx < 0) nextPage();
    else prevPage();
  }
}, { passive: true });

// ---- Event Listeners ----
prevBtn.addEventListener('click', prevPage);
nextBtn.addEventListener('click', nextPage);
readBtn.addEventListener('click', speak);
autoplayBtn.addEventListener('click', toggleAutoPlay);
tocToggleBtn.addEventListener('click', toggleSidebar);

// Pre-load voices
if ('speechSynthesis' in window) {
  speechSynthesis.getVoices();
  speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
}

// ---- Init ----
buildTOC();
renderPage('forward');

// Remove loading
setTimeout(() => {
  loadingOverlay.classList.add('hidden');
}, 800);
