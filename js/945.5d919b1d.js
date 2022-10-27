"use strict";(self["webpackChunkgame_app"]=self["webpackChunkgame_app"]||[]).push([[945],{4945:function(e,t,c){c.r(t),c.d(t,{default:function(){return Wt}});var n=c(3396),a=c(9242);const l={class:"app"};function s(e,t,c,s,d,r){return(0,n.wg)(),(0,n.iD)("section",l,[(0,n.Wm)(a.uT,{name:"fade",mode:"out-in"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.j4)((0,n.LL)(s.activeStep),{key:s.activeStep}))])),_:1})])}var d=c(65);const r=e=>((0,n.dD)("data-v-853f577a"),e=e(),(0,n.Cn)(),e),o={class:"intro"},u={class:"intro__container container"},i={class:"intro__card"},v=["innerHTML"],p={class:"intro__card-body"},_=["innerHTML"],h={class:"intro__card-icon",viewBox:"0 0 46 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f=r((()=>(0,n._)("path",{d:"M27.0904 31.8378L38.5272 18.0739M38.5272 18.0739L6.19401 17.8175M38.5272 18.0739L27.0904 4.8766",stroke:"#771746","stroke-width":"6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1))),C=[f],g=r((()=>(0,n._)("div",{class:"intro__image"},null,-1)));function y(e,t,c,l,s,d){const r=(0,n.up)("VButton");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",u,[(0,n._)("div",i,[(0,n._)("h1",{class:"intro__card-title",innerHTML:l.title},null,8,v),(0,n._)("div",p,[(0,n._)("p",{class:"intro__card-text",innerHTML:l.text},null,8,_),(0,n.Wm)(r,{color:"pink",class:"intro__card-btn",onClick:l.changeStep},{default:(0,n.w5)((()=>[(0,n.wy)(((0,n.wg)(),(0,n.iD)("svg",h,C,512)),[[a.F8,"xs"!==d.mq.current]]),(0,n.wy)((0,n._)("span",null,"Начать",512),[[a.F8,"xs"===d.mq.current]])])),_:1},8,["onClick"])])])]),g])}function m(e,t,c,a,l,s){return(0,n.wg)(),(0,n.j4)((0,n.LL)(a.component),(0,n.dG)(a.linkProperties,{class:[a.classes,"v-button"]}),{default:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"default",{},void 0,!0)])),_:3},16,["class"])}var k={name:"VButton",props:{link:{type:String,default:""},blank:{type:Boolean,default:!1},color:{type:String,default:"light",validator(e){return["light","pink","blue"].includes(e)}}},setup(e){const t=(0,n.Fl)((()=>[`v-button--${e.color}`])),c=(0,n.Fl)((()=>e.link?"a":"button")),a=(0,n.Fl)((()=>{const t={};return e.link&&(t.href=e.link),e.blank&&(t.target="_blank"),t}));return{classes:t,component:c,linkProperties:a}}},w=c(89);const M=(0,w.Z)(k,[["render",m],["__scopeId","data-v-c645db44"]]);var S=M,b={name:"Intro",components:{VButton:S},inject:["mq"],setup(){const e=(0,d.oR)(),t="Экономить<br />или тратить?",c="Пройдите тест-игру и проверьте, какую сумму вы&nbsp;могли&nbsp;бы сэкономить за этот год";return{title:t,text:c,changeStep:()=>e.commit("changeStep","study")}}};const F=(0,w.Z)(b,[["render",y],["__scopeId","data-v-853f577a"]]);var T=F;const x=e=>((0,n.dD)("data-v-176f5f28"),e=e(),(0,n.Cn)(),e),L={class:"result"},D={key:0,class:"result__container container"},I={class:"result__body"},H=["innerHTML"],V=x((()=>(0,n._)("div",{class:"result__image"},null,-1)));function z(e,t,c,a,l,s){const d=(0,n.up)("ResultInfo");return(0,n.wg)(),(0,n.iD)("div",L,[a.activeResult&&a.activeResult.id?((0,n.wg)(),(0,n.iD)("div",D,[(0,n._)("div",I,[(0,n._)("div",{class:"result__btn",innerHTML:a.moneyCount>0?`${a.moneyCount}К`:"Сэкономить не удалось"},null,8,H),(0,n.Wm)(d,{title:a.activeResult.title,text:a.activeResult.text,"share-link":a.activeResult.share_link,"money-count":a.moneyCount,class:"result__info"},null,8,["title","text","share-link","money-count"])])])):(0,n.kq)("",!0),V])}const B=e=>((0,n.dD)("data-v-08fb4842"),e=e(),(0,n.Cn)(),e),R={class:"result-info"},G=["innerHTML"],$=["innerHTML"],j={class:"result-info__btn"},W=B((()=>(0,n._)("div",{class:"result-info__btn-icon"},[(0,n._)("svg",{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M8.62143 14.4635C11.2292 14.1714 13.3192 12.0868 13.6166 9.47899C14.007 6.06922 11.3567 3.16666 8.03454 3.12948V1.59986C8.03454 1.51489 7.92832 1.46974 7.85662 1.52285L4.70708 3.83587C4.65397 3.8757 4.65397 3.95271 4.70708 3.99255L7.85662 6.30557C7.92832 6.35868 8.03454 6.31088 8.03454 6.22855V4.70159C10.3688 4.73877 12.2383 6.72515 12.079 9.09924C11.9436 11.1414 10.2785 12.7985 8.23636 12.9286C6.07206 13.0667 4.23173 11.5211 3.90244 9.47634C3.84136 9.09659 3.50941 8.82041 3.12701 8.82041C2.65166 8.82041 2.27987 9.24265 2.35423 9.71268C2.8163 12.6259 5.50642 14.8114 8.62143 14.4635Z",stroke:"none"})])],-1))),Z=B((()=>(0,n._)("span",{class:"result-info__btn-title"}," Пройти заново ",-1)));function P(e,t,c,a,l,s){const d=(0,n.up)("VCircleButton");return(0,n.wg)(),(0,n.iD)("div",R,[(0,n._)("h2",{class:"result-info__title",innerHTML:c.title},null,8,G),(0,n._)("p",{class:"result-info__text",innerHTML:c.text},null,8,$),(0,n._)("div",j,[(0,n.Wm)(d,{color:"light",size:"xs"!==s.mq.current?"small":"medium",class:"result-info__btn-round",onClick:a.onBtnClick},{default:(0,n.w5)((()=>[W])),_:1},8,["size","onClick"]),Z])])}function q(e,t,c,a,l,s){return(0,n.wg)(),(0,n.j4)((0,n.LL)(a.component),(0,n.dG)(a.linkProperties,{class:[a.classes,"v-circle-button"]}),{default:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"default",{},void 0,!0)])),_:3},16,["class"])}var E={name:"VCircleButton",props:{link:{type:String,default:""},blank:{type:Boolean,default:!1},color:{type:String,default:"vinous",validator(e){return["vinous","light","green","red"].includes(e)}},size:{type:String,default:"medium",validator(e){return["small","medium","large"].includes(e)}}},setup(e,{emit:t}){const c=(0,n.Fl)((()=>e.link?"a":"button")),a=(0,n.Fl)((()=>{const t={};return e.link&&(t.href=e.link),e.blank&&(t.target="_blank"),t})),l=(0,n.Fl)((()=>[`v-circle-button--${e.color}`,`v-circle-button--${e.size}`]));return{component:c,linkProperties:a,classes:l}}};const N=(0,w.Z)(E,[["render",q],["__scopeId","data-v-76481d3c"]]);var O=N,X={name:"ResultInfo",components:{VCircleButton:O},props:{title:{type:String,default:""},text:{type:String,default:""},shareLink:{type:String,default:""},moneyCount:{type:Number,default:0}},inject:["mq"],setup(){const e=(0,d.oR)(),t=()=>{e.commit("changeStep","intro"),e.commit("study/setStudyStep",1),e.commit("money/resetMoney"),e.commit("cards/setActiveCard",1)};return{onBtnClick:t}}};const A=(0,w.Z)(X,[["render",P],["__scopeId","data-v-08fb4842"]]);var U=A,Y={name:"Result",components:{ResultInfo:U},setup(){const e=(0,d.oR)();return{moneyCount:(0,n.Fl)((()=>e.getters["money/getMoneyCount"])),activeResult:e.getters["results/getResult"]}}};const K=(0,w.Z)(Y,[["render",z],["__scopeId","data-v-176f5f28"]]);var Q=K,J=c(7139);const ee=e=>((0,n.dD)("data-v-be56b612"),e=e(),(0,n.Cn)(),e),te={class:"steps"},ce={class:"steps__container container"},ne={class:"steps__body"},ae={class:"steps__cards"},le=["src"],se=["src"],de=ee((()=>(0,n._)("div",{class:"steps__image"},null,-1)));function re(e,t,c,a,l,s){const d=(0,n.up)("VCount"),r=(0,n.up)("VControls");return(0,n.wg)(),(0,n.iD)("div",te,[(0,n._)("div",ce,[(0,n._)("div",ne,[(0,n.Wm)(d,{"money-count":a.moneyCount},null,8,["money-count"]),(0,n._)("div",ae,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.cards,(e=>((0,n.wg)(),(0,n.j4)((0,n.LL)(e.isQuestion?"StepCard":"StepResultCard"),{key:e.id,card:e,"saved-money":a.savedMoney[e.type],class:(0,J.C_)([{_active:e.id===a.activeCardId},{_disabled:e.id<a.activeCardId}]),onNextCard:a.handleNextCard,onCardChange:a.handleCardChange},null,40,["card","saved-money","class","onNextCard","onCardChange"])))),128))]),(0,n.Wm)(r,{disabled:!(a.activeCardId%2),class:"steps__controls",onCardChange:a.handleCardChange},null,8,["disabled","onCardChange"])]),(0,n._)("audio",{ref:"save",src:a.sounds.save,type:"audio/mpeg"},null,8,le),(0,n._)("audio",{ref:"spend",src:a.sounds.spend,type:"audio/mpeg"},null,8,se)]),de])}const oe=e=>((0,n.dD)("data-v-94eee688"),e=e(),(0,n.Cn)(),e),ue={class:"v-count__body"},ie={class:"v-count__progress"},ve={key:0,class:"v-count__sound-icn",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},pe=oe((()=>(0,n._)("path",{d:"M29.3333 20L21.3333 12M29.3333 12L21.3333 20",stroke:"black","stroke-width":"2.66667","stroke-linecap":"round"},null,-1))),_e=oe((()=>(0,n._)("path",{d:"M2.66667 19.9454V12.0534C2.66667 11.2881 3.26401 10.6667 4.00001 10.6667H8.78134C8.95778 10.6661 9.13227 10.6297 9.29428 10.5599C9.4563 10.49 9.60248 10.388 9.72401 10.2601L13.724 5.74272C14.564 4.86806 16 5.48806 16 6.72406V25.2761C16 26.5214 14.5467 27.1361 13.712 26.2441L9.72534 21.7521C9.60346 21.6205 9.45581 21.5154 9.29156 21.4434C9.12732 21.3714 8.95001 21.3339 8.77067 21.3334H4.00001C3.26401 21.3334 2.66667 20.7121 2.66667 19.9454Z",stroke:"black","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},null,-1))),he=[pe,_e],fe={key:1,class:"v-count__sound-icn",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ce=oe((()=>(0,n._)("path",{d:"M21.3333 11.3334C23.1107 13.7041 23.1107 18.2961 21.3333 20.6667M25.3333 6.66672C30.6507 11.7441 30.6827 20.2894 25.3333 25.3334M2.66667 19.9454V12.0534C2.66667 11.2881 3.26401 10.6667 4.00001 10.6667H8.78134C8.95778 10.6661 9.13227 10.6297 9.29428 10.5599C9.4563 10.49 9.60248 10.388 9.72401 10.2601L13.724 5.74272C14.564 4.86806 16 5.48806 16 6.72406V25.2761C16 26.5214 14.5467 27.1361 13.712 26.2441L9.72534 21.7521C9.60346 21.6205 9.45581 21.5154 9.29156 21.4434C9.12732 21.3714 8.95001 21.3339 8.77067 21.3334H4.00001C3.26401 21.3334 2.66667 20.7121 2.66667 19.9454Z",stroke:"black","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},null,-1))),ge=[Ce];function ye(e,t,c,a,l,s){return(0,n.wg)(),(0,n.iD)("div",{class:(0,J.C_)([a.classes,"v-count"])},[(0,n._)("div",ue,[(0,n._)("div",ie,[(0,n._)("div",{style:(0,J.j5)({transform:`scaleX(${a.transform})`}),class:"v-count__progress-line"},null,4),(0,n._)("div",{class:(0,J.C_)([{_light:a.transform>.2},"v-count__progress-num"])},(0,J.zw)(c.moneyCount>0?`${c.moneyCount} К`:`${c.moneyCount} K`),3)])]),(0,n._)("div",{class:"v-count__sound",onClick:t[0]||(t[0]=(...e)=>a.toggleSound&&a.toggleSound(...e))},[a.isSoundOn?((0,n.wg)(),(0,n.iD)("svg",fe,ge)):((0,n.wg)(),(0,n.iD)("svg",ve,he))])],2)}var me={name:"VCount",props:{moneyCount:{type:Number,default:0},disabled:{type:Boolean,default:!1}},setup(e){const t=(0,d.oR)(),c=708,a=(0,n.Fl)((()=>t.getters["getActiveStep"])),l=(0,n.Fl)((()=>"study"===a.value?t.getters["study/getStudyCount"]:t.getters["money/getMoneyCount"])),s=(0,n.Fl)((()=>({_disabled:e.disabled}))),r=(0,n.Fl)((()=>l.value/c));return{maxCount:c,classes:s,transform:r,isSoundOn:(0,n.Fl)((()=>t.getters.getIsSoundOn)),toggleSound:()=>t.commit("toggleSound")}}};const ke=(0,w.Z)(me,[["render",ye],["__scopeId","data-v-94eee688"]]);var we=ke;const Me={class:"step-card__fraction"},Se=["innerHTML"],be=["innerHTML"],Fe={class:"step-card__image"},Te=["src"],xe=["innerHTML"];function Le(e,t,c,a,l,s){return(0,n.wg)(),(0,n.iD)("div",{style:(0,J.j5)(a.transformStyle),class:(0,J.C_)([[{[`_${a.direction}`]:a.direction},{_inactive:a.isInactive}],"step-card"]),onTouchstart:t[0]||(t[0]=(...e)=>a.handleTouchstart&&a.handleTouchstart(...e)),onTouchmove:t[1]||(t[1]=(...e)=>a.handleTouchmove&&a.handleTouchmove(...e)),onTouchend:t[2]||(t[2]=(...e)=>a.handleTouchend&&a.handleTouchend(...e))},[(0,n._)("div",Me,[(0,n._)("span",{innerHTML:a.cardCurrent},null,8,Se),(0,n.Uk)(" / "),(0,n._)("span",{innerHTML:a.cardTotal},null,8,be)]),(0,n._)("div",Fe,[(0,n._)("img",{src:c.card.image},null,8,Te)]),(0,n._)("div",{class:"step-card__text",innerHTML:c.card.text},null,8,xe)],38)}var De=c(4870),Ie=c(9682);function He(e){const t=(0,Ie.useMq)(),c=(0,d.oR)(),a=e,l=(0,n.Fl)((()=>c.getters["cards/getActiveCard"])),s=(0,De.iH)(!1),r=(0,De.iH)(!1),o=(0,De.iH)(0),u=(0,De.iH)(0),i=(0,De.iH)(0),v=(0,De.iH)(80),p=(0,De.iH)(""),_=e=>{"xs"!==t.current||s.value||(o.value=e.touches[0].pageX)},h=e=>{"xs"===t.current&&(u.value=e.touches[0].pageX-o.value,C())},f=e=>{"xs"===t.current&&g()},C=()=>{s.value=!0,i.value=u.value/10},g=()=>{u.value>=v.value?p.value="save":u.value<=-v.value&&(p.value="spend"),Math.abs(u.value)>=v.value&&(r.value=!0),setTimeout((()=>{r.value=!1,p.value=""}),300),u.value=0,i.value=0,s.value=!1},y=(0,n.Fl)((()=>{let e=u.value?u.value+"px":l.value===a?"0":"-50%";return{transform:`translateX(${e}) rotate(${i.value}deg)`}}));return{handleTouchstart:_,handleTouchmove:h,handleTouchend:f,transformStyle:y,direction:p,isInactive:r}}var Ve={name:"StepCard",props:{card:{type:Object,default:()=>{}}},emits:["card-change"],setup(e,{emit:t}){const{handleTouchstart:c,handleTouchmove:a,handleTouchend:l,transformStyle:s,direction:r,isInactive:o}=He(e.card.id),u=(0,d.oR)(),i=(0,n.Fl)((()=>u.getters["cards/getCardsCount"])),v=(0,n.Fl)((()=>e.card.number>9?e.card.number:`0${e.card.number}`)),p=(0,n.Fl)((()=>i.value/2>9?i.value/2:"0"+i.value/2));return(0,n.YP)(r,(e=>{""!==e&&t("card-change",e)})),{cardsCount:i,cardCurrent:v,cardTotal:p,handleTouchstart:c,handleTouchmove:a,handleTouchend:l,transformStyle:s,direction:r,isInactive:o}}};const ze=(0,w.Z)(Ve,[["render",Le],["__scopeId","data-v-505edca4"]]);var Be=ze;const Re={class:"step-result-card"},Ge={key:0,class:"step-result-card__content"},$e={class:"step-result-card__fraction"},je=["innerHTML"],We=["innerHTML"],Ze={class:"step-result-card__icon"},Pe={key:0,class:"step-result-card__icon-save"},qe={key:1,class:"step-result-card__icon-spend"},Ee=["innerHTML"];function Ne(e,t,c,l,s,d){const r=(0,n.up)("FlyingMoney"),o=(0,n.up)("VButton");return(0,n.wg)(),(0,n.iD)("div",Re,[(0,n.Wm)(a.uT,{name:"fade"},{default:(0,n.w5)((()=>[l.status&&l.status.length?((0,n.wg)(),(0,n.iD)("div",Ge,[(0,n._)("div",$e,[(0,n._)("span",{innerHTML:l.cardCurrent},null,8,je),(0,n.Uk)(" / "),(0,n._)("span",{innerHTML:l.cardTotal},null,8,We)]),(0,n._)("div",Ze,["save"===l.status?((0,n.wg)(),(0,n.iD)("div",Pe," +"+(0,J.zw)(c.savedMoney)+"К ",1)):((0,n.wg)(),(0,n.iD)("div",qe,[(0,n.Wm)(r)]))]),(0,n._)("div",{class:"step-result-card__text",innerHTML:"save"===l.status?c.card.save_text:c.card.spend_text},null,8,Ee),(0,n.Wm)(o,{color:"pink",class:"step-result-card__btn",onClick:t[0]||(t[0]=t=>e.$emit("next-card"))},{default:(0,n.w5)((()=>[(0,n.Uk)(" Дальше ")])),_:1})])):(0,n.kq)("",!0)])),_:1})])}const Oe={class:"FlyingMoney",viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},Xe=(0,n.uE)('<g data-v-1fd8ee48><g class="wing-left" data-v-1fd8ee48><path d="M36.91,50.99c1.66-0.28,3.13-0.94,4.08-2.14 c1.2-1.54,0.64-3.02-0.35-4.47c-3.64-5.29-6.45-11.11-8.44-17.21c-0.95-2.93-1.9-5.73-5.05-6.91c-2.11-0.78-4.42-0.4-6.46,0.41 c-2.41,0.94-4.78,1.99-7.29,2.61c-2.52,0.63-5.18,0.79-7.77,0.98c-1.29,0.1-2.49-0.25-3.67,0.51c-1,0.64-1.37,1.7-0.93,2.81 c1.52,3.85,6.29,4.93,9.95,4.93c0.46,0,0.91,0,1.35,0.18c0.73,0.31,0.54,0.74,0.07,1.25c-0.38,0.41-0.98,0.49-1.5,0.61 c-2.52,0.54,0.61,3.03,1.52,3.41c1.94,0.82,4.11,0.98,6.19,1.02c0.32,0,0.81-0.04,1.07,0.22c0.89,0.89-1.44,1.46-1.79,1.81 c-1.07,1.08,0.22,2.12,1.15,2.66c1.89,1.08,3.88,1.12,5.98,0.93c0.67-0.06,2.4,0.11,1.67,1.13c-1.31,1.84-1.16,3.08,0.99,4.01 C29.95,50.73,33.77,51.51,36.91,50.99z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;" data-v-1fd8ee48></path><path d="M12.12,24.78c4.68-0.55,10.54-3.37,13.69-2.22 c3.15,1.15,3.37,3.94,4.8,7.1c1.43,3.15,2.94,7.31,2.94,7.31s-5.88-10.6-8.31-12.18c-2.87-1.86-8.74,0.36-13.04,0.21 C12.19,24.99,10.9,24.92,12.12,24.78z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#40C0E7;" data-v-1fd8ee48></path><defs data-v-1fd8ee48><path id="SVGID_1_" d="M36.91,50.99c1.66-0.28,3.13-0.94,4.08-2.14c1.2-1.54,0.64-3.02-0.35-4.47 c-3.64-5.29-6.45-11.11-8.44-17.21c-0.95-2.93-1.9-5.73-5.05-6.91c-2.11-0.78-4.42-0.4-6.46,0.41c-2.41,0.94-4.78,1.99-7.29,2.61 c-2.52,0.63-5.18,0.79-7.77,0.98c-1.29,0.1-2.49-0.25-3.67,0.51c-1,0.64-1.37,1.7-0.93,2.81c1.52,3.85,6.29,4.93,9.95,4.93 c0.46,0,0.91,0,1.35,0.18c0.73,0.31,0.54,0.74,0.07,1.25c-0.38,0.41-0.98,0.49-1.5,0.61c-2.52,0.54,0.61,3.03,1.52,3.41 c1.94,0.82,4.11,0.98,6.19,1.02c0.32,0,0.81-0.04,1.07,0.22c0.89,0.89-1.44,1.46-1.79,1.81c-1.07,1.08,0.22,2.12,1.15,2.66 c1.89,1.08,3.88,1.12,5.98,0.93c0.67-0.06,2.4,0.11,1.67,1.13c-1.31,1.84-1.16,3.08,0.99,4.01 C29.95,50.73,33.77,51.51,36.91,50.99z" data-v-1fd8ee48></path></defs><clipPath id="SVGID_2_" data-v-1fd8ee48><use style="overflow:visible;" xlink:href="#SVGID_1_" data-v-1fd8ee48></use></clipPath><path d="M1.29,24.92 c0,0-0.06,2.36,2.08,3.58c9.53,5.45,15.77,0.29,17.35,0.64c1.1,0.25,1.07,1,1.07,1s-5.73,2.58-10.39,2.51 c-4.66-0.07-9.32-0.07-10.25-2.51c-0.93-2.44-1.5-4.09-1.5-4.09L1.29,24.92z" style="clip-path:url(#SVGID_2_);fill-rule:evenodd;clip-rule:evenodd;fill:#40C0E7;" data-v-1fd8ee48></path><path d="M10.4,34.31 c0,0.22-0.57,0.64,0.36,1.29c0.93,0.64,2.39,1.33,3.08,1.5c2.58,0.64,5.88,0.43,7.17,0.43c1.3,0,3.23-0.86,4.23-0.14 c0.41,0.29,0.36,0.72,0.36,0.72s-2.8,1-8.67,1c-5.93,0-8.6-2.22-8.89-2.79c-0.29-0.57,1.22-2.22,1.22-2.22L10.4,34.31z" style="clip-path:url(#SVGID_2_);fill-rule:evenodd;clip-rule:evenodd;fill:#40C0E7;" data-v-1fd8ee48></path><path d="M17.42,40.55 c-0.33-0.55,0.77,1.32,1.72,1.86c2.51,1.43,3.65,1.16,5.59,1.07c1.72-0.07,3.08-0.93,4.09-0.79c0.95,0.14,1.22,0.79,1.22,0.79 s-3.01,1.36-4.37,1.15c-1.36-0.22-7.09,1-7.45,0.57c-0.36-0.43-2.44-3.01-2.44-3.01L17.42,40.55z" style="clip-path:url(#SVGID_2_);fill-rule:evenodd;clip-rule:evenodd;fill:#40C0E7;" data-v-1fd8ee48></path><path d="M25.09,47.71 c0.65,0.43,2.37,0.65,3.08,0.57c1.02-0.1,2.58-1.15,2.58-1.15l0.07,0.79l-1.65,1.72l-2.51,1.08l-2.29-1.79L25.09,47.71z" style="clip-path:url(#SVGID_2_);fill-rule:evenodd;clip-rule:evenodd;fill:#40C0E7;" data-v-1fd8ee48></path></g><path d="M71.79,57.85c-0.59,2.08-2.28,4.22-3.44,6.03c-0.9,1.4-2.12,2.42-3.1,3.73 c-0.92,1.24-2.6,2.74-2.64,4.28c-0.08,3.21,0.3,6.3,0.29,9.47c-0.01,1.14,0.14,2.3,0.28,3.45c0.11,0.97,0.65,2.06,0.62,3.1 c1.21,0.19,1.76-0.17,2.66-1c1.28-1.18,2.44-2.48,3.6-3.75c1.5-1.66,2.49-2.93,3.37-4.96c0.71-1.65,1.07-2.66,0.94-4.52 c-0.13-1.83-0.29-3.63-0.29-5.51L71.79,57.85z" style="fill:#FFFFFF;" data-v-1fd8ee48></path><polygon points="10.73,69.89 48,83.94 46.27,104.58 6.71,89.96 " style="fill:#BDCF46;" data-v-1fd8ee48></polygon><g data-v-1fd8ee48><g data-v-1fd8ee48><g data-v-1fd8ee48><defs data-v-1fd8ee48><path id="SVGID_3_" d="M50.68,27.02c0,0-12.23,24.85-37.46,40.91l34.21,13.38c0,0,19.31-12.62,31.41-46.88L50.68,27.02z" data-v-1fd8ee48></path></defs><use style="overflow:visible;fill-rule:evenodd;clip-rule:evenodd;fill:#BDCF46;" xlink:href="#SVGID_3_" data-v-1fd8ee48></use><clipPath id="SVGID_4_" data-v-1fd8ee48><use style="overflow:visible;" xlink:href="#SVGID_3_" data-v-1fd8ee48></use></clipPath></g><path d="M50.68,27.02l28.16,7.41c-12.1,34.26-31.41,46.88-31.41,46.88L13.22,67.93 C38.44,51.87,50.68,27.02,50.68,27.02 M50.68,22.43c-1.72,0-3.32,0.96-4.11,2.56l0,0c-0.12,0.24-12.04,23.94-35.81,39.07 c-1.46,0.93-2.27,2.59-2.1,4.31c0.17,1.72,1.29,3.2,2.89,3.83l34.21,13.38c0.54,0.21,1.11,0.32,1.67,0.32 c0.88,0,1.75-0.25,2.51-0.75c0.84-0.55,20.75-13.87,33.23-49.19c0.43-1.21,0.33-2.54-0.27-3.68c-0.6-1.13-1.65-1.96-2.89-2.29 l-28.15-7.41C51.46,22.48,51.06,22.43,50.68,22.43L50.68,22.43z" style="fill:#757F3F;" data-v-1fd8ee48></path></g><path d="M45.94,85.63c0.17,0.26,0.29,0.54,0.31,0.91c0.04,0.72,0.21,1.55,0,2.24 c-0.11,0.32,0.14,0.23-0.23,0.4c-0.3,0.14-0.82-0.23-1.1-0.34c-0.44-0.17-0.88-0.31-1.32-0.49c-0.82-0.34-1.65-0.67-2.47-1.01 c-3.4-1.38-6.79-2.77-10.19-4.15c-3.6-1.47-7.21-2.94-10.81-4.41c-1.7-0.69-3.39-1.45-5.12-2.07c-2.18-0.79-3.26-0.88-2.77-3.52 c0.21-1.13,0.04-2.26,0.17-3.41c0.11-1.01,0.21-1.39,1.01-2.06c1.13-0.94,2.22-1.81,1.84-3.45c-0.46-2.04-1.74-1.5-3.3-0.84 c-1.55,0.77-4.94,1.91-4.85,4.13c0.26,6.79-1.24,12.89-2.7,19.43c-0.92,4.04,2.3,5.44,5.42,7.12c6.54,3.52,13.67,6.58,20.48,9.54 c4,1.75,8.13,3.33,12.41,4.25c4.77,1.03,8.44-2.12,11.86-4.94c4.41-3.63,8.59-7.48,12.36-11.78c8.77-9.99,15.15-21.79,18.95-34.52 c0.09-0.3,0.11-0.62,0.08-0.93c-0.34-2.74-0.68-5.48-1.01-8.22c-0.4-3.27-0.81-6.54-1.21-9.81c-0.12-1-0.14-2.14-0.4-3.14 c-0.03-0.12-0.07-0.23-0.1-0.35C83,33.43,82.36,32.67,81.42,33c-1.1,0.38-0.86,2.03-1.11,2.95c-0.32,1.18-0.67,2.33-0.96,3.51 c-0.6,2.45-2.03,4.88-3.19,7.1c-0.84,1.59-1.71,3.01-2.4,4.69c-0.53,1.3-1.07,2.59-1.63,3.88c-0.26,0.6-0.82,1.24-0.95,1.88 c-0.14,0.65,0.14,1.53,0.22,2.19c0.49,3.83,1.3,7.61,1.54,11.47c0.11,1.79,0.29,3.92-0.17,5.68c-0.87,3.32-3.64,5.59-5.53,8.3 c-0.17,0.24-2.39,2.33-2.47,2.14c-0.4-0.91-0.24-1.9-0.15-2.85c0.37-4.02,0.1-8.07-0.11-12.09c-0.04-0.85-0.04-2.61-1.16-2.74 c-0.64-0.07-1.07-0.06-1.61,0.31c-1.3,0.9-2.21,2.29-3.26,3.45c-1.43,1.58-2.94,3.12-4.57,4.48c-0.84,0.7-1.65,1.42-2.44,2.17 c-1.09,0.83-2.25,1.6-3.47,2.21c-1.16,0.58-3.38,0.54-2.92,2.45C45.24,84.79,45.64,85.17,45.94,85.63z M43.57,102.12 c-0.24,0.19-0.56,0.29-0.95,0.27c-0.67-0.04-1.15-0.37-1.77-0.57c-1.92-0.63-3.81-1.37-5.69-2.12c-3.43-1.37-6.84-2.82-10.23-4.29 c-0.17-0.07-0.33-0.14-0.5-0.21c-3.04-1.31-5.95-2.67-8.91-4.16c-1.49-0.75-3.21-1.27-4.47-2.42c-0.74-0.68-0.34-2.34,0.65-2.65 c1.46-0.45,3.61,1.18,4.84,1.8c4.65,2.32,9.55,4.1,14.36,6.06c3.58,1.46,7.17,2.92,10.76,4.39c0.54,0.22,1.19,0.32,1.74,0.58 c0.66,0.32,0.66,0.75,0.76,1.42C44.28,100.94,44.09,101.71,43.57,102.12z M45.48,95.67c-0.64,0.36-1.5-0.23-2.15-0.49 c-1.37-0.56-2.75-1.12-4.12-1.68c-3.78-1.54-7.56-3.08-11.34-4.62c-3.25-1.33-6.52-2.62-9.75-4.01c-1.49-0.64-6.92-2.03-6.73-4.07 c0.06-0.7,0.2-1.91,1.2-1.44c1.22,0.57,2.46,1.07,3.71,1.58c3.37,1.38,6.76,2.76,10.13,4.13c3.74,1.52,7.47,3.05,11.21,4.57 c2.54,1.03,5.07,2.2,7.65,3.12c1.14,0.4,1.17,1.98,0.4,2.76C45.62,95.58,45.56,95.63,45.48,95.67z" style="fill:#757F3F;" data-v-1fd8ee48></path><g data-v-1fd8ee48><path d="M28.69,53.78c0.15-0.16,2.79,0.9,3.11,1.01 c1.08,0.35,2.15,0.71,3.23,1.06c2.15,0.71,4.29,1.45,6.42,2.2c4.27,1.51,8.5,3.14,12.65,4.94c2.14,0.94,4.43,1.82,6.43,3.03 c0.73,0.44,1.14,1.17,2.12,0.97c0.93-0.19,1.55-1.18,2.12-1.85c0.78-0.93,8.09-10.76,8.17-10.7c-1.92-1.44-4.04-2.77-6.17-3.83 c-1.9-0.95-3.83-1.82-5.79-2.63c-3.72-1.53-7.52-2.88-11.4-3.96c-1.38-0.39-9.24-3.16-10.38-1.9 C39.21,42.13,28.7,53.78,28.69,53.78z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;" data-v-1fd8ee48></path><path d="M62.33,69.34c-1.33,0-2.18-0.7-2.69-1.11c-0.09-0.08-0.18-0.16-0.29-0.23 c-1.47-0.88-3.19-1.61-4.84-2.33l-1.32-0.57c-3.74-1.63-7.82-3.23-12.5-4.89c-2.11-0.75-4.24-1.48-6.37-2.19l-3.22-1.06 c-0.09-0.03-0.3-0.11-0.59-0.22c-0.37-0.14-1.42-0.54-1.89-0.68c-0.52-0.02-1.03-0.22-1.46-0.6c-0.93-0.85-1-2.28-0.17-3.22 c0,0,0.01-0.01,0.01-0.01L37.5,40.59c0.98-1.09,2.45-1.09,2.92-1.09c2.16,0,5.52,0.97,8.83,2.02c0.42,0.13,0.75,0.24,0.94,0.29 c3.76,1.05,7.58,2.37,11.65,4.05c2.06,0.85,4.06,1.76,5.95,2.7c2.12,1.07,4.27,2.39,6.25,3.86c0.72,0.38,1.23,1.15,1.23,2.03 c0,0.71-0.33,1.35-0.84,1.77c-0.64,0.81-2.61,3.41-4.09,5.38c-2.13,2.83-3.46,4.59-3.83,5.03l-0.26,0.33 c-0.62,0.79-1.56,1.98-3.15,2.3C62.86,69.31,62.59,69.34,62.33,69.34z M32.77,52.7l2.99,0.98c2.16,0.72,4.32,1.46,6.47,2.22 c4.77,1.69,8.95,3.33,12.79,5l1.29,0.55c1.8,0.77,3.67,1.57,5.41,2.62c0.23,0.14,0.44,0.29,0.64,0.44 c0.1-0.13,0.22-0.29,0.32-0.41l0.34-0.43c0.31-0.37,2.11-2.75,3.69-4.85c1.27-1.69,2.22-2.94,2.95-3.88 c-1.29-0.84-2.6-1.61-3.91-2.27c-1.79-0.89-3.69-1.76-5.64-2.56c-3.9-1.61-7.54-2.87-11.14-3.87c-0.22-0.07-0.6-0.18-1.09-0.34 c-1.67-0.53-5.56-1.76-7.36-1.8C39.28,45.47,35.35,49.83,32.77,52.7z" style="fill:#757F3F;" data-v-1fd8ee48></path></g></g><path d="M60.11,77.12c-0.07,0.09-0.14,0.17-0.22,0.25 c-1.74,1.77-3.4,3.62-5.14,5.39c-0.67,0.68-1.33,1.36-2.04,2.01c-0.46,0.41-1.2,0.72-1.55,1.23c-0.26,0.38-0.18,0.9-0.22,1.34 c-0.33,3.45-0.77,6.89-1.07,10.33c-0.06,0.66,0.04,1.35-0.16,1.99c-0.19,0.59-0.4,1.37,0.43,1.05c0.95-0.36,1.68-1.17,2.39-1.87 c1.51-1.47,3.15-2.81,4.66-4.29c1-0.99,3.23-2.83,3.57-4.27c0.13-0.57,0.08-1.26,0.17-1.84c0.06-0.46,0.03-0.96,0.09-1.42 c0.13-1.1,0.15-2.2,0.15-3.31c0-1.29,0.1-2.58,0.08-3.88c0-0.56,0.02-1.1,0.03-1.65c0.01-0.65-0.26-1.29-0.26-1.95 C60.63,76.43,60.38,76.8,60.11,77.12z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#BDCF46;" data-v-1fd8ee48></path><path d="M81.84,48.46c-0.15-2.08-0.44-4.22-0.98-6.09 c-0.29-1-0.76,0.86-0.87,1.12c-0.25,0.59-0.52,1.17-0.76,1.75c-1.05,2.54-2.53,4.86-3.49,7.45c-0.3,0.8-0.87,1.57-1.08,2.39 c-0.25,0.93,0.37,1.67,0.48,2.57c0.23,1.8,0.61,3.57,0.86,5.37c0.22,1.55,0.29,3.13,0.45,4.69c0.05,0.53,0.05,1.07,0.11,1.6 c0.08,0.63,0.17,1.29,0.31,1.89c0.42,0.15,0.9-1,1.06-1.3c0.75-1.47,1.9-2.66,2.56-4.19c0.69-1.62,1.05-3.4,1.14-5.15 c0.16-2.94,0.4-5.89,0.35-8.83C81.97,50.69,81.93,49.59,81.84,48.46z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#BDCF46;" data-v-1fd8ee48></path><path d="M49.58,92.76l-0.96-2.08c1.37-0.63,2.5-1.71,3.69-2.85c0.3-0.29,0.61-0.59,0.93-0.88 c0.52-0.48,1.06-0.95,1.6-1.42c1.01-0.88,1.96-1.71,2.85-2.63c0.33-0.34,0.66-0.67,1.01-1c1.21-1.18,2.34-2.3,3.09-3.72l2.03,1.06 c-0.91,1.73-2.23,3.03-3.51,4.29c-0.33,0.32-0.65,0.64-0.97,0.97c-0.96,0.98-1.99,1.89-2.98,2.75c-0.52,0.46-1.05,0.92-1.56,1.38 c-0.3,0.27-0.6,0.56-0.9,0.84C52.61,90.71,51.3,91.97,49.58,92.76z" style="fill:#757F3F;" data-v-1fd8ee48></path><path d="M48.47,99.64l-0.62-0.39l0.52-1.11l-0.53-0.82c0.71-0.46,1.47-1.03,2.19-1.64 c0.33-0.29,0.68-0.56,1.03-0.83c0.56-0.44,1.13-0.88,1.63-1.39c0.84-0.86,1.71-1.68,2.56-2.49l1.14-1.08 c0.83-0.81,1.78-1.8,2.72-2.88l0.29-0.33c0.34-0.38,0.68-0.75,0.96-1.16c0.15-0.22,0.35-0.43,0.57-0.64 c0.11-0.11,0.27-0.27,0.31-0.34l2.1,0.92c-0.2,0.45-0.53,0.79-0.8,1.05c-0.1,0.1-0.21,0.2-0.29,0.31 c-0.34,0.49-0.73,0.93-1.14,1.39l-0.28,0.31c-0.98,1.12-1.97,2.16-2.85,3.01l-1.15,1.09c-0.84,0.8-1.69,1.6-2.51,2.44 c-0.59,0.59-1.23,1.1-1.85,1.58c-0.32,0.25-0.65,0.51-0.96,0.77c-0.79,0.68-1.63,1.31-2.43,1.82L48.47,99.64z" style="fill:#757F3F;" data-v-1fd8ee48></path><path d="M74.24,62.15l-1.5-1.74c1.15-0.98,1.94-2.33,2.77-3.75c0.21-0.37,0.43-0.74,0.65-1.1 c0.37-0.61,0.76-1.21,1.15-1.8c0.73-1.12,1.41-2.18,2.02-3.31c0.23-0.41,0.46-0.83,0.69-1.24c0.83-1.47,1.62-2.86,1.95-4.42 l2.24,0.47c-0.4,1.91-1.31,3.53-2.19,5.09c-0.23,0.4-0.45,0.79-0.67,1.19c-0.65,1.21-1.39,2.36-2.11,3.47 c-0.38,0.58-0.76,1.16-1.12,1.76c-0.22,0.35-0.43,0.7-0.63,1.06C76.59,59.34,75.67,60.91,74.24,62.15z" style="fill:#757F3F;" data-v-1fd8ee48></path><path d="M75.07,69.07l-0.7-0.21l0.19-1.21l-0.74-0.64c0.56-0.64,1.13-1.4,1.66-2.18 c0.24-0.37,0.5-0.72,0.76-1.08c0.42-0.58,0.85-1.16,1.19-1.78c0.58-1.06,1.18-2.08,1.78-3.1L80,57.5c0.58-1.01,1.22-2.22,1.83-3.51 l0.19-0.39c0.22-0.46,0.44-0.91,0.6-1.38c0.08-0.25,0.22-0.51,0.37-0.77c0.07-0.13,0.19-0.34,0.2-0.42l2.28,0.3 c-0.07,0.49-0.3,0.9-0.48,1.23c-0.07,0.13-0.15,0.26-0.19,0.38c-0.2,0.56-0.45,1.1-0.72,1.65l-0.18,0.38 c-0.64,1.35-1.3,2.62-1.92,3.68l-0.8,1.37c-0.59,1-1.18,2-1.74,3.04c-0.4,0.73-0.88,1.39-1.34,2.03c-0.25,0.33-0.49,0.66-0.71,1 c-0.57,0.87-1.22,1.7-1.84,2.42L75.07,69.07z" style="fill:#757F3F;" data-v-1fd8ee48></path><g class="wing-right" data-v-1fd8ee48><path d="M80.36,62.26c-1.51-1.04-2.66-2.36-3.04-3.97 c-0.48-2.06,0.74-3.27,2.38-4.24c6-3.56,11.43-8.01,16.17-13.12c2.28-2.45,4.49-4.78,8.13-4.5c2.44,0.19,4.53,1.62,6.18,3.35 c1.94,2.03,3.8,4.14,5.99,5.9c2.2,1.77,4.75,3.14,7.21,4.51c1.23,0.69,2.56,0.88,3.39,2.17c0.69,1.09,0.57,2.3-0.37,3.19 c-3.25,3.11-8.45,1.99-12.06,0.32c-0.45-0.21-0.9-0.42-1.41-0.43c-0.86-0.02-0.88,0.49-0.64,1.2c0.19,0.58,0.74,0.93,1.21,1.28 c2.23,1.68-1.99,2.71-3.06,2.67c-2.27-0.07-4.48-0.91-6.55-1.82c-0.33-0.14-0.78-0.41-1.16-0.27c-1.28,0.47,0.75,2.09,0.94,2.61 c0.56,1.55-1.18,1.99-2.35,2.09c-2.36,0.2-4.34-0.67-6.33-1.81c-0.63-0.36-2.41-0.98-2.16,0.35c0.45,2.41-0.26,3.57-2.8,3.5 C87.33,65.17,83.21,64.21,80.36,62.26z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;" data-v-1fd8ee48></path><g data-v-1fd8ee48><path d="M88.61,49.53c0,0,8.48-7.17,10.45-8.91 c1.97-1.73,3.36-2.32,4.75-2.2c1.38,0.12,3.51,1.48,5.98,3.49c2.48,2.02,4.51,3.93,4.51,3.93s-8.08-5.59-11.2-5.13 c-3.12,0.46-5.49,2.66-7.69,4.28C93.21,46.61,88.61,49.53,88.61,49.53z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#40C0E7;" data-v-1fd8ee48></path><g data-v-1fd8ee48><defs data-v-1fd8ee48><path id="SVGID_5_" d="M80.36,62.26c-1.51-1.04-2.66-2.36-3.04-3.97c-0.48-2.06,0.74-3.27,2.38-4.24 c6-3.56,11.43-8.01,16.17-13.12c2.28-2.45,4.49-4.78,8.13-4.5c2.44,0.19,4.53,1.62,6.18,3.35c1.94,2.03,3.8,4.14,5.99,5.9 c2.2,1.77,4.75,3.14,7.21,4.51c1.23,0.69,2.56,0.88,3.39,2.17c0.69,1.09,0.57,2.3-0.37,3.19c-3.25,3.11-8.45,1.99-12.06,0.32 c-0.45-0.21-0.9-0.42-1.41-0.43c-0.86-0.02-0.88,0.49-0.64,1.2c0.19,0.58,0.74,0.93,1.21,1.28c2.23,1.68-1.99,2.71-3.06,2.67 c-2.27-0.07-4.48-0.91-6.55-1.82c-0.33-0.14-0.78-0.41-1.16-0.27c-1.28,0.47,0.75,2.09,0.94,2.61c0.56,1.55-1.18,1.99-2.35,2.09 c-2.36,0.2-4.34-0.67-6.33-1.81c-0.63-0.36-2.41-0.98-2.16,0.35c0.45,2.41-0.26,3.57-2.8,3.5 C87.33,65.17,83.21,64.21,80.36,62.26z" data-v-1fd8ee48></path></defs><clipPath id="SVGID_6_" data-v-1fd8ee48><use style="overflow:visible;" xlink:href="#SVGID_5_" data-v-1fd8ee48></use></clipPath><path d="M104.65,46 c0,0,0.86-0.86,1.86-0.43c1,0.43,5.57,5.83,9.6,7.45c5.88,2.37,9.82,1.94,11.4-0.14c0.31-0.41-0.79,5.02-0.79,5.02l-7.74,1 l-5.45-3.23C113.54,55.67,108.52,53.31,104.65,46z" style="clip-path:url(#SVGID_6_);fill-rule:evenodd;clip-rule:evenodd;fill:#40C0E7;" data-v-1fd8ee48></path><path d="M97.12,50.58 c0,0,1.22-0.86,2.28,0.48c0.71,0.9,4.64,6.08,9.05,7.55c2.52,0.84,6.52,0.5,6.52,0.5l-2.98,2.81l-8.48-3.02 C103.5,58.9,98.27,53.95,97.12,50.58z" style="clip-path:url(#SVGID_6_);fill-rule:evenodd;clip-rule:evenodd;fill:#40C0E7;" data-v-1fd8ee48></path><path d="M88.24,55.31 c0,0,1.23-0.9,1.92-0.21c0.7,0.69,6.21,4.32,7.86,5.54c2.84,2.12,6.14,0.97,6.14,0.97s-0.01,2.27-0.47,2.38 c-0.46,0.11-7.05-0.23-7.05-0.23l-2.51-2.65C94.11,61.12,90.46,58.9,88.24,55.31z" style="clip-path:url(#SVGID_6_);fill-rule:evenodd;clip-rule:evenodd;fill:#40C0E7;" data-v-1fd8ee48></path><path d="M80.34,53.37 c0,0-1.85,1.39-1.27,3.01c0.58,1.62,4.29,4.43,7.62,6.47c3.98,2.43,6.49,0.86,6.49,0.86l-1.52,2.5l-7.85-1.04l-7.86-5.77 l0.47-4.85L80.34,53.37z" style="clip-path:url(#SVGID_6_);fill-rule:evenodd;clip-rule:evenodd;fill:#40C0E7;" data-v-1fd8ee48></path></g></g></g></g>',1),Ae=[Xe];function Ue(e,t,c,a,l,s){return(0,n.wg)(),(0,n.iD)("svg",Oe,Ae)}var Ye={name:"FlyingMoney"};const Ke=(0,w.Z)(Ye,[["render",Ue],["__scopeId","data-v-1fd8ee48"]]);var Qe=Ke,Je={name:"StepResultCard",components:{VButton:S,FlyingMoney:Qe},emits:["next-card"],props:{card:{type:Object,default:()=>{}},savedMoney:{type:[String,Number],default:""}},setup(e){const t=(0,d.oR)(),c=(0,n.Fl)((()=>t.getters["cards/getCardsCount"])),a=(0,n.Fl)((()=>t.getters["money/getSavedMoney"])),l=(0,n.Fl)((()=>""!==a.value[e.card.type]?a.value[e.card.type]>0?"save":"spend":"")),s=(0,n.Fl)((()=>e.card.number>9?e.card.number:`0${e.card.number}`)),r=(0,n.Fl)((()=>c.value/2>9?c.value/2:"0"+c.value/2));return{status:l,cardCurrent:s,cardTotal:r}}};const et=(0,w.Z)(Je,[["render",Ne],["__scopeId","data-v-50ed26da"]]);var tt=et;const ct=e=>((0,n.dD)("data-v-677cfb7b"),e=e(),(0,n.Cn)(),e),nt={class:"v-controls__body"},at=ct((()=>(0,n._)("svg",{class:"v-controls__btn-icn",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M12 29.6667L28.6667 11",stroke:"white","stroke-width":"4.12903","stroke-linecap":"round","stroke-linejoin":"round"}),(0,n._)("path",{d:"M12 11.0003L28.6667 29.667",stroke:"white","stroke-width":"4.12903","stroke-linecap":"round","stroke-linejoin":"round"})],-1))),lt=ct((()=>(0,n._)("svg",{class:"v-controls__btn-icn",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M8 21.3333L17.3333 30.6667L34 12",fill:"none",stroke:"white","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})],-1)));function st(e,t,c,l,s,d){const r=(0,n.up)("VCircleButton");return(0,n.wg)(),(0,n.iD)("div",{class:(0,J.C_)([{_disabled:c.disabled},"v-controls"])},[(0,n._)("div",nt,[(0,n.Wm)(r,{color:"red",size:"large",class:"v-controls__btn",onClick:t[0]||(t[0]=(0,a.iM)((e=>l.onBtnClick("spend")),["stop"]))},{default:(0,n.w5)((()=>[at])),_:1}),(0,n.Wm)(r,{color:"green",size:"large",class:"v-controls__btn",onClick:t[1]||(t[1]=(0,a.iM)((e=>l.onBtnClick("save")),["stop"]))},{default:(0,n.w5)((()=>[lt])),_:1})]),(0,n.WI)(e.$slots,"default",{},void 0,!0)],2)}var dt={name:"VControls",components:{VCircleButton:O},props:{disabled:{type:Boolean,default:!1}},setup(e,{emit:t}){return{onBtnClick:e=>t("card-change",e)}}};const rt=(0,w.Z)(dt,[["render",st],["__scopeId","data-v-677cfb7b"]]);var ot=rt;function ut(){let e;e=(0,d.oR)();const t=(0,n.Fl)((()=>e.getters.getSounds)),c=(0,n.Fl)((()=>e.getters.getIsSoundOn)),a=(0,De.iH)(null),l=(0,De.iH)(null),s=e=>{if(!c.value)return;let t="save"===e?a.value:l.value;t.paused||(t.currentTime=0),t.play()};return{sounds:t,save:a,spend:l,audioPlay:s}}var it={name:"Steps",components:{VCount:we,StepCard:Be,StepResultCard:tt,VControls:ot},setup(){const e=(0,d.oR)(),{sounds:t,save:c,spend:a,audioPlay:l}=ut(),s=(0,n.Fl)((()=>e.getters["cards/getCards"])),r=(0,n.Fl)((()=>e.getters["cards/getActiveCard"])),o=(0,n.Fl)((()=>s.value.find((e=>e.id===r.value)))),u=()=>{r.value===s.value.length?e.commit("changeStep","result"):e.commit("cards/setActiveCard",r.value+1)},i=t=>{e.commit("money/saveMoney",{type:o.value.type,count:"save"===t?o.value.count:0}),u(),l(t)};return{cards:s,activeCardId:r,activeCard:o,save:c,spend:a,moneyCount:(0,n.Fl)((()=>e.getters["money/getMoneyCount"])),savedMoney:(0,n.Fl)((()=>e.getters["money/getSavedMoney"])),handleNextCard:u,handleCardChange:i,sounds:t}}};const vt=(0,w.Z)(it,[["render",re],["__scopeId","data-v-be56b612"]]);var pt=vt;const _t=e=>((0,n.dD)("data-v-42725290"),e=e(),(0,n.Cn)(),e),ht={class:"study"},ft={class:"study__container container"},Ct={class:"study__body"},gt={class:"study__cards"},yt={key:0,class:"study__controls-text"},mt=_t((()=>(0,n._)("span",null,"Потратить",-1))),kt=_t((()=>(0,n._)("span",null,"Сэкономить",-1))),wt=[mt,kt],Mt=_t((()=>(0,n._)("div",{class:"study__image"},null,-1)));function St(e,t,c,a,l,s){const d=(0,n.up)("VCount"),r=(0,n.up)("StudyCard"),o=(0,n.up)("VControls");return(0,n.wg)(),(0,n.iD)("div",ht,[(0,n._)("div",ft,[(0,n._)("div",Ct,[(0,n.Wm)(d,{"money-count":a.studyCount,disabled:a.isCountDisabled},null,8,["money-count","disabled"]),(0,n._)("div",gt,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.studyCards,(e=>((0,n.wg)(),(0,n.j4)(r,{key:e.id,card:e,"cards-count":a.studyCards.length,class:(0,J.C_)([{_active:e.id===a.studyStep},{_disabled:e.id<a.studyStep}]),onNext:a.nextStudy,onCardChange:a.nextStudy},null,8,["card","cards-count","class","onNext","onCardChange"])))),128))]),(0,n.Wm)(o,{disabled:3!==a.studyStep,onCardChange:a.nextStudy},{default:(0,n.w5)((()=>[3===a.studyStep?((0,n.wg)(),(0,n.iD)("div",yt,wt)):(0,n.kq)("",!0)])),_:1},8,["disabled","onCardChange"])])]),Mt])}const bt={class:"study-card__fraction"},Ft=["innerHTML"],Tt=["innerHTML"],xt=["innerHTML"],Lt=["innerHTML"];function Dt(e,t,c,a,l,s){const d=(0,n.up)("VButton");return(0,n.wg)(),(0,n.iD)("div",{style:(0,J.j5)(a.transformStyle),class:(0,J.C_)([[a.classes,{[`_${a.direction}`]:a.direction},{_inactive:a.isInactive}],"study-card"]),onTouchstart:t[0]||(t[0]=(...e)=>a.handleTouchstart&&a.handleTouchstart(...e)),onTouchmove:t[1]||(t[1]=(...e)=>a.handleTouchmove&&a.handleTouchmove(...e)),onTouchend:t[2]||(t[2]=(...e)=>a.handleTouchend&&a.handleTouchend(...e))},[(0,n._)("div",bt,[(0,n._)("span",{innerHTML:a.cardCurrent},null,8,Ft),(0,n.Uk)(" / "),(0,n._)("span",{innerHTML:a.cardTotal},null,8,Tt)]),(0,n._)("div",{class:"study-card__icon",innerHTML:c.card.icon},null,8,xt),(0,n._)("div",{class:"study-card__text",innerHTML:c.card.text},null,8,Lt),(0,n.Wm)(d,{color:c.card.btn_color,class:"study-card__btn",onClick:a.handleClick},{default:(0,n.w5)((()=>[(0,n.Uk)((0,J.zw)(c.card.btn_text),1)])),_:1},8,["color","onClick"])],38)}function It(e){const t=(0,Ie.useMq)(),c=(0,d.oR)(),a=e,l=(0,n.Fl)((()=>c.getters["study/getStudyStep"])),s=(0,De.iH)(!1),r=(0,De.iH)(!1),o=(0,De.iH)(0),u=(0,De.iH)(0),i=(0,De.iH)(0),v=(0,De.iH)(80),p=(0,De.iH)(""),_=e=>{"xs"!==t.current||s.value||(o.value=e.touches[0].pageX)},h=e=>{"xs"===t.current&&(u.value=e.touches[0].pageX-o.value,C(),(1===a&&u.value>0||2===a&&u.value<0)&&y())},f=()=>{"xs"===t.current&&g()},C=()=>{s.value=!0,i.value=u.value/10},g=()=>{u.value>=v.value?p.value="save":u.value<=-v.value&&(p.value="spend"),Math.abs(u.value)>=v.value&&(r.value=!0),setTimeout((()=>{r.value=!1,p.value=""}),300),u.value=0,i.value=0,s.value=!1},y=()=>{u.value=0,i.value=0,s.value=!1,r.value=!1,p.value=""},m=(0,n.Fl)((()=>{let e=u.value?u.value+"px":l.value===a?"0":"-50%";return{transform:`translateX(${e}) rotate(${i.value}deg)`}}));return{handleTouchstart:_,handleTouchmove:h,handleTouchend:f,transformStyle:m,direction:p,isInactive:r}}var Ht={name:"StudyCard",components:{VButton:S},emits:["next"],props:{card:{type:Object,default:()=>{}},cardsCount:{type:Number,default:0}},setup(e,{emit:t}){const c=(0,d.oR)(),{handleTouchstart:a,handleTouchmove:l,handleTouchend:s,transformStyle:r,direction:o,isInactive:u}=It(e.card.id),i=(0,n.Fl)((()=>e.card.id>9?e.card.id:`0${e.card.id}`)),v=(0,n.Fl)((()=>e.cardsCount>9?e.cardsCount:`0${e.cardsCount}`)),p=(0,n.Fl)((()=>({"_bottom-hint":3===e.card.id,"_top-hint":4===e.card.id})));(0,n.YP)(o,(e=>{""!==e&&t("card-change",e)}));const _=()=>{4===e.card.id?c.commit("changeStep","steps"):t("next")};return{cardCurrent:i,cardTotal:v,classes:p,handleClick:_,handleTouchstart:a,handleTouchmove:l,handleTouchend:s,transformStyle:r,direction:o,isInactive:u}}};const Vt=(0,w.Z)(Ht,[["render",Dt],["__scopeId","data-v-0cb84995"]]);var zt=Vt,Bt={name:"Study",components:{VCount:we,StudyCard:zt,VControls:ot},setup(){const e=(0,Ie.useMq)(),t=(0,d.oR)(),c=(0,n.Fl)((()=>"xs"===e.current?t.getters["study/getStudyCardsMobile"]:t.getters["study/getStudyCards"])),a=(0,n.Fl)((()=>t.getters["study/getStudyStep"])),l=(0,n.Fl)((()=>t.getters["study/getStudyCount"])),s=(0,n.Fl)((()=>"xs"===e.current?4!==a.value:2!==a.value)),r=()=>{("xs"===e.current&&3===a.value||"xs"!==e.current&&1===a.value)&&t.dispatch("study/animateCount"),a.value===c.value.length?t.commit("changeStep","steps"):t.commit("study/setStudyStep",a.value+1)};return{studyCards:c,studyStep:a,studyCount:l,nextStudy:r,isCountDisabled:s}}};const Rt=(0,w.Z)(Bt,[["render",St],["__scopeId","data-v-42725290"]]);var Gt=Rt,$t={name:"Game",components:{Intro:T,Study:Gt,Steps:pt,Result:Q},setup(){const e=(0,d.oR)();return{activeStep:(0,n.Fl)((()=>e.getters.getActiveStep))}}};const jt=(0,w.Z)($t,[["render",s]]);var Wt=jt}}]);
//# sourceMappingURL=945.5d919b1d.js.map