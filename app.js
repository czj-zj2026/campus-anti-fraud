const scenarios = [
  {
    id:'parttime', category:'刷单返利', icon:'📦', contact:'兼职派单员', meta:'兼职群 · 刚刚',
    messages:['新人福利！先垫付 98 元拍 3 单，5 分钟后连本带利返 128 元。','最后一单，做完立刻返现，名额只留给你。'],
    choices:[
      {text:'先垫付 98 元，返现后马上退出', correct:false, feedback:'小额返利只是诱饵。一旦你尝到甜头，对方就会用“连单任务”“操作失误”等理由让你继续垫付，最后无法提现。'},
      {text:'不垫钱、不下载陌生 App，退出并举报', correct:true, feedback:'任何要求先垫资的兼职都高度可疑。刷单返利本身还涉及违法失信行为，不能参与。'},
      {text:'拉室友一起做，人多更安全', correct:false, feedback:'拉人不会降低风险，反而可能让自己成为骗子的帮凶。所谓“人多安全”只是降低你的警惕。'}
    ],
    tip:'兼职只要先交钱、先垫资、先充值，直接停止。'
  },
  {
    id:'account', category:'游戏账号交易', icon:'🎮', contact:'游戏账号买家', meta:'私聊 · 2 分钟前',
    messages:['你的号我看了，诚心要。走我们平台的担保交易，安全。','先交 288 元保证金，交易完成会连同号款一起退给你。'],
    choices:[
      {text:'按买家要求去第三方担保平台交易', correct:false, feedback:'对方指定的陌生“担保平台”可能是假网站，保证金、解冻费、手续费会层层加码。'},
      {text:'只在官方平台交易，拒绝私下转账和保证金', correct:true, feedback:'正规交易不会要求卖家先交保证金。不要离开官方平台，也不要点击陌生链接。'},
      {text:'先交 288 元，反正平台会退', correct:false, feedback:'“会退”正是骗子最常用的话术。只要你先付款，对方就会继续编造新的收费理由。'}
    ],
    tip:'账号交易不脱离官方平台，任何“保证金”都是危险信号。'
  },
  {
    id:'teacher', category:'冒充老师收费', icon:'🧑‍🏫', contact:'辅导员-王老师', meta:'新好友申请 · 刚刚',
    messages:['学院要统一订购实训资料，今晚 8 点前把 398 元转到这个个人账户。','名单要上报，先别在群里问，按我发的账户转。'],
    choices:[
      {text:'老师催得急，先转账再说', correct:false, feedback:'头像和备注都能伪造，催促转账正是冒充老师诈骗的典型特征。'},
      {text:'通过学校官网、班级群或辅导员常用电话核实', correct:true, feedback:'不要使用对方提供的新号码核实。通过你原本保存的官方渠道确认，才是真正有效的方法。'},
      {text:'在班级群里问一句，然后马上转账', correct:false, feedback:'群里有骗子同伙或托儿时，问一句并不能证明身份。还需要通过学校官方渠道核实。'}
    ],
    tip:'老师收费不会让你转到陌生个人账户，更不会阻止你核实。'
  },
  {
    id:'loan', category:'校园贷注销', icon:'☎️', contact:'金融客服专员', meta:'陌生来电 · 通话中',
    messages:['系统显示你的校园贷账户未注销，将影响个人征信。','现在把可用额度转到安全账户做流水核验，核验后原路退回。'],
    choices:[
      {text:'按客服要求转账，清空贷款额度', correct:false, feedback:'不存在所谓的“安全账户”。要求你贷款后转账的“注销校园贷”都是诈骗。'},
      {text:'挂断，通过官方客服或征信中心核实', correct:true, feedback:'征信不会因为注销账户而要求你转账。挂断陌生来电，通过官方渠道查询。'},
      {text:'下载屏幕共享 App，让客服指导操作', correct:false, feedback:'屏幕共享会泄露验证码和银行卡信息，骗子可以借此直接转走你的钱。'}
    ],
    tip:'“注销校园贷”“影响征信”“安全账户”同时出现，就是诈骗。'
  },
  {
    id:'ticket', category:'演唱会门票', icon:'🎫', contact:'演唱会转票', meta:'二手平台私信 · 5 分钟前',
    messages:['我有内场票，原价转你。平台抽成太高，微信先转 680。','票根和身份证照片都发你，放心，我不是骗子。'],
    choices:[
      {text:'先付定金锁票，晚了就被别人抢了', correct:false, feedback:'紧俏票、低价票和催促付款是经典组合。截图、票根和身份证照片都可以伪造。'},
      {text:'拒绝私下转账，只在官方或可信平台交易', correct:true, feedback:'实名制演出票往往无法私下转让。坚持平台内交易，不要脱离平台付款。'},
      {text:'看到对方发身份证照片就付款', correct:false, feedback:'身份证照片不能证明交易真实，反而可能来自盗用。不要用隐私照片替代平台担保。'}
    ],
    tip:'票务交易不脱离平台，不因“抢手”跳过核实。'
  },
  {
    id:'market', category:'二手平台交易', icon:'🛍️', contact:'二手平台买家', meta:'商品详情页 · 刚刚',
    messages:['我付款被冻结了，平台客服说需要卖家扫码处理。','你扫这个二维码，交 500 元解冻，钱会马上退给你。'],
    choices:[
      {text:'扫码联系客服，尽快帮买家解冻', correct:false, feedback:'平台不会让卖家扫码付款来解冻买家资金。二维码可能通向假客服或直接扣款页面。'},
      {text:'终止交易，只在平台内沟通，不扫陌生码', correct:true, feedback:'所有交易和售后都应在原平台完成。对方发来的二维码、链接和客服账号都不要相信。'},
      {text:'先垫 500 元，买家说会退', correct:false, feedback:'“先垫付、稍后退”是典型骗局。正规平台不会要求卖家先付钱解冻。'}
    ],
    tip:'陌生人发来的二维码不扫，平台外客服不信。'
  },
  {
    id:'voice', category:'AI 冒充熟人', icon:'🤖', contact:'室友小陈', meta:'语音消息 · 00:08',
    messages:['（语音消息）我在外面出事了，不方便打电话，先借我 2000，转这个卡，别告诉别人。'], voice:true,
    choices:[
      {text:'声音就是室友，马上转账', correct:false, feedback:'声音可以被 AI 克隆。越是“不能打电话”“别告诉别人”，越要提高警惕。'},
      {text:'挂断后拨打熟人的常用号码或当面核实', correct:true, feedback:'不要回拨对方提供的新号码。用你原本保存的号码联系本人，或找共同好友交叉确认。'},
      {text:'先转 500 应急，剩下稍后再转', correct:false, feedback:'骗子会不断制造紧急感。即使金额不大，也不能在未核实身份前转账。'}
    ],
    tip:'熟人借钱必须换一种方式核实，声音和视频都不能单独作为证据。'
  }
];

const $ = (selector) => document.querySelector(selector);
const state = { order:[], index:0, score:0, answers:[], locked:false, currentChoices:[], finished:false };
const screens = { start:$('#startScreen'), quiz:$('#quizScreen'), result:$('#resultScreen') };
const levelRules = [
  {min:700, grade:'S', name:'反诈王者', title:'所有套路都被你识破了', sub:'你的判断非常稳。记得把这份警惕分享给身边的人。', color:'#43e3b2'},
  {min:500, grade:'A', name:'火眼金睛', title:'骗子很难从你这里得手', sub:'你识破了大部分套路，再把薄弱环节复习一遍就更稳了。', color:'#55b7ff'},
  {min:300, grade:'B', name:'安全新秀', title:'有警觉，但还差一点稳', sub:'遇到催促转账和陌生链接时，先停下来核实，不要被情绪带着走。', color:'#ffd166'},
  {min:100, grade:'C', name:'高危边缘', title:'骗术已经开始接近你', sub:'建议认真看完复盘，重点记住“不轻信、不转账、不扫码”。', color:'#ff9f5a'},
  {min:0, grade:'D', name:'待补课', title:'这堂课值得再上一次', sub:'骗子最擅长制造紧急感。先挂断、先核实，再决定下一步。', color:'#ff6372'}
];

function shuffle(items){
  const result = [...items];
  for(let i=result.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [result[i],result[j]] = [result[j],result[i]];
  }
  return result;
}

function showScreen(name){
  Object.entries(screens).forEach(([key,element])=>element.classList.toggle('hidden',key!==name));
  const target = screens[name];
  if(target) target.scrollTop = 0;
}

function startGame(){
  state.order = shuffle(scenarios);
  state.index = 0;
  state.score = 0;
  state.answers = [];
  state.locked = false;
  state.finished = false;
  $('#scoreValue').textContent = '0';
  showScreen('quiz');
  renderQuestion();
}

function renderQuestion(){
  const scenario = state.order[state.index];
  const total = state.order.length;
  state.locked = false;
  state.currentChoices = shuffle(scenario.choices);
  $('#currentNo').textContent = String(state.index + 1);
  $('#totalNo').textContent = String(total);
  $('#progressText').textContent = `${state.index + 1} / ${total}`;
  $('#progressBar').style.width = `${((state.index + 1) / total) * 100}%`;
  $('#caseTag').textContent = scenario.category;
  $('#caseNo').textContent = `CASE ${String(state.index + 1).padStart(2,'0')}`;
  $('#caseAvatar').textContent = scenario.icon;
  $('#contactName').textContent = scenario.contact;
  $('#contactMeta').textContent = scenario.meta;
  $('#questionTitle').textContent = '此时你会怎么做？';

  const chat = $('#chatBubbles');
  chat.innerHTML = '';
  scenario.messages.forEach((message,index)=>{
    const bubble = document.createElement('div');
    bubble.className = `bubble${scenario.voice && index === 0 ? ' voice' : ''}`;
    if(scenario.voice && index === 0){
      const wave = document.createElement('span');
      wave.className = 'wave';
      wave.textContent = '▂▅▇▃▆▂';
      const copy = document.createElement('span');
      copy.textContent = message;
      bubble.append(wave,copy);
    }else{
      bubble.textContent = message;
    }
    chat.appendChild(bubble);
  });

  const choices = $('#choices');
  choices.innerHTML = '';
  state.currentChoices.forEach((choice,index)=>{
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'choice';
    const key = document.createElement('span');
    key.className = 'choice-key';
    key.textContent = String.fromCharCode(65+index);
    const copy = document.createElement('span');
    copy.textContent = choice.text;
    button.append(key,copy);
    button.addEventListener('click',()=>selectChoice(choice,button));
    choices.appendChild(button);
  });

  const feedback = $('#feedback');
  feedback.className = 'feedback hidden';
  feedback.setAttribute('aria-hidden','true');
}

function selectChoice(choice,button){
  if(state.locked) return;
  state.locked = true;
  const scenario = state.order[state.index];
  const isCorrect = choice.correct;
  if(isCorrect) state.score += 100;
  state.answers.push({scenario,choice,isCorrect});

  document.querySelectorAll('.choice').forEach((item,index)=>{
    item.disabled = true;
    if(state.currentChoices[index].correct) item.classList.add('correct');
  });
  if(!isCorrect) button.classList.add('wrong');

  $('#scoreValue').textContent = String(state.score);
  const feedback = $('#feedback');
  feedback.className = `feedback ${isCorrect ? 'correct' : 'wrong'}`;
  feedback.setAttribute('aria-hidden','false');
  $('#feedbackIcon').textContent = isCorrect ? '✓' : '!';
  $('#feedbackTitle').textContent = isCorrect ? '判断正确' : '差点中招';
  $('#feedbackScore').textContent = isCorrect ? '+100 分' : '+0 分';
  $('#feedbackText').textContent = choice.feedback;
  $('#tipText').textContent = scenario.tip;
  $('#nextBtn').innerHTML = state.index === state.order.length - 1 ? '查看战绩<span class=\'arrow\'>→</span>' : '下一关<span class=\'arrow\'>→</span>';
  setTimeout(()=>feedback.scrollIntoView({behavior:'smooth',block:'nearest'}),60);
}

function nextQuestion(){
  if(!state.locked) return;
  if(state.index >= state.order.length - 1){
    finishGame();
    return;
  }
  state.index += 1;
  renderQuestion();
  screens.quiz.scrollTop = 0;
}

function getLevel(score){
  return levelRules.find(rule=>score >= rule.min) || levelRules[levelRules.length-1];
}

function finishGame(){
  state.finished = true;
  const total = state.order.length;
  const maxScore = total * 100;
  const correctCount = state.answers.filter(answer=>answer.isCorrect).length;
  const level = getLevel(state.score);
  const progress = `${(state.score / maxScore) * 360}deg`;
  $('#scoreRing').style.setProperty('--progress',progress);
  $('#scoreRing').style.setProperty('background',`conic-gradient(${level.color} ${progress},rgba(255,255,255,.065) 0)`);
  $('#finalScore').textContent = String(state.score);
  $('#levelGrade').textContent = level.grade;
  $('#levelName').textContent = level.name;
  $('#levelGrade').style.background = level.color;
  $('#levelName').style.color = level.color;
  $('#resultTitle').textContent = level.title;
  $('#resultSub').textContent = level.sub;
  $('#correctMetric').textContent = `${correctCount} / ${total}`;

  const wrong = state.answers.filter(answer=>!answer.isCorrect);
  $('#weaknessMetric').textContent = wrong.length ? wrong.slice(0,2).map(answer=>answer.scenario.category).join('、') : '全部识破';

  const reviewList = $('#reviewList');
  reviewList.innerHTML = '';
  state.answers.forEach((answer,index)=>{
    const item = document.createElement('div');
    item.className = 'review-item';
    const status = document.createElement('span');
    status.className = `review-status ${answer.isCorrect ? 'ok' : 'no'}`;
    status.textContent = answer.isCorrect ? '✓' : '×';
    const copy = document.createElement('div');
    copy.className = 'review-copy';
    const title = document.createElement('strong');
    title.textContent = `${index + 1}. ${answer.scenario.category}`;
    const detail = document.createElement('span');
    detail.textContent = answer.isCorrect ? answer.scenario.tip : `正确做法：${answer.scenario.choices.find(choice=>choice.correct).text}`;
    copy.append(title,detail);
    item.append(status,copy);
    reviewList.appendChild(item);
  });

  try{
    const previousBest = Number(localStorage.getItem('antiFraudBest') || 0);
    if(state.score > previousBest) localStorage.setItem('antiFraudBest',String(state.score));
  }catch(error){}
  showScreen('result');
}

function quitGame(){
  if(state.answers.length && !state.finished){
    const shouldQuit = window.confirm('本局进度还没有完成，确定退出吗？');
    if(!shouldQuit) return;
  }
  showScreen('start');
  updatePersonalBest();
}

function updatePersonalBest(){
  try{
    const best = Number(localStorage.getItem('antiFraudBest') || 0);
    const element = $('#personalBest');
    element.classList.toggle('show',best > 0);
    if(best > 0) element.textContent = `你的历史最高战力：${best} / 700`;
  }catch(error){}
}

function toast(message){
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(()=>element.classList.remove('show'),1800);
}

async function copyText(text){
  try{
    await navigator.clipboard.writeText(text);
    return true;
  }catch(error){
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    let ok = false;
    try{ ok = document.execCommand('copy'); }catch(copyError){}
    textarea.remove();
    return ok;
  }
}

async function shareResult(){
  const level = getLevel(state.score);
  const text = `我在《校园反诈闯关》拿到 ${state.score} / 700 分，反诈段位是「${level.name}」。7 个校园骗局，你能识破几个？`;
  const isWeb = /^https?:/i.test(location.href);
  const shareData = {title:'校园反诈闯关',text,url:isWeb ? location.href : undefined};
  try{
    if(navigator.share){
      await navigator.share(shareData);
      return;
    }
    const ok = await copyText(`${text}${isWeb ? `\n${location.href}` : ''}`);
    toast(ok ? '战绩文字已复制' : '分享内容已准备好');
  }catch(error){
    if(error && error.name === 'AbortError') return;
    toast('暂时无法调起分享');
  }
}

function roundRect(ctx,x,y,width,height,radius){
  const r = Math.min(radius,width/2,height/2);
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.arcTo(x+width,y,x+width,y+height,r);
  ctx.arcTo(x+width,y+height,x,y+height,r);
  ctx.arcTo(x,y+height,x,y,r);
  ctx.arcTo(x,y,x+width,y,r);
  ctx.closePath();
}

function drawPoster(){
  const canvas = $('#posterCanvas');
  const ctx = canvas.getContext('2d');
  const level = getLevel(state.score);
  const total = state.order.length;
  const correct = state.answers.filter(answer=>answer.isCorrect).length;
  const w = canvas.width;
  const h = canvas.height;

  const bg = ctx.createLinearGradient(0,0,w,h);
  bg.addColorStop(0,'#0C2538');
  bg.addColorStop(1,'#06111C');
  ctx.fillStyle = bg;
  ctx.fillRect(0,0,w,h);

  ctx.globalAlpha = .16;
  ctx.fillStyle = '#FF8B45';
  ctx.beginPath();ctx.arc(920,120,240,0,Math.PI*2);ctx.fill();
  ctx.fillStyle = '#43E3B2';
  ctx.beginPath();ctx.arc(100,1260,280,0,Math.PI*2);ctx.fill();
  ctx.globalAlpha = 1;

  ctx.strokeStyle = 'rgba(255,255,255,.12)';
  ctx.lineWidth = 2;
  roundRect(ctx,54,54,w-108,h-108,42);ctx.stroke();

  ctx.fillStyle = '#FFB15C';
  ctx.font = '700 28px Microsoft YaHei, PingFang SC, sans-serif';
  ctx.fillText('CAMPUS ANTI-FRAUD CHALLENGE',72,125);

  ctx.fillStyle = '#F3F8FC';
  ctx.font = '900 74px Microsoft YaHei, PingFang SC, sans-serif';
  ctx.fillText('校园反诈闯关',72,220);

  ctx.fillStyle = '#91A9BB';
  ctx.font = '400 28px Microsoft YaHei, PingFang SC, sans-serif';
  ctx.fillText('新生安全第一课 · 个人战绩卡',72,270);

  ctx.strokeStyle = 'rgba(255,255,255,.08)';
  ctx.lineWidth = 18;
  ctx.beginPath();
  ctx.arc(w/2,540,165,0,Math.PI*2);
  ctx.stroke();

  ctx.strokeStyle = level.color;
  ctx.beginPath();
  ctx.arc(w/2,540,165,-Math.PI/2,-Math.PI/2+(Math.PI*2*state.score/700));
  ctx.stroke();

  ctx.fillStyle = '#F3F8FC';
  ctx.textAlign = 'center';
  ctx.font = '900 116px Microsoft YaHei, PingFang SC, sans-serif';
  ctx.fillText(String(state.score),w/2,570);
  ctx.fillStyle = '#91A9BB';
  ctx.font = '700 24px Microsoft YaHei, PingFang SC, sans-serif';
  ctx.fillText('ANTI-FRAUD POWER / 700',w/2,620);

  ctx.fillStyle = level.color;
  roundRect(ctx,w/2-180,700,360,72,24);ctx.fill();
  ctx.fillStyle = '#071522';
  ctx.font = '900 34px Microsoft YaHei, PingFang SC, sans-serif';
  ctx.fillText(`${level.grade} · ${level.name}`,w/2,747);

  ctx.fillStyle = '#F3F8FC';
  ctx.font = '800 38px Microsoft YaHei, PingFang SC, sans-serif';
  ctx.fillText(`正确识破 ${correct} / ${total} 个骗局`,w/2,865);

  const startX = 92;
  const gap = 30;
  const chipWidth = (w - startX*2 - gap*(total-1))/total;
  state.answers.forEach((answer,index)=>{
    const x = startX + index*(chipWidth+gap);
    ctx.fillStyle = answer.isCorrect ? 'rgba(67,227,178,.16)' : 'rgba(255,99,114,.16)';
    roundRect(ctx,x,920,chipWidth,80,18);ctx.fill();
    ctx.fillStyle = answer.isCorrect ? '#43E3B2' : '#FF6372';
    ctx.font = '900 30px Microsoft YaHei, PingFang SC, sans-serif';
    ctx.fillText(answer.isCorrect ? '✓' : '×',x+chipWidth/2,972);
  });

  ctx.fillStyle = '#91A9BB';
  ctx.font = '500 26px Microsoft YaHei, PingFang SC, sans-serif';
  ctx.fillText('不轻信 · 不转账 · 不扫码 · 多核实',w/2,1072);

  const wrong = state.answers.filter(answer=>!answer.isCorrect);
  ctx.fillStyle = '#F3F8FC';
  ctx.font = '800 30px Microsoft YaHei, PingFang SC, sans-serif';
  ctx.fillText(wrong.length ? '最需要复习' : '全部套路均已识破',w/2,1150);
  ctx.fillStyle = wrong.length ? '#FFB15C' : '#43E3B2';
  ctx.font = '800 26px Microsoft YaHei, PingFang SC, sans-serif';
  ctx.fillText(wrong.length ? wrong.slice(0,2).map(answer=>answer.scenario.category).join(' / ') : '警惕心，就是最好的防火墙',w/2,1192);

  ctx.fillStyle = 'rgba(255,255,255,.08)';
  roundRect(ctx,92,1260,w-184,80,24);ctx.fill();
  ctx.fillStyle = '#91A9BB';
  ctx.font = '500 24px Microsoft YaHei, PingFang SC, sans-serif';
  ctx.fillText('案例仅用于安全教育 · 如遇诈骗请拨打 110',w/2,1309);

  ctx.fillStyle = '#F3F8FC';
  ctx.font = '800 28px Microsoft YaHei, PingFang SC, sans-serif';
  ctx.fillText('打开链接，挑战你的反诈战力',w/2,1370);
  ctx.textAlign = 'left';
}

function openPoster(){
  drawPoster();
  $('#posterModal').classList.remove('hidden');
  const canvas = $('#posterCanvas');
  try{
    $('#posterDownload').href = canvas.toDataURL('image/png');
  }catch(error){}
}

function closePoster(){
  $('#posterModal').classList.add('hidden');
}

async function sharePoster(){
  const canvas = $('#posterCanvas');
  try{
    const blob = await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
    if(!blob) throw new Error('无法生成图片');
    const file = new File([blob],'校园反诈闯关-战绩卡.png',{type:'image/png'});
    if(navigator.canShare && navigator.canShare({files:[file]})){
      await navigator.share({title:'校园反诈闯关',text:'我的校园反诈战绩卡',files:[file]});
    }else{
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = '校园反诈闯关-战绩卡.png';
      link.click();
      setTimeout(()=>URL.revokeObjectURL(url),2000);
      toast('图片已保存，可发给同学');
    }
  }catch(error){
    if(error && error.name === 'AbortError') return;
    toast('分享图片失败，请使用保存图片');
  }
}

function openAbout(){ $('#aboutModal').classList.remove('hidden'); }
function closeAbout(){ $('#aboutModal').classList.add('hidden'); }

$('#startBtn').addEventListener('click',startGame);
$('#nextBtn').addEventListener('click',nextQuestion);
$('#quitBtn').addEventListener('click',quitGame);
$('#homeBtn').addEventListener('click',()=>{showScreen('start');updatePersonalBest();});
$('#shareBtn').addEventListener('click',shareResult);
$('#posterBtn').addEventListener('click',openPoster);
$('#posterClose').addEventListener('click',closePoster);
$('#posterShare').addEventListener('click',sharePoster);
$('#aboutBtn').addEventListener('click',openAbout);
$('#aboutClose').addEventListener('click',closeAbout);
$('#aboutOk').addEventListener('click',closeAbout);
$('#posterModal').addEventListener('click',(event)=>{if(event.target.id==='posterModal') closePoster();});
$('#aboutModal').addEventListener('click',(event)=>{if(event.target.id==='aboutModal') closeAbout();});
document.addEventListener('keydown',(event)=>{
  if(event.key==='Escape'){closeAbout();closePoster();}
  if(!screens.quiz.classList.contains('hidden') && !state.locked && ['1','2','3','a','b','c','A','B','C'].includes(event.key)){
    const map = {'1':0,'2':1,'3':2,'a':0,'b':1,'c':2,'A':0,'B':1,'C':2};
    const button = document.querySelectorAll('.choice')[map[event.key]];
    if(button) button.click();
  }
});
updatePersonalBest();
