import{_ as f,r as c,a as q,f as D,o as r,c as h,b as t,t as n,w as y,v as x,F as m,g as w,h as k,i as S,j as I,p as C,e as j}from"./index-626c3583.js";import{L as O,_ as T,a as V}from"./Group2-6480a660.js";import{a as g,c as b}from"./changeqty-c23fa2bc.js";const E={setup(){let l=c({}),a=c(),i=c(0),o=c(0),v=c(""),p=c({}),u=c(!1),e=s=>{o.value=b.addqty(s)},G=s=>{o.value=b.reduceqty(s)},B=async()=>{console.log(o.value),console.log("http://localhost:9191/"),await g.post("http://localhost:9191/api/Order/add",{user_name:localStorage.getItem("username"),product_qty:o.value,price:l.value.price,product:l.value.product,picture:l.value.picture,salepageid:l.value.salepageid,shopid:l.value.shopid,skuid:l.value.skuid}).then(s=>{console.log(s)}).catch(s=>{console.log(s)}),await g.get("http://localhost:9191/api/Order/Detail?salepageid="+localStorage.getItem("salepageid")).then(s=>{console.log(s),l.value=s.data,console.log(l.value),a.value=s.data.memberData,i.value=0,a.value.forEach(_=>{i.value=i.value+_.qty}),p.value=s.data.discountData}).catch(s=>{console.log(s)}).finally(()=>{window.scrollTo(0,document.body.scrollHeight)})};return q(()=>{u.value=!0,console.log("http://localhost:9191/"),g.get("http://localhost:9191/api/Order/Detail?salepageid="+localStorage.getItem("salepageid")).then(s=>{console.log(s),l.value=s.data,console.log(l.value),a.value=s.data.memberData,i.value=0,a.value.forEach(_=>{i.value=i.value+_.qty}),console.log(a.value),v.value="https:"+s.data.picture,p.value=s.data.discountData}).catch(s=>{console.log(s)}).finally(()=>{u.value=!1})}),{data:l,memberData:a,totalqty:i,inputqty:o,imgurl:v,discountData:p,loadingDisplay:u,addqty:e,reduceqty:G,joinGroupBuy:B}},components:{Loading:O}},d=l=>(C("data-v-4ac0d1b0"),l=l(),j(),l),L=d(()=>t("div",{class:"layout-header-fix"},[t("div",{class:"layout-header-fix-logo"},[t("img",{style:{height:"100px"},src:T,alt:""}),t("img",{class:"header-logo",src:V,alt:""})])],-1)),N={class:"hostGroupBuy-content"},F={class:"hostGroupBuy-content-content"},M={class:"hostGroupBuy-content-left"},z={class:"hostGroupBuy-content-left-img"},H={class:"hostGroupBuy-content-left-img-div"},P=["src"],U=d(()=>t("div",{class:"hostGroupBuy-content-left-img-small"},null,-1)),A={class:"hostGroupBuy-content-right"},J={class:"hostGroupBuy-content-right-title"},K={class:"hostGroupBuy-content-right-price"},Q=I('<div class="hostGroupBuy-content-right-color" data-v-4ac0d1b0><div class="hostGroupBuy-content-right-color-title" data-v-4ac0d1b0>顏色</div><div class="hostGroupBuy-content-right-color-content" data-v-4ac0d1b0></div></div><div class="hostGroupBuy-content-right-size" data-v-4ac0d1b0><div class="hostGroupBuy-content-right-color-title" data-v-4ac0d1b0>尺寸</div><div class="hostGroupBuy-content-right-color-content" data-v-4ac0d1b0></div></div>',2),R={class:"hostGroupBuy-content-right-qty"},W=d(()=>t("div",{class:"hostGroupBuy-content-right-color-title"},"數量",-1)),X={class:"hostGroupBuy-content-right-qty-content"},Y={style:{width:"10px"},"enable-background":"new 0 0 10 10",viewBox:"0 0 10 10",x:"0",y:"0",class:"shopee-svg-icon"},Z=d(()=>t("polygon",{points:"4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"},null,-1)),$=[Z],tt={style:{width:"10px"},"enable-background":"new 0 0 10 10",viewBox:"0 0 10 10",x:"0",y:"0",class:"shopee-svg-icon icon-plus-sign"},ot=d(()=>t("polygon",{points:"10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"},null,-1)),st=[ot],lt={class:"hostGroupBuy-content-right-color-content-groupbuy"},at={class:"hostGroup-list"},et={class:"hostGroup-list-table"},nt={class:"hostGroup-list-table-table"},it=d(()=>t("thead",{class:"hostGroup-list-table-table-thead"},[t("tr",null,[t("th",null,"名稱"),t("th",null,"數量"),t("th",null,"金額")])],-1)),ct={class:"hostGroup-list-table-table-tbody"},dt={class:"hostGroup-list-total"},ut={class:"hostGroup-list-total-total"},rt={class:"hostGroup-list-total-content"},ht={class:"loading"};function pt(l,a,i,o,v,p){const u=D("Loading");return r(),h(m,null,[L,t("div",N,[t("div",F,[t("div",M,[t("div",z,[t("div",H,[t("img",{class:"hostGroupBuy-content-left-img-img",src:o.imgurl,alt:""},null,8,P)]),U])]),t("div",A,[t("div",J,n(o.data.product),1),t("div",K,"$"+n(o.data.price),1),Q,t("div",R,[W,t("div",X,[t("button",{class:"hostGroupBuy-content-right-color-content-minus",onClick:a[0]||(a[0]=e=>o.reduceqty(o.inputqty))},[(r(),h("svg",Y,$))]),y(t("input",{class:"hostGroupBuy-content-right-color-content-input",type:"number","onUpdate:modelValue":a[1]||(a[1]=e=>o.inputqty=e)},null,512),[[x,o.inputqty]]),t("button",{class:"hostGroupBuy-content-right-color-content-plus",onClick:a[2]||(a[2]=e=>o.addqty(o.inputqty))},[(r(),h("svg",tt,st))])])]),t("div",lt,[t("button",{class:"hostGroupBuy-content-right-color-content-groupbuy-button",onClick:a[3]||(a[3]=(...e)=>o.joinGroupBuy&&o.joinGroupBuy(...e))}," 加入團購 ")]),t("div",null,"已選購$"+n(o.discountData.totalOriginalPrice),1),t("div",null,"目前折扣"+n(o.discountData.promotionDiscount),1),t("div",null,n(o.discountData.promotionDiscountTitle),1),t("div",null,n(o.discountData.recommendConditionTitle),1)])])]),t("div",at,[t("div",et,[t("table",nt,[it,t("tbody",ct,[(r(!0),h(m,null,w(o.memberData,e=>(r(),h("tr",null,[t("td",null,n(e.member),1),t("td",null,n(e.qty),1),t("td",null,n(e.qty*o.data.price),1)]))),256))])]),t("div",dt,[t("div",ut,[t("div",rt,"共"+n(o.totalqty)+"件，"+n(o.totalqty*o.data.price)+"元",1)])])])]),y(t("div",ht,[S(u)],512),[[k,o.loadingDisplay]])],64)}const yt=f(E,[["render",pt],["__scopeId","data-v-4ac0d1b0"]]);export{yt as default};
