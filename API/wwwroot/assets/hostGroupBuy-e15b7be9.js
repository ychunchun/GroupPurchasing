import{_ as q,r as c,a as D,f as w,o as h,c as p,b as t,t as n,w as y,v as x,F as m,g as k,h as I,i as S,d as C,j as N,p as T,e as j}from"./index-626c3583.js";import{L as O,_ as V,a as E}from"./Group2-6480a660.js";import{a as g,c as G}from"./changeqty-c23fa2bc.js";const L={setup(){let a=c({}),l=c(),i=c(0),s=c(0),v=c(""),d=c(!1),r=c({}),e=o=>{s.value=G.addqty(o)},f=o=>{s.value=G.reduceqty(o)},B=async()=>{console.log(s.value),console.log("http://localhost:9191/"),await g.post("http://localhost:9191/api/Order/add",{user_name:localStorage.getItem("username"),product_qty:s.value,price:a.value.price,product:a.value.product,picture:a.value.picture,salepageid:a.value.salepageid,shopid:a.value.shopid,skuid:a.value.skuid}).then(o=>{console.log(o)}).catch(o=>{console.log(o)}),g.get("http://localhost:9191/api/Order/Detail?salepageid="+localStorage.getItem("salepageid")).then(o=>{console.log(o),a.value=o.data,l.value=o.data.memberData,i.value=0,l.value.forEach(_=>{i.value=i.value+_.qty}),console.log(typeof o.data.skuid),console.log(l.value),v.value="https:"+o.data.picture,r.value=o.data.discountData}).catch(o=>{console.log(o)}).finally(()=>{window.scrollTo(0,document.body.scrollHeight)})},b=()=>{window.scrollTo(0,0),d.value=!0,g.post("http://localhost:9191/Carts/Insert",{shopId:a.value.shopid,salePageId:a.value.salepageid,saleProductSKUid:a.value.skuid,qty:i.value}).then(o=>{console.log(o),localStorage.setItem("orderNumber",o.data.orderNumber)}).catch(o=>{console.log(o)}).finally(()=>{d.value=!1,C.push({path:"/result"})})};return D(()=>{d.value=!0,console.log("http://localhost:9191/"),g.get("http://localhost:9191/api/Order/Detail?salepageid="+localStorage.getItem("salepageid")).then(o=>{console.log(o),a.value=o.data,l.value=o.data.memberData,i.value=0,l.value.forEach(_=>{i.value=i.value+_.qty}),console.log(typeof o.data.skuid),console.log(l.value),v.value="https:"+o.data.picture,r.value=o.data.discountData}).catch(o=>{console.log(o)}).finally(()=>{d.value=!1})}),{data:a,memberData:l,totalqty:i,inputqty:s,imgurl:v,loadingDisplay:d,discountData:r,addqty:e,reduceqty:f,joinGroupBuy:B,insertCart:b}},components:{Loading:O}},u=a=>(T("data-v-d343f511"),a=a(),j(),a),P=u(()=>t("div",{class:"layout-header-fix"},[t("div",{class:"layout-header-fix-logo"},[t("img",{style:{height:"100px"},src:V,alt:""}),t("img",{class:"header-logo",src:E,alt:""})])],-1)),F={class:"hostGroupBuy-content"},M={class:"hostGroupBuy-content-content"},U={class:"hostGroupBuy-content-left"},z={class:"hostGroupBuy-content-left-img"},H={class:"hostGroupBuy-content-left-img-div"},K=["src"],A=u(()=>t("div",{class:"hostGroupBuy-content-left-img-small"},null,-1)),J={class:"hostGroupBuy-content-right"},Q={class:"hostGroupBuy-content-right-title"},R={class:"hostGroupBuy-content-right-price"},W=N('<div class="hostGroupBuy-content-right-color" data-v-d343f511><div class="hostGroupBuy-content-right-color-title" data-v-d343f511>顏色</div><div class="hostGroupBuy-content-right-color-content" data-v-d343f511></div></div><div class="hostGroupBuy-content-right-size" data-v-d343f511><div class="hostGroupBuy-content-right-color-title" data-v-d343f511>尺寸</div><div class="hostGroupBuy-content-right-color-content" data-v-d343f511></div></div>',2),X={class:"hostGroupBuy-content-right-qty"},Y=u(()=>t("div",{class:"hostGroupBuy-content-right-color-title"},"數量",-1)),Z={class:"hostGroupBuy-content-right-qty-content"},$={style:{width:"10px"},"enable-background":"new 0 0 10 10",viewBox:"0 0 10 10",x:"0",y:"0",class:"shopee-svg-icon"},tt=u(()=>t("polygon",{points:"4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"},null,-1)),ot=[tt],st={style:{width:"10px"},"enable-background":"new 0 0 10 10",viewBox:"0 0 10 10",x:"0",y:"0",class:"shopee-svg-icon icon-plus-sign"},lt=u(()=>t("polygon",{points:"10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"},null,-1)),at=[lt],et={class:"hostGroupBuy-content-right-color-content-groupbuy"},nt={class:"hostGroup-list"},it={class:"hostGroup-list-table"},ct={class:"hostGroup-list-table-table"},dt=u(()=>t("thead",{class:"hostGroup-list-table-table-thead"},[t("tr",null,[t("th",null,"名稱"),t("th",null,"數量"),t("th",null,"金額")])],-1)),ut={class:"hostGroup-list-table-table-tbody"},rt={class:"hostGroup-list-total"},ht={class:"hostGroup-list-total-total"},pt={class:"hostGroup-list-total-content"},vt={class:"hostGroup-list-total-button"},gt={class:"loading"};function _t(a,l,i,s,v,d){const r=w("Loading");return h(),p(m,null,[P,t("div",F,[t("div",M,[t("div",U,[t("div",z,[t("div",H,[t("img",{class:"hostGroupBuy-content-left-img-img",src:s.imgurl,alt:""},null,8,K)]),A])]),t("div",J,[t("div",Q,n(s.data.product),1),t("div",R,"$"+n(s.data.price),1),W,t("div",X,[Y,t("div",Z,[t("button",{class:"hostGroupBuy-content-right-color-content-minus",onClick:l[0]||(l[0]=e=>s.reduceqty(s.inputqty))},[(h(),p("svg",$,ot))]),y(t("input",{class:"hostGroupBuy-content-right-color-content-input",type:"number","onUpdate:modelValue":l[1]||(l[1]=e=>s.inputqty=e)},null,512),[[x,s.inputqty]]),t("button",{class:"hostGroupBuy-content-right-color-content-plus",onClick:l[2]||(l[2]=e=>s.addqty(s.inputqty))},[(h(),p("svg",st,at))])])]),t("div",et,[t("button",{class:"hostGroupBuy-content-right-color-content-groupbuy-button",onClick:l[3]||(l[3]=(...e)=>s.joinGroupBuy&&s.joinGroupBuy(...e))}," 加入團購 ")]),t("div",null,"已選購$"+n(s.discountData.totalOriginalPrice),1),t("div",null,"目前折扣"+n(s.discountData.promotionDiscount),1),t("div",null,n(s.discountData.promotionDiscountTitle),1),t("div",null,n(s.discountData.recommendConditionTitle),1)])])]),t("div",nt,[t("div",it,[t("table",ct,[dt,t("tbody",ut,[(h(!0),p(m,null,k(s.memberData,e=>(h(),p("tr",null,[t("td",null,n(e.member),1),t("td",null,n(e.qty),1),t("td",null,n(e.qty*s.data.price),1)]))),256))])]),t("div",rt,[t("div",ht,[t("div",pt,"共"+n(s.totalqty)+"件，"+n(s.totalqty*s.data.price)+"元",1),t("div",vt,[t("button",{class:"hostGroup-list-total-button-button",onClick:l[4]||(l[4]=(...e)=>s.insertCart&&s.insertCart(...e))},"提交購物車")])])])])]),y(t("div",gt,[S(r)],512),[[I,s.loadingDisplay]])],64)}const ft=q(L,[["render",_t],["__scopeId","data-v-d343f511"]]);export{ft as default};
