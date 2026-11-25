import{M as kt,j as v,G as Ve,bf as wt,H as xe,I as O,w as P,N as ie,E as c,bj as Mt,aO as M,T as C,S as Rt,u as oe,bk as Y,bl as Bt,bm as le,bd as A,R as L,bn as He,bo as Pt,aJ as $,bp as _e,bq as Le,br as We,bs as Oe,bt as $e,x as q,g as re,D as K,aN as Ne,aA as F,bu as At,bv as Gt,B as Ut,m as be,bw as ve,aM as ne,bx as It,by as N,bz as Dt,bA as Et,v as zt,l as Ft}from"./index-BZJDtJIh.js";import{c as se,R as Vt}from"./RenderTexture-Q6wfCRaR.js";import{d as Ht,a as je,G as Ye,S as Lt}from"./Shader-DaDsKZnk.js";import{F as Wt,C as ye}from"./CanvasPool-BMFgoeoM.js";class Se{constructor(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this.uint32View=null,this.float32View=null,this.uint16View=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._int32View=null,this._float64Array=null,this._bigUint64Array=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${e} isn't a valid view type`)}}}function Te(s,e,t,r){if(t??(t=0),r??(r=Math.min(s.byteLength-t,e.byteLength)),!(t&7)&&!(r&7)){const n=r/8;new Float64Array(e,0,n).set(new Float64Array(s,t,n))}else if(!(t&3)&&!(r&3)){const n=r/4;new Float32Array(e,0,n).set(new Float32Array(s,t,n))}else new Uint8Array(e).set(new Uint8Array(s,t,r))}const Ot={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var k=(s=>(s[s.DISABLED=0]="DISABLED",s[s.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",s[s.MASK_ACTIVE=2]="MASK_ACTIVE",s[s.INVERSE_MASK_ACTIVE=3]="INVERSE_MASK_ACTIVE",s[s.RENDERING_MASK_REMOVE=4]="RENDERING_MASK_REMOVE",s[s.NONE=5]="NONE",s))(k||{});function Ce(s,e){return e.alphaMode==="no-premultiply-alpha"&&Ot[s]||s}const $t=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function Nt(s){let e="";for(let t=0;t<s;++t)t>0&&(e+=`
else `),t<s-1&&(e+=`if(test == ${t}.0){}`);return e}function jt(s,e){if(s===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const t=e.createShader(e.FRAGMENT_SHADER);try{for(;;){const r=$t.replace(/%forloop%/gi,Nt(s));if(e.shaderSource(t,r),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))s=s/2|0;else break}}finally{e.deleteShader(t)}return s}let I=null;function Yt(){if(I)return I;const s=Ht();return I=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),I=jt(I,s),s.getExtension("WEBGL_lose_context")?.loseContext(),I}class qt{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let e=0;e<this.count;e++){const t=this.textures[e];this.textures[e]=null,this.ids[t.uid]=null}this.count=0}}class Kt{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new qt,this.blendMode="normal",this.topology="triangle-strip",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null,this.elements=null}}const V=[];let Q=0;Ve.register({clear:()=>{if(V.length>0)for(const s of V)s&&s.destroy();V.length=0,Q=0}});function ke(){return Q>0?V[--Q]:new Kt}function we(s){s.elements=null,V[Q++]=s}let E=0;const qe=class Ke{constructor(e){this.uid=kt("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],e={...Ke.defaultOptions,...e},e.maxTextures||(v("v8.8.0","maxTextures is a required option for Batcher now, please pass it in the options"),e.maxTextures=Yt());const{maxTextures:t,attributesInitialSize:r,indicesInitialSize:n}=e;this.attributeBuffer=new Se(r*4),this.indexBuffer=new Uint16Array(n),this.maxTextures=t}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let e=0;e<this.batchIndex;e++)we(this.batches[e]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(e){this._elements[this.elementSize++]=e,e._indexStart=this.indexSize,e._attributeStart=this.attributeSize,e._batcher=this,this.indexSize+=e.indexSize,this.attributeSize+=e.attributeSize*this.vertexSize}checkAndUpdateTexture(e,t){const r=e._batch.textures.ids[t._source.uid];return!r&&r!==0?!1:(e._textureId=r,e.texture=t,!0)}updateElement(e){this.dirty=!0;const t=this.attributeBuffer;e.packAsQuad?this.packQuadAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId):this.packAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId)}break(e){const t=this._elements;if(!t[this.elementStart])return;let r=ke(),n=r.textures;n.clear();const a=t[this.elementStart];let i=Ce(a.blendMode,a.texture._source),o=a.topology;this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const l=this.attributeBuffer.float32View,d=this.attributeBuffer.uint32View,u=this.indexBuffer;let m=this._batchIndexSize,f=this._batchIndexStart,p="startBatch",g=[];const y=this.maxTextures;for(let _=this.elementStart;_<this.elementSize;++_){const h=t[_];t[_]=null;const x=h.texture._source,b=Ce(h.blendMode,x),S=i!==b||o!==h.topology;if(x._batchTick===E&&!S){h._textureId=x._textureBindLocation,m+=h.indexSize,h.packAsQuad?(this.packQuadAttributes(h,l,d,h._attributeStart,h._textureId),this.packQuadIndex(u,h._indexStart,h._attributeStart/this.vertexSize)):(this.packAttributes(h,l,d,h._attributeStart,h._textureId),this.packIndex(h,u,h._indexStart,h._attributeStart/this.vertexSize)),h._batch=r,g.push(h);continue}(n.count>=y||S)&&(this._finishBatch(r,f,m-f,n,i,o,e,p,g),p="renderBatch",f=m,i=b,o=h.topology,r=ke(),n=r.textures,n.clear(),g=[],++E),x._batchTick=E,h._textureId=x._textureBindLocation=n.count,n.ids[x.uid]=n.count,n.textures[n.count++]=x,h._batch=r,g.push(h),m+=h.indexSize,h.packAsQuad?(this.packQuadAttributes(h,l,d,h._attributeStart,h._textureId),this.packQuadIndex(u,h._indexStart,h._attributeStart/this.vertexSize)):(this.packAttributes(h,l,d,h._attributeStart,h._textureId),this.packIndex(h,u,h._indexStart,h._attributeStart/this.vertexSize))}n.count>0&&(this._finishBatch(r,f,m-f,n,i,o,e,p,g),f=m,++E),this.elementStart=this.elementSize,this._batchIndexStart=f,this._batchIndexSize=m}_finishBatch(e,t,r,n,a,i,o,l,d){e.gpuBindGroup=null,e.bindGroup=null,e.action=l,e.batcher=this,e.textures=n,e.blendMode=a,e.topology=i,e.start=t,e.size=r,e.elements=d,++E,this.batches[this.batchIndex++]=e,o.add(e)}finish(e){this.break(e)}ensureAttributeBuffer(e){e*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(e*4)}ensureIndexBuffer(e){e<=this.indexBuffer.length||this._resizeIndexBuffer(e)}_resizeAttributeBuffer(e){const t=Math.max(e,this.attributeBuffer.size*2),r=new Se(t);Te(this.attributeBuffer.rawBinaryData,r.rawBinaryData),this.attributeBuffer=r}_resizeIndexBuffer(e){const t=this.indexBuffer;let r=Math.max(e,t.length*1.5);r+=r%2;const n=r>65535?new Uint32Array(r):new Uint16Array(r);if(n.BYTES_PER_ELEMENT!==t.BYTES_PER_ELEMENT)for(let a=0;a<t.length;a++)n[a]=t[a];else Te(t.buffer,n.buffer);this.indexBuffer=n}packQuadIndex(e,t,r){e[t]=r+0,e[t+1]=r+1,e[t+2]=r+2,e[t+3]=r+0,e[t+4]=r+2,e[t+5]=r+3}packIndex(e,t,r,n){const a=e.indices,i=e.indexSize,o=e.indexOffset,l=e.attributeOffset;for(let d=0;d<i;d++)t[r++]=n+a[d+o]-l}destroy(e={}){if(this.batches!==null){for(let t=0;t<this.batchIndex;t++)we(this.batches[t]);this.batches=null,this.geometry.destroy(!0),this.geometry=null,e.shader&&(this.shader?.destroy(),this.shader=null);for(let t=0;t<this._elements.length;t++)this._elements[t]&&(this._elements[t]._batch=null);this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}}};qe.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};let Qt=qe;const Xt=new Float32Array(1),Jt=new Uint32Array(1);class Zt extends wt{constructor(){const t=new xe({data:Xt,label:"attribute-batch-buffer",usage:O.VERTEX|O.COPY_DST,shrinkToFit:!1}),r=new xe({data:Jt,label:"index-batch-buffer",usage:O.INDEX|O.COPY_DST,shrinkToFit:!1}),n=24;super({attributes:{aPosition:{buffer:t,format:"float32x2",stride:n,offset:0},aUV:{buffer:t,format:"float32x2",stride:n,offset:8},aColor:{buffer:t,format:"unorm8x4",stride:n,offset:16},aTextureIdAndRound:{buffer:t,format:"uint16x2",stride:n,offset:20}},indexBuffer:r})}}function Me(s,e,t){if(s)for(const r in s){const n=r.toLocaleLowerCase(),a=e[n];if(a){let i=s[r];r==="header"&&(i=i.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),t&&a.push(`//----${t}----//`),a.push(i)}else P(`${r} placement hook does not exist in shader`)}}const er=/\{\{(.*?)\}\}/g;function Re(s){const e={};return(s.match(er)?.map(r=>r.replace(/[{()}]/g,""))??[]).forEach(r=>{e[r]=[]}),e}function Be(s,e){let t;const r=/@in\s+([^;]+);/g;for(;(t=r.exec(s))!==null;)e.push(t[1])}function Pe(s,e,t=!1){const r=[];Be(e,r),s.forEach(o=>{o.header&&Be(o.header,r)});const n=r;t&&n.sort();const a=n.map((o,l)=>`       @location(${l}) ${o},`).join(`
`);let i=e.replace(/@in\s+[^;]+;\s*/g,"");return i=i.replace("{{in}}",`
${a}
`),i}function Ae(s,e){let t;const r=/@out\s+([^;]+);/g;for(;(t=r.exec(s))!==null;)e.push(t[1])}function tr(s){const t=/\b(\w+)\s*:/g.exec(s);return t?t[1]:""}function rr(s){const e=/@.*?\s+/g;return s.replace(e,"")}function nr(s,e){const t=[];Ae(e,t),s.forEach(l=>{l.header&&Ae(l.header,t)});let r=0;const n=t.sort().map(l=>l.indexOf("builtin")>-1?l:`@location(${r++}) ${l}`).join(`,
`),a=t.sort().map(l=>`       var ${rr(l)};`).join(`
`),i=`return VSOutput(
            ${t.sort().map(l=>` ${tr(l)}`).join(`,
`)});`;let o=e.replace(/@out\s+[^;]+;\s*/g,"");return o=o.replace("{{struct}}",`
${n}
`),o=o.replace("{{start}}",`
${a}
`),o=o.replace("{{return}}",`
${i}
`),o}function Ge(s,e){let t=s;for(const r in e){const n=e[r];n.join(`
`).length?t=t.replace(`{{${r}}}`,`//-----${r} START-----//
${n.join(`
`)}
//----${r} FINISH----//`):t=t.replace(`{{${r}}}`,"")}return t}const w=Object.create(null),X=new Map;let sr=0;function ar({template:s,bits:e}){const t=Qe(s,e);if(w[t])return w[t];const{vertex:r,fragment:n}=or(s,e);return w[t]=Xe(r,n,e),w[t]}function ir({template:s,bits:e}){const t=Qe(s,e);return w[t]||(w[t]=Xe(s.vertex,s.fragment,e)),w[t]}function or(s,e){const t=e.map(i=>i.vertex).filter(i=>!!i),r=e.map(i=>i.fragment).filter(i=>!!i);let n=Pe(t,s.vertex,!0);n=nr(t,n);const a=Pe(r,s.fragment,!0);return{vertex:n,fragment:a}}function Qe(s,e){return e.map(t=>(X.has(t)||X.set(t,sr++),X.get(t))).sort((t,r)=>t-r).join("-")+s.vertex+s.fragment}function Xe(s,e,t){const r=Re(s),n=Re(e);return t.forEach(a=>{Me(a.vertex,r,a.name),Me(a.fragment,n,a.name)}),{vertex:Ge(s,r),fragment:Ge(e,n)}}const lr=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}

        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);

        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,ur=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;

    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {

        {{start}}

        var outColor:vec4<f32>;

        {{main}}

        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,cr=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;

        {{start}}

        vColor = vec4(1.);

        {{main}}

        vUV = uv;

        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,dr=`

    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {

        {{start}}

        vec4 outColor;

        {{main}}

        finalColor = outColor * vColor;

        {{end}}
    }
`,hr={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},fr={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function pr({bits:s,name:e}){const t=ar({template:{fragment:ur,vertex:lr},bits:[hr,...s]});return Ye.from({name:e,vertex:{source:t.vertex,entryPoint:"main"},fragment:{source:t.fragment,entryPoint:"main"}})}function mr({bits:s,name:e}){return new je({name:e,...ir({template:{vertex:cr,fragment:dr},bits:[fr,...s]})})}const gr={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},xr={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},J={};function _r(s){const e=[];if(s===1)e.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),e.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let t=0;for(let r=0;r<s;r++)e.push(`@group(1) @binding(${t++}) var textureSource${r+1}: texture_2d<f32>;`),e.push(`@group(1) @binding(${t++}) var textureSampler${r+1}: sampler;`)}return e.join(`
`)}function br(s){const e=[];if(s===1)e.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{e.push("switch vTextureId {");for(let t=0;t<s;t++)t===s-1?e.push("  default:{"):e.push(`  case ${t}:{`),e.push(`      outColor = textureSampleGrad(textureSource${t+1}, textureSampler${t+1}, vUV, uvDx, uvDy);`),e.push("      break;}");e.push("}")}return e.join(`
`)}function vr(s){return J[s]||(J[s]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${_r(s)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${br(s)}
            `}}),J[s]}const Z={};function yr(s){const e=[];for(let t=0;t<s;t++)t>0&&e.push("else"),t<s-1&&e.push(`if(vTextureId < ${t}.5)`),e.push("{"),e.push(`	outColor = texture(uTextures[${t}], vUV);`),e.push("}");return e.join(`
`)}function Sr(s){return Z[s]||(Z[s]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${s}];

            `,main:`

                ${yr(s)}
            `}}),Z[s]}const Tr={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Cr={name:"round-pixels-bit",vertex:{header:`
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Ue={};function kr(s){let e=Ue[s];if(e)return e;const t=new Int32Array(s);for(let r=0;r<s;r++)t[r]=r;return e=Ue[s]=new ie({uTextures:{value:t,type:"i32",size:s}},{isStatic:!0}),e}class Ie extends Lt{constructor(e){const t=mr({name:"batch",bits:[xr,Sr(e),Cr]}),r=pr({name:"batch",bits:[gr,vr(e),Tr]});super({glProgram:t,gpuProgram:r,resources:{batchSamplers:kr(e)}}),this.maxTextures=e}}let z=null;const Je=class Ze extends Qt{constructor(e){super(e),this.geometry=new Zt,this.name=Ze.extension.name,this.vertexSize=6,z??(z=new Ie(e.maxTextures)),this.shader=z}packAttributes(e,t,r,n,a){const i=a<<16|e.roundPixels&65535,o=e.transform,l=o.a,d=o.b,u=o.c,m=o.d,f=o.tx,p=o.ty,{positions:g,uvs:y}=e,_=e.color,h=e.attributeOffset,T=h+e.attributeSize;for(let x=h;x<T;x++){const b=x*2,S=g[b],W=g[b+1];t[n++]=l*S+u*W+f,t[n++]=m*W+d*S+p,t[n++]=y[b],t[n++]=y[b+1],r[n++]=_,r[n++]=i}}packQuadAttributes(e,t,r,n,a){const i=e.texture,o=e.transform,l=o.a,d=o.b,u=o.c,m=o.d,f=o.tx,p=o.ty,g=e.bounds,y=g.maxX,_=g.minX,h=g.maxY,T=g.minY,x=i.uvs,b=e.color,S=a<<16|e.roundPixels&65535;t[n+0]=l*_+u*T+f,t[n+1]=m*T+d*_+p,t[n+2]=x.x0,t[n+3]=x.y0,r[n+4]=b,r[n+5]=S,t[n+6]=l*y+u*T+f,t[n+7]=m*T+d*y+p,t[n+8]=x.x1,t[n+9]=x.y1,r[n+10]=b,r[n+11]=S,t[n+12]=l*y+u*h+f,t[n+13]=m*h+d*y+p,t[n+14]=x.x2,t[n+15]=x.y2,r[n+16]=b,r[n+17]=S,t[n+18]=l*_+u*h+f,t[n+19]=m*h+d*_+p,t[n+20]=x.x3,t[n+21]=x.y3,r[n+22]=b,r[n+23]=S}_updateMaxTextures(e){this.shader.maxTextures!==e&&(z=new Ie(e),this.shader=z)}destroy(){this.shader=null,super.destroy()}};Je.extension={type:[c.Batcher],name:"default"};let et=Je;var wr=`in vec2 vMaskCoord;
in vec2 vTextureCoord;

uniform sampler2D uTexture;
uniform sampler2D uMaskTexture;

uniform float uAlpha;
uniform vec4 uMaskClamp;
uniform float uInverse;
uniform float uChannel;

out vec4 finalColor;

void main(void)
{
    float clip = step(3.5,
        step(uMaskClamp.x, vMaskCoord.x) +
        step(uMaskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, uMaskClamp.z) +
        step(vMaskCoord.y, uMaskClamp.w));

    // TODO look into why this is needed
    float npmAlpha = uAlpha;
    vec4 original = texture(uTexture, vTextureCoord);
    vec4 masky = texture(uMaskTexture, vMaskCoord);

    float a;
    if (uChannel == 1.0) {
        a = masky.a * npmAlpha * clip;
    } else {
        float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);
        a = alphaMul * masky.r * npmAlpha * clip;
    }

    if (uInverse == 1.0) {
        a = 1.0 - a;
    }

    finalColor = original * a;
}
`,Mr=`in vec2 aPosition;

out vec2 vTextureCoord;
out vec2 vMaskCoord;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;
uniform mat3 uFilterMatrix;

vec4 filterVertexPosition(  vec2 aPosition )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
       
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord(  vec2 aPosition )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( vec2 aPosition )
{
    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}   

void main(void)
{
    gl_Position = filterVertexPosition(aPosition);
    vTextureCoord = filterTextureCoord(aPosition);
    vMaskCoord = getFilterCoord(aPosition);
}
`,De=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct MaskUniforms {
  uFilterMatrix:mat3x3<f32>,
  uMaskClamp:vec4<f32>,
  uAlpha:f32,
  uInverse:f32,
  uChannel:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;
@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}

@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>,
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var maskClamp = filterUniforms.uMaskClamp;
    var uAlpha = filterUniforms.uAlpha;

    var clip = step(3.5,
      step(maskClamp.x, filterUv.x) +
      step(maskClamp.y, filterUv.y) +
      step(filterUv.x, maskClamp.z) +
      step(filterUv.y, maskClamp.w));

    var mask = textureSample(uMaskTexture, uSampler, filterUv);
    var source = textureSample(uTexture, uSampler, uv);

    var a: f32;
    if (filterUniforms.uChannel == 1.0) {
        a = mask.a * uAlpha * clip;
    } else {
        var alphaMul = 1.0 - uAlpha * (1.0 - mask.a);
        a = alphaMul * mask.r * uAlpha * clip;
    }

    if (filterUniforms.uInverse == 1.0) {
        a = 1.0 - a;
    }

    return source * a;
}
`;class Rr extends Wt{constructor(e){const{sprite:t,...r}=e,n=new Mt(t.texture),a=new ie({uFilterMatrix:{value:new M,type:"mat3x3<f32>"},uMaskClamp:{value:n.uClampFrame,type:"vec4<f32>"},uAlpha:{value:1,type:"f32"},uInverse:{value:e.inverse?1:0,type:"f32"},uChannel:{value:e.channel==="alpha"?1:0,type:"f32"}}),i=Ye.from({vertex:{source:De,entryPoint:"mainVertex"},fragment:{source:De,entryPoint:"mainFragment"}}),o=je.from({vertex:Mr,fragment:wr,name:"mask-filter"});super({...r,gpuProgram:i,glProgram:o,clipToViewport:!1,resources:{filterUniforms:a,uMaskTexture:t.texture.source}}),this.sprite=t,this._textureMatrix=n}setSprite(e){this.sprite=e;const t=this._getSafeTexture();this._textureMatrix.texture=t,this.resources.uMaskTexture=t.source}set inverse(e){this.resources.filterUniforms.uniforms.uInverse=e?1:0}get inverse(){return this.resources.filterUniforms.uniforms.uInverse===1}set channel(e){this.resources.filterUniforms.uniforms.uChannel=e==="alpha"?1:0}get channel(){return this.resources.filterUniforms.uniforms.uChannel===1?"alpha":"red"}apply(e,t,r,n){const a=this._getSafeTexture();this._textureMatrix.texture=a,e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix,this.sprite).prepend(this._textureMatrix.mapCoord),this.resources.uMaskTexture=a.source,e.applyFilter(this,t,r,n)}_getSafeTexture(){const e=this.sprite.texture;return e.destroyed||!e.source||e.source.destroyed?(P("[MaskFilter] The mask texture was destroyed while the mask is still in use. Remove the mask before destroying its texture."),C.EMPTY):e}destroy(e=!1){this._textureMatrix.destroy(),super.destroy(e)}}function Br(s,e,t){const r=(s>>24&255)/255;e[t++]=(s&255)/255*r,e[t++]=(s>>8&255)/255*r,e[t++]=(s>>16&255)/255*r,e[t++]=r}class tt{constructor(){this.batcherName="default",this.topology="triangle-list",this.attributeSize=4,this.indexSize=6,this.packAsQuad=!0,this.roundPixels=0,this._attributeStart=0,this._batcher=null,this._batch=null}get blendMode(){return this.renderable.groupBlendMode}get color(){return this.renderable.groupColorAlpha}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.bounds=null}destroy(){this.reset()}}const ue=class rt{constructor(e,t){this.state=Rt.for2d(),this._batchersByInstructionSet=Object.create(null),this._activeBatches=Object.create(null),this.renderer=e,this._adaptor=t,this._adaptor.init?.(this)}static getBatcher(e,t){return new this._availableBatchers[e]({maxTextures:t})}buildStart(e){let t=this._batchersByInstructionSet[e.uid];t||(t=this._batchersByInstructionSet[e.uid]=Object.create(null),t.default||(t.default=new et({maxTextures:this.renderer.limits.maxBatchableTextures}))),this._activeBatches=t,this._activeBatch=this._activeBatches.default;for(const r in this._activeBatches)this._activeBatches[r].begin()}addToBatch(e,t){if(this._activeBatch.name!==e.batcherName){this._activeBatch.break(t);let r=this._activeBatches[e.batcherName];r||(r=this._activeBatches[e.batcherName]=rt.getBatcher(e.batcherName,this.renderer.limits.maxBatchableTextures),r.begin()),this._activeBatch=r}this._activeBatch.add(e)}break(e){this._activeBatch.break(e)}buildEnd(e){this._activeBatch.break(e);const t=this._activeBatches;for(const r in t){const n=t[r],a=n.geometry;a.indexBuffer.setDataWithSize(n.indexBuffer,n.indexSize,!0),a.buffers[0].setDataWithSize(n.attributeBuffer.float32View,n.attributeSize,!1)}}upload(e){const t=this._batchersByInstructionSet[e.uid];for(const r in t){const n=t[r],a=n.geometry;n.dirty&&(n.dirty=!1,a.buffers[0].update(n.attributeSize*4))}}execute(e){if(e.action==="startBatch"){const t=e.batcher,r=t.geometry,n=t.shader;this._adaptor.start(this,r,n)}this._adaptor.execute(this,e)}destroyInstructionSet(e){const t=this._batchersByInstructionSet[e.uid];if(t){for(const r in t)t[r].destroy();delete this._batchersByInstructionSet[e.uid],this._activeBatches===t&&(this._activeBatches=Object.create(null),this._activeBatch=null)}}destroy(){this.state=null,this.renderer=null,this._adaptor=null;for(const e in this._activeBatches)this._activeBatches[e].destroy();this._activeBatches=null}};ue.extension={type:[c.WebGLPipes,c.WebGPUPipes,c.CanvasPipes],name:"batch"};ue._availableBatchers=Object.create(null);let nt=ue;oe.handleByMap(c.Batcher,nt._availableBatchers);oe.add(et);const Pr=new le;class Ar extends He{constructor(){super(),this._placeholderSprite=new Pt(C.EMPTY),this.filters=[new Rr({sprite:this._placeholderSprite,inverse:!1,resolution:"inherit",antialias:"inherit"})]}get sprite(){return this.filters[0].sprite}set sprite(e){this.filters[0].setSprite(e)}get inverse(){return this.filters[0].inverse}set inverse(e){this.filters[0].inverse=e}get channel(){return this.filters[0].channel}set channel(e){this.filters[0].channel=e}reset(){this._placeholderSprite.texture=C.EMPTY,this.sprite=this._placeholderSprite}}class st{constructor(e){this._activeMaskStage=[],this._usedEffects=[],this._renderer=e,e.runners.postrender.add(this)}push(e,t,r){const n=this._renderer;if(n.renderPipes.batch.break(r),r.add({renderPipeId:"alphaMask",action:"pushMaskBegin",mask:e,inverse:t._maskOptions.inverse,canBundle:!1,maskedContainer:t}),e.inverse=t._maskOptions.inverse,e.channel=t._maskOptions.channel??"red",e.renderMaskToTexture){const a=e.mask;a.includeInBuild=!0,a.collectRenderables(r,n,null),a.includeInBuild=!1}n.renderPipes.batch.break(r),r.add({renderPipeId:"alphaMask",action:"pushMaskEnd",mask:e,maskedContainer:t,inverse:t._maskOptions.inverse,canBundle:!1})}pop(e,t,r){this._renderer.renderPipes.batch.break(r),r.add({renderPipeId:"alphaMask",action:"popMaskEnd",mask:e,inverse:t._maskOptions.inverse,canBundle:!1})}execute(e){const t=this._renderer,r=e.mask.renderMaskToTexture;if(e.action==="pushMaskBegin"){const n=Y.get(Ar);if(n.inverse=e.inverse,n.channel=e.mask.channel,r){e.mask.mask.measurable=!0;const a=Bt(e.mask.mask,!0,Pr);e.mask.mask.measurable=!1,a.ceil();const i=t.renderTarget.renderTarget.colorTexture.source,o=A.getOptimalTexture({width:a.width,height:a.height,resolution:i._resolution,antialias:i.antialias});t.renderTarget.push({target:o,clear:!0}),t.globalUniforms.push({offset:a,worldColor:4294967295});const l=n.sprite;l.texture=o,l.worldTransform.tx=a.minX,l.worldTransform.ty=a.minY,this._activeMaskStage.push({filterEffect:n,maskedContainer:e.maskedContainer,filterTexture:o})}else n.sprite=e.mask.mask,this._activeMaskStage.push({filterEffect:n,maskedContainer:e.maskedContainer})}else if(e.action==="pushMaskEnd"){const n=this._activeMaskStage[this._activeMaskStage.length-1];r&&(t.type===L.WEBGL&&t.renderTarget.finishRenderPass(),t.renderTarget.pop(),t.globalUniforms.pop()),t.filter.push({renderPipeId:"filter",action:"pushFilter",container:n.maskedContainer,filterEffect:n.filterEffect,canBundle:!1})}else if(e.action==="popMaskEnd"){t.filter.pop();const n=this._activeMaskStage.pop();r&&A.returnTexture(n.filterTexture),this._usedEffects.push(n.filterEffect)}}postrender(){const e=this._usedEffects;for(let t=0;t<e.length;t++)Y.return(e[t]);e.length=0}destroy(){this.postrender(),this._renderer.runners.postrender.remove(this),this._renderer=null,this._activeMaskStage=null,this._usedEffects=null}}st.extension={type:[c.WebGLPipes,c.WebGPUPipes,c.CanvasPipes],name:"alphaMask"};class at{constructor(e){this._colorStack=[],this._colorStackIndex=0,this._currentColor=0,this._renderer=e}buildStart(){this._colorStack[0]=15,this._colorStackIndex=1,this._currentColor=15}push(e,t,r){this._renderer.renderPipes.batch.break(r);const a=this._colorStack;a[this._colorStackIndex]=a[this._colorStackIndex-1]&e.mask;const i=this._colorStack[this._colorStackIndex];i!==this._currentColor&&(this._currentColor=i,r.add({renderPipeId:"colorMask",colorMask:i,canBundle:!1})),this._colorStackIndex++}pop(e,t,r){this._renderer.renderPipes.batch.break(r);const a=this._colorStack;this._colorStackIndex--;const i=a[this._colorStackIndex-1];i!==this._currentColor&&(this._currentColor=i,r.add({renderPipeId:"colorMask",colorMask:i,canBundle:!1}))}execute(e){this._renderer.colorMask.setMask(e.colorMask)}destroy(){this._renderer=null,this._colorStack=null}}at.extension={type:[c.WebGLPipes,c.WebGPUPipes],name:"colorMask"};class it{constructor(e){this._maskHash=new WeakMap,this._renderer=e}push(e,t,r){const n=e,a=this._renderer;a.renderPipes.batch.break(r),a.renderPipes.blendMode.setBlendMode(n.mask,"none",r),r.add({renderPipeId:"stencilMask",action:"pushMaskBegin",mask:e,inverse:t._maskOptions.inverse,canBundle:!1});const i=n.mask;i.includeInBuild=!0,this._maskHash.has(n)||this._maskHash.set(n,{instructionsStart:0,instructionsLength:0});const o=this._maskHash.get(n);o.instructionsStart=r.instructionSize,i.collectRenderables(r,a,null),i.includeInBuild=!1,a.renderPipes.batch.break(r),r.add({renderPipeId:"stencilMask",action:"pushMaskEnd",mask:e,inverse:t._maskOptions.inverse,canBundle:!1});const l=r.instructionSize-o.instructionsStart-1;o.instructionsLength=l}pop(e,t,r){const n=e,a=this._renderer;a.renderPipes.batch.break(r),a.renderPipes.blendMode.setBlendMode(n.mask,"none",r),r.add({renderPipeId:"stencilMask",action:"popMaskBegin",inverse:t._maskOptions.inverse,canBundle:!1});const i=this._maskHash.get(e);for(let o=0;o<i.instructionsLength;o++)r.instructions[r.instructionSize++]=r.instructions[i.instructionsStart++];r.add({renderPipeId:"stencilMask",action:"popMaskEnd",canBundle:!1})}execute(e){const r=this._renderer,n=r.renderTarget.getGpuRenderTarget(r.renderTarget.renderTarget);let a=n.maskStackIndex;e.action==="pushMaskBegin"?(r.renderTarget.ensureDepthStencil(),r.stencil.setStencilMode(k.RENDERING_MASK_ADD,a),a++,r.colorMask.setMask(0)):e.action==="pushMaskEnd"?(e.inverse?r.stencil.setStencilMode(k.INVERSE_MASK_ACTIVE,a):r.stencil.setStencilMode(k.MASK_ACTIVE,a),r.colorMask.setMask(15)):e.action==="popMaskBegin"?(r.colorMask.setMask(0),a!==0?r.stencil.setStencilMode(k.RENDERING_MASK_REMOVE,a):(r.renderTarget.clear(null,$.STENCIL),r.stencil.setStencilMode(k.DISABLED,a)),a--):e.action==="popMaskEnd"&&(e.inverse?r.stencil.setStencilMode(k.INVERSE_MASK_ACTIVE,a):r.stencil.setStencilMode(k.MASK_ACTIVE,a),r.colorMask.setMask(15)),n.maskStackIndex=a}destroy(){this._renderer=null,this._maskHash=null}}it.extension={type:[c.WebGLPipes,c.WebGPUPipes],name:"stencilMask"};class ot{constructor(e){this._renderer=e}updateRenderable(){}destroyRenderable(){}validateRenderable(){return!1}addRenderable(e,t){this._renderer.renderPipes.batch.break(t),t.add(e)}execute(e){e.isRenderable&&e.render(this._renderer)}destroy(){this._renderer=null}}ot.extension={type:[c.WebGLPipes,c.WebGPUPipes,c.CanvasPipes],name:"customRender"};function ae(s,e){const t=s.instructionSet,r=t.instructions;for(let n=0;n<t.instructionSize;n++){const a=r[n];e[a.renderPipeId].execute(a)}}class lt{constructor(e){this._renderer=e}addRenderGroup(e,t){e.isCachedAsTexture?this._addRenderableCacheAsTexture(e,t):this._addRenderableDirect(e,t)}execute(e){e.isRenderable&&(e.isCachedAsTexture?this._executeCacheAsTexture(e):this._executeDirect(e))}destroy(){this._renderer=null}_addRenderableDirect(e,t){this._renderer.renderPipes.batch.break(t),e._batchableRenderGroup&&(Y.return(e._batchableRenderGroup),e._batchableRenderGroup=null),t.add(e)}_addRenderableCacheAsTexture(e,t){const r=e._batchableRenderGroup??(e._batchableRenderGroup=Y.get(tt));r.renderable=e.root,r.transform=e.root.relativeGroupTransform,r.texture=e.texture,r.bounds=e._textureBounds,t.add(e),this._renderer.renderPipes.blendMode.pushBlendMode(e,e.root.groupBlendMode,t),this._renderer.renderPipes.batch.addToBatch(r,t),this._renderer.renderPipes.blendMode.popBlendMode(t)}_executeCacheAsTexture(e){if(e.textureNeedsUpdate){e.textureNeedsUpdate=!1;const n=new M().translate(-e._textureBounds.x,-e._textureBounds.y);this._renderer.renderTarget.push({target:e.texture,clear:!0,frame:e.texture.frame}),this._renderer.globalUniforms.push({worldTransformMatrix:n,worldColor:4294967295,offset:{x:0,y:0}}),ae(e,this._renderer.renderPipes),this._renderer.renderTarget.finishRenderPass(),this._renderer.renderTarget.pop(),this._renderer.globalUniforms.pop()}const t=e._batchableRenderGroup,r=t._batcher;r.updateElement(t),r.geometry.buffers[0].update(t.attributeSize*r.vertexSize*4,t._attributeStart*4)}_executeDirect(e){this._renderer.globalUniforms.push({worldTransformMatrix:e.inverseParentTextureTransform,worldColor:e.worldColorAlpha}),ae(e,this._renderer.renderPipes),this._renderer.globalUniforms.pop()}}lt.extension={type:[c.WebGLPipes,c.WebGPUPipes,c.CanvasPipes],name:"renderGroup"};class ut{constructor(e){this._renderer=e}addRenderable(e,t){const r=this._getGpuSprite(e);e.didViewUpdate&&this._updateBatchableSprite(e,r),this._renderer.renderPipes.batch.addToBatch(r,t)}updateRenderable(e){const t=this._getGpuSprite(e);e.didViewUpdate&&this._updateBatchableSprite(e,t),t._batcher.updateElement(t)}validateRenderable(e){const t=this._getGpuSprite(e);return!t._batcher.checkAndUpdateTexture(t,e._texture)}_updateBatchableSprite(e,t){t.bounds=e.visualBounds,t.texture=e._texture}_getGpuSprite(e){return e._gpuData[this._renderer.uid]||this._initGPUSprite(e)}_initGPUSprite(e){const t=new tt;return t.renderable=e,t.transform=e.groupTransform,t.texture=e._texture,t.bounds=e.visualBounds,t.roundPixels=this._renderer._roundPixels|e._roundPixels,e._gpuData[this._renderer.uid]=t,t}destroy(){this._renderer=null}}ut.extension={type:[c.WebGLPipes,c.WebGPUPipes,c.CanvasPipes],name:"sprite"};const H={};oe.handle(c.BlendMode,s=>{if(!s.name)throw new Error("BlendMode extension must have a name property");H[s.name]=s.ref},s=>{delete H[s.name]});class ct{constructor(e){this._blendModeStack=[],this._isAdvanced=!1,this._filterHash=Object.create(null),this._renderer=e,this._renderer.runners.prerender.add(this)}prerender(){this._activeBlendMode="normal",this._isAdvanced=!1}pushBlendMode(e,t,r){this._blendModeStack.push(t),this.setBlendMode(e,t,r)}popBlendMode(e){this._blendModeStack.pop();const t=this._blendModeStack[this._activeBlendMode.length-1]??"normal";this.setBlendMode(null,t,e)}setBlendMode(e,t,r){const n=e instanceof _e;if(this._activeBlendMode===t){this._isAdvanced&&e&&!n&&this._renderableList?.push(e);return}this._isAdvanced&&this._endAdvancedBlendMode(r),this._activeBlendMode=t,e&&(this._isAdvanced=!!H[t],this._isAdvanced&&this._beginAdvancedBlendMode(e,r))}_beginAdvancedBlendMode(e,t){this._renderer.renderPipes.batch.break(t);const r=this._activeBlendMode;if(!H[r]){P(`Unable to assign BlendMode: '${r}'. You may want to include: import 'pixi.js/advanced-blend-modes'`);return}const n=this._ensureFilterEffect(r),a=e instanceof _e,i={renderPipeId:"filter",action:"pushFilter",filterEffect:n,renderables:a?null:[e],container:a?e.root:null,canBundle:!1};this._renderableList=i.renderables,t.add(i)}_ensureFilterEffect(e){let t=this._filterHash[e];return t||(t=this._filterHash[e]=new He,t.filters=[new H[e]]),t}_endAdvancedBlendMode(e){this._isAdvanced=!1,this._renderableList=null,this._renderer.renderPipes.batch.break(e),e.add({renderPipeId:"filter",action:"popFilter",canBundle:!1})}buildStart(){this._isAdvanced=!1}buildEnd(e){this._isAdvanced&&this._endAdvancedBlendMode(e)}destroy(){this._renderer=null,this._renderableList=null;for(const e in this._filterHash)this._filterHash[e].destroy();this._filterHash=null}}ct.extension={type:[c.WebGLPipes,c.WebGPUPipes,c.CanvasPipes],name:"blendMode"};const Gr=new q,Ee=We|Oe|$e;function dt(s,e=!1){Ur(s);const t=s.childrenToUpdate,r=s.updateTick++;for(const n in t){const a=Number(n),i=t[n],o=i.list,l=i.index;for(let d=0;d<l;d++){const u=o[d];u.parentRenderGroup===s&&u.relativeRenderGroupDepth===a&&ht(u,r,0)}se(o,l),i.index=0}if(e)for(let n=0;n<s.renderGroupChildren.length;n++)dt(s.renderGroupChildren[n],e)}function Ur(s){const e=s.root;let t;if(s.renderGroupParent){const r=s.renderGroupParent;s.worldTransform.appendFrom(e.relativeGroupTransform,r.worldTransform),s.worldColor=Le(e.groupColor,r.worldColor),t=e.groupAlpha*r.worldAlpha}else s.worldTransform.copyFrom(e.localTransform),s.worldColor=e.localColor,t=e.localAlpha;t=t<0?0:t>1?1:t,s.worldAlpha=t,s.worldColorAlpha=s.worldColor+((t*255|0)<<24)}function ht(s,e,t){if(e===s.updateTick)return;s.updateTick=e,s.didChange=!1;const r=s.localTransform;s.updateLocalTransform();const n=s.parent;if(n&&!n.renderGroup?(t|=s._updateFlags,s.relativeGroupTransform.appendFrom(r,n.relativeGroupTransform),t&Ee&&ze(s,n,t)):(t=s._updateFlags,s.relativeGroupTransform.copyFrom(r),t&Ee&&ze(s,Gr,t)),!s.renderGroup){const a=s.children,i=a.length;for(let d=0;d<i;d++)ht(a[d],e,t);const o=s.parentRenderGroup,l=s;l.renderPipeId&&!o.structureDidChange&&o.updateRenderable(l)}}function ze(s,e,t){if(t&Oe){s.groupColor=Le(s.localColor,e.groupColor);let r=s.localAlpha*e.groupAlpha;r=r<0?0:r>1?1:r,s.groupAlpha=r,s.groupColorAlpha=s.groupColor+((r*255|0)<<24)}t&$e&&(s.groupBlendMode=s.localBlendMode==="inherit"?e.groupBlendMode:s.localBlendMode),t&We&&(s.globalDisplayStatus=s.localDisplayStatus&e.globalDisplayStatus),s._updateFlags=0}function Ir(s,e){const{list:t}=s.childrenRenderablesToUpdate;let r=!1;for(let n=0;n<s.childrenRenderablesToUpdate.index;n++){const a=t[n];if(r=e[a.renderPipeId].validateRenderable(a),r)break}return s.structureDidChange=r,r}const Dr=new M;class ft{constructor(e){this._renderer=e}render({container:e,transform:t}){const r=e.parent,n=e.renderGroup.renderGroupParent;e.parent=null,e.renderGroup.renderGroupParent=null;const a=this._renderer,i=Dr;t&&(i.copyFrom(e.renderGroup.localTransform),e.renderGroup.localTransform.copyFrom(t));const o=a.renderPipes;this._updateCachedRenderGroups(e.renderGroup,null),this._updateRenderGroups(e.renderGroup),a.globalUniforms.start({worldTransformMatrix:t?e.renderGroup.localTransform:e.renderGroup.worldTransform,worldColor:e.renderGroup.worldColorAlpha}),ae(e.renderGroup,o),o.uniformBatch&&o.uniformBatch.renderEnd(),t&&e.renderGroup.localTransform.copyFrom(i),e.parent=r,e.renderGroup.renderGroupParent=n}destroy(){this._renderer=null}_updateCachedRenderGroups(e,t){if(e._parentCacheAsTextureRenderGroup=t,e.isCachedAsTexture){if(!e.textureNeedsUpdate)return;t=e}for(let r=e.renderGroupChildren.length-1;r>=0;r--)this._updateCachedRenderGroups(e.renderGroupChildren[r],t);if(e.invalidateMatrices(),e.isCachedAsTexture){if(e.textureNeedsUpdate){const r=e.root.getLocalBounds(),n=this._renderer,a=e.textureOptions.resolution||n.view.resolution,i=e.textureOptions.antialias??n.view.antialias,o=e.textureOptions.scaleMode??"linear",l=e.texture;r.ceil(),e.texture&&A.returnTexture(e.texture);const d=A.getOptimalTexture({width:r.width,height:r.height,resolution:a,antialias:i,scaleMode:o});e.texture=d,e._textureBounds||(e._textureBounds=new le),e._textureBounds.copyFrom(r),l!==e.texture&&e.renderGroupParent&&(e.renderGroupParent.structureDidChange=!0)}}else e.texture&&(A.returnTexture(e.texture),e.texture=null)}_updateRenderGroups(e){const t=this._renderer,r=t.renderPipes;if(e.runOnRender(t),e.instructionSet.renderPipes=r,e.structureDidChange?se(e.childrenRenderablesToUpdate.list,0):Ir(e,r),dt(e),e.structureDidChange?(e.structureDidChange=!1,this._buildInstructions(e,t)):this._updateRenderables(e),e.childrenRenderablesToUpdate.index=0,t.renderPipes.batch.upload(e.instructionSet),!(e.isCachedAsTexture&&!e.textureNeedsUpdate))for(let n=0;n<e.renderGroupChildren.length;n++)this._updateRenderGroups(e.renderGroupChildren[n])}_updateRenderables(e){const{list:t,index:r}=e.childrenRenderablesToUpdate;for(let n=0;n<r;n++){const a=t[n];a.didViewUpdate&&e.updateRenderable(a)}se(t,r)}_buildInstructions(e,t){const r=e.root,n=e.instructionSet;n.reset();const a=t.renderPipes?t:t.batch.renderer,i=a.renderPipes;i.batch.buildStart(n),i.blendMode.buildStart(),i.colorMask.buildStart(),r.sortableChildren&&r.sortChildren(),r.collectRenderablesWithEffects(n,a,null),i.batch.buildEnd(n),i.blendMode.buildEnd(n)}}ft.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"renderGroup"};const ce=class pt{constructor(){this.clearBeforeRender=!0,this._backgroundColor=new re(0),this.color=this._backgroundColor,this.alpha=1}init(e){e={...pt.defaultOptions,...e},this.clearBeforeRender=e.clearBeforeRender,this.color=e.background||e.backgroundColor||this._backgroundColor,this.alpha=e.backgroundAlpha,this._backgroundColor.setAlpha(e.backgroundAlpha)}get color(){return this._backgroundColor}set color(e){re.shared.setValue(e).alpha<1&&this._backgroundColor.alpha===1&&P("Cannot set a transparent background on an opaque canvas. To enable transparency, set backgroundAlpha < 1 when initializing your Application."),this._backgroundColor.setValue(e)}get alpha(){return this._backgroundColor.alpha}set alpha(e){this._backgroundColor.setAlpha(e)}get colorRgba(){return this._backgroundColor.toArray()}destroy(){}};ce.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"background",priority:0};ce.defaultOptions={backgroundAlpha:1,backgroundColor:0,clearBeforeRender:!0};let Er=ce;function ee(s,e=!1){const t=s.source.format;if(!(!t.endsWith("float")&&!Ne(t)&&!t.startsWith("depth")&&t!=="stencil8"))throw e&&s.destroy(!0),new Error(`[ExtractSystem] can't read ${t} textures: extract reads 8-bit color only. Extract a Mesh whose shader reads the texture and outputs color instead.`)}const te={png:"image/png",jpg:"image/jpeg",webp:"image/webp"},de=class mt{constructor(e){this._renderer=e}_normalizeOptions(e,t={}){return e instanceof q||e instanceof C?{target:e,...t}:{...t,...e}}async image(e){const t=K.get().createImage();return t.src=await this.base64(e),t}async base64(e){e=this._normalizeOptions(e,mt.defaultImageOptions);const{format:t,quality:r}=e,n=this.canvas(e);if(n.toBlob!==void 0)return new Promise((a,i)=>{n.toBlob(o=>{if(!o){i(new Error("ICanvas.toBlob failed!"));return}const l=new FileReader;l.onload=()=>a(l.result),l.onerror=i,l.readAsDataURL(o)},te[t],r)});if(n.toDataURL!==void 0)return n.toDataURL(te[t],r);if(n.convertToBlob!==void 0){const a=await n.convertToBlob({type:te[t],quality:r});return new Promise((i,o)=>{const l=new FileReader;l.onload=()=>i(l.result),l.onerror=o,l.readAsDataURL(a)})}throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")}canvas(e){e=this._normalizeOptions(e);const t=e.target,r=this._renderer;if(t instanceof C)return ee(t),r.texture.generateCanvas(t);const n=r.textureGenerator.generateTexture(e);ee(n,!0);const a=r.texture.generateCanvas(n);return n.destroy(!0),a}pixels(e){e=this._normalizeOptions(e);const t=e.target,r=this._renderer,n=t instanceof C?t:r.textureGenerator.generateTexture(e);ee(n,!(t instanceof C));const a=r.texture.getPixels(n);return t instanceof q&&n.destroy(!0),a}texture(e){return e=this._normalizeOptions(e),e.target instanceof C?e.target:this._renderer.textureGenerator.generateTexture(e)}download(e){e=this._normalizeOptions(e);const t=this.canvas(e),r=document.createElement("a");r.download=e.filename??"image.png",r.href=t.toDataURL("image/png"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}log(e){const t=e.width??200;e=this._normalizeOptions(e);const r=this.canvas(e),n=r.toDataURL();console.log(`[Pixi Texture] ${r.width}px ${r.height}px`);const a=["font-size: 1px;",`padding: ${t}px 300px;`,`background: url(${n}) no-repeat;`,"background-size: contain;"].join(" ");console.log("%c ",a)}destroy(){this._renderer=null}};de.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"extract"};de.defaultImageOptions={format:"png",quality:1};let zr=de;const Fr=new F,Vr=new le,Hr=[0,0,0,0];class gt{constructor(e){this._renderer=e}generateTexture(e){e instanceof q&&(e={target:e,frame:void 0,textureSourceOptions:{},resolution:void 0});const t=e.resolution||this._renderer.resolution,r=e.antialias||this._renderer.view.antialias,n=e.target;let a=e.clearColor;a?a=Array.isArray(a)&&a.length===4?a:re.shared.setValue(a).toArray():a=Hr;const i=e.frame?.copyTo(Fr)||At(n,Vr).rectangle,o=e.defaultAnchor&&{defaultAnchor:e.defaultAnchor};i.width=Math.max(i.width,1/t)|0,i.height=Math.max(i.height,1/t)|0;const l=Vt.create({...e.textureSourceOptions,width:i.width,height:i.height,resolution:t,antialias:r,textureOptions:o}),d=M.shared.translate(-i.x,-i.y);return this._renderer.render({container:n,transform:d,target:l,clearColor:a}),l.source.updateMipmaps(),l}destroy(){this._renderer=null}}gt.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"textureGenerator"};function Lr(s){let e=!1;for(const r in s)if(s[r]==null){e=!0;break}if(!e)return s;const t=Object.create(null);for(const r in s){const n=s[r];n&&(t[r]=n)}return t}function Wr(s){let e=0;for(let t=0;t<s.length;t++)s[t]==null?e++:s[t-e]=s[t];return s.length-=e,s}const he=class xt{constructor(e){this._managedResources=[],this._managedResourceHashes=[],this._managedCollections=[],this._ready=!1,this._running=!1,this._renderer=e}init(e){e={...xt.defaultOptions,...e},this.maxUnusedTime=e.gcMaxUnusedTime,this._frequency=e.gcFrequency,this.enabled=e.gcActive,this.now=performance.now()}get enabled(){return!!this._handler}set enabled(e){this.enabled!==e&&(e?(this._handler=this._renderer.scheduler.repeat(()=>{this._ready=!0},this._frequency,!1),this._collectionsHandler=this._renderer.scheduler.repeat(()=>{for(const t of this._managedCollections){const{context:r,collection:n,type:a}=t;a==="hash"?r[n]=Lr(r[n]):r[n]=Wr(r[n])}},this._frequency)):(this._renderer.scheduler.cancel(this._handler),this._renderer.scheduler.cancel(this._collectionsHandler),this._handler=0,this._collectionsHandler=0))}prerender({container:e}){this.now=performance.now(),e.renderGroup.gcTick=this._renderer.tick++,this._updateInstructionGCTick(e.renderGroup,e.renderGroup.gcTick)}postrender(){!this._ready||!this.enabled||(this.run(),this._ready=!1)}_updateInstructionGCTick(e,t){e.instructionSet.gcTick=t,e.gcTick=t;for(const r of e.renderGroupChildren)this._updateInstructionGCTick(r,t)}addCollection(e,t,r){this._managedCollections.push({context:e,collection:t,type:r})}addResource(e,t){if(e._gcLastUsed!==-1){e._gcLastUsed=this.now,e._onTouch?.(this.now);return}const r=this._managedResources.length;e._gcData={index:r,type:t},e._gcLastUsed=this.now,e._onTouch?.(this.now),e.once("unload",this.removeResource,this),this._managedResources.push(e)}removeResource(e){const t=e._gcData;if(!t)return;const r=t.index,n=this._managedResources.length-1;if(this._running)this._managedResources[r]=null;else{if(r!==n){const a=this._managedResources[n];this._managedResources[r]=a,a._gcData.index=r}this._managedResources.length--}e._gcData=null,e._gcLastUsed=-1}addResourceHash(e,t,r,n=0){this._managedResourceHashes.push({context:e,hash:t,type:r,priority:n}),this._managedResourceHashes.sort((a,i)=>a.priority-i.priority)}run(){if(this._running)return;const e=performance.now(),t=this._managedResourceHashes,r=this._managedResources;this._running=!0;try{for(const a of t)this.runOnHash(a,e);const n=r.length;for(let a=0;a<n;a++){const i=r[a];i&&this.runOnResource(i,e)}}finally{let n=0;for(let a=0;a<r.length;a++){const i=r[a];i&&(n!==a&&(r[n]=i,i._gcData.index=n),n++)}r.length=n,this._running=!1}}updateRenderableGCTick(e,t){const r=e.renderGroup??e.parentRenderGroup,n=r?.instructionSet?.gcTick??-1;(r?.gcTick??0)===n&&(e._gcLastUsed=t,e._onTouch?.(t))}runOnResource(e,t){e._gcData.type==="renderable"&&this.updateRenderableGCTick(e,t),!(t-e._gcLastUsed<this.maxUnusedTime||!e.autoGarbageCollect)&&(e.off("unload",this.removeResource,this),e.unload(),this.removeResource(e))}_createHashClone(e,t){const r=Object.create(null);for(const n in e){if(n===t)break;e[n]!==null&&(r[n]=e[n])}return r}runOnHash(e,t){const{context:r,hash:n,type:a}=e,i=r[n];let o=null,l=0;for(const d in i){const u=i[d];if(u===null){l++,l===1e4&&!o&&(o=this._createHashClone(i,d));continue}if(u._gcLastUsed===-1){u._gcLastUsed=t,u._onTouch?.(t),o&&(o[d]=u);continue}if(a==="renderable"&&this.updateRenderableGCTick(u,t),!(t-u._gcLastUsed<this.maxUnusedTime)&&u.autoGarbageCollect){if(a==="renderable"){const f=u,p=f.renderGroup??f.parentRenderGroup;p&&(p.structureDidChange=!0)}u.unload(),u._gcData=null,u._gcLastUsed=-1,o||(l+1!==1e4?(i[d]=null,l++):o=this._createHashClone(i,d))}else o&&(o[d]=u)}o&&(r[n]=o)}destroy(){this.enabled=!1,this._managedResources.forEach(e=>{e?.off("unload",this.removeResource,this)}),this._managedResources.length=0,this._managedResourceHashes.length=0,this._managedCollections.length=0,this._renderer=null}};he.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"gc",priority:0};he.defaultOptions={gcActive:!0,gcMaxUnusedTime:6e4,gcFrequency:3e4};let Or=he;class _t{constructor(e){this._stackIndex=0,this._globalUniformDataStack=[],this._uniformsPool=[],this._activeUniforms=[],this._bindGroupPool=[],this._activeBindGroups=[],this._renderer=e}reset(){this._stackIndex=0;for(let e=0;e<this._activeUniforms.length;e++)this._uniformsPool.push(this._activeUniforms[e]);for(let e=0;e<this._activeBindGroups.length;e++)this._bindGroupPool.push(this._activeBindGroups[e]);this._activeUniforms.length=0,this._activeBindGroups.length=0}start(e){this.reset(),this.push(e)}bind({size:e,projectionMatrix:t,worldTransformMatrix:r,worldColor:n,offset:a}){const i=this._renderer.renderTarget.renderTarget,o=this._stackIndex?this._globalUniformDataStack[this._stackIndex-1]:{worldTransformMatrix:new M,worldColor:4294967295,offset:new Gt},l={projectionMatrix:t||this._renderer.renderTarget.projectionMatrix,resolution:e||i.size,worldTransformMatrix:r||o.worldTransformMatrix,worldColor:n||o.worldColor,offset:a||o.offset,bindGroup:null},d=this._uniformsPool.pop()||this._createUniforms();this._activeUniforms.push(d);const u=d.uniforms;u.uProjectionMatrix=l.projectionMatrix,u.uResolution=l.resolution,u.uWorldTransformMatrix.copyFrom(l.worldTransformMatrix),u.uWorldTransformMatrix.tx-=l.offset.x,u.uWorldTransformMatrix.ty-=l.offset.y,Br(l.worldColor,u.uWorldColorAlpha,0),d.update();let m;this._renderer.renderPipes.uniformBatch?m=this._renderer.renderPipes.uniformBatch.getUniformBindGroup(d,!1):(m=this._bindGroupPool.pop()||new Ut,this._activeBindGroups.push(m),m.setResource(d,0)),l.bindGroup=m,this._currentGlobalUniformData=l}push(e){this.bind(e),this._globalUniformDataStack[this._stackIndex++]=this._currentGlobalUniformData}pop(){this._currentGlobalUniformData=this._globalUniformDataStack[--this._stackIndex-1],this._renderer.type===L.WEBGL&&this._currentGlobalUniformData.bindGroup.resources[0].update()}get bindGroup(){return this._currentGlobalUniformData.bindGroup}get globalUniformData(){return this._currentGlobalUniformData}get uniformGroup(){return this._currentGlobalUniformData.bindGroup.resources[0]}_createUniforms(){return new ie({uProjectionMatrix:{value:new M,type:"mat3x3<f32>"},uWorldTransformMatrix:{value:new M,type:"mat3x3<f32>"},uWorldColorAlpha:{value:new Float32Array(4),type:"vec4<f32>"},uResolution:{value:[0,0],type:"vec2<f32>"}},{isStatic:!0})}destroy(){this._renderer=null,this._globalUniformDataStack.length=0,this._uniformsPool.length=0,this._activeUniforms.length=0,this._bindGroupPool.length=0,this._activeBindGroups.length=0,this._currentGlobalUniformData=null}}_t.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"globalUniforms"};let $r=1;class bt{constructor(){this._tasks=[],this._offset=0}init(){be.system.add(this._update,this)}repeat(e,t,r=!0){const n=$r++;let a=0;return r&&(this._offset+=1e3,a=this._offset),this._tasks.push({func:e,duration:t,start:performance.now(),offset:a,last:performance.now(),repeat:!0,id:n}),n}cancel(e){for(let t=0;t<this._tasks.length;t++)if(this._tasks[t].id===e){this._tasks.splice(t,1);return}}_update(){const e=performance.now();for(let t=0;t<this._tasks.length;t++){const r=this._tasks[t];if(e-r.offset-r.last>=r.duration){const n=e-r.start;r.func(n),r.last=e}}}destroy(){be.system.remove(this._update,this),this._tasks.length=0}}bt.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"scheduler",priority:0};let Fe=!1;function Nr(s){if(!Fe){if(K.get().getNavigator().userAgent.toLowerCase().indexOf("chrome")>-1){const e=[`%c  %c  %c  %c  %c PixiJS %c v${ve} (${s}) http://www.pixijs.com/

`,"background: #E72264; padding:5px 0;","background: #6CA2EA; padding:5px 0;","background: #B5D33D; padding:5px 0;","background: #FED23F; padding:5px 0;","color: #FFFFFF; background: #E72264; padding:5px 0;","color: #E72264; background: #FFFFFF; padding:5px 0;"];globalThis.console.log(...e)}else globalThis.console&&globalThis.console.log(`PixiJS ${ve} - ${s} - http://www.pixijs.com/`);Fe=!0}}class fe{constructor(e){this._renderer=e}init(e){if(e.hello){let t=this._renderer.name;this._renderer.type===L.WEBGL&&(t+=` ${this._renderer.context.webGLVersion}`),Nr(t)}}}fe.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"hello",priority:-2};fe.defaultOptions={hello:!1};const pe=class vt{constructor(e){this._renderer=e}init(e){e={...vt.defaultOptions,...e},this.maxUnusedTime=e.renderableGCMaxUnusedTime}get enabled(){return v("8.15.0","RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead."),this._renderer.gc.enabled}set enabled(e){v("8.15.0","RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead."),this._renderer.gc.enabled=e}addManagedHash(e,t){v("8.15.0","RenderableGCSystem.addManagedHash is deprecated, please use the GCSystem.addCollection instead."),this._renderer.gc.addCollection(e,t,"hash")}addManagedArray(e,t){v("8.15.0","RenderableGCSystem.addManagedArray is deprecated, please use the GCSystem.addCollection instead."),this._renderer.gc.addCollection(e,t,"array")}addRenderable(e){v("8.15.0","RenderableGCSystem.addRenderable is deprecated, please use the GCSystem instead."),this._renderer.gc.addResource(e,"renderable")}run(){v("8.15.0","RenderableGCSystem.run is deprecated, please use the GCSystem instead."),this._renderer.gc.run()}destroy(){this._renderer=null}};pe.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"renderableGC",priority:0};pe.defaultOptions={renderableGCActive:!0,renderableGCMaxUnusedTime:6e4,renderableGCFrequency:3e4};let jr=pe;const me=class j{get count(){return this._renderer.tick}get checkCount(){return this._checkCount}set checkCount(e){v("8.15.0","TextureGCSystem.run is deprecated, please use the GCSystem instead."),this._checkCount=e}get maxIdle(){return this._renderer.gc.maxUnusedTime/1e3*60}set maxIdle(e){v("8.15.0","TextureGCSystem.run is deprecated, please use the GCSystem instead."),this._renderer.gc.maxUnusedTime=e/60*1e3}get checkCountMax(){return Math.floor(this._renderer.gc._frequency/1e3)}set checkCountMax(e){v("8.15.0","TextureGCSystem.run is deprecated, please use the GCSystem instead.")}get active(){return this._renderer.gc.enabled}set active(e){v("8.15.0","TextureGCSystem.run is deprecated, please use the GCSystem instead."),this._renderer.gc.enabled=e}constructor(e){this._renderer=e,this._checkCount=0}init(e){e.textureGCActive!==j.defaultOptions.textureGCActive&&(this.active=e.textureGCActive),e.textureGCMaxIdle!==j.defaultOptions.textureGCMaxIdle&&(this.maxIdle=e.textureGCMaxIdle),e.textureGCCheckCountMax!==j.defaultOptions.textureGCCheckCountMax&&(this.checkCountMax=e.textureGCCheckCountMax)}run(){v("8.15.0","TextureGCSystem.run is deprecated, please use the GCSystem instead."),this._renderer.gc.run()}destroy(){this._renderer=null}};me.extension={type:[c.WebGLSystem,c.WebGPUSystem],name:"textureGC"};me.defaultOptions={textureGCActive:!0,textureGCAMaxIdle:null,textureGCMaxIdle:3600,textureGCCheckCountMax:600};let Yr=me;const D=new Map;Ve.register(D);function yt(s,e){if(!D.has(s)){const t=new C({source:new ne({resource:s,...e})}),r=()=>{D.get(s)===t&&D.delete(s)};t.once("destroy",r),t.source.once("destroy",r),D.set(s,t)}return D.get(s)}const ge=class St{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(e){this.texture.source.autoDensity=e}get resolution(){return this.texture.source._resolution}set resolution(e){this.texture.source.resize(this.texture.source.width,this.texture.source.height,e)}constructor(e){this._renderer=e}init(e){e={...St.defaultOptions,...e},e.view&&(v(It,"ViewSystem.view has been renamed to ViewSystem.canvas"),e.canvas=e.view),this.screen=new F(0,0,e.width,e.height),this.canvas=e.canvas||K.get().createCanvas(),this.antialias=!!e.antialias;const{depth:t,...r}=e;!r.format&&this._renderer.type===L.WEBGPU&&(r.format=K.get().getNavigator().gpu.getPreferredCanvasFormat()),this.texture=yt(this.canvas,r),this.renderTarget=new N({colorTextures:[this.texture],depth:!!t,isRoot:!0}),this.texture.source.transparent=e.backgroundAlpha<1,this.texture.source.on("resize",this._updateScreenSize,this),this.resolution=e.resolution,this._updateScreenSize()}resize(e,t,r){this.texture.source.resize(e,t,r),this._updateScreenSize(),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(e=!1){(typeof e=="boolean"?e:e?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.texture.source.off("resize",this._updateScreenSize,this),A.removeScreen(this._renderer.uid),ye.removeScreen(this._renderer.uid),this.texture.destroy()}_updateScreenSize(){const{pixelWidth:e,pixelHeight:t}=this.texture.source,r=this._renderer.uid;A.setScreenSize(r,e,t,this.resolution),ye.setScreenSize(r,e,t)}};ge.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"view",priority:0};ge.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let qr=ge;const tn=[Er,_t,fe,qr,ft,Or,Yr,gt,zr,Dt,jr,bt],rn=[ct,nt,ut,lt,st,it,at,ot];function Kr(s,e,t,r,n,a){const i=a?1:-1;return s.identity(),s.a=1/r*2,s.d=i*(1/n*2),s.tx=-1-e*s.a,s.ty=-i-t*s.d,s}function Qr(s){if(s.colorAttachments.length===0)return!1;const e=s.colorTexture.resource;return globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement&&document.body.contains(e)}class nn{constructor(e){this.rootViewPort=new F,this.viewport=new F,this.onRenderTargetChange=new Et("onRenderTargetChange"),this.projectionMatrix=new M,this.defaultClearColor=[0,0,0,0],this._renderSurfaceToRenderTargetHash=new Map,this._gpuRenderTargetHash=Object.create(null),this._renderTargetStack=[],this._bindState={target:null,frame:void 0,mipLevel:0,layer:0,flipY:!1},this._bindFrame=new F,this._renderer=e,e.gc.addCollection(this,"_gpuRenderTargetHash","hash")}get renderSurface(){return this._bindState.target}get mipLevel(){return this._bindState.mipLevel}get layer(){return this._bindState.layer}finishRenderPass(){this.adaptor.finishRenderPass(this.renderTarget)}renderStart(e){this._renderTargetStack.length=0,this.push(e),this.rootViewPort.copyFrom(this.viewport),this.rootRenderTarget=this.renderTarget,this.renderingToScreen=Qr(this.rootRenderTarget),this.adaptor.prerender?.(this.rootRenderTarget)}postrender(){this.adaptor.postrender?.(this.rootRenderTarget)}bind(e,t=!0,r,n,a=0,i=0,o){let l;"target"in e?l=e:(v("8.20.0","RenderTargetSystem.bind: positional arguments are deprecated, please use an options object instead: bind({ target, clear, clearColor, frame, mipLevel, layer, flipY })"),l={target:e,clear:t,clearColor:r,frame:n,mipLevel:a,layer:i,flipY:o});const d=l.target;t=l.clear??!0,r=l.clearColor,a=(l.mipLevel??0)|0,i=(l.layer??0)|0,o=l.flipY,n=l.frame;const u=this.getRenderTarget(d),m=this.renderTarget!==u||!!u.flipY!=!!o;this.renderTarget=u;const f=this.getGpuRenderTarget(u);(u.pixelWidth!==f.width||u.pixelHeight!==f.height)&&(this.adaptor.resizeGpuRenderTarget(u),f.width=u.pixelWidth,f.height=u.pixelHeight);const p=u.colorAttachments[0]?.texture||u.depthStencilAttachment?.texture,g=this.viewport,y=p.dimension==="3d"?Math.max(p.depth>>a,1):p.depthOrArrayLayers;if(i<0||i>=y)throw new Error(`[RenderTargetSystem] layer ${i} is out of bounds (layer count=${y}).`);const _=this._bindState;_.target=d,_.frame=n?this._bindFrame.copyFrom(n):void 0,_.mipLevel=a,_.layer=i,_.flipY=o;const h=Math.max(p.pixelWidth>>a,1),T=Math.max(p.pixelHeight>>a,1);if(!n&&d instanceof C&&(n=d.frame),n){const x=p._resolution,b=1<<Math.max(a,0),S=n.x*x+.5|0,W=n.y*x+.5|0,Tt=n.width*x+.5|0,Ct=n.height*x+.5|0;let R=Math.floor(S/b),B=Math.floor(W/b),G=Math.ceil(Tt/b),U=Math.ceil(Ct/b);R<0&&(G+=R,R=0),B<0&&(U+=B,B=0),R=Math.min(R,h-1),B=Math.min(B,T-1),G=Math.min(G,h-R),U=Math.min(U,T-B),G=Math.max(G,1),U=Math.max(U,1),g.x=R,g.y=B,g.width=G,g.height=U}else g.x=0,g.y=0,g.width=h,g.height=T;return u.flipY=o,Kr(this.projectionMatrix,0,0,g.width/p.resolution,g.height/p.resolution,!u.isRoot!=!!u.flipY),this.adaptor.startRenderPass(u,t,r,g,a,i),m&&this.onRenderTargetChange.emit(u),u}getBindState(e){if(!this.renderTarget)throw new Error("[RenderTargetSystem] getBindState is only valid while a render surface is bound");const t=this._bindState;return e??(e={}),e.target=t.target,e.clear=$.NONE,e.clearColor=void 0,t.frame?e.frame?e.frame.copyFrom(t.frame):e.frame=t.frame.clone():e.frame=void 0,e.mipLevel=t.mipLevel,e.layer=t.layer,e.flipY=!!t.flipY,e}isFrontFaceInverted(e,t){if(!e){if(e=this.renderTarget,!e)return!1;t=e.flipY}return!!t!=(this._renderer.type===L.WEBGL&&!e.isRoot)}get frontFaceInverted(){return v(zt,"RenderTargetSystem.frontFaceInverted is deprecated, use isFrontFaceInverted() instead"),this.isFrontFaceInverted()}clear(e,t=$.ALL,r,n=this.mipLevel,a=this.layer){t&&(e&&(e=this.getRenderTarget(e)),this.adaptor.clear(e||this.renderTarget,t,r,this.viewport,n,a))}contextChange(){this._gpuRenderTargetHash=Object.create(null)}push(e,t=$.ALL,r,n,a=0,i=0,o){let l;"target"in e?l=e:(v("8.20.0","RenderTargetSystem.push: positional arguments are deprecated, please use an options object instead: push({ target, clear, clearColor, frame, mipLevel, layer, flipY })"),l={target:e,clear:t,clearColor:r,frame:n,mipLevel:a,layer:i,flipY:o});const d=this.bind(l);return this._renderTargetStack.push({target:l.target,clear:!1,clearColor:void 0,frame:l.frame?l.frame.clone():void 0,mipLevel:l.mipLevel,layer:l.layer,flipY:l.flipY}),d}pop(){this._renderTargetStack.pop();const e=this._renderTargetStack[this._renderTargetStack.length-1];if(!e)throw new Error("[RenderTargetSystem] pop: no previous binding to restore (unbalanced pop)");return this.bind(e)}getRenderTarget(e){return e.isTexture&&(e=e.source),this._renderSurfaceToRenderTargetHash.get(e)??this._initRenderTarget(e)}copyToTexture(e,t,r,n,a){const i=this.getRenderTarget(e);r.x<0&&(n.width+=r.x,a.x-=r.x,r.x=0),r.y<0&&(n.height+=r.y,a.y-=r.y,r.y=0);const{pixelWidth:o,pixelHeight:l}=i;return n.width=Math.min(n.width,o-r.x),n.height=Math.min(n.height,l-r.y),this.adaptor.copyToTexture(i,t,r,n,a)}copyDepthTexture(e,t,r,n,a={x:0,y:0}){const i=this.getRenderTarget(e);if(!i.depthStencilAttachment){P("[RenderTargetSystem] copyDepthTexture: the source render target has no depth attachment to copy from");return}const o=t.source;if(!o.format.includes("depth")&&!o.format.includes("stencil")){P(`[RenderTargetSystem] copyDepthTexture: the destination texture must have a depth/stencil format (got '${o.format}')`);return}let l=r.x,d=r.y,u=a.x,m=a.y,f=n.width,p=n.height;l<0&&(f+=l,u-=l,l=0),d<0&&(p+=d,m-=d,d=0),f=Math.min(f,i.pixelWidth-l),p=Math.min(p,i.pixelHeight-d),f=Math.min(f,o.pixelWidth-u),p=Math.min(p,o.pixelHeight-m),!(f<=0||p<=0)&&this.adaptor.copyDepthTexture(i,t,{x:l,y:d},{width:f,height:p},{x:u,y:m})}ensureDepthStencil(){if(!this.renderTarget.stencil){if(this.renderTarget.depthStencilTexture){P(`[RenderTargetSystem] a stencil mask is being used, but the render target's depthStencilTexture format '${this.renderTarget.depthStencilTexture.format}' has no stencil aspect, so masking cannot work here. Use a 'depth24plus-stencil8' texture instead.`);return}this.renderTarget._depth=!0,this.renderTarget._stencil=!0,this.adaptor.startRenderPass(this.renderTarget,!1,null,this.viewport,0,this.layer)}}destroy(){this._renderer=null,this._renderSurfaceToRenderTargetHash.forEach((e,t)=>{e!==t?this._releaseRenderTarget(t,e):e.off("destroy",this._onRenderTargetDestroy,this)}),this._renderSurfaceToRenderTargetHash.clear();for(const e of Object.values(this._gpuRenderTargetHash))e&&this.adaptor.destroyGpuRenderTarget(e);this._gpuRenderTargetHash=Object.create(null)}_initRenderTarget(e){let t=null;if(ne.test(e)&&(e=yt(e).source),e instanceof N)t=e,e.once("destroy",this._onRenderTargetDestroy,this);else if(e instanceof Ft){const r=e.format;t=r.includes("depth")||r.includes("stencil")?new N({colorTextures:0,depthStencilTexture:e}):new N({colorTextures:[e]}),e.source instanceof ne&&(t.isRoot=!0),e.once("destroy",this._onRenderSurfaceDestroy,this)}return this._renderSurfaceToRenderTargetHash.set(e,t),t}_onRenderSurfaceDestroy(e){const t=this._renderSurfaceToRenderTargetHash.get(e);t&&this._releaseRenderTarget(e,t)}_onRenderTargetDestroy(e){this._renderSurfaceToRenderTargetHash.delete(e),this._releaseGpuRenderTarget(e)}_releaseRenderTarget(e,t){t.destroy(),this._renderSurfaceToRenderTargetHash.delete(e),e.off("destroy",this._onRenderSurfaceDestroy,this),this._releaseGpuRenderTarget(t)}_releaseGpuRenderTarget(e){const t=this._gpuRenderTargetHash[e.uid];t&&(this._gpuRenderTargetHash[e.uid]=null,this.adaptor.destroyGpuRenderTarget(t))}getGpuRenderTarget(e){return this._gpuRenderTargetHash[e.uid]||(this._gpuRenderTargetHash[e.uid]=this._initGpuRenderTarget(e))}_initGpuRenderTarget(e){const t=e.colorAttachments;if(t.some(r=>r.texture.antialias)){const r=t.findIndex(n=>Ne(n.texture.format));if(r!==-1)throw new Error(`[RenderTargetSystem] color attachment ${r} is ${t[r].texture.format}, an integer format, and integer formats can't be antialiased. Create the render target's textures without antialias.`)}return this.adaptor.initGpuRenderTarget(e)}resetState(){this.renderTarget=null,this._bindState.target=null}}export{st as A,ct as B,ot as C,et as D,nn as R,k as S,gr as a,tn as b,pr as c,rn as d,jt as e,Te as f,vr as g,mr as h,xr as i,Cr as j,Sr as k,kr as l,Br as m,nt as n,ut as o,lt as p,Tr as r};
