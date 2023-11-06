"use strict";(self.webpackChunk_techbir_source=self.webpackChunk_techbir_source||[]).push([[92],{"./node_modules/.pnpm/@angular+cdk@16.2.10_@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/cdk/fesm2022/portal.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C5:()=>ComponentPortal,Pl:()=>CdkPortalOutlet,UE:()=>TemplatePortal,eL:()=>PortalModule,u0:()=>DomPortalOutlet});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.0_rxjs@7.8.1_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.0_@angular+core@16.2.0_rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs");function throwPortalAlreadyAttachedError(){throw Error("Host already has a portal attached")}class Portal{attach(host){return("undefined"==typeof ngDevMode||ngDevMode)&&(null==host&&function throwNullPortalOutletError(){throw Error("Attempting to attach a portal to a null PortalOutlet")}(),host.hasAttached()&&throwPortalAlreadyAttachedError()),this._attachedHost=host,host.attach(this)}detach(){let host=this._attachedHost;null!=host?(this._attachedHost=null,host.detach()):("undefined"==typeof ngDevMode||ngDevMode)&&function throwNoPortalAttachedError(){throw Error("Attempting to detach a portal that is not attached to a host")}()}get isAttached(){return null!=this._attachedHost}setAttachedHost(host){this._attachedHost=host}}class ComponentPortal extends Portal{constructor(component,viewContainerRef,injector,componentFactoryResolver,projectableNodes){super(),this.component=component,this.viewContainerRef=viewContainerRef,this.injector=injector,this.componentFactoryResolver=componentFactoryResolver,this.projectableNodes=projectableNodes}}class TemplatePortal extends Portal{constructor(templateRef,viewContainerRef,context,injector){super(),this.templateRef=templateRef,this.viewContainerRef=viewContainerRef,this.context=context,this.injector=injector}get origin(){return this.templateRef.elementRef}attach(host,context=this.context){return this.context=context,super.attach(host)}detach(){return this.context=void 0,super.detach()}}class DomPortal extends Portal{constructor(element){super(),this.element=element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef?element.nativeElement:element}}class BasePortalOutlet{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(portal){return("undefined"==typeof ngDevMode||ngDevMode)&&(portal||function throwNullPortalError(){throw Error("Must provide a portal to attach")}(),this.hasAttached()&&throwPortalAlreadyAttachedError(),this._isDisposed&&function throwPortalOutletAlreadyDisposedError(){throw Error("This PortalOutlet has already been disposed")}()),portal instanceof ComponentPortal?(this._attachedPortal=portal,this.attachComponentPortal(portal)):portal instanceof TemplatePortal?(this._attachedPortal=portal,this.attachTemplatePortal(portal)):this.attachDomPortal&&portal instanceof DomPortal?(this._attachedPortal=portal,this.attachDomPortal(portal)):void(("undefined"==typeof ngDevMode||ngDevMode)&&function throwUnknownPortalTypeError(){throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.")}())}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(fn){this._disposeFn=fn}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}class DomPortalOutlet extends BasePortalOutlet{constructor(outletElement,_componentFactoryResolver,_appRef,_defaultInjector,_document){super(),this.outletElement=outletElement,this._componentFactoryResolver=_componentFactoryResolver,this._appRef=_appRef,this._defaultInjector=_defaultInjector,this.attachDomPortal=portal=>{if(!this._document&&("undefined"==typeof ngDevMode||ngDevMode))throw Error("Cannot attach DOM portal without _document constructor parameter");const element=portal.element;if(!element.parentNode&&("undefined"==typeof ngDevMode||ngDevMode))throw Error("DOM portal content must be attached to a parent node.");const anchorNode=this._document.createComment("dom-portal");element.parentNode.insertBefore(anchorNode,element),this.outletElement.appendChild(element),this._attachedPortal=portal,super.setDisposeFn((()=>{anchorNode.parentNode&&anchorNode.parentNode.replaceChild(element,anchorNode)}))},this._document=_document}attachComponentPortal(portal){const resolver=portal.componentFactoryResolver||this._componentFactoryResolver;if(("undefined"==typeof ngDevMode||ngDevMode)&&!resolver)throw Error("Cannot attach component portal to outlet without a ComponentFactoryResolver.");const componentFactory=resolver.resolveComponentFactory(portal.component);let componentRef;if(portal.viewContainerRef)componentRef=portal.viewContainerRef.createComponent(componentFactory,portal.viewContainerRef.length,portal.injector||portal.viewContainerRef.injector,portal.projectableNodes||void 0),this.setDisposeFn((()=>componentRef.destroy()));else{if(("undefined"==typeof ngDevMode||ngDevMode)&&!this._appRef)throw Error("Cannot attach component portal to outlet without an ApplicationRef.");componentRef=componentFactory.create(portal.injector||this._defaultInjector||_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.NULL),this._appRef.attachView(componentRef.hostView),this.setDisposeFn((()=>{this._appRef.viewCount>0&&this._appRef.detachView(componentRef.hostView),componentRef.destroy()}))}return this.outletElement.appendChild(this._getComponentRootNode(componentRef)),this._attachedPortal=portal,componentRef}attachTemplatePortal(portal){let viewContainer=portal.viewContainerRef,viewRef=viewContainer.createEmbeddedView(portal.templateRef,portal.context,{injector:portal.injector});return viewRef.rootNodes.forEach((rootNode=>this.outletElement.appendChild(rootNode))),viewRef.detectChanges(),this.setDisposeFn((()=>{let index=viewContainer.indexOf(viewRef);-1!==index&&viewContainer.remove(index)})),this._attachedPortal=portal,viewRef}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(componentRef){return componentRef.hostView.rootNodes[0]}}class CdkPortal extends TemplatePortal{constructor(templateRef,viewContainerRef){super(templateRef,viewContainerRef)}static#_=this.ɵfac=function CdkPortal_Factory(t){return new(t||CdkPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef))};static#_2=this.ɵdir=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({type:CdkPortal,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]})}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortal,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,args:[{selector:"[cdkPortal]",exportAs:"cdkPortal"}]}],(function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef}]}),null);class TemplatePortalDirective extends CdkPortal{static#_=this.ɵfac=function(){let ɵTemplatePortalDirective_BaseFactory;return function TemplatePortalDirective_Factory(t){return(ɵTemplatePortalDirective_BaseFactory||(ɵTemplatePortalDirective_BaseFactory=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TemplatePortalDirective)))(t||TemplatePortalDirective)}}();static#_2=this.ɵdir=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({type:TemplatePortalDirective,selectors:[["","cdk-portal",""],["","portal",""]],exportAs:["cdkPortal"],features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{provide:CdkPortal,useExisting:TemplatePortalDirective}]),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]})}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplatePortalDirective,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,args:[{selector:"[cdk-portal], [portal]",exportAs:"cdkPortal",providers:[{provide:CdkPortal,useExisting:TemplatePortalDirective}]}]}],null,null);class CdkPortalOutlet extends BasePortalOutlet{constructor(_componentFactoryResolver,_viewContainerRef,_document){super(),this._componentFactoryResolver=_componentFactoryResolver,this._viewContainerRef=_viewContainerRef,this._isInitialized=!1,this.attached=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.attachDomPortal=portal=>{if(!this._document&&("undefined"==typeof ngDevMode||ngDevMode))throw Error("Cannot attach DOM portal without _document constructor parameter");const element=portal.element;if(!element.parentNode&&("undefined"==typeof ngDevMode||ngDevMode))throw Error("DOM portal content must be attached to a parent node.");const anchorNode=this._document.createComment("dom-portal");portal.setAttachedHost(this),element.parentNode.insertBefore(anchorNode,element),this._getRootNode().appendChild(element),this._attachedPortal=portal,super.setDisposeFn((()=>{anchorNode.parentNode&&anchorNode.parentNode.replaceChild(element,anchorNode)}))},this._document=_document}get portal(){return this._attachedPortal}set portal(portal){(!this.hasAttached()||portal||this._isInitialized)&&(this.hasAttached()&&super.detach(),portal&&super.attach(portal),this._attachedPortal=portal||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(portal){portal.setAttachedHost(this);const viewContainerRef=null!=portal.viewContainerRef?portal.viewContainerRef:this._viewContainerRef,componentFactory=(portal.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(portal.component),ref=viewContainerRef.createComponent(componentFactory,viewContainerRef.length,portal.injector||viewContainerRef.injector,portal.projectableNodes||void 0);return viewContainerRef!==this._viewContainerRef&&this._getRootNode().appendChild(ref.hostView.rootNodes[0]),super.setDisposeFn((()=>ref.destroy())),this._attachedPortal=portal,this._attachedRef=ref,this.attached.emit(ref),ref}attachTemplatePortal(portal){portal.setAttachedHost(this);const viewRef=this._viewContainerRef.createEmbeddedView(portal.templateRef,portal.context,{injector:portal.injector});return super.setDisposeFn((()=>this._viewContainerRef.clear())),this._attachedPortal=portal,this._attachedRef=viewRef,this.attached.emit(viewRef),viewRef}_getRootNode(){const nativeElement=this._viewContainerRef.element.nativeElement;return nativeElement.nodeType===nativeElement.ELEMENT_NODE?nativeElement:nativeElement.parentNode}static#_=this.ɵfac=function CdkPortalOutlet_Factory(t){return new(t||CdkPortalOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT))};static#_2=this.ɵdir=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({type:CdkPortalOutlet,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]})}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortalOutlet,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,args:[{selector:"[cdkPortalOutlet]",exportAs:"cdkPortalOutlet",inputs:["portal: cdkPortalOutlet"]}]}],(function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef},{type:void 0,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,args:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]}]}]}),{attached:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}]});class PortalHostDirective extends CdkPortalOutlet{static#_=this.ɵfac=function(){let ɵPortalHostDirective_BaseFactory;return function PortalHostDirective_Factory(t){return(ɵPortalHostDirective_BaseFactory||(ɵPortalHostDirective_BaseFactory=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PortalHostDirective)))(t||PortalHostDirective)}}();static#_2=this.ɵdir=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({type:PortalHostDirective,selectors:[["","cdkPortalHost",""],["","portalHost",""]],inputs:{portal:["cdkPortalHost","portal"]},exportAs:["cdkPortalHost"],features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{provide:CdkPortalOutlet,useExisting:PortalHostDirective}]),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]})}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalHostDirective,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,args:[{selector:"[cdkPortalHost], [portalHost]",exportAs:"cdkPortalHost",inputs:["portal: cdkPortalHost"],providers:[{provide:CdkPortalOutlet,useExisting:PortalHostDirective}]}]}],null,null);class PortalModule{static#_=this.ɵfac=function PortalModule_Factory(t){return new(t||PortalModule)};static#_2=this.ɵmod=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({type:PortalModule,declarations:[CdkPortal,CdkPortalOutlet,TemplatePortalDirective,PortalHostDirective],exports:[CdkPortal,CdkPortalOutlet,TemplatePortalDirective,PortalHostDirective]});static#_3=this.ɵinj=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({})}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalModule,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,args:[{exports:[CdkPortal,CdkPortalOutlet,TemplatePortalDirective,PortalHostDirective],declarations:[CdkPortal,CdkPortalOutlet,TemplatePortalDirective,PortalHostDirective]}]}],null,null)},"./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/mapTo.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>mapTo});var _map__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/map.js");function mapTo(value){return(0,_map__WEBPACK_IMPORTED_MODULE_0__.U)((function(){return value}))}},"./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/scan.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>scan});var lift=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/lift.js"),OperatorSubscriber=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function scan(accumulator,seed){return(0,lift.e)(function scanInternals(accumulator,seed,hasSeed,emitOnNext,emitBeforeComplete){return function(source,subscriber){var hasState=hasSeed,state=seed,index=0;source.subscribe((0,OperatorSubscriber.x)(subscriber,(function(value){var i=index++;state=hasState?accumulator(state,value,i):(hasState=!0,value),emitOnNext&&subscriber.next(state)}),emitBeforeComplete&&function(){hasState&&subscriber.next(state),subscriber.complete()}))}}(accumulator,seed,arguments.length>=2,!0))}}}]);