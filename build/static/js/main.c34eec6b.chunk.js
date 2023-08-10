(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{191:function(e,t,a){e.exports=a(369)},197:function(e,t,a){},365:function(e,t,a){},369:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(36),o=a.n(l),c=a(146),i=a(80),s=a(81),u=a(91),d=a(89),m=a(141),p=a(93),f=a(34),h=(a(196),a(197),a(371)),y=a(76),b=a(380),E=a(378),v=a(381),g=a(382),I=(a(198),a(128)),k=a(373),C=a(375),O=a(376),S=a(42),j=a(377),T=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={form:e.props.form,record:e.props.record},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){null!==this.state.record&&this.state.form.setFieldsValue({name:this.state.record.name,sku:this.state.record.sku,upc:this.state.record.upc,properties:this.state.record.properties})}},{key:"render",value:function(){var e=this.state.form;return r.a.createElement(k.a,{form:e,labelCol:{span:4},layout:"vertical"},r.a.createElement(k.a.Item,{name:"name",label:"Name:",rules:[{required:!0,message:"This information is required."}]},r.a.createElement(C.a,null)),r.a.createElement(k.a.Item,{name:"sku",label:"SKU:",rules:[{required:!0,message:"This information is required."}]},r.a.createElement(C.a,null)),r.a.createElement(k.a.Item,{name:"upc",label:"UPC:",rules:[{required:!0,message:"This information is required."},{pattern:/^[0-9]{10,13}$/,message:"UPC must be 10, 12, or 13 numeric characters."}]},r.a.createElement(C.a,null)),r.a.createElement(k.a.List,{name:"properties"},(function(e,t){var a=t.add,n=t.remove;return r.a.createElement(r.a.Fragment,null,e.map((function(e,t){return r.a.createElement(O.b,{key:e.key,style:{display:"flex",marginBottom:8},align:"baseline"},r.a.createElement(k.a.Item,Object.assign({},e,{name:[e.name,"propertyName"],fieldKey:[e.fieldKey,"propertyName"],rules:[{required:!0,message:"Property name is required."}]}),r.a.createElement(C.a,{placeholder:"Property Name"})),r.a.createElement(k.a.Item,Object.assign({},e,{name:[e.name,"propertyValue"],fieldKey:[e.fieldKey,"propertyValue"],rules:[{required:!0,message:"Property value is required."}]}),r.a.createElement(C.a,{placeholder:"Property Value"})),r.a.createElement(j.a,{onClick:function(){return n(e.name)}}))})),r.a.createElement(k.a.Item,null,r.a.createElement(S.a,{type:"dashed",onClick:function(){return a()},block:!0,icon:r.a.createElement(E.a,null)},"Add Property")))})))}}]),a}(r.a.Component),x=a(374),R=function(e){var t=e.visible,a=e.updateRecord,n=e.onCancel,l=e.record,o=k.a.useForm(),c=Object(I.a)(o,1)[0];return r.a.createElement(x.a,{visible:t,title:l.itemName,onCancel:n,onOk:function(){c.validateFields().then((function(e){c.resetFields(),a(l.itemId,e)})).catch((function(e){console.log("Validate Failed:",e)}))}},r.a.createElement(T,{form:c,record:l,key:l.itemId}))},w=a(372),N=a(379),q=C.a.Search,F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.sortedInfo,t=[{title:"SKU",dataIndex:"sku",key:"sku",sorter:function(e,t){return e.sku.localeCompare(t.sku)},sortOrder:"sku"===(e=e||{}).columnKey&&e.order},{title:"Property",dataIndex:"property",key:"property",sorter:function(e,t){return e.property.localeCompare(t.property)},sortOrder:"property"===e.columnKey&&e.order}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{align:"right"},r.a.createElement(O.b,null,r.a.createElement(q,{style:{marginBottom:10,width:200},placeholder:"Search by...",defaultValue:this.props.searchTableValue,enterButton:!0,onSearch:this.props.search,allowClear:"true"}),r.a.createElement(S.a,{style:{marginBottom:10},onClick:this.props.clear},r.a.createElement(N.a,null),"Clear Search"))),r.a.createElement(w.a,{size:"small",dataSource:null==this.props.filterTable?this.props.inventory:this.props.filterTable,rowKey:"itemId",columns:t,loading:this.props.loading,onChange:this.props.handleTableChange,pagination:{defaultPageSize:10,showSizeChanger:!0},expandable:{expandedRowRender:function(e){return r.a.createElement("p",null,e.notes)}}}),r.a.createElement(R,{visible:this.props.visible,updateRecord:this.props.updateRecord,onCancel:this.props.onCancel,record:this.props.record}))}}]),a}(r.a.Component),V=function(e){var t=e.addRecord,a=k.a.useForm(),n=Object(I.a)(a,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{labelCol:{span:4},layout:"vertical",form:n},r.a.createElement(k.a.Item,{name:"itemName",label:"Item Name:",rules:[{required:!0,message:"This information is required."}]},r.a.createElement(C.a,null))),r.a.createElement(T,{record:"null",form:n}),r.a.createElement(S.a,{type:"primary",shape:"round",onClick:function(){n.validateFields().then((function(e){n.resetFields(),t(e)})).catch((function(e){console.log("Validate Failed:",e)}))}},"Add New Inventory"))},K=(a(365),function(){return r.a.createElement("div",{id:"notfound"},r.a.createElement("div",{class:"notfound"},r.a.createElement("div",{class:"notfound-404"},r.a.createElement("h1",null,"Oops!"),r.a.createElement("h2",null,"404 - The Page can't be found")),r.a.createElement(p.b,{to:"/"},"Go To Homepage")))}),P=h.a.Header,A=h.a.Sider,B=h.a.Content,L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).toggle=function(){e.setState({collapsed:!e.state.collapsed})},e.handleTableChange=function(t,a,n){e.setState({filteredInfo:a,sortedInfo:n})},e.search=function(t){var a=e.state.inventory.filter((function(e){return Object.keys(e).some((function(a){return String(e[a]).toLowerCase().includes(t.toLowerCase())}))}));e.setState({filterTable:a,searchTableValue:t})},e.clear=function(){e.setState({filterTable:null,searchTableValue:null})},e.deleteRecord=function(t){var a=e.state.inventory;a=Object(m.without)(a,t),e.setState({inventory:a})},e.onCancel=function(){e.setState({visible:!1})},e.editRecord=function(t){e.setState({visible:!0,record:t})},e.updateRecord=function(t,a){var n=e.state.inventory,r=Object(m.findIndex)(e.state.inventory,{itemId:t});n[r]=Object(c.a)(Object(c.a)({},n[r]),{},{location:a.location,notes:a.notes}),e.setState({inventory:n,visible:!1,filterTable:null}),e.search(e.state.searchTableValue)},e.addRecord=function(t){var a=e.state.inventory;t.itemId=e.state.lastIndex,t.addDate=new Date,a.unshift(t),e.setState({inventory:a,lastIndex:e.state.lastIndex+1}),alert("Submitted")},e.state={collapsed:!1,inventory:[],loading:!0,lastIndex:0,filteredInfo:null,sortedInfo:null,filterTable:null,searchTableValue:"",visible:!1,record:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("./data-InventoryList.json").then((function(e){return e.json()})).then((function(t){var a=t.map((function(t){return t.itemId=e.state.lastIndex,e.setState({lastIndex:e.state.lastIndex+1}),t}));e.setState({inventory:a,loading:!1})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement(A,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},r.a.createElement("div",{className:"logo"},"Inventory"),r.a.createElement(y.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},r.a.createElement(y.a.Item,{key:"inventory-list",icon:r.a.createElement(b.a,null)},r.a.createElement(p.b,{to:"/"},"Inventory List")),r.a.createElement(y.a.Item,{key:"add-new-inventory",icon:r.a.createElement(E.a,null)},r.a.createElement(p.b,{to:"/AddNewInventory"},"Add New Inventory")))),r.a.createElement(h.a,{className:"site-layout"},r.a.createElement(P,{className:"site-layout-background",style:{padding:0}},r.a.createElement(this.state.collapsed?v.a:g.a,{className:"trigger",onClick:this.toggle})),r.a.createElement(B,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280}},r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/",exact:!0,component:function(t){return r.a.createElement(F,Object.assign({},e.state,{handleTableChange:e.handleTableChange,search:e.search,clear:e.clear,deleteRecord:e.deleteRecord,editRecord:e.editRecord,updateRecord:e.updateRecord,onCancel:e.onCancel}))}}),r.a.createElement(f.a,{path:"/AddNewInventory",exact:!0,component:function(t){return r.a.createElement(V,{addRecord:e.addRecord})}}),r.a.createElement(f.a,{component:K}))))))}}]),a}(r.a.Component),D=document.getElementById("root");o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),D)}},[[191,1,2]]]);
//# sourceMappingURL=main.c34eec6b.chunk.js.map