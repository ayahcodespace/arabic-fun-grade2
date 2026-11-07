/* ===== الدروس: عدّلي الكلمات والأسئلة من هنا =====
C(سؤال, صورة, [اختيارات], رقم_الصح_من_0, صوت)  اختيار
O(كلمة أو جملة, صورة)  رتّب الحروف (كلمة) أو الكلمات (جملة)
الصورة: إيموجي، أو @اسم لرسمة SVG */
const C=(q,pic,o,ok,snd)=>({t:'c',q,pic,o,ok,snd});
const O=(w,pic)=>({t:'o',w,pic});
/* ===== أصوات الحيوانات (درس تنمية لغوية) =====
لإضافة حيوان جديد:
 1) حطي ملف صوته في فولدر sounds باسم الـid (مثلاً dog.mp3 أو dog.mp4)
 2) أضيفي سطر جديد تحت: ['id','الاسم بالعربي','إيموجي']  (لازم 3 حيوانات على الأقل)
لو فيه رسمة SVG بنفس الـid جوه P تحت هتتستخدم، وإلا بتظهر الإيموجي. */
const ANIMALS=[['cat','قطة','🐱'],['sheep','خروف','🐑'],['duck','بطة','🦆'],['bird','عصفور','🐦']];
const sn=(id,i)=>C('مين ده؟',0,['@'+id,'@'+ANIMALS[(i+1)%ANIMALS.length][0],'@'+ANIMALS[(i+2)%ANIMALS.length][0]],0,id);
const L=[
{n:'تنمية لغوية',e:'🗣️',s:[...ANIMALS.map((a,i)=>sn(a[0],i)),
 C('إيه ده؟','@elephant',['فيل','حمار','سيارة'],0),C('إيه ده؟','@donkey',['حمار','فيل','سيارة'],0),C('إيه ده؟','@car',['سيارة','حمار','فيل'],0)]},
{n:'اعرف جسمي',e:'🧍',s:[C('بإيه نسمع؟',0,['👂','👁️','✋'],0),C('بإيه نبصر؟',0,['👃','👁️','👂'],1),C('بإيه نشم؟',0,['✋','👃','👁️'],1),C('بإيه نكتب؟',0,['✋','👂','👃'],0),
 O('أذن','👂'),O('عين','👁️'),O('يد','✋'),O('أستحم بالماء والصابون','🛁')]},
{n:'ملابسي',e:'👕',s:[C('اشترت هند ___','👗',['فستاناً','بنطلوناً'],0),C('اشترى أحمد ___','👖',['فستاناً','بنطلوناً'],1),C('في الصيف الملابس ___','☀️',['خفيفة','ثقيلة'],0),C('في الشتاء الملابس ___','❄️',['خفيفة','ثقيلة'],1),
 O('قميص','👕'),O('فستان','👗'),O('أمي تغسل لنا الملابس','🧺')]},
{n:'أقاربي',e:'👨‍👩‍👧',s:[C('خالي يعمل ___','🔨',['نجاراً','طبيباً'],0),C('عمي ___ ماهر','🩺',['طبيب','نجار'],0),C('مين أخو أمي؟','👩',['خالي','عمي'],0),C('مين أخو أبي؟','👨',['عمي','خالي'],0),
 O('جدي','👴'),O('عمي','👨'),O('أحب عمي وعمتي','❤️')]},
{n:'هيا نزرع',e:'🌱',s:[C('أحمد زرع ___','🌱',['🫘 فولاً','🌾 قمحاً'],0),C('سعاد زرعت ___','🌱',['🫘 فولاً','🌾 قمحاً'],1),C('الزرع لونه ___','🌿',['أخضر','أصفر'],0),C('الزرع له جذر وساق و___','🌱',['أوراق','حجر'],0),
 O('جذر','🌱'),O('ساق','🌿'),O('نسقي الزرع كل يوم','💧')]},
{n:'الشجرة صديقتنا',e:'🌳',s:[C('نصنع الباب من ___','🚪',['الخشب','الماء'],0),C('إيه ده؟','🪑',['كرسي','باب','شباك'],0),C('إيه ده؟','🪟',['شباك','كرسي','باب'],0),C('إيه ده؟','🚪',['باب','كرسي','شباك'],0),
 O('شجرة','🌳'),O('نجلس في ظل الشجرة','🌳')]},
{n:'زيارة للمزرعة',e:'🐄',s:[C('إيه ده؟','@donkey',['حمار','بقرة','قطة'],0),C('إيه ده؟','🐄',['بقرة','حمار','خروف'],0),C('نأخذ اللبن من ___','🥛',['البقرة','السيارة'],0),
 O('لبن','🥛'),O('حظيرة','🏚️'),O('ذهبنا إلى مزرعة جدي','🚜')]},
{n:'حديقة الحيوان',e:'🦁',s:[C('هذا ___','@elephant',['فيل','أسد','زرافة'],0),C('هذه ___','🦒',['زرافة','فيل'],0),C('الأسد حيوان ___','🦁',['مفترس','أليف'],0),C('العصافير فوق ___','@bird',['الشجرة','الأرض'],0),
 O('فيل','@elephant'),O('أسد','🦁'),O('زرنا حديقة الحيوان','🦓')]},
{n:'السوق',e:'🛒',s:[C('الخضري يبيع ___','🥕',['الجزر','اللحم'],0),C('الجزار يبيع ___','🥩',['اللحم','الموز'],0),C('الفكهاني يبيع ___','🍌',['الموز','الجزر'],0),C('إيه ده؟','🍊',['برتقال','موز','خيار'],0),C('إيه ده؟','🥒',['خيار','جزر'],0),
 O('جزر','🥕'),O('موز','🍌'),O('نشتري من السوق','🛒')]}
];
/* ===== ألعاب إضافية =====
M(كلمة, صورة صح, صورة, صورة)       وصّل الكلمة بالصورة
H(حرف, كلمة فيها الحرف, كلمة, كلمة)  الحرف المماثل
N(اسم النشيد, إيموجي, [السطور])      نشيد */
const T=(g,s)=>({...s,g});
const M=(w,a,b,c)=>T('m',C('وصّل الكلمة بالصورة','#'+w,[a,b,c],0));
const H=(h,a,b,c)=>T('h',C('فين الكلمة اللي فيها حرف ('+h+')؟','#'+h,[a,b,c],0));
const AN=[];
const N=(t,e,l)=>{const st={t:'n',t2:t,e,l};AN.push(st);return[st]};
const add=(n,...a)=>L[n].s.push(...a);
add(0,M('سيارة','@car','@donkey','@elephant'),
 T('tl',C('الأحمر معناه إيه؟','&red',['✋ قف','🚶 امشي'],0)),T('tl',C('الأخضر معناه إيه؟','&green',['✋ قف','🚶 امشي'],1)));
add(1,M('أذن','👂','👁️','✋'),M('عين','👁️','👃','👂'),M('أنف','👃','✋','👂'));
add(2,M('قميص','👕','👖','👗'),M('فستان','👗','👕','👖'),M('بنطلون','👖','👗','👕'),
 ...N('العيد','🎉',['بكره الوقفة وبعده العيد','ربي يعيده علينا سعيد','في العيد أفراح وأماني','في العيد زيارات وتهاني','في العيد نلعب ونغني','واللبس جديد في جديد']));
add(3,...N('أقاربي','👨‍👩‍👧',['أحب عمي','لأن عمي أخ لبابا','أحب خالي','لأن خالي أخ لماما','أحب خالتي','وعمتي','أحب جدي','وجدتي']));
add(5,M('باب','🚪','🪑','🪟'),M('كرسي','🪑','🪟','🚪'),M('شباك','🪟','🚪','🪑'));
add(6,M('حمار','@donkey','🐄','🐑'),M('بقرة','🐄','@donkey','🐑'),M('لبن','🥛','🥕','🍌'),
 ...N('المزرعة','🚜',['مزرعة جدي كبيرة','أجمل ما فيها حظيرة','فيها دواجن كثيرة','فيها أرانب كبيرة','وكمان فيها بقرة سمينة','بلبنها بتغذينا']));
add(7,M('فيل','@elephant','🦁','🦒'),M('زرافة','🦒','@elephant','🦁'),M('أسد','🦁','🦒','@elephant'),
 ...N('حديقة الحيوان','🦒',['في جنينة الحيوانات','أنا شفت حاجات وحاجات','في الأول شفت زرافة','رقبتها طويلة طويلة','تمشي بهدوء ولطافة','وعيونها واسعة جميلة','ووقفنا عند الفيل','بيسلم بالزلومة','بنبص لقينا زحمة','عند الأسد المتوحش','كان قاعد يأكل لحمة','وهو مزقطط ومفرفش']));
add(8,M('جزر','🥕','🍌','🥩'),M('موز','🍌','🥕','🥩'),M('برتقال','🍊','🍌','🥒'),
 ...N('السوق','🛒',['أنا رحت السوق','اشتري طلبات','لحمة وبرقوق','وبلح أمهات','اللحمة لقيتها','عند الجزار','قلت له غطيها','من أي غبار']));
L.push({n:'المراجعة العامة',e:'🔠',s:[H('س','نسمع','عين','يد'),H('ص','صابون','ماء','قلب'),H('ق','قمح','جزر','موز'),H('ك','كرسي','باب','نخل'),H('ف','فيل','أسد','حمار'),H('ح','حظيرة','فيل','أسد'),H('خ','خيار','موز','لبن'),H('ج','جزر','موز','لبن'),H('ع','عين','أذن','يد'),H('ز','زرافة','فيل','أسد'),H('ط','بنطلون','فستان','قميص'),H('ش','شباك','باب','كرسي'),H('ه','هند','سعاد','أحمد'),H('ذ','أذن','عين','يد'),H('د','يد','عين','أنف')]});
/* ===== أسئلة إضافية (درس: كلمات جديدة + طويل/قصير + إشارة المرور) ===== */
const rs=a=>[...a].sort(()=>Math.random()-.5);
const W=[['تفاحة','🍎'],['كتاب','📖'],['قلم','✏️'],['كلب','🐶'],['حصان','🐴'],['سمكة','🐟'],['شمس','☀️'],['قمر','🌙'],['بيت','🏠'],['ساعة','⌚'],['كرة','⚽'],['دراجة','🚲'],['طائرة','✈️'],['وردة','🌹'],['نجمة','⭐'],['حذاء','👟'],['قبعة','🧢'],['سرير','🛏️'],['ملعقة','🥄'],['بيضة','🥚'],['خبز','🍞'],['عنب','🍇'],['فراشة','🦋']];
L.push({n:'كلمات جديدة',e:'🌟',s:[]});
W.forEach(([w,e])=>{const o=rs(W.filter(x=>x[0]!=w)).slice(0,2);add(10,M(w,e,...o.map(x=>x[1])),C('إيه ده؟',e,[w,...o.map(x=>x[0])],0))});
['كتاب','قلم','كلب','حصان','سمكة','شمس','قمر','بيت','ساعة','كرة','وردة','نجمة','حذاء','سرير'].forEach(w=>add(10,O(w,W.find(x=>x[0]==w)[1])));
add(10,O('أنا أحب أمي','❤️'),O('هذا بيتي الجميل','🏠'),O('أكلت تفاحة حمراء','🍎'),O('القطة تشرب اللبن','🐱'),O('أحمد يلعب بالكرة','⚽'),O('الشمس تضيء النهار','☀️'),O('أنا أقرأ الكتاب','📖'),O('سعاد تحب الورد','🌹'),
 C('القطة تقول ___','@cat',['مياو','هو هو'],0),C('الكلب يقول ___','🐶',['هو هو','مياو'],0),C('البطة تقول ___','@duck',['كواك','مياو'],0),C('العصفور يقول ___','@bird',['زقزقة','هو هو'],0),
 C('أكتب بـ___','✏️',['القلم','الملعقة'],0),C('آكل بـ___','🥄',['الملعقة','القلم'],0),C('أقرأ في ___','📖',['الكتاب','الكرة'],0),C('الشمس تظهر في ___','☀️',['النهار','الليل'],0),C('القمر يظهر في ___','🌙',['الليل','النهار'],0),C('ألبس ___ في رجلي','👟',['الحذاء','القبعة'],0),C('ألبس ___ على رأسي','🧢',['القبعة','الحذاء'],0),C('أنام في ___','🛏️',['السرير','الشارع'],0));
const CO=['#ffc21f','#3db36b','#1f9fbf','#ff6b4a','#a66bd6'];
for(let i=0;i<4;i++){const a=CO[i],b=CO[i+1],c=CO[(i+2)%5];
 add(0,T('len',C('فين القلم الطويل؟',0,['%200'+a,'%90'+b],0)),T('len',C('فين القلم القصير؟',0,['%200'+a,'%90'+b],1)),
 T('len',C('أي قلم هو الأطول؟',0,['%200'+a,'%140'+b,'%80'+c],0)),T('len',C('أي قلم هو الأقصر؟',0,['%200'+a,'%140'+b,'%80'+c],2)))}
const TL=(q,p,o,k)=>T('tl',C(q,p,o,k));
add(0,TL('الأصفر معناه إيه؟','&yellow',['استعد 🟡','امشي 🚶','قف ✋'],0),TL('إمتى نعدي الشارع؟','&green',['دلوقتي 🚶','استنى ✋'],0),TL('إمتى نعدي الشارع؟','&red',['دلوقتي 🚶','استنى ✋'],1),
 TL('السيارة بتقف لما الإشارة ___','🚦',['حمرا 🔴','خضرا 🟢'],0),TL('السيارة بتمشي لما الإشارة ___','🚗',['خضرا 🟢','حمرا 🔴'],0),TL('أي لون معناه قف؟','🚦',['🔴','🟢','🟡'],0),TL('أي لون معناه امشي؟','🚦',['🟡','🟢','🔴'],1),
 TL('قبل ما نعدي الشارع نبص ___','🛣️',['يمين وشمال 👀','على الأرض'],0),TL('نعدي الشارع مع ___','🚸',['كبير معانا 🧑','لوحدنا'],0),TL('ممنوع نلعب في ___','🚗',['الشارع','الحديقة'],0),TL('أركب السيارة وأربط ___','🚗',['الحزام','الحذاء'],0));
/* ===== طويل/قصير بالصور، صح/غلط، أسئلة الأناشيد، والتوصيل ===== */
[['🌳','🌳'],['🚶','🚶'],['🏠','🏠'],['🌴','🌴'],['🕯️','🕯️'],['🌹','🌹'],['🦒','🐱'],['🏢','🏠'],['👨','👶'],['🗼','🏠']].forEach(([a,b])=>{const o=['*120|'+a,'*55|'+b];
 add(0,T('len',C('فين الطويل؟',0,o,0)),T('len',C('فين القصير؟',0,o,1)))});
[[1,'الأذن نسمع بها','👂',0],[1,'العين نشم بها','👁️',1],[2,'في الصيف نلبس ملابس خفيفة','☀️',0],[2,'في الشتاء نلبس ملابس خفيفة','❄️',1],[4,'الزرع لونه أخضر','🌿',0],[4,'الزرع بيشرب بنزين','🌱',1],[5,'الباب من الخشب','🚪',0],[6,'البقرة بتدي لبن','🐄',0],[6,'الحمار بيطير','@donkey',1],[7,'الفيل حيوان كبير','@elephant',0],[7,'الأسد حيوان أليف','🦁',1],[8,'الجزار يبيع اللحمة','🥩',0],[8,'الفكهاني يبيع اللحمة','🍌',1],[0,'القطة بتقول مياو','@cat',0],[0,'البطة بتقول هو هو','@duck',1]]
 .forEach(([n,t,e,k])=>add(n,T('tf',C('«'+t+'» صح ولا غلط؟',e,['✅ صح','❌ غلط'],k))));
const TF={'العيد':[['في العيد نلعب ونغني',0],['في العيد ننام ونبكي',1]],'أقاربي':[['أحب جدي وجدتي',0],['لأن عمي أخ لماما',1]],'المزرعة':[['فيها أرانب كبيرة',0],['فيها فيل كبير',1]],'حديقة الحيوان':[['شفت زرافة رقبتها طويلة',0],['الفيل بياكل لحمة',1]],'السوق':[['رحت السوق',0],['اشتريت سيارة من السوق',1]]};
AN.forEach(st=>{const n=L.findIndex(x=>x.s.includes(st)),o=AN.filter(x=>x!=st).flatMap(x=>x.l);
 for(let i=0;i<st.l.length&&i<6;i+=2)add(n,T('n',C('أي سطر في نشيد '+st.t2+'؟',st.e,[st.l[i],...rs(o).slice(0,2)],0)));
 TF[st.t2].forEach(([t,k])=>add(n,T('n',C('«'+t+'» صح ولا غلط؟',st.e,['✅ صح','❌ غلط'],k))))});
add(0,M('فيل','@elephant','🦁','🦒'),M('حمار','@donkey','🐄','🐑'));
L.forEach(l=>{const m=l.s.filter(s=>s.g=='m');if(!m.length)return;l.s=l.s.filter(s=>s.g!='m');
 for(let i=0;i<m.length;i+=3){let c=m.slice(i,i+3);if(i+4==m.length){c=m.slice(i,i+4);i++}l.s.push({t:'x',g:'m',p:c.map(s=>[s.pic.slice(1),s.o[0]])})}});
const PR=['برافو! 🎉','أحسنت! 👏','شاطر! 💪','ممتاز! 🌟','عظيم! 😀'];

/* ===== الرسومات ===== */
const NM={elephant:'فيل',donkey:'حمار',car:'سيارة'};ANIMALS.forEach(a=>NM[a[0]]=a[1]);
const P={
cat:'<circle cx="50" cy="58" r="30" fill="#f6a44b"/><path d="M24 40L28 14L45 32ZM76 40L72 14L55 32Z" fill="#f6a44b"/><circle cx="40" cy="54" r="4" fill="#333"/><circle cx="60" cy="54" r="4" fill="#333"/><path d="M45 66Q50 72 55 66" stroke="#333" fill="none" stroke-width="3"/><path d="M8 60H30M8 70H30M70 60H92M70 70H92" stroke="#333" stroke-width="2"/>',
sheep:'<rect x="34" y="78" width="7" height="16" fill="#444"/><rect x="60" y="78" width="7" height="16" fill="#444"/><g fill="#fff" stroke="#bbb" stroke-width="2"><circle cx="28" cy="48" r="18"/><circle cx="50" cy="38" r="20"/><circle cx="72" cy="48" r="18"/><circle cx="36" cy="66" r="18"/><circle cx="64" cy="66" r="18"/></g><ellipse cx="50" cy="58" rx="15" ry="18" fill="#4a4a4a"/><circle cx="44" cy="54" r="3.5" fill="#fff"/><circle cx="56" cy="54" r="3.5" fill="#fff"/>',
duck:'<ellipse cx="45" cy="68" rx="32" ry="22" fill="#ffd84a"/><circle cx="68" cy="38" r="18" fill="#ffd84a"/><path d="M82 38L98 44L82 50Z" fill="#ff8a1f"/><circle cx="70" cy="33" r="3.5" fill="#333"/><path d="M30 66Q45 82 60 66" stroke="#e5b400" fill="none" stroke-width="3"/>',
bird:'<path d="M20 60L2 48L6 70Z" fill="#2a7fc0"/><ellipse cx="48" cy="58" rx="30" ry="22" fill="#4aa8e8"/><circle cx="72" cy="40" r="15" fill="#4aa8e8"/><path d="M85 38L98 43L85 47Z" fill="#ffc21f"/><circle cx="74" cy="37" r="3.5" fill="#333"/><ellipse cx="46" cy="60" rx="14" ry="9" fill="#2a7fc0"/>',
elephant:'<rect x="40" y="70" width="12" height="22" fill="#7d8b99"/><rect x="68" y="70" width="12" height="22" fill="#7d8b99"/><ellipse cx="60" cy="58" rx="34" ry="26" fill="#9aa8b6"/><circle cx="32" cy="46" r="20" fill="#9aa8b6"/><path d="M20 56Q8 70 14 90" stroke="#9aa8b6" stroke-width="12" fill="none" stroke-linecap="round"/><circle cx="44" cy="52" r="12" fill="#b9c4cf"/><circle cx="28" cy="40" r="3.5" fill="#333"/>',
donkey:'<ellipse cx="30" cy="20" rx="8" ry="18" fill="#8a6a4f" transform="rotate(-15 30 20)"/><ellipse cx="70" cy="20" rx="8" ry="18" fill="#8a6a4f" transform="rotate(15 70 20)"/><ellipse cx="50" cy="52" rx="24" ry="30" fill="#8a6a4f"/><ellipse cx="50" cy="74" rx="18" ry="14" fill="#e9d9c4"/><circle cx="40" cy="46" r="4" fill="#222"/><circle cx="60" cy="46" r="4" fill="#222"/><circle cx="44" cy="74" r="2.5" fill="#444"/><circle cx="56" cy="74" r="2.5" fill="#444"/>',
car:'<path d="M6 62L16 40H62L78 62Z" fill="#ff6b4a"/><rect x="2" y="58" width="96" height="22" rx="8" fill="#e8472a"/><path d="M22 44H38V58H16ZM42 44H58L68 58H42Z" fill="#cfeefc"/><circle cx="26" cy="80" r="11" fill="#333"/><circle cx="74" cy="80" r="11" fill="#333"/><circle cx="26" cy="80" r="4" fill="#ccc"/><circle cx="74" cy="80" r="4" fill="#ccc"/>'};
const art=id=>P[id]?`<svg viewBox="0 0 100 100" class="art">${P[id]}</svg>`:`<span class="em">${(ANIMALS.find(a=>a[0]==id)||[0,0,'❓'])[2]}</span>`;
const pencil=(n,c)=>{const x=200-n;return `<svg viewBox="0 0 200 40" class="pen"><path d="M${x+30} 8L${x} 20L${x+30} 32Z" fill="#f2d2a0"/><rect x="${x+30}" y="8" width="${n-40}" height="24" fill="${c}"/><rect x="190" y="8" width="10" height="24" rx="3" fill="#f28ab2"/></svg>`};
const light=on=>`<svg viewBox="0 0 100 200" class="art light"><rect x="14" y="4" width="72" height="192" rx="22" fill="#2b3440"/><circle cx="50" cy="52" r="26" fill="${on=='red'?'#ff3b30':'#5a3b3b'}"/><circle cx="50" cy="100" r="26" fill="${on=='yellow'?'#ffcc00':'#5a5a3b'}"/><circle cx="50" cy="148" r="26" fill="${on=='green'?'#2fd05a':'#2f5a3b'}"/></svg>`;
let nl=0;
const pic=v=>v[0]=='@'?art(v.slice(1)):v[0]=='#'?`<span class="tx">${v.slice(1)}</span>`:v[0]=='&'?light(v.slice(1)):`<span class="em">${v}</span>`;
const lab=v=>v[0]=='@'?NM[v.slice(1)]:v;
const opt=v=>v[0]=='@'?art(v.slice(1))+(nl?'':NM[v.slice(1)]):v[0]=='*'?(p=>`<span class="em" style="font-size:${p[0]}px;line-height:1">${p[1]}</span>`)(v.slice(1).split('|')):v[0]=='%'?pencil(+v.slice(1).split('#')[0],'#'+v.split('#')[1]):/[\u0600-\u06FF]/.test(v)?v:`<span class="em">${v}</span>`;

/* ===== الألعاب (الصفحة الرئيسية): الاسم والإيموجي والفلتر ===== */
const G=[
{n:'أصوات الحيوانات',e:'🔊',f:s=>s.snd},
{n:'اختار الصح',e:'✅',f:s=>s.t=='c'&&!s.snd&&!s.g},
{n:'صح ولا غلط',e:'👍',f:s=>s.g=='tf'},
{n:'وصّل الكلمة بالصورة',e:'🔗',f:s=>s.g=='m'},
{n:'رتّب الحروف',e:'🔤',f:s=>s.t=='o'&&!s.w.includes(' ')},
{n:'رتّب الكلمات',e:'🧩',f:s=>s.t=='o'&&s.w.includes(' ')},
{n:'الحرف المماثل',e:'🔠',f:s=>s.g=='h'},
{n:'طويل ولا قصير',e:'📏',f:s=>s.g=='len'},
{n:'إشارة المرور',e:'🚦',f:s=>s.g=='tl'},
{n:'الأناشيد',e:'🎵',f:s=>s.t=='n'||s.g=='n'}];
const WR=['حاول تاني!','قربت! جرّب تاني','مش مشكلة، جرّب تاني 💪'];

/* ===== الأدوات ===== */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const sh=a=>[...a].sort(()=>Math.random()-.5);
let gi=0,li=0,S=[],si=0,stars=0,pr=0,wr=0,mute=false,multi=true,ctx;
let cur,tok=0;
const stop=()=>{tok++;if(cur){cur.pause();cur=null}};
const play=async id=>{stop();const my=tok;for(const e of ['mp3','mp4','m4a','wav','ogg']){const a=new Audio(`sounds/${id}.${e}`);cur=a;try{await a.play();return}catch(x){if(my!=tok)return}}cur=null;const f=$('#fb');f.className='try';f.textContent='الصوت مش شغال'};
const tone=(f,t,d)=>{if(mute)return;try{ctx=ctx||new(window.AudioContext||window.webkitAudioContext)();const o=ctx.createOscillator(),g=ctx.createGain(),s=ctx.currentTime+t;o.frequency.value=f;o.connect(g);g.connect(ctx.destination);g.gain.setValueAtTime(.25,s);g.gain.exponentialRampToValueAtTime(.001,s+d);o.start(s);o.stop(s+d)}catch(e){}};
const good=()=>[523,659,784,1047].forEach((f,i)=>tone(f,i*.11,.25));
const bad=()=>{tone(300,0,.2);tone(240,.18,.3)};
const burst=()=>{for(let i=0;i<14;i++){const e=document.createElement('span');e.className='cf';e.textContent=['⭐','🎉','✨','🌟'][i%4];e.style.left=Math.random()*92+'%';e.style.animationDelay=Math.random()*.3+'s';document.body.appendChild(e);setTimeout(()=>e.remove(),1900)}};
const oops=()=>{bad();wr++;const f=$('#fb');f.className='try';f.textContent='🤔 '+WR[wr%3]};

/* ===== الشاشات ===== */
function home(){
  stop();
  $('nav').hidden=true;
  $('#app').innerHTML=`<h1>لغتي الجميلة</h1><p class="sub">اضغط على اللعبة اللي عايزها</p><div class="grid big">${G.map((g,i)=>`<button class="card" data-i="${i}"><span class="em">${g.e}</span>${g.n}</button>`).join('')}</div>`;
  $$('.card').forEach(b=>b.onclick=()=>pick(+b.dataset.i));
}

function pick(i){
  stop();
  gi=i;const ls=L.map((l,n)=>({n,c:l.s.filter(G[i].f).length})).filter(x=>x.c);
  multi=ls.length>1;if(!multi)return start(ls[0].n);
  $('nav').hidden=false;$('#prev').hidden=$('#next').hidden=true;$('#next').classList.remove('go');
  $('#app').innerHTML=`<h1>${G[i].e} ${G[i].n}</h1><p class="sub">اختار الدرس</p><div class="grid">${ls.map(x=>`<button class="card" data-n="${x.n}"><span class="em">${L[x.n].e}</span>${L[x.n].n}</button>`).join('')}</div><button class="big" id="all">كل الدروس مع بعض</button>`;
  $$('.card').forEach(b=>b.onclick=()=>start(+b.dataset.n));
  $('#all').onclick=()=>start(-1);
}

function start(n){
  li=n;S=(n<0?L.flatMap(l=>l.s):L[n].s).filter(G[gi].f);si=0;stars=0;show();
}

function show(){
  stop();
  const s=S[si];if(!s)return end();
  $('nav').hidden=false;$('#prev').hidden=$('#next').hidden=false;$('#next').classList.remove('go');wr=0;
  const hd=`<header><span>${G[gi].e} ${G[gi].n}${li>=0?' - '+L[li].n:''}</span><span><span id="st">⭐ ${stars}</span> <button class="mt" id="mt" aria-label="الصوت">${mute?'🔇':'🔊'}</button></span></header><div class="bar"><i style="width:${si/S.length*100}%"></i></div>`;
  ({c:rc,o:ro,n:rn,x:rx})[s.t](s,hd);
  $('#mt').onclick=()=>{mute=!mute;$('#mt').textContent=mute?'🔇':'🔊'};
}

function rx(s,hd){
  const ws=sh(s.p.map(p=>p[0])),ps=sh(s.p.map(p=>p[1]));let sel=null,n=0;
  $('#app').innerHTML=hd+`<h2>وصّل الكلمة بالصورة</h2><div class="mb" id="bd"><svg class="ov" id="ov"></svg><div class="col">${ws.map(w=>`<button class="wd" data-w="${w}">${w}</button>`).join('')}</div><div class="col">${ps.map(p=>`<button class="pc" data-p="${p}">${pic(p)}</button>`).join('')}</div></div><div id="fb" aria-live="polite"></div>`;
  $$('.wd').forEach(b=>b.onclick=()=>{if(b.disabled)return;$$('.wd').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');sel=b});
  $$('.pc').forEach(b=>b.onclick=()=>{
    if(b.disabled)return;
    if(!sel){$('#fb').className='try';$('#fb').textContent='👈 اختار الكلمة الأول';return}
    if(s.p.some(p=>p[0]==sel.dataset.w&&p[1]==b.dataset.p)){
      const bd=$('#bd').getBoundingClientRect(),a=sel.getBoundingClientRect(),c=b.getBoundingClientRect();
      $('#ov').innerHTML+=`<line x1="${a.left-bd.left}" y1="${a.top+a.height/2-bd.top}" x2="${c.right-bd.left}" y2="${c.top+c.height/2-bd.top}" stroke="${['#ff6b4a','#1f9fbf','#3db36b','#a66bd6'][n%4]}" stroke-width="8" stroke-linecap="round"/>`;
      sel.disabled=b.disabled=true;sel.classList.remove('sel');sel.classList.add('right');b.classList.add('right');sel=null;n++;$('#fb').textContent='';
      n==s.p.length?win():good();
    }else{b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake');oops()}
  });
}

function rn(s,hd){
  $('#app').innerHTML=hd+`<h2>🎵 نشيد: ${s.t2}</h2><div class="top"><span class="em">${s.e}</span></div><div class="poem">${s.l.map((x,i)=>`<p class="${i%2?'e':''}">${x}</p>`).join('')}</div><button class="big" id="dn">قرأت النشيد ✅</button><div id="fb" aria-live="polite"></div>`;
  $('#dn').onclick=()=>{$('#dn').disabled=true;win()};
}

function rc(s,hd){
  nl=s.g=='m';
  const o=sh(s.o.map((v,i)=>({v,ok:i==s.ok})));
  $('#app').innerHTML=hd+`<h2>${s.q}</h2>${s.snd?'<button class="snd" id="sn">🔊 اسمع الصوت</button>':''}${s.pic?`<div class="top">${pic(s.pic)}</div>`:''}<div class="choices">${o.map((c,n)=>`<button class="choice" data-n="${n}">${opt(c.v)}</button>`).join('')}</div><div id="fb" aria-live="polite"></div>`;
  if(s.snd)$('#sn').onclick=()=>play(s.snd);
  $$('.choice').forEach(b=>b.onclick=()=>{
    stop();const c=o[b.dataset.n];
    if(c.ok){$$('.choice').forEach(x=>{x.disabled=true;x.classList.remove('hint')});b.classList.add('right');win(lab(c.v))}
    else{b.classList.add('wrong');b.disabled=true;oops();
      if(wr>=2){const r=$$('.choice').find(x=>o[x.dataset.n].ok);r&&r.classList.add('hint')}}
  });
}

function ro(s,hd){
  const w=s.w,sp=w.includes(' '),tk=sp?w.split(' '):[...w];let k=0;
  $('#app').innerHTML=hd+`<h2>${sp?'رتّب الكلمات':'رتّب الحروف'}</h2>${s.pic?`<div class="top">${pic(s.pic)}</div>`:''}<div class="line" id="ln">${tk.map(()=>'<span class="slot"></span>').join('')}</div><div class="choices">${sh(tk).map(x=>`<button class="choice tk">${x}</button>`).join('')}</div><div id="fb" aria-live="polite"></div>`;
  const sl=$$('.slot');
  $$('.tk').forEach(b=>b.onclick=()=>{
    if(b.textContent==tk[k]){sl[k].textContent=tk[k];sl[k].classList.add('f');b.disabled=true;b.classList.remove('hint');b.classList.add('right');k++;wr=0;$('#fb').textContent='';
      if(k==tk.length){$$('.tk').forEach(x=>x.classList.remove('hint'));$('#ln').innerHTML=`<span class="word">${w}</span>`;win(w)}}
    else{b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake');oops();
      if(wr>=2){const r=$$('.tk').find(x=>!x.disabled&&x.textContent==tk[k]);r&&r.classList.add('hint')}}
  });
}

function win(t){
  stars++;good();burst();const f=$('#fb');f.className='';
  f.innerHTML=`<span class="star">⭐</span> ${PR[pr++%PR.length]}`;
  $('#st').textContent='⭐ '+stars;$('#next').classList.add('go');
}

function end(){
  stop();
  $('nav').hidden=true;good();burst();
  $('#app').innerHTML=`<h1>أحسنت!</h1><div class="top"><span class="em">🏆</span></div><h2>خلّصنا ${G[gi].n}</h2><div class="stars">${'⭐'.repeat(stars)}</div><button class="big" id="ag">🔁 العب تاني</button>${multi?'<button class="big" id="ls">📚 اختار درس تاني</button>':''}<button class="big" id="hm">🏠 الرئيسية</button>`;
  $('#ag').onclick=()=>{si=0;stars=0;show()};if(multi)$('#ls').onclick=()=>pick(gi);$('#hm').onclick=home;
}

$('#prev').onclick=()=>{si>0?(si--,show()):multi?pick(gi):home()};
$('#next').onclick=()=>{si++;show()};
$('#home').onclick=home;
home();
